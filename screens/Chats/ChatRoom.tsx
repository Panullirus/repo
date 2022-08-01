import React, { useCallback, useEffect, useState } from 'react';
import { Text, View, TextInput, StyleSheet, TouchableOpacity, ScrollView, Keyboard } from 'react-native';
import { API, graphqlOperation } from 'aws-amplify';
import { getMessageRoom, listMessageRooms } from '../../src/graphql/queries';
import MessageContainerFrom from '../../components/MessageContainerFrom';
import { Ionicons } from '@expo/vector-icons';
import { createMessageContent, createMessageRoom } from '../../src/graphql/mutations';
import MessageContainerTo from '../../components/MessageContainerTo';
import { useFocusEffect, useRoute } from '@react-navigation/native';
import { CreateMessageContentInput } from '../../src/API';
import { onCreateMessageContent, onCreateMessageRoom } from '../../src/graphql/subscriptions';

export function ChatRoom() {

    const route = useRoute();

    const userFromListContact: any = route.params;

    const [messageContent, setMessageContent] = useState([]);

    const [message, setMessage] = useState({
        content: ""
    });

    const getMessageData = (content: any, value: any) => {
        setMessage({ ...message, [content]: value })
    }

    const userID: string = "f4be4491-3919-4552-a07d-6465c0fcd386";

    useFocusEffect(useCallback(() => {
        // @ts-ignore
        const subscriptionData = API.graphql(graphqlOperation(onCreateMessageContent)).subscribe({
            next: (eventData: any) => {
                //console.log(eventData.value.data.onCreateMessageContent);
                const newMessage = eventData.value.data.onCreateMessageContent;
                console.log({ newMessage, messageContent });
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
                if (userFromListContact.userValue.MessageContents == undefined) {
                    const getMessageList = (await API.graphql(graphqlOperation(listMessageRooms, { filter: { chatscontainerID: { contains: userFromListContact.userValue.userChatUserContainerIDId }, user_from: { contains: userID }, user_to: { contains: userFromListContact.userValue.id } } }))) as any;
                    setMessageContent(getMessageList.data.listMessageRooms.items[0].MessageContents.items);

                    console.log(messageContent);
                } else {
                    setMessageContent(userFromListContact.userValue.MessageContents.items);
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, []));

    const sendMessageFunction = useCallback(async () => {
        const input: CreateMessageContentInput = {
            messageroomID: userFromListContact.userValue.id,
            user_from: userID,
            content: message.content,
        }
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
                        if (message.user_from === userID) {
                            return (
                                <MessageContainerFrom key={message.id} messageContent={message.content} />
                            )
                        } if (message.user_from !== userID) {
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