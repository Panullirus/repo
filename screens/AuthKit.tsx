import { CreateUserInput } from "@src/API";
import { createChatsContainer, createUser } from "@src/graphql/mutations";
import { API, Auth, graphqlOperation } from "aws-amplify";
import AsyncStorage from '@react-native-async-storage/async-storage';

export class AuthKit{

    public saveUserID(id: number){
        try {
            AsyncStorage.setItem('userID', id.toString())
        } catch (error) {
            console.log(error)
        }
    }
    
    public async signUp(username: any, password: any, name: any): Promise<void> {
        try {
            const userData = await this.createAuthUser(username, password, name) as any;

            const chatContainer = await this.createChatContainer() as any;

            await this.createChatUser(userData.userSub, chatContainer.data.createChatsContainer.id, name);

        } catch (error) {
            console.log(error)
        }
    }

    public async createChatUser(id: any, userChatUserContainerIDId: any, name: any){
        try {
            const input: CreateUserInput = {
                id: id,
                userChatUserContainerIDId: userChatUserContainerIDId,
                name: name
            }

            await API.graphql(graphqlOperation(createUser, {input}))
        } catch (error) {
            console.log(error)
        }
    }

    public async createAuthUser(username: any, password: any, name: any){
        try {
            await Auth.signUp({
                username: username,
                password: password,
                attributes: {
                    name: name
                }
            })
        } catch (error) {
            console.log(error)
        }
    }

    public async createChatContainer(){
        try {
            await API.graphql(graphqlOperation(createChatsContainer, {input: {}}))
        } catch (error) {
            console.log(error)
        }
    }

}