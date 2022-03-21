import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from 'react-native'
import { ButtonPrimary } from "../components/ButtonPrimary";
import { ButtonSecondary } from "../components/ButtonSecondary";
const Home = ({navigation}) => {
    return(
        <View style={styles.container}>
            <Text>
                Bienvenido
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    textTitle: {
        fontSize: 500
    },
    container: {
        flex: 1,
        backgroundColor: '#f7f7f7',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Home