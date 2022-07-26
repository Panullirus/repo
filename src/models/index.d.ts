import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type MessageContentMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type MessageRoomMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ChatsContainerMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class MessageContent {
  readonly id: string;
  readonly content?: string | null;
  readonly messageroomID: string;
  readonly user_from: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<MessageContent, MessageContentMetaData>);
  static copyOf(source: MessageContent, mutator: (draft: MutableModel<MessageContent, MessageContentMetaData>) => MutableModel<MessageContent, MessageContentMetaData> | void): MessageContent;
}

export declare class MessageRoom {
  readonly id: string;
  readonly chatscontainerID: string;
  readonly user_to: string;
  readonly user_from: string;
  readonly MessageContents?: (MessageContent | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<MessageRoom, MessageRoomMetaData>);
  static copyOf(source: MessageRoom, mutator: (draft: MutableModel<MessageRoom, MessageRoomMetaData>) => MutableModel<MessageRoom, MessageRoomMetaData> | void): MessageRoom;
}

export declare class ChatsContainer {
  readonly id: string;
  readonly MessageRoomsID?: (MessageRoom | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<ChatsContainer, ChatsContainerMetaData>);
  static copyOf(source: ChatsContainer, mutator: (draft: MutableModel<ChatsContainer, ChatsContainerMetaData>) => MutableModel<ChatsContainer, ChatsContainerMetaData> | void): ChatsContainer;
}

export declare class User {
  readonly id: string;
  readonly name?: string | null;
  readonly image_uri?: string | null;
  readonly chatUserContainerID?: ChatsContainer | null;
  readonly MessageRoomsID?: (MessageRoom | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userChatUserContainerIdId?: string | null;
  constructor(init: ModelInit<User, UserMetaData>);
  static copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}