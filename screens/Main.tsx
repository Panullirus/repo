import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { API, graphqlOperation } from "aws-amplify";
import { getAlumno, listAlumnos } from "../src/graphql/queries";
import { createAlumno } from "../src/graphql/mutations";
import { CreateAlumnoInput } from "../src/API";

const Home = ({navigation}) => {

    const [alumnos, setAlumnos] = useState([]);

    useEffect(() => {
        const fetchAlumnos = async () => {
            try{
                const result = await API.graphql(graphqlOperation(getAlumno, { id: "1" }));
                console.log(result)
                setAlumnos(result.data.listAlumnos.items);
            }catch(e){
                console.log(e)
            }
        }
        fetchAlumnos();
    }, []);

    return(
        <View style={styles.container}>
            {
                alumnos.map((alumno, index) => {
                    return(
                        <Text key={index}>{alumno.nombre}</Text>
                    )
                })
            }
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
    button: {
        backgroundColor: '#00a680',
        padding: 10,
        margin: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff'
    }
});

export default Home