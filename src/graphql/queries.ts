/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getMessageContent = /* GraphQL */ `
  query GetMessageContent($id: ID!) {
    getMessageContent(id: $id) {
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
export const listMessageContents = /* GraphQL */ `
  query ListMessageContents(
    $filter: ModelMessageContentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMessageContents(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const syncMessageContents = /* GraphQL */ `
  query SyncMessageContents(
    $filter: ModelMessageContentFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncMessageContents(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
  }
`;
export const getMessageRoom = /* GraphQL */ `
  query GetMessageRoom($id: ID!) {
    getMessageRoom(id: $id) {
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
export const listMessageRooms = /* GraphQL */ `
  query ListMessageRooms(
    $filter: ModelMessageRoomFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMessageRooms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        chatscontainerID
        user_to
        user_from
        MessageContents {
          items {
            id
            content
            user_from
          }
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncMessageRooms = /* GraphQL */ `
  query SyncMessageRooms(
    $filter: ModelMessageRoomFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncMessageRooms(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        chatscontainerID
        user_to
        user_from
        MessageContents {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getChatsContainer = /* GraphQL */ `
  query GetChatsContainer($id: ID!) {
    getChatsContainer(id: $id) {
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
export const listChatsContainers = /* GraphQL */ `
  query ListChatsContainers(
    $filter: ModelChatsContainerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChatsContainers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncChatsContainers = /* GraphQL */ `
  query SyncChatsContainers(
    $filter: ModelChatsContainerFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncChatsContainers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        image_uri
        chatUserContainerID {
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        MessageRoomsID {
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
      nextToken
      startedAt
    }
  }
`;
export const syncUsers = /* GraphQL */ `
  query SyncUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        image_uri
        chatUserContainerID {
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        MessageRoomsID {
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
      nextToken
      startedAt
    }
  }
`;
