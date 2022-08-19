import { API, Auth, graphqlOperation } from "aws-amplify"
import { getUser, listMessageRooms } from "@src/graphql/queries"
import { CreateMessageContentInput, CreateMessageRoomInput, MessageRoom, User } from "@src/API"
import { createMessageContent, createMessageRoom } from "@src/graphql/mutations"

interface CheckChatRoomProps {
	userValue: User
	userID: string
	currentUserID: string
}

interface GoToChatRoomProps extends Omit<CheckChatRoomProps, "userID"> {
	navigation: any
}

interface createMessageRoomProps {
	chatscontainerID: string
	userFromID: string
	userToID: string
}

export class ChatKit {

	// @ts-ignore
	public async goToChatRoomFromMain(userValue: any, {navigation}){

		const filter = {
			user_to: {
				contains: userValue.user_to
			},
			user_from: {
				contains: userValue.user_from
			},
			chatscontainerID: {
				contains: userValue.chatscontainerID
			}
		}

		try {
			const getUserMessage = (await this.getUserID(userValue.id)) as any
			const checkChatRoom = (await this.getMessagesUser(filter))

			if(checkChatRoom.data.listMessageRooms.items.length == 0){
				await this.createMessageRoom({
					chatscontainerID: userValue.userChatUserContainerIDId,
					userToID: userValue.id,
					userFromID: getUserMessage.data.getUser.id
				});
				console.log("chatroom creado")
				navigation.navigate("ChatRoomUser", {param: userValue})
			}else{
				console.log("chatroom existente")
				navigation.navigate("ChatRoomUser", {userValue})
			}

		} catch (error) {
			console.error("Error en goToChatRoomFromMain", { error })
		}
	}

	// public async getAllMesssages(currentUserID: any){

	// 	const filter = {
	// 		user_from: {
	// 			contains: currentUserID
	// 		}
	// 	}

	// 	try {
	// 		const messagesUserFrom = await this.getMessagesUser(filter) as any
	// 		const messagesUserTo = await this.getMessagesUser(filter) as any

	// 		const messages = [...messagesUserFrom.data.listMessageRooms.items, ...messagesUserTo.data.listMessageRooms.items]

	// 		return this.sortMessages(messages)
	// 	} catch (error) {
	// 		console.error("Error en getAllMessages => ", { error })
	// 	}
	// }

	public async getMessagesUser(filter: any){
		try {
			const messages = await API.graphql(graphqlOperation(listMessageRooms, { filter })) as any
		
			return messages
		} catch (error) {
			console.error("Error en getMessagesUserTo => ", { error })
		}
	}

	//metodo para sortear mensajes
	public async sendMessage(messageroomID: any, content: any){
		try {
			const getCurrentUser = (await Auth.currentAuthenticatedUser()) as any

			const input: CreateMessageContentInput = {
				messageroomID: messageroomID,
				user_from: getCurrentUser.attributes.sub,
				content: content,
			}

			await this.createMessageContent(input)

		} catch (error) {
			console.error("Error enviando mensaje", { error })
		}
	}

	public async createMessageContent(input: any){
		await API.graphql(graphqlOperation(createMessageContent, { input })) as any;
	}

	public async setMessages(userFromListContact: any){
		try {
			const getCurrentUser = (await Auth.currentAuthenticatedUser()) as any

			const filter = {
				user_from: {
					contains: getCurrentUser.attributes.sub
				},
				user_to: {
					contains: userFromListContact.userValue.id
				}
			}

			if(userFromListContact.userValue.MessageContents == undefined){
				const messages = await this.getListMessageRooms(filter)

				if(messages.data.listMessageRooms.items[0].MessageContents.items.length == 0){
					const filter = {
						user_from: {
							contains: userFromListContact.userValue.id
						},
						user_to: {
							contains: getCurrentUser.attributes.sub
						}
					}

					const messages = await this.getListMessageRooms(filter)

					const messagesContent: any[] = messages.data.listMessageRooms.items[0].MessageContents.items

					const sortMessages = messagesContent.sort(function (a: any, b: any) {
						return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
					})

					return sortMessages
				}else{
					return messages
				}

			}else{
				return userFromListContact.userValue.MessageContents.items
			}
		} catch (error) {
			console.error("Error buscando mensajes", { error })
		}
	}

	public async setChatRoom(userFromListContact: any){
		try {
			const getCurrentUser = (await Auth.currentAuthenticatedUser()) as any

			const filter = {
				user_from: {
					contains: getCurrentUser.attributes.sub
				},
				user_to: {
					contains: userFromListContact.userValue.id
				}
			}

			if(userFromListContact.userValue.MessageContents == undefined){
				const chatRoom = await this.getListMessageRooms(filter)

				if(chatRoom.data.listMessageRooms.items[0].MessageContents.items.length == 0){
					const filter = {
						user_from: {
							contains: userFromListContact.userValue.id
						},
						user_to: {
							contains: getCurrentUser.attributes.sub
						}
					}

					const chatRoom = await this.getListMessageRooms(filter)

					//sor messages
					

					return chatRoom
				}else{
					return chatRoom
				}

			}else{
				return userFromListContact.userValue.MessageContents.items
			}
		} catch (error) {
			console.error("Error buscando mensajes", { error })
		}
	}

	public async getListMessageRooms(filter: any){
		return (await API.graphql(graphqlOperation(listMessageRooms, { filter }))) as any

	}

	public async goToChatRoom({ navigation, ...props }: GoToChatRoomProps) {
		console.log(props.userValue)

		const userFromID = await this.getUserID(props.currentUserID)

		console.log(
			{
				chatsContainerID: props.userValue.userChatUserContainerIDId!,
				userToID: props.userValue.id,
				userFromID,
			}
		)

		if (!userFromID) {
			return
		}

		const chatRooms: any = await this.checkChatRoom({ ...props, userID: userFromID })

		if (chatRooms?.length === 0) {
			await this.createMessageRoom({
				chatscontainerID: props.userValue.userChatUserContainerIDId!,
				userToID: props.userValue.id,
				userFromID,
			})

			console.log("no existe chatroom, creando...")
			navigation.navigate("ChatRoomUser", { param: props.userValue })
		} else {
			console.log("Chatroom existe")
			navigation.navigate("ChatRoomUser", { userValue: props.userValue })
		}
	}

	private async createMessageRoom(
		props: createMessageRoomProps
	): Promise<void> {
		const input: CreateMessageRoomInput = {
			chatscontainerID: props.chatscontainerID,
			user_to: props.userToID,
			user_from: props.userFromID,
		}
		try {
			await API.graphql(graphqlOperation(createMessageRoom, { input }))
		} catch (error) {
			console.error("Error creando messageRoom", { error })
		}
	}

	private async getUserID(id: string): Promise<string | null> {
		try {
			const result = (await API.graphql(
				graphqlOperation(getUser, { id })
			)) as any
			return result?.data?.getUser.id
		} catch (error) {
			console.error("Error buscando userID", { error })
			return null
		}
	}

	private async checkChatRoom(
		props: CheckChatRoomProps
	): Promise<MessageRoom[] | null> {

		const filter = {
			user_to: { contains: props.userValue.id },
			user_from: { contains: props.currentUserID },
			chatscontainerID: { contains: props.userValue.userChatUserContainerIDId },
		}

		try {
			const checkChatRoom = (await API.graphql(
				graphqlOperation(listMessageRooms, { filter })
			)) as any
			return checkChatRoom.data.listMessageRooms.items
		} catch (error) {
			console.error("Error buscando chatroom", { error })
			return null
		}
	}
}
