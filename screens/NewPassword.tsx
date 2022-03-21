import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Alert } from 'react-native'
import { Auth } from 'aws-amplify'
import { ButtonPrimary } from '../components/ButtonPrimary'
import { ButtonSecondary } from "../components/ButtonSecondary";

//Agregamos navigation para la navegación entre componentes
const NewPassword = ({ navigation }) => {

    //Iniciamos el state y el setState
    const [state, setState] = useState({
        //Creamos el campo del usuario para recibir el correo, código de confirmación y la contraseña
        username:'',
        code:'',
        password:''
    })

    //Creamos la constante el cual obtendrá los datos de los TextInput
    const getNewPasswordData = (username:any, value:any) =>{
        setState({ ...state, [username]:value})
    }

    //Se inicia la función para crear la nueva contraseña en dónde espera usuario, código y contraseña
    async function onNewPasswordPressed(
        username: string,
        code: string,
        password:string): Promise<void> {
        
        //Se colocan condicionales para validar la entrada de texto
        if (!username || username.length === 0) {
            Alert.alert("!Oops¡ Algo salió mal.","La correo es requerido.")
            return
        }	
    
        if (!code || code.length === 0) {
            Alert.alert("!Oops¡ Algo salió mal.","El código es requerido.")
            return
        }

        if (!password || password.length === 0) {
            Alert.alert("!Oops¡ Algo salió mal.","La contraseña es requerida.")
            return
        }
        
        try {
            //Método para cambiar la contraseña proveída por Auth, en dónde recibe usuario, código de confirmación y contraseña
            await Auth.forgotPasswordSubmit(username, code, password)
            //Si la peticion es correcta, redirige al login
            navigation.navigate('Login')
        } catch(err) {
            //Si la petición no es correcta, muestra el siguiente error
            if (err == 'CodeMismatchException: Invalid verification code provided, please try again.'){
                Alert.alert("!Oops¡ Algo salió mal.","El código de confirmación es incorrecto.")
            } else if (err == 'UserNotFoundException: Username/client id combination not found.'){
                Alert.alert("!Oops¡ Algo salió mal.","El correo electrónico no fue encontrado.")
            } else if (err == 'InvalidPasswordException: Password does not conform to policy: Password must have uppercase characters'){
                Alert.alert("!Oops¡ Algo salió mal.", "La contraseña debe de tener mayúsculas.")
            } else if (err == 'InvalidPasswordException: Password does not conform to policy: Password must have numeric characters'){
                Alert.alert("!Oops¡ Algo salió mal.", "La contraseña debe de tener números.")
            } else if (err == 'UsernameExistsException: An account with the given email already exists.'){
                Alert.alert("!Oops¡ Algo salió mal.", "El correo electónico ya está registrado.")
            } else if (err == 'InvalidPasswordException: Password does not conform to policy: Password not long enough'){
                Alert.alert("!Oops¡ Algo salió mal.", "La contraseña debe de ser de mínimo 8 carácteres.")
            } else{
                Alert.alert("!Oops¡ Algo salió mal.", "Revisa tu contraseña.")
            }
        }
    }

    return(
        <View style={styles.container}>
            <Text style={{ fontSize: 30, width: '87%', paddingTop:10 }} >Cambiar contraseña,</Text>
            <Text style={{ fontSize: 20, width: '87%', marginBottom:10  }} >Introduce tu correo y el código que te enviamos a tu correo.</Text>
            <TextInput
                style={styles.TextInput}
                placeholder="Ingresa tu correo"
                //Se coloca la constante donde se captura la entrada de texto
                onChangeText={(value) => getNewPasswordData("username", value)}
            >
            </TextInput>
            <TextInput
                style={styles.TextInput}
                placeholder="Ingresa tu código"
                //Se coloca la constante donde se captura la entrada de texto
                onChangeText={(value) => getNewPasswordData("code", value)}
            >
            </TextInput>
            <TextInput
                style={styles.TextInput}
                secureTextEntry={true} 
                placeholder="Ingresa tu nueva contraseña"
                //Se coloca la constante donde se captura la entrada de texto
                onChangeText={(value) => getNewPasswordData("password", value)}
            >
            </TextInput>
            <View style={styles.buttonPrimary}>
            <ButtonPrimary
                text='Cambiar'
                //Se coloca la función en donde se colocan los datos capturados por el state
                onPress={() => onNewPasswordPressed(state.username, state.code, state.password)}
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

export default NewPassword