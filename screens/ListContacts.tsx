import { useEffect, useState } from "react";
import { API, graphqlOperation, Auth } from "aws-amplify";
import { listUsers } from "../src/graphql/queries";
import { View, Text, StyleSheet } from "react-native";
import CardContact from "../components/CardContanct";
import { createChatRoom, createChatRoomUser } from "../src/graphql/mutations";

export default function ListContacts(props){


    const {user} = props;

    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchListContacts = async () =>{
            try {
                const userslist = await API.graphql(graphqlOperation(listUsers));
                console.log(userslist)
                setUsers(userslist.data.listUsers.items);
            } catch (error) {
                console.log(error)
            }
        }
        fetchListContacts();
    }, [])


    const enterToChat = async () => {
        try {
            const newChatRoomData = await API.graphql(graphqlOperation(createChatRoom, {input: {} }));
            console.log(newChatRoomData);

            if(!newChatRoomData.data){
                console.log('Error creating chat room')
                return;
            }

            const newChatRoom = newChatRoomData.data.createChatRoom;

            const userInfo = await Auth.currentAuthenticatedUser();

            await API.graphql(graphqlOperation(createChatRoomUser, {input: {userID: userInfo.attributes.sub, chatRoomID: newChatRoom.id}}));
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <View style={styles.container}>
            {
                users.map((value) =>{
                    return(
                        <CardContact
                        onPress={enterToChat}
                        image= {value.image_url}
                        text= {value.name}
                    />
                    );
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