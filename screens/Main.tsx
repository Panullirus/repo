import React, { useCallback, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import CardMessage from "../components/CardMessage";
import { useFocusEffect } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ChatKit } from "./Chats/ChatKit";

// @ts-ignore
const Home = ({ navigation }) => {

    const chatKit = new ChatKit()

    const [currentUserID, setCurrentUserID] = useState<any>();

    useFocusEffect(useCallback(() => {
        const getUserFromLocalStorage = async () => {
            const userID = await AsyncStorage.getItem('@Storage_key')
            console.log(userID)
            setCurrentUserID(userID);  
        }
        getUserFromLocalStorage
    }, []));
    
    const [messageList, setMessageList] = useState([])

    useFocusEffect(useCallback(() => {
        const getMessages = async () => {
            const messages = await chatKit.getAllMesssages(currentUserID)
            setMessageList(messages)
            console.log(messages)
        }
        getMessages()
    } , []));

    return (
            <View style={styles.container}>
            <Text>Lista de mensajes</Text>
            {
                messageList.map((item:any, index) => {
                    return(
                        <CardMessage
                            key={index}
                            onPress={() => chatKit.goToChatRoom(item)}
                            text={item.id}
                        />
                    );
                })
            }
            <TouchableOpacity style={styles.floatingButtom} onPress={() => navigation.navigate("Lista de contactos")}>
                <Text>Add</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    textTitle: {
        fontSize: 500
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    floatingButtom: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#ee6e73',
        position: 'absolute',
        bottom: 10,
        right: 10,
        alignItems: 'center',
        justifyContent: 'center',

    }
});

export default Home