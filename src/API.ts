/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateMessageContentInput = {
  id?: string | null,
  content?: string | null,
  messageroomID: string,
  user_from: string,
  _version?: number | null,
};

export type ModelMessageContentConditionInput = {
  content?: ModelStringInput | null,
  messageroomID?: ModelIDInput | null,
  user_from?: ModelIDInput | null,
  and?: Array< ModelMessageContentConditionInput | null > | null,
  or?: Array< ModelMessageContentConditionInput | null > | null,
  not?: ModelMessageContentConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type MessageContent = {
  __typename: "MessageContent",
  id: string,
  content?: string | null,
  messageroomID: string,
  user_from: string,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateMessageContentInput = {
  id: string,
  content?: string | null,
  messageroomID?: string | null,
  user_from?: string | null,
  _version?: number | null,
};

export type DeleteMessageContentInput = {
  id: string,
  _version?: number | null,
};

export type CreateMessageRoomInput = {
  id?: string | null,
  chatscontainerID: string,
  user_to: string,
  user_from: string,
  _version?: number | null,
};

export type ModelMessageRoomConditionInput = {
  chatscontainerID?: ModelIDInput | null,
  user_to?: ModelIDInput | null,
  user_from?: ModelIDInput | null,
  and?: Array< ModelMessageRoomConditionInput | null > | null,
  or?: Array< ModelMessageRoomConditionInput | null > | null,
  not?: ModelMessageRoomConditionInput | null,
};

export type MessageRoom = {
  __typename: "MessageRoom",
  id: string,
  chatscontainerID: string,
  user_to: string,
  user_from: string,
  MessageContents?: ModelMessageContentConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ModelMessageContentConnection = {
  __typename: "ModelMessageContentConnection",
  items:  Array<MessageContent | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type UpdateMessageRoomInput = {
  id: string,
  chatscontainerID?: string | null,
  user_to?: string | null,
  user_from?: string | null,
  _version?: number | null,
};

export type DeleteMessageRoomInput = {
  id: string,
  _version?: number | null,
};

export type CreateChatsContainerInput = {
  id?: string | null,
  _version?: number | null,
};

export type ModelChatsContainerConditionInput = {
  and?: Array< ModelChatsContainerConditionInput | null > | null,
  or?: Array< ModelChatsContainerConditionInput | null > | null,
  not?: ModelChatsContainerConditionInput | null,
};

export type ChatsContainer = {
  __typename: "ChatsContainer",
  id: string,
  MessageRoomsID?: ModelMessageRoomConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ModelMessageRoomConnection = {
  __typename: "ModelMessageRoomConnection",
  items:  Array<MessageRoom | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type UpdateChatsContainerInput = {
  id: string,
  _version?: number | null,
};

export type DeleteChatsContainerInput = {
  id: string,
  _version?: number | null,
};

export type CreateUserInput = {
  id?: string | null,
  name?: string | null,
  image_uri?: string | null,
  _version?: number | null,
  userChatUserContainerIDId?: string | null,
};

export type ModelUserConditionInput = {
  name?: ModelStringInput | null,
  image_uri?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
  userChatUserContainerIDId?: ModelIDInput | null,
};

export type User = {
  __typename: "User",
  id: string,
  name?: string | null,
  image_uri?: string | null,
  chatUserContainerID?: ChatsContainer | null,
  MessageRoomsID?: ModelMessageRoomConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  userChatUserContainerIDId?: string | null,
};

export type UpdateUserInput = {
  id: string,
  name?: string | null,
  image_uri?: string | null,
  _version?: number | null,
  userChatUserContainerIDId?: string | null,
};

export type DeleteUserInput = {
  id: string,
  _version?: number | null,
};

export type ModelMessageContentFilterInput = {
  id?: ModelIDInput | null,
  content?: ModelStringInput | null,
  messageroomID?: ModelIDInput | null,
  user_from?: ModelIDInput | null,
  and?: Array< ModelMessageContentFilterInput | null > | null,
  or?: Array< ModelMessageContentFilterInput | null > | null,
  not?: ModelMessageContentFilterInput | null,
};

export type ModelMessageRoomFilterInput = {
  id?: ModelIDInput | null,
  chatscontainerID?: ModelIDInput | null,
  user_to?: ModelIDInput | null,
  user_from?: ModelIDInput | null,
  and?: Array< ModelMessageRoomFilterInput | null > | null,
  or?: Array< ModelMessageRoomFilterInput | null > | null,
  not?: ModelMessageRoomFilterInput | null,
};

export type ModelChatsContainerFilterInput = {
  id?: ModelIDInput | null,
  and?: Array< ModelChatsContainerFilterInput | null > | null,
  or?: Array< ModelChatsContainerFilterInput | null > | null,
  not?: ModelChatsContainerFilterInput | null,
};

export type ModelChatsContainerConnection = {
  __typename: "ModelChatsContainerConnection",
  items:  Array<ChatsContainer | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  image_uri?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
  userChatUserContainerIDId?: ModelIDInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type CreateMessageContentMutationVariables = {
  input: CreateMessageContentInput,
  condition?: ModelMessageContentConditionInput | null,
};

export type CreateMessageContentMutation = {
  createMessageContent?:  {
    __typename: "MessageContent",
    id: string,
    content?: string | null,
    messageroomID: string,
    user_from: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateMessageContentMutationVariables = {
  input: UpdateMessageContentInput,
  condition?: ModelMessageContentConditionInput | null,
};

export type UpdateMessageContentMutation = {
  updateMessageContent?:  {
    __typename: "MessageContent",
    id: string,
    content?: string | null,
    messageroomID: string,
    user_from: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteMessageContentMutationVariables = {
  input: DeleteMessageContentInput,
  condition?: ModelMessageContentConditionInput | null,
};

export type DeleteMessageContentMutation = {
  deleteMessageContent?:  {
    __typename: "MessageContent",
    id: string,
    content?: string | null,
    messageroomID: string,
    user_from: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateMessageRoomMutationVariables = {
  input: CreateMessageRoomInput,
  condition?: ModelMessageRoomConditionInput | null,
};

export type CreateMessageRoomMutation = {
  createMessageRoom?:  {
    __typename: "MessageRoom",
    id: string,
    chatscontainerID: string,
    user_to: string,
    user_from: string,
    MessageContents?:  {
      __typename: "ModelMessageContentConnection",
      items:  Array< {
        __typename: "MessageContent",
        id: string,
        content?: string | null,
        messageroomID: string,
        user_from: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateMessageRoomMutationVariables = {
  input: UpdateMessageRoomInput,
  condition?: ModelMessageRoomConditionInput | null,
};

export type UpdateMessageRoomMutation = {
  updateMessageRoom?:  {
    __typename: "MessageRoom",
    id: string,
    chatscontainerID: string,
    user_to: string,
    user_from: string,
    MessageContents?:  {
      __typename: "ModelMessageContentConnection",
      items:  Array< {
        __typename: "MessageContent",
        id: string,
        content?: string | null,
        messageroomID: string,
        user_from: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteMessageRoomMutationVariables = {
  input: DeleteMessageRoomInput,
  condition?: ModelMessageRoomConditionInput | null,
};

export type DeleteMessageRoomMutation = {
  deleteMessageRoom?:  {
    __typename: "MessageRoom",
    id: string,
    chatscontainerID: string,
    user_to: string,
    user_from: string,
    MessageContents?:  {
      __typename: "ModelMessageContentConnection",
      items:  Array< {
        __typename: "MessageContent",
        id: string,
        content?: string | null,
        messageroomID: string,
        user_from: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateChatsContainerMutationVariables = {
  input: CreateChatsContainerInput,
  condition?: ModelChatsContainerConditionInput | null,
};

export type CreateChatsContainerMutation = {
  createChatsContainer?:  {
    __typename: "ChatsContainer",
    id: string,
    MessageRoomsID?:  {
      __typename: "ModelMessageRoomConnection",
      items:  Array< {
        __typename: "MessageRoom",
        id: string,
        chatscontainerID: string,
        user_to: string,
        user_from: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateChatsContainerMutationVariables = {
  input: UpdateChatsContainerInput,
  condition?: ModelChatsContainerConditionInput | null,
};

export type UpdateChatsContainerMutation = {
  updateChatsContainer?:  {
    __typename: "ChatsContainer",
    id: string,
    MessageRoomsID?:  {
      __typename: "ModelMessageRoomConnection",
      items:  Array< {
        __typename: "MessageRoom",
        id: string,
        chatscontainerID: string,
        user_to: string,
        user_from: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteChatsContainerMutationVariables = {
  input: DeleteChatsContainerInput,
  condition?: ModelChatsContainerConditionInput | null,
};

export type DeleteChatsContainerMutation = {
  deleteChatsContainer?:  {
    __typename: "ChatsContainer",
    id: string,
    MessageRoomsID?:  {
      __typename: "ModelMessageRoomConnection",
      items:  Array< {
        __typename: "MessageRoom",
        id: string,
        chatscontainerID: string,
        user_to: string,
        user_from: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    name?: string | null,
    image_uri?: string | null,
    chatUserContainerID?:  {
      __typename: "ChatsContainer",
      id: string,
      MessageRoomsID?:  {
        __typename: "ModelMessageRoomConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    MessageRoomsID?:  {
      __typename: "ModelMessageRoomConnection",
      items:  Array< {
        __typename: "MessageRoom",
        id: string,
        chatscontainerID: string,
        user_to: string,
        user_from: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    userChatUserContainerIDId?: string | null,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    name?: string | null,
    image_uri?: string | null,
    chatUserContainerID?:  {
      __typename: "ChatsContainer",
      id: string,
      MessageRoomsID?:  {
        __typename: "ModelMessageRoomConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    MessageRoomsID?:  {
      __typename: "ModelMessageRoomConnection",
      items:  Array< {
        __typename: "MessageRoom",
        id: string,
        chatscontainerID: string,
        user_to: string,
        user_from: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    userChatUserContainerIDId?: string | null,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    name?: string | null,
    image_uri?: string | null,
    chatUserContainerID?:  {
      __typename: "ChatsContainer",
      id: string,
      MessageRoomsID?:  {
        __typename: "ModelMessageRoomConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    MessageRoomsID?:  {
      __typename: "ModelMessageRoomConnection",
      items:  Array< {
        __typename: "MessageRoom",
        id: string,
        chatscontainerID: string,
        user_to: string,
        user_from: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    userChatUserContainerIDId?: string | null,
  } | null,
};

export type GetMessageContentQueryVariables = {
  id: string,
};

export type GetMessageContentQuery = {
  getMessageContent?:  {
    __typename: "MessageContent",
    id: string,
    content?: string | null,
    messageroomID: string,
    user_from: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListMessageContentsQueryVariables = {
  filter?: ModelMessageContentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMessageContentsQuery = {
  listMessageContents?:  {
    __typename: "ModelMessageContentConnection",
    items:  Array< {
      __typename: "MessageContent",
      id: string,
      content?: string | null,
      messageroomID: string,
      user_from: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncMessageContentsQueryVariables = {
  filter?: ModelMessageContentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncMessageContentsQuery = {
  syncMessageContents?:  {
    __typename: "ModelMessageContentConnection",
    items:  Array< {
      __typename: "MessageContent",
      id: string,
      content?: string | null,
      messageroomID: string,
      user_from: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetMessageRoomQueryVariables = {
  id: string,
};

export type GetMessageRoomQuery = {
  getMessageRoom?:  {
    __typename: "MessageRoom",
    id: string,
    chatscontainerID: string,
    user_to: string,
    user_from: string,
    MessageContents?:  {
      __typename: "ModelMessageContentConnection",
      items:  Array< {
        __typename: "MessageContent",
        id: string,
        content?: string | null,
        messageroomID: string,
        user_from: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListMessageRoomsQueryVariables = {
  filter?: ModelMessageRoomFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMessageRoomsQuery = {
  listMessageRooms?:  {
    __typename: "ModelMessageRoomConnection",
    items:  Array< {
      __typename: "MessageRoom",
      id: string,
      chatscontainerID: string,
      user_to: string,
      user_from: string,
      MessageContents?:  {
        __typename: "ModelMessageContentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncMessageRoomsQueryVariables = {
  filter?: ModelMessageRoomFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncMessageRoomsQuery = {
  syncMessageRooms?:  {
    __typename: "ModelMessageRoomConnection",
    items:  Array< {
      __typename: "MessageRoom",
      id: string,
      chatscontainerID: string,
      user_to: string,
      user_from: string,
      MessageContents?:  {
        __typename: "ModelMessageContentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetChatsContainerQueryVariables = {
  id: string,
};

export type GetChatsContainerQuery = {
  getChatsContainer?:  {
    __typename: "ChatsContainer",
    id: string,
    MessageRoomsID?:  {
      __typename: "ModelMessageRoomConnection",
      items:  Array< {
        __typename: "MessageRoom",
        id: string,
        chatscontainerID: string,
        user_to: string,
        user_from: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListChatsContainersQueryVariables = {
  filter?: ModelChatsContainerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListChatsContainersQuery = {
  listChatsContainers?:  {
    __typename: "ModelChatsContainerConnection",
    items:  Array< {
      __typename: "ChatsContainer",
      id: string,
      MessageRoomsID?:  {
        __typename: "ModelMessageRoomConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncChatsContainersQueryVariables = {
  filter?: ModelChatsContainerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncChatsContainersQuery = {
  syncChatsContainers?:  {
    __typename: "ModelChatsContainerConnection",
    items:  Array< {
      __typename: "ChatsContainer",
      id: string,
      MessageRoomsID?:  {
        __typename: "ModelMessageRoomConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    name?: string | null,
    image_uri?: string | null,
    chatUserContainerID?:  {
      __typename: "ChatsContainer",
      id: string,
      MessageRoomsID?:  {
        __typename: "ModelMessageRoomConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    MessageRoomsID?:  {
      __typename: "ModelMessageRoomConnection",
      items:  Array< {
        __typename: "MessageRoom",
        id: string,
        chatscontainerID: string,
        user_to: string,
        user_from: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    userChatUserContainerIDId?: string | null,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      name?: string | null,
      image_uri?: string | null,
      chatUserContainerID?:  {
        __typename: "ChatsContainer",
        id: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      MessageRoomsID?:  {
        __typename: "ModelMessageRoomConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userChatUserContainerIDId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncUsersQuery = {
  syncUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      name?: string | null,
      image_uri?: string | null,
      chatUserContainerID?:  {
        __typename: "ChatsContainer",
        id: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      MessageRoomsID?:  {
        __typename: "ModelMessageRoomConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userChatUserContainerIDId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateMessageContentSubscription = {
  onCreateMessageContent?:  {
    __typename: "MessageContent",
    id: string,
    content?: string | null,
    messageroomID: string,
    user_from: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateMessageContentSubscription = {
  onUpdateMessageContent?:  {
    __typename: "MessageContent",
    id: string,
    content?: string | null,
    messageroomID: string,
    user_from: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteMessageContentSubscription = {
  onDeleteMessageContent?:  {
    __typename: "MessageContent",
    id: string,
    content?: string | null,
    messageroomID: string,
    user_from: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateMessageRoomSubscription = {
  onCreateMessageRoom?:  {
    __typename: "MessageRoom",
    id: string,
    chatscontainerID: string,
    user_to: string,
    user_from: string,
    MessageContents?:  {
      __typename: "ModelMessageContentConnection",
      items:  Array< {
        __typename: "MessageContent",
        id: string,
        content?: string | null,
        messageroomID: string,
        user_from: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateMessageRoomSubscription = {
  onUpdateMessageRoom?:  {
    __typename: "MessageRoom",
    id: string,
    chatscontainerID: string,
    user_to: string,
    user_from: string,
    MessageContents?:  {
      __typename: "ModelMessageContentConnection",
      items:  Array< {
        __typename: "MessageContent",
        id: string,
        content?: string | null,
        messageroomID: string,
        user_from: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteMessageRoomSubscription = {
  onDeleteMessageRoom?:  {
    __typename: "MessageRoom",
    id: string,
    chatscontainerID: string,
    user_to: string,
    user_from: string,
    MessageContents?:  {
      __typename: "ModelMessageContentConnection",
      items:  Array< {
        __typename: "MessageContent",
        id: string,
        content?: string | null,
        messageroomID: string,
        user_from: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateChatsContainerSubscription = {
  onCreateChatsContainer?:  {
    __typename: "ChatsContainer",
    id: string,
    MessageRoomsID?:  {
      __typename: "ModelMessageRoomConnection",
      items:  Array< {
        __typename: "MessageRoom",
        id: string,
        chatscontainerID: string,
        user_to: string,
        user_from: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateChatsContainerSubscription = {
  onUpdateChatsContainer?:  {
    __typename: "ChatsContainer",
    id: string,
    MessageRoomsID?:  {
      __typename: "ModelMessageRoomConnection",
      items:  Array< {
        __typename: "MessageRoom",
        id: string,
        chatscontainerID: string,
        user_to: string,
        user_from: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteChatsContainerSubscription = {
  onDeleteChatsContainer?:  {
    __typename: "ChatsContainer",
    id: string,
    MessageRoomsID?:  {
      __typename: "ModelMessageRoomConnection",
      items:  Array< {
        __typename: "MessageRoom",
        id: string,
        chatscontainerID: string,
        user_to: string,
        user_from: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    name?: string | null,
    image_uri?: string | null,
    chatUserContainerID?:  {
      __typename: "ChatsContainer",
      id: string,
      MessageRoomsID?:  {
        __typename: "ModelMessageRoomConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    MessageRoomsID?:  {
      __typename: "ModelMessageRoomConnection",
      items:  Array< {
        __typename: "MessageRoom",
        id: string,
        chatscontainerID: string,
        user_to: string,
        user_from: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    userChatUserContainerIDId?: string | null,
  } | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    name?: string | null,
    image_uri?: string | null,
    chatUserContainerID?:  {
      __typename: "ChatsContainer",
      id: string,
      MessageRoomsID?:  {
        __typename: "ModelMessageRoomConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    MessageRoomsID?:  {
      __typename: "ModelMessageRoomConnection",
      items:  Array< {
        __typename: "MessageRoom",
        id: string,
        chatscontainerID: string,
        user_to: string,
        user_from: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    userChatUserContainerIDId?: string | null,
  } | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    name?: string | null,
    image_uri?: string | null,
    chatUserContainerID?:  {
      __typename: "ChatsContainer",
      id: string,
      MessageRoomsID?:  {
        __typename: "ModelMessageRoomConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    MessageRoomsID?:  {
      __typename: "ModelMessageRoomConnection",
      items:  Array< {
        __typename: "MessageRoom",
        id: string,
        chatscontainerID: string,
        user_to: string,
        user_from: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    userChatUserContainerIDId?: string | null,
  } | null,
};
