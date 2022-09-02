import { useCallback, useEffect, useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { listUsers } from "../../src/graphql/queries";
import { View, Text, StyleSheet } from "react-native";
import CardContacts from "../../components/CardContacts";
import React from "react";
import { useFocusEffect } from "@react-navigation/native";
import { ChatKit } from "./ChatKit";
import AsyncStorage from '@react-native-async-storage/async-storage';

const chatKit = new ChatKit()

// @ts-ignore
export function ListContacts({ navigation }) {

    const [currentUserID, setCurrentUserID] = useState<any>("");

    useEffect(() => {
        const getUserFromLocalStorage = async () => {
            const userID = await AsyncStorage.getItem('@Storage_key')
            setCurrentUserID(userID);  
        }
        getUserFromLocalStorage()
    }, []);

    const [listContact, setListContact] = useState([]);

    const goToChatroom = async (userValue: any) => {
        await chatKit.goToChatRoom({
            navigation,
            currentUserID,
            userValue
        })
    }

    useFocusEffect(useCallback(() => {
        const fetchListContacts = async () => {
            try {
                const getUser = (await API.graphql(graphqlOperation(listUsers))) as any;
                setListContact(getUser.data.listUsers.items);
            } catch (error) {
                console.log(error);
            }
        }
        fetchListContacts();
    }, []));


    return (
        <View style={styles.container}>
            <Text>Tus contactos:</Text>
            {
                listContact.map((item: any, index) => {
                    if (item.id !== currentUserID) {
                        return (
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