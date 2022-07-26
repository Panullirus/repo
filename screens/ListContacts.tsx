import { useEffect, useState } from "react";
import { API, graphqlOperation, Auth } from "aws-amplify";
import { getUser, listMessageRooms, listUsers } from "../src/graphql/queries";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import CardContacts from "../components/CardContacts";
import { createMessageRoom } from "../src/graphql/mutations";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function ListContacts({ navigation }) {

    const [listContact, setListContact] = useState([]);

    const goToChatroom = async (userValue: any) => {
        //sconsole.log(userValue)
        try {
            //se obtiene la informacion del usuario actual
            const getUserMessage = (await API.graphql(graphqlOperation(getUser, {id: currentUserID}))) as any;
            const checkChatRoom = (await API.graphql(graphqlOperation(listMessageRooms, {filter: {user_to: {contains: userValue.id}, user_from: {contains: currentUserID},chatscontainerID: {contains: userValue.userChatUserContainerIDId}}}))) as any;
            
            if (checkChatRoom.data.listMessageRooms.items.length === 0) {   
                (await API.graphql(graphqlOperation(createMessageRoom, {input: {chatscontainerID: userValue.userChatUserContainerIDId, user_to: userValue.id ,user_from: getUserMessage.data.getUser.id}}))) as any;
                console.log("no existe el chat room, creando...");
                navigation.navigate("ChatRoomUser", {param: userValue});
            }else{
                console.log("ya existe el chat room");
                console.log(userValue.MessageRoomsID)
                navigation.navigate("ChatRoomUser", {userValue});
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        const fetchListContacts = async () => {
            try {
                const getUser = (await API.graphql(graphqlOperation(listUsers))) as any;
                setListContact(getUser.data.listUsers.items);
            } catch (error) {
                console.log(error);
            }
        }
        fetchListContacts();
    }, [ ]);

    const currentUserID = "f4be4491-3919-4552-a07d-6465c0fcd386"

    return(
        <View style={styles.container}>
            <Text>Tus contactos:</Text>
            {
                listContact.map((item, index) => {
                    if (item.id !== currentUserID) {
                        return(
                            <CardContacts
                                key={index}
                                onPress={() => goToChatroom(item)}
                                text={item.name}
                                image={item.image_uri}
                            />
                        );   
                    }
                })
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});