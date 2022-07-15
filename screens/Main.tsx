import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import { API, graphqlOperation, Auth } from "aws-amplify";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getUser } from "../src/graphql/queries";
import { CreateUserInput, GetUserQuery } from "../src/API";
import { createUser } from "../src/graphql/mutations";

const Home = ({navigation}) => {
    useEffect(() => {
        const fetchUser = async () => {
            const userInfo = await Auth.currentAuthenticatedUser({bypassCache: true})
            //console.log(userInfo)
            if(userInfo){
                const userData = (await API.graphql(graphqlOperation(getUser, {id: userInfo.attributes.sub})) as { data: GetUserQuery})
                if(userData?.data?.getUser){
                    console.log('User already exists')
                    return;
                }
            
                const input: CreateUserInput = {
                    id: userInfo.attributes.sub,
                    name: userInfo.attributes.name,
                    image_url: 'https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGVuc3xlbnwwfHwwfHw%3D&w=1000&q=80'
                }

                console.log(input)

                const res = await API.graphql(graphqlOperation(createUser, {input}))
                console.log(res)
            }
        }
        fetchUser();
    }, []);

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('Lista de contactos')}>
                <Text>Lista de contactos</Text>
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
    button: {
        backgroundColor: '#00a680',
        padding: 10,
        margin: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff'
    }
});

export default Home