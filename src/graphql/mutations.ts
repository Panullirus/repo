/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createMessageContent = /* GraphQL */ `
  mutation CreateMessageContent(
    $input: CreateMessageContentInput!
    $condition: ModelMessageContentConditionInput
  ) {
    createMessageContent(input: $input, condition: $condition) {
      id
      content
      messageroomID
      user_from
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateMessageContent = /* GraphQL */ `
  mutation UpdateMessageContent(
    $input: UpdateMessageContentInput!
    $condition: ModelMessageContentConditionInput
  ) {
    updateMessageContent(input: $input, condition: $condition) {
      id
      content
      messageroomID
      user_from
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteMessageContent = /* GraphQL */ `
  mutation DeleteMessageContent(
    $input: DeleteMessageContentInput!
    $condition: ModelMessageContentConditionInput
  ) {
    deleteMessageContent(input: $input, condition: $condition) {
      id
      content
      messageroomID
      user_from
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createMessageRoom = /* GraphQL */ `
  mutation CreateMessageRoom(
    $input: CreateMessageRoomInput!
    $condition: ModelMessageRoomConditionInput
  ) {
    createMessageRoom(input: $input, condition: $condition) {
      id
      chatscontainerID
      user_to
      user_from
      MessageContents {
        items {
          id
          content
          messageroomID
          user_from
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateMessageRoom = /* GraphQL */ `
  mutation UpdateMessageRoom(
    $input: UpdateMessageRoomInput!
    $condition: ModelMessageRoomConditionInput
  ) {
    updateMessageRoom(input: $input, condition: $condition) {
      id
      chatscontainerID
      user_to
      user_from
      MessageContents {
        items {
          id
          content
          messageroomID
          user_from
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteMessageRoom = /* GraphQL */ `
  mutation DeleteMessageRoom(
    $input: DeleteMessageRoomInput!
    $condition: ModelMessageRoomConditionInput
  ) {
    deleteMessageRoom(input: $input, condition: $condition) {
      id
      chatscontainerID
      user_to
      user_from
      MessageContents {
        items {
          id
          content
          messageroomID
          user_from
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createChatsContainer = /* GraphQL */ `
  mutation CreateChatsContainer(
    $input: CreateChatsContainerInput!
    $condition: ModelChatsContainerConditionInput
  ) {
    createChatsContainer(input: $input, condition: $condition) {
      id
      MessageRoomsID {
        items {
          id
          chatscontainerID
          user_to
          user_from
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateChatsContainer = /* GraphQL */ `
  mutation UpdateChatsContainer(
    $input: UpdateChatsContainerInput!
    $condition: ModelChatsContainerConditionInput
  ) {
    updateChatsContainer(input: $input, condition: $condition) {
      id
      MessageRoomsID {
        items {
          id
          chatscontainerID
          user_to
          user_from
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteChatsContainer = /* GraphQL */ `
  mutation DeleteChatsContainer(
    $input: DeleteChatsContainerInput!
    $condition: ModelChatsContainerConditionInput
  ) {
    deleteChatsContainer(input: $input, condition: $condition) {
      id
      MessageRoomsID {
        items {
          id
          chatscontainerID
          user_to
          user_from
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      name
      image_uri
      chatUserContainerID {
        id
        MessageRoomsID {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      MessageRoomsID {
        items {
          id
          chatscontainerID
          user_to
          user_from
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userChatUserContainerIDId
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      name
      image_uri
      chatUserContainerID {
        id
        MessageRoomsID {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      MessageRoomsID {
        items {
          id
          chatscontainerID
          user_to
          user_from
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userChatUserContainerIDId
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      name
      image_uri
      chatUserContainerID {
        id
        MessageRoomsID {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      MessageRoomsID {
        items {
          id
          chatscontainerID
          user_to
          user_from
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userChatUserContainerIDId
    }
  }
`;
