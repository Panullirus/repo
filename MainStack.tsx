import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import Login from './screens/Login'
import Register from './screens/Register'
import ConfirmCode from './screens/ConfirmCode';
import ChangePassword from './screens/ChangePassword';
import NewPassword from './screens/NewPassword';
import Home from './screens/Home';
import Main from './screens/Main'
import { ListContacts, ChatRoom } from './screens/Chats';

const Stack = createNativeStackNavigator();

//Stack de la navegación
const MainStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Home'
          options={{ headerShown: false }}
          component={Home}
        />
        <Stack.Screen
          name='Main'
          options={{ headerShown: false }}
          component={Main}
        />
        <Stack.Screen
          name='Login'
          component={Login}
        />
        <Stack.Screen
          name='Confirmación'
          component={ConfirmCode}
        />
        <Stack.Screen
          name='Registrarse'
          component={Register}
        />
        <Stack.Screen
          name='Cambiar contraseña'
          options={{ headerShown: false }}
          component={ChangePassword}
        />
        <Stack.Screen
          name='Nueva contraseña'
          options={{ headerShown: false }}
          component={NewPassword}
        />
        <Stack.Screen
          name='Lista de contactos'
          options={{ headerShown: true }}
          component={ListContacts}
        />
        <Stack.Screen
          name='ChatRoomUser'
          options={{ headerShown: true }}
          component={ChatRoom}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainStack