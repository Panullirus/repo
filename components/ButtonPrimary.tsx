import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

export function ButtonPrimary(props){

    const { onPress, text } = props

    return (
        <TouchableOpacity
        onPress={ onPress }
        >
            <Text style={{color:'white', marginTop:4, alignSelf:'center'}}>
                {text}
            </Text>
        </TouchableOpacity>
    );
}

const style = StyleSheet.create({

})