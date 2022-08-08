import { API, graphqlOperation } from "aws-amplify"
import { getUser, listMessageRooms } from "@src/graphql/queries"
import { CreateMessageRoomInput, MessageRoom, User } from "@src/API"
import { createMessageRoom } from "@src/graphql/mutations"

interface CheckChatRoomProps {
	userValue: User
	userID: string
	currentUserID: string
}

interface GoToChatRoomProps extends Omit<CheckChatRoomProps, "userID"> {
	navigation: any
}

interface createMessageRoomProps {
	chatRoomID: string
	userFromID: string
	userToID: string
}

export class ChatKit {
	public async goToChatRoom({ navigation, ...props }: GoToChatRoomProps) {
		const userFromID = await this.getUserID(props.currentUserID)

		if (!userFromID) {
			return
		}

		const chatRooms = await this.checkChatRoom({ ...props, userID: userFromID })

		if (chatRooms?.length === 0) {
			await this.createMessageRoom({
				chatRoomID: props.userValue.userChatUserContainerIDId!,
				userToID: props.userValue.id,
				userFromID,
			})

			navigation.navigate("ChatRoomUser", { param: props.userValue })
		} else {
			console.log("ya existe el chat room")
			navigation.navigate("ChatRoomUser", { userValue: props.userValue })
		}
	}

	private async createMessageRoom(
		props: createMessageRoomProps
	): Promise<void> {
		const input: CreateMessageRoomInput = {
			chatscontainerID: props.chatRoomID,
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
			user_to: { contains: props.userID },
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
