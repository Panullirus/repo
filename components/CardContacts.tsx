import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'

export default function CardContacts(props) {

    const { onPress, text, image, key } = props

    return (
        <View style={styles.card}>
            <TouchableOpacity style={styles.rowsContainer} onPress={onPress} key={key}>
                <Image
                    style={styles.imageCard}
                    source={{
                        uri: `${image}`,
                    }}
                />
                <Text>
                    {text}
                </Text>
            </TouchableOpacity>
        </View>
    );

}

const styles = StyleSheet.create({
    card: {
        width: '50%',
        backgroundColor: '#fff',
        padding: 10,
        margin: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#dbdbdb',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 5
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,
        elevation: 11,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageCard: {
        height: 50,
        width: 50,
        marginRight: 50,
        borderRadius: 20
    },
    rowsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
})