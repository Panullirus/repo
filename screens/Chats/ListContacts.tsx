import { useCallback, useEffect, useState } from "react";
import { API, graphqlOperation, Auth } from "aws-amplify";
import { getUser, listMessageRooms, listUsers } from "../../src/graphql/queries";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import CardContacts from "../../components/CardContacts";
import { createMessageRoom } from "../../src/graphql/mutations";
import React from "react";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { ChatKit } from "./ChatKit";

const chatKit = new ChatKit()

// @ts-ignore
export function ListContacts({ navigation }) {

    const [currentUserID, setCurrentUserID] = useState<any>();

    useFocusEffect(useCallback(() => {
        const fetchCurrentUser = async () => {
            try {
                const getCurrentUser = (await Auth.currentAuthenticatedUser()) as any;
                setCurrentUserID(getCurrentUser.attributes.sub);
            } catch (error) {
                console.log(error);
            }
        }
        fetchCurrentUser();
    }, []));

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