import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

export function ButtonSecondary(props){

    const { onPress, text } = props

    return (
        <TouchableOpacity
        onPress={ onPress }
        >
            <Text style={{color:'black', marginTop:4, alignSelf:'center'}}>
                {text}
            </Text>
        </TouchableOpacity>
    );
}

const style = StyleSheet.create({

})