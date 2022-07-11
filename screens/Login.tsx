import React, { useState, useEffect } from "react";
import { View, Text, TextInput, StyleSheet, Alert, Image } from 'react-native'
import { ButtonPrimary } from '../components/ButtonPrimary'
import { ButtonSecondary } from "../components/ButtonSecondary";
import { Auth } from "aws-amplify";
import { getAlumno, listAlumnos } from "../src/graphql/queries";
import { API, graphqlOperation } from "aws-amplify";

//Agregamos navigation para la navegación entre componentes
const Login = ({ navigation }) => {

    //Iniciamos el state y el setState
    const [state, setState] = useState({
        //Creamos el campo del usuario para recibir el correo y la contraseña
        email: "",
        password: ""
    })

    //Creamos la constante el cual obtendrá los datos de los TextInput
    const getSigninData = (email: any, value: any) => {
        setState({ ...state, [email]: value })
    }

    //Si el correo electrónico está registrado pero no confirmado, muestra un alert para confirmarlo
    async function onResendCode(
        username: string): Promise<void> {
        try {
            //Método de Auth para volver a enviar código de confirmación
            await Auth.resendSignUp(username)
            navigation.navigate('Confirmación')
        } catch(err) {
            //Si la petición es incorrecta, 
            Alert.alert("!Oops¡ Algo salió mal.","Revisa tus datos he intentalo de nuevo.")
        }
    }

    //Función para iniciar sesion la cual espera correo como usuario y contraseña
    async function onSignInPressed(
        username: string,
        contrasena: string): Promise<void> {

        //Validacion la entrada de texto
        if (!username || username.length === 0) {
            Alert.alert("!Oops¡ Algo salió mal.", "El correo electrónico es requerido.")
            return
        }

        if (!contrasena || contrasena.length === 0) {
            Alert.alert("!Oops¡ Algo salió mal.", "La contraseña es requerida.")
            return
        }

        try {
            //Se envia la petición de auth para iniciar sesion
            await Auth.signIn(username, contrasena)
            //Si la petición es correcta, redirige al contenido
            navigation.navigate('Main')
        } catch (err) {
            //Muestra errores por errores de peticiones
            if (err == 'UserNotFoundException: User does not exist.') {
                Alert.alert("!Oops¡ Algo salió mal.", "El correo electrónico no está registrado.")
            } else if (err == 'NotAuthorizedException: Incorrect username or password.') {
                Alert.alert("!Oops¡ Algo salió mal.", "La contraseña es incorrecta.")
            } else if (err == 'UserNotConfirmedException: User is not confirmed.') {
                Alert.alert("!Oops¡ Algo salió mal.", "Para continuar confirma tu correo electónico.",[
                    {
                        text: "Confirmar",
                        onPress: () => onResendCode(state.email)
                    },
                    {
                        text:'Cancelar'
                    }
                ])
            }else{
                Alert.alert("!Oops¡ Algo salió mal.", "Revisa tus datos he inténtalo de nuevo.")
            }
        }
    }

    return (
            <View style={styles.container}>

            <Text style={{ fontSize: 30, width: '87%' }}>
                Iniciar sesión
            </Text>
            <Text style={{ fontSize: 20, width: '87%' }}>
                Ingresa tus datos para entrar.
            </Text>
            <TextInput
                style={styles.TextInput}
                placeholder="ejemplo@correo.com"
                //Se coloca la constante donde se captura la entrada de texto
                onChangeText={(value) => getSigninData("email", value)}
            >
            </TextInput>
            <TextInput
                style={styles.TextInput}
                secureTextEntry={true}
                placeholder="Tu contraseña"
                //Se coloca la constante donde se captura la entrada de texto
                onChangeText={(value) => getSigninData("password", value)}
            >
            </TextInput>
            <View style={styles.buttonPrimary}>
                <ButtonPrimary
                    text='Ingresar'
                    //Se coloca la función para el inicio de sesion con los datos del state
                    onPress={() => onSignInPressed(state.email, state.password)}
                />
            </View>
            <View style={styles.buttonSecondary}>
                <ButtonSecondary
                    text='¿Olvidaste tu contraseña?'
                    onPress={() => navigation.navigate('Cambiar contraseña')}
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
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 5
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,
        elevation: 11,
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
        borderColor: '#01579b',
        borderRadius: 10,
        backgroundColor: 'white',
    },
    stretch: {
        margin:50,
        width: 200,
        height: 200,
        alignSelf:'center',
        tintColor:'#01579b',
        resizeMode: 'stretch',
      },

});

export default Login