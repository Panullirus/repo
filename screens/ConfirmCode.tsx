import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Alert } from 'react-native'
import { Auth } from 'aws-amplify'
import { ButtonPrimary } from "../components/ButtonPrimary";
import { ButtonSecondary } from "../components/ButtonSecondary"; 

//Agregamos navigation para la navegación entre componentes
const ConfirmCode = ({navigation}) => {

    //Iniciamos el state y el setState
    const [state, setState] = useState({
        //Creamos el campo del usuario para recibir el correo y el código 
        username: '',
        code: ''
    })

    //Creamos la constante el cual obtendrá los datos de los TextInput 
    const getCodeConfirmation = (username: any, value: any) => {
        setState({ ...state, [username]: value })
    }

    //Se crea la función la cual espera el usuario y el código de confirmación
    async function onConfirmSignUpPressed(
        username: string,
        code: string): Promise<void> {
        
        //Se colocan condicionales para validar la entrada de texto
        if (!username || username.length === 0) {
            Alert.alert("!Oops¡ Algo salió mal.","El correo electrónico es requerido")
            return
        }	
    
        if (!code || code.length === 0) {
            Alert.alert("!Oops¡ Algo salió mal.","El código es requerido")
            return
        }	
    
        try {
            //Se coloca el método que proveé Auth para confirmar el código de confirmación
            await Auth.confirmSignUp(username, code).then(data => {
                console.log(data)
            })
            //Si la petición es correcta, redirige al login
            navigation.navigate('Login')
        } catch(err) {
            //Si la petición no es correcta, muestra el error mediante un alert                  
            if(err == 'CodeMismatchException: Invalid verification code provided, please try again.'){
                Alert.alert("!Oops¡ Algo salió mal.","El código es incorrecto.")
            }else{
                //Si el error es desconocido, muestra el siguiente mensaje
                Alert.alert("!Oops¡ Algo salió mal.","Revisa tus datos he intentalo de nuevo.")
            }
        }
    }

    //Se crea la funcion para volver a enviar el código de confirmación
    //La siguiente función espera el username como correo
    async function onResendCode(
        username: string): Promise<void> {
        
        //Condicionales para validar la entrada de text
        if (!username || username.length === 0) {
            Alert.alert("!Oops¡ Algo salió mal.","El correo electrónico es requerido")
            return       
        }	
        try {
            //Método de Auth para volver a enviar código de confirmación
            await Auth.resendSignUp(username)
            //Si la petición es correcta, se muestra un alert
            Alert.alert("!Muy bien¡","El código fue enviado con éxito.")
        } catch(err) {
            //Si la petición es incorrecta, 
            Alert.alert("!Oops¡ Algo salió mal.","Revisa tus datos he intentalo de nuevo.")
        }
    }

    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 30, width: '87%' }} >Confirmar correo,</Text>
            <Text style={{ fontSize: 20, width: '87%', marginBottom:40 }} >Introduce tu correo y el código que te mandamos.</Text>
            <TextInput
                style={styles.TextInput}
                placeholder="Ingresa tu correo"
                //Se coloca la constante donde se captura la entrada de texto
                onChangeText={(value) => getCodeConfirmation("username", value)}
            >
            </TextInput>
            <TextInput
                style={styles.TextInput}
                placeholder="Ingresa el código"
                //Se coloca la constante donde se captura la entrada de texto
                onChangeText={(value) => getCodeConfirmation("code", value)}
            >
            </TextInput>
            <View style={styles.buttonPrimary}>
            <ButtonPrimary
                text='Confirmar código'
                //Se coloca la función con los datos del satate
                onPress={() => onConfirmSignUpPressed(state.username, state.code)}
                />
            </View>
            <View style={styles.buttonSecondary}>
            <ButtonSecondary
                text='Reenviar código'
                //Función para reenviar el código con el dato del state
                onPress={() => onResendCode(state.username)}
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

export default ConfirmCode