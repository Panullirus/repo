import React, { useCallback, useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, ScrollView, Keyboard } from 'react-native';
import { API, graphqlOperation } from 'aws-amplify';
import MessageContainerFrom from '../../components/MessageContainerFrom';
import { Ionicons } from '@expo/vector-icons';
import MessageContainerTo from '../../components/MessageContainerTo';
import { useFocusEffect, useRoute } from '@react-navigation/native';
import { onCreateMessageContent} from '../../src/graphql/subscriptions';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ChatKit } from './ChatKit';
import { RootStackScreenProps } from 'types'

const chatKit = new ChatKit()


export function ChatRoom({ navigation, route }: RootStackScreenProps<'chatRoom'>) {

    const userValue = route.params;

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

    const [chatRoom, setChatRoom] = useState<any>("");

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
                const res = await chatKit.setMessages(userValue)

                setMessageContent(res);
            } catch (error) {
                console.log("error desde setMessages => ", error);
            }
        }
        fetchData();
    }, []));

    const sendMessageFunction = useCallback(async () => {
        const getChatRoom = await chatKit.setChatRoom(userValue)
        await chatKit.sendMessage(getChatRoom.data.listMessageRooms.items[0].id, message.content);
    }, [message]);

    async function onSubmmit() {
        try {
            await sendMessageFunction();
            setMessage({ ...message, content: "" });
            Keyboard.dismiss();
        } catch (error) {
            console.log("error desde enviar mensaje => ", error);
        }
    }

    return (
        <View style={styles.containerMain}>
            <ScrollView>
                {
                    messageContent.map((message: any) => {
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