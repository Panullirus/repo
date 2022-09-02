import { User } from "@src/API";
import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type ParamList = {
    Main: undefined;
    chatRoom: { userValue: User };
    listContants: undefined;
}

export type RootStackScreenProps<Screen extends keyof ParamList> = NativeStackScreenProps<ParamList, Screen>;