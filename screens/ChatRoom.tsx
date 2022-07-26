import React, { useEffect, useState } from 'react';
import {Text, View, TextInput, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import { API, graphqlOperation } from 'aws-amplify';
import { getMessageRoom, listMessageRooms } from '../src/graphql/queries';
import MessageContainerFrom from '../components/MessageContainerFrom';
import { Ionicons } from '@expo/vector-icons';
import { createMessageContent, createMessageRoom } from '../src/graphql/mutations';
import MessageContainerTo from '../components/MessageContainerTo';
import { useRoute } from '@react-navigation/native';

export default function ChatRoom() {

    const route = useRoute();

    const userFromListContact:any = route.params;

    const [chatRoom, setChatRoom] = useState();

    const [messageContent, setMessageContent] = useState([]);

    const [message, setMessage] = useState({
        content: ""
    }); 

    const getMessageData = (content: any, value: any) => {
        setMessage({...message, [content]: value})
    }

    const userID: string = "f4be4491-3919-4552-a07d-6465c0fcd386";

    // luis => const userID: string = "9c1c9c77-826e-4026-9405-76eb5119edb9";

    useEffect(() => {
        const fetchData = async () => {
            //console.log("From chat room", userFromListContact.userValue.MessageContents);
            try {
                if(userFromListContact.userValue.MessageContents == undefined){
                    const getMessageList = (await API.graphql(graphqlOperation(listMessageRooms, {filter: {chatscontainerID: {contains: userFromListContact.userValue.userChatUserContainerIDId}, user_from: {contains: userID}, user_to: {contains: userFromListContact.userValue.id}}}))) as any;
                    setChatRoom(getMessageList.data.listMessageRooms.items[0].id);
                    setMessageContent(getMessageList.data.listMessageRooms.items[0].MessageContents.items);
                }else{
                    setMessageContent(userFromListContact.userValue.MessageContents.items);
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, []);

    async function sendMessageFunction(){
        const input = {
            messageroomID: chatRoom,
            user_from: userID,
            content: message.content,
        }
        try {
            const sendMessage = (await API.graphql(graphqlOperation(createMessageContent, {input: input}))) as any;
            if (sendMessage) {
                console.log("mensaje enviado");
            }
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <View style={styles.containerMain}>
            <ScrollView>
            {
                
                messageContent.map((message, index) => {
                    if(message.user_from === userID){
                         return(
                             <MessageContainerFrom key={index} messageContent={message.content}/>
                         )
                     }if(message.user_from !== userID){
                         return(
                             <MessageContainerTo key={index} messageContent={message.content}/>
                         )
                     }
                 })
            }
            </ScrollView>
            <TextInput 
                style={styles.bottomView}
                onChangeText={(value) => getMessageData("content", value)}
                />
            <TouchableOpacity
                onPress={() => sendMessageFunction()}
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
        position: 'relative', //Here is the trick
        bottom: 0, //Here is the trick
      },
})