import React, { useCallback, useState } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import { API, graphqlOperation, Auth } from "aws-amplify";
import { getChatsContainer, getMessageRoom, getUser, listMessageRooms, listUsers } from "../src/graphql/queries";
import { createMessageRoom, createUser } from "../src/graphql/mutations";
import CardMessage from "../components/CardMessage";
import { useFocusEffect } from "@react-navigation/native";

// @ts-ignore
const Home = ({ navigation }) => {

    const [currentUserID, setCurrentUserID] = useState<any>();

    useFocusEffect(useCallback(() => {
        const fetchCurrentUser = async () => {
            try {
                const getCurrentUser = (await Auth.currentAuthenticatedUser()) as any;
                setCurrentUserID(getCurrentUser);
            } catch (error) {
                console.log(error);
            }
        }
        fetchCurrentUser();
    }, []));
    
    const [messageList, setMessageList] = useState([])
    let arr = [] as any;

    useFocusEffect(useCallback(() => {
        const fetchData = async () => {
            try {
                const getUserFrom = (await API.graphql(graphqlOperation(listMessageRooms, { filter: { user_from: {contains: currentUserID}} }))) as any;
                const getUserTo = (await API.graphql(graphqlOperation(listMessageRooms, { filter: { user_to: {contains: currentUserID}} }))) as any;
                arr = [...getUserFrom.data.listMessageRooms.items, ...getUserTo.data.listMessageRooms.items];
                setMessageList(arr);
                console.log(messageList)

                return () => {
                    getUserFrom.unsubscribe();
                    getUserTo.unsubscribe();
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, []));

    const goToChatroom = async (userValue: any) => {
        try {
            //se obtiene la informacion del usuario actual
            const getUserMessage = (await API.graphql(graphqlOperation(getUser, {id: currentUserID}))) as any;
            const checkChatRoom = (await API.graphql(graphqlOperation(listMessageRooms, {filter: {user_to: {contains: userValue.user_to}, user_from: {contains: userValue.user_from},chatscontainerID: {contains: userValue.chatscontainerID}}}))) as any;
            
            if (checkChatRoom.data.listMessageRooms.items.length === 0) {   
                (await API.graphql(graphqlOperation(createMessageRoom, {input: {chatscontainerID: userValue.userChatUserContainerIDId, user_to: userValue.id ,user_from: getUserMessage.data.getUser.id}}))) as any;
                console.log("no existe el chat room, creando...");
                navigation.navigate("ChatRoomUser", {param: userValue});
            }else{
                console.log("ya existe el chat room");
                console.log(userValue)
                navigation.navigate("ChatRoomUser", {userValue});
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <View>
            <View style={styles.container}>
            <Text>Lista de mensajes</Text>
            {
                messageList.map((item:any, index) => {
                    return(
                        <CardMessage
                            key={index}
                            onPress={() => goToChatroom(item)}
                            text={item.id}
                        />
                    );
                })
            }
            <TouchableOpacity style={styles.floatingButtom} onPress={() => navigation.navigate("Lista de contactos")}>
                <Text>Add</Text>
            </TouchableOpacity>
        </View>
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