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
const Stack = createNativeStackNavigator();

//Stack de la navegación
const MainStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name='Home'
          options={{headerShown: false}}
          component={Home}
        />
        <Stack.Screen
          name='Main'
          options={{headerShown: false}}
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
          options={{headerShown: false}}
          component={ChangePassword}
        />
        <Stack.Screen
          name='Nueva contraseña'
          options={{headerShown: false}}
          component={NewPassword}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainStack