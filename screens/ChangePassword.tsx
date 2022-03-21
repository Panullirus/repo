import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Alert } from 'react-native'
import { Auth } from 'aws-amplify'
import { ButtonPrimary } from '../components/ButtonPrimary'
import { ButtonSecondary } from "../components/ButtonSecondary";

//Agregamos navigation para la navegación entre componentes
const ChangePassword = ({ navigation }) => {

    //Iniciamos el state y el setState
    const [state, setState] = useState({
        //Creamos el campo del usuario para recibir el correo
        username:''
    })

    //Creamos la constante el cual obtendrá los datos de los TextInput
    const getChangePasswordData = (username:any, value:any) =>{
        setState({ ...state, [username]:value})
    }

    //Se crea la función la cual espera el usuario
    async function onChangePasswordPressed(
        username: string): Promise<void> {
        
        //Se colocan condicionales para validar la entrada de texto
        if (!username || username.length === 0) {
            Alert.alert("!Oops¡ Algo salió mal.","El correo electrónico es requerido.")
            return
        }	
    
        try {
            //Se  boloca el método que proveé Auth para el cambio de la contraseña
            await Auth.forgotPassword(username)
            //Si la petición es correcta, redirige para introducir la nueva contraseña
            navigation.navigate('Nueva contraseña')
        } catch(err:any) {
            //Si la peticion no es correcta, muestra el error mediante un alert
            if(err == 'UserNotFoundException: Username/client id combination not found.'){
            Alert.alert("!Oops¡ Algo salió mal.","El correo electrónico no está registrado.")
            }else{
                //Si el error es desconocido, muestra el siguiente mensaje
                Alert.alert("!Oops¡ Algo salió mal.","Revisa tus datos he intentalo de nuevo.")
            }
        }
    }

    return(
        
        <View style={styles.container}>
            <Text style={{ fontSize: 30, width: '87%' }} >Cambiar contraseña,</Text>
            <Text style={{ fontSize: 20, width: '87%'}} >Introduce tu correo.</Text>
            <TextInput
                style={styles.TextInput}
                placeholder="Ingresa tu correo"
                //Se coloca la constante donde se captura la entrada de texto
                onChangeText={(value) => getChangePasswordData("username", value)}
            >
            </TextInput>
            <View style={styles.buttonPrimary}>
            <ButtonPrimary
                text='Enviar'
                //Función dónde espera el usuario para cambiar la contraseña
                onPress={() => onChangePasswordPressed(state.username)}
                />
            </View>
            <View style={styles.buttonSecondary}>
            <ButtonSecondary
                text='Ir al inicio'
                onPress={() => navigation.navigate('Login')}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    textTitle: {
        fontSize: 500
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    TextInput: {
        shadowColor:'#000',
        shadowOffset:{
            width:0,
            height:5
        },
        shadowOpacity:0.36,
        shadowRadius:6.68,
        elevation:11,
        padding: 10,
        paddingStart: 30,
        width: '87%',
        height: 50,
        marginTop: 20,
        borderColor: '#dbdbdb',
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: '#fff',
    },
    buttonPrimary: {
        padding: 10,
        width: '87%',
        height: 50,
        marginTop: 45,
        borderRadius: 10,
        backgroundColor: '#01579b',
    },
    buttonSecondary: {
        padding: 10,
        width: '87%',
        height: 50,
        marginTop: 20,
        borderWidth: 1,
        borderColor:'#01579b',
        borderRadius: 10,
        backgroundColor: 'white',
    },

});

export default ChangePassword