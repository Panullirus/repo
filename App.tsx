import { StyleSheet, Text, View } from 'react-native';
import {Amplify} from 'aws-amplify'
import config from './src/aws-exports'
import MainStack from './MainStack'
Amplify.configure(config)


const App = () => {
  return (
      <MainStack/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const signUpConfig = {
  header: "Registrarse",
  hideAllDefaults: true,
  signUpFields:[
    {
      label: 'Correo electrónico',
      key: 'username',
      required: true,
      displayOrder: 1,
      type: 'string'
    },
    {
      label: 'Nombre completo',
      key: 'name',
      required: true,
      displayOrder: 2,
      type: 'string'
    },
    {
      label: 'Contraseña',
      key: 'password',
      required: true,
      displayOrder: 3,
      type: 'password'
    }
  ]
}

export default App