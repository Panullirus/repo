// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { MessageContent, MessageRoom, ChatsContainer, User } = initSchema(schema);

export {
  MessageContent,
  MessageRoom,
  ChatsContainer,
  User
};