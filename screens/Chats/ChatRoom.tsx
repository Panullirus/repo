import React, { useCallback, useEffect, useState } from 'react';
import { Text, View, TextInput, StyleSheet, TouchableOpacity, ScrollView, Keyboard } from 'react-native';
import { API, Auth, graphqlOperation } from 'aws-amplify';
import { getMessageRoom, listMessageRooms } from '../../src/graphql/queries';
import MessageContainerFrom from '../../components/MessageContainerFrom';
import { Ionicons } from '@expo/vector-icons';
import { createMessageContent, createMessageRoom } from '../../src/graphql/mutations';
import MessageContainerTo from '../../components/MessageContainerTo';
import { useFocusEffect, useRoute } from '@react-navigation/native';
import { CreateMessageContentInput, ListMessageRoomsQuery } from '../../src/API';
import { onCreateMessageContent, onCreateMessageRoom } from '../../src/graphql/subscriptions';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function ChatRoom() {

    const route = useRoute();

    const userFromListContact: any = route.params;

    const [messageContent, setMessageContent] = useState([]);

    const [currentUserID, setCurrentUserID] = useState<any>([]);

    useFocusEffect(useCallback(() => {
        const getUserFromLocalStorage = async () => {
            const userID = await AsyncStorage.getItem('@Storage_key')
            console.log(userID)
            setCurrentUserID(userID);  
        }

        getUserFromLocalStorage()
    }, []));

    const [chatRoom, setChatRoom] = useState("");

    const [message, setMessage] = useState({
        content: ""
    });

    const getMessageData = (content: any, value: any) => {
        setMessage({ ...message, [content]: value })
    }

    useFocusEffect(useCallback(() => {
        // @ts-ignore
        const subscriptionData = API.graphql(graphqlOperation(onCreateMessageContent)).subscribe({
            next: (eventData: any) => {
                //console.log(eventData.value.data.onCreateMessageContent);
                const newMessage = eventData.value.data.onCreateMessageContent;

                // @ts-ignore
                setMessageContent((oldMessages) => [...oldMessages, newMessage]);
                console.log(messageContent);
            }
        })

        return () => subscriptionData.unsubscribe();
    }, []));

    useFocusEffect(useCallback(() => {
        const fetchData = async () => {
            try {
                const getCurrentUser = (await Auth.currentAuthenticatedUser()) as any;

                const filter = {
                    // ChatRoom: { 
                    //     contains: "2263c2a1-3411-48f8-a557-11362c41df69" 
                    // },
                    user_from: { 
                        contains: getCurrentUser.attributes.sub
                    },
                    user_to: { 
                        contains: userFromListContact.userValue.id 
                    }
                }

                console.log(filter);

                if (userFromListContact.userValue.MessageContents == undefined) {
                    const getMessageList = (await API.graphql(graphqlOperation(listMessageRooms, { filter }))) as any;
                    console.log(getMessageList);
                    setMessageContent(getMessageList.data.listMessageRooms.items[0].MessageContents.items);
                    setChatRoom(getMessageList);
                } else {
                    setMessageContent(userFromListContact.userValue.MessageContents.items);
                }
            } catch (error) {
                console.log("error desde acá => ", error);
            }
        }
        fetchData();
    }, []));

    const sendMessageFunction = useCallback(async () => {

        const getCurrentUser = (await Auth.currentAuthenticatedUser()) as any;

        const input: CreateMessageContentInput = {
            // @ts-ignore
            messageroomID: chatRoom.data.listMessageRooms.items[0].id,
            user_from: getCurrentUser.attributes.sub,
            content: message.content,
        }

        console.log(input);

        try {
            (await API.graphql(graphqlOperation(createMessageContent, { input: input }))) as any;
        } catch (error) {
            console.log(error);
        }
    }, [message]);

    async function onSubmmit() {
        await sendMessageFunction();
        setMessage({ ...message, content: "" });
        Keyboard.dismiss();
    }

    const sortMessages = messageContent.sort(function (a: any, b: any) {
        return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
    })

    return (
        <View style={styles.containerMain}>
            <ScrollView>
                {
                    sortMessages.map((message: any) => {
                        if (message.user_from === currentUserID) {
                            return (
                                <MessageContainerFrom key={message.id} messageContent={message.content} />
                            )
                        } if (message.user_from !== currentUserID) {
                            return (
                                <MessageContainerTo key={message.id} messageContent={message.content} />
                            )
                        }
                    })
                }
            </ScrollView>
            <TextInput
                value={message.content}
                style={styles.bottomView}
                onChangeText={(value) => getMessageData("content", value)}
            />
            <TouchableOpacity
                onPress={onSubmmit}
            >
                <Ionicons name="send" size={24} color="black" />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    containerMain: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    bottomView: {
        width: '100%',
        height: 50,
        backgroundColor: '#EE5407',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        bottom: 0,
    },
})