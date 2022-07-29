import React, { useEffect } from "react";
import { View, Text, TextInput, StyleSheet } from 'react-native'
import { ButtonPrimary } from "../components/ButtonPrimary";
import { ButtonSecondary } from "../components/ButtonSecondary";

//Menú principal
const Home = ({navigation}) => {
    return(
        <View style={styles.container}>
            <Text style={{ fontSize: 30, width: '87%'}}>
                Bienvenido,
            </Text>
            <Text style={{ fontSize: 20, width: '87%'}}>
                Escoge una de las opciones.
            </Text>
            <View style={styles.buttonPrimary}>
                <ButtonPrimary
                text='Iniciar sesión'
                onPress={()=> navigation.navigate('Main')}
                />
            </View>
            <View style={styles.buttonSecondary}>
                <ButtonSecondary
                text='Registrarse'
                onPress={() => navigation.navigate('Registrarse')}
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
        paddingBottom:20,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    TextInput: {
        padding: 10,
        paddingStart: 30,
        width: '87%',
        height: 50,
        borderColor: '#dbdbdb',
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: '#fff',
    },
    buttonPrimary: {
        padding: 10,
        width: '87%',
        height: 50,
        marginTop: 25,
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

export default Home