/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateMessageContent = /* GraphQL */ `
  subscription OnCreateMessageContent {
    onCreateMessageContent {
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
export const onUpdateMessageContent = /* GraphQL */ `
  subscription OnUpdateMessageContent {
    onUpdateMessageContent {
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
export const onDeleteMessageContent = /* GraphQL */ `
  subscription OnDeleteMessageContent {
    onDeleteMessageContent {
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
export const onCreateMessageRoom = /* GraphQL */ `
  subscription OnCreateMessageRoom {
    onCreateMessageRoom {
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
export const onUpdateMessageRoom = /* GraphQL */ `
  subscription OnUpdateMessageRoom {
    onUpdateMessageRoom {
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
export const onDeleteMessageRoom = /* GraphQL */ `
  subscription OnDeleteMessageRoom {
    onDeleteMessageRoom {
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
export const onCreateChatsContainer = /* GraphQL */ `
  subscription OnCreateChatsContainer {
    onCreateChatsContainer {
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
export const onUpdateChatsContainer = /* GraphQL */ `
  subscription OnUpdateChatsContainer {
    onUpdateChatsContainer {
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
export const onDeleteChatsContainer = /* GraphQL */ `
  subscription OnDeleteChatsContainer {
    onDeleteChatsContainer {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
