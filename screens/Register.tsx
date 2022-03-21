import React, { useState } from "react";
import { View, Alert, Text, TextInput, StyleSheet, ActivityIndicator } from 'react-native'
import { Auth } from 'aws-amplify'
import { ButtonPrimary } from "../components/ButtonPrimary";
import { ButtonSecondary } from "../components/ButtonSecondary";

//Agregamos navigation para la navegación entre componentes
const Register = ({ navigation }) => {

    //Iniciamos el state y el setState
    const [state, setState] = useState({
        //Creamos el campo del usuario para recibir el correo y nombre completo y contraseña
        username: '',
        name: '',
        password: '',
    })

    //Creamos la constante el cual obtendrá los datos de los TextInput
    const getSignUpData = (email: any, value: any) => {
        setState({ ...state, [email]: value })
    }

    //Se crea la función para registrarse la cual espera 
    async function signUp(
        username: string,
        name: string,
        contrasena: string): Promise<void> {

        //Se colocan condicionales para validar la entrada de texto
        if (!name || name.length === 0) {
            Alert.alert("!Oops¡ Algo salió mal.", "El nombre completo es requerido.")
            return
        }

        if (!username || username.length === 0) {
            Alert.alert("!Oops¡ Algo salió mal.", "El correo electrónico es requerido.")
            return
        }

        if (!contrasena || contrasena.length === 0) {
            Alert.alert("!Oops¡ Algo salió mal.", "La contraseña es requerida.")
            return
        }

        try {
            //Se hace la petición con los datos esperados
            await Auth.signUp({
                username: username,
                password: contrasena,
                attributes: {
                    name: name
                }
            })
            //Si la petición es correcta, redirige para confirmar el código de confirmación
            navigation.navigate('Confirmación')
        } catch (err) {
            console.log(err)
            if(err == 'InvalidPasswordException: Password did not conform with policy: Password not long enough'){
                Alert.alert("!Oops¡ Algo salió mal.", "La contraseña debe de ser de mínimo 8 carácteres.")
            } else if (err == 'InvalidPasswordException: Password did not conform with policy: Password must have uppercase characters'){
                Alert.alert("!Oops¡ Algo salió mal.", "La contraseña debe de tener mayúsculas.")
            } else if (err == 'InvalidPasswordException: Password did not conform with policy: Password must have numeric characters'){
                Alert.alert("!Oops¡ Algo salió mal.", "La contraseña debe de tener números.")
            } else if (err == 'UsernameExistsException: An account with the given email already exists.'){
                Alert.alert("!Oops¡ Algo salió mal.", "El correo electónico ya está registrado.")
            } else{
                Alert.alert("!Oops¡ Algo salió mal.", "Revisa tu contraseña.")
            }
        }
    }

    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 30, width: '87%' }} >Registrarse</Text>
            <Text style={{ fontSize: 20, width: '87%' }} >Ingresa tus datos para poder registrarte</Text>
            <TextInput style={styles.TextInput} placeholder="Nombre completo" onChangeText={(value) => getSignUpData("name", value)}></TextInput>
            <TextInput style={styles.TextInput} placeholder="Correo electrónico" onChangeText={(value) => getSignUpData("username", value)}></TextInput>
            <TextInput style={styles.TextInput} secureTextEntry={true} placeholder="Contraseña" onChangeText={(value) => getSignUpData("password", value)}></TextInput>
            <View style={styles.buttonPrimary}>
                <ButtonPrimary
                    text='Crear cuenta'
                    //La funciones se coloca con los datos capturados por el state
                    onPress={() => signUp(state.username, state.name, state.password)}
                />
            </View>
            <View style={styles.buttonSecondary}>
                <ButtonSecondary
                    text='Ir al inicio'
                    onPress={() => navigation.navigate('Home')}
                />
            </View>
        </View>
    )
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
});

export default Register