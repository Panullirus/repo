import React, { useEffect, useState } from "react";
import { View, Text, TextInput, StyleSheet } from 'react-native'
import { API, graphqlOperation, Auth } from "aws-amplify";
import { listAlumnos } from "../src/graphql/queries";
import { createAlumno } from "../src/graphql/mutations";

const Home = ({navigation}) => {

    const [alumnos, setAlumnos] = useState([]);

    useEffect(() => {
        const fetchAlumnos = async () => {
            try{
                const result = await API.graphql(graphqlOperation(listAlumnos));
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
});

export default Home