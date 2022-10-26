import React, { useEffect } from 'react';
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity, ActivityIndicator, useState, Alert } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { Avatar, Button } from 'react-native-paper';
import { launchImageLibrary } from 'react-native-image-picker';
import axios from 'axios';
import { secureGet } from '../ExternalVariables/storage';




export default function AdminCharts({ navigation }) {
    const [message, setMessage] = React.useState();
    const [tok, setToke] = React.useState("");
    secureGet('token', setToke);
    const displayAllCountByDepartmentsAPIURL = "https://s-r-m-s2022.herokuapp.com/api/v1/admin/count_all_students_by_departments";


    var headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + tok
    };




    useEffect(() => {


        const countStudents = async () => {
            await axios.create({ headers }).get(displayAllCountByDepartmentsAPIURL)
                .then((res) => {
                    setMessage(res?.data);
                    console.log(res?.data);
                })
                .catch((err) => {
                    console.error(err);
                });


        }

        if (tok) {
            countStudents();
        };

    },
        [tok])




    return (
        <View style={styles.container}>
            <View style={styles.body}>
                <Text style={styles.text}>Welcome to Charts</Text>

                

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    body: {
        flex: 0.75
    },
    text: {
        fontWeight: 'bold',
        fontSize: 20,
        paddingBottom: 30
    },
})