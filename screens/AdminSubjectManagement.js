import React, { useEffect } from 'react';
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity, ActivityIndicator, useState, Alert, FlatList, ScrollView } from 'react-native';
import { ErrorMessage } from 'formik';
import { secureGet } from '../ExternalVariables/storage';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { Avatar, Button } from 'react-native-paper';
import { launchImageLibrary } from 'react-native-image-picker';
import axios from 'axios';
import Card from '../shared/card';
import AddDepartmentForm from './AddDepartmentForm';
import { useIsFocused } from '@react-navigation/native';
import ItemCard from '../shared/ItemCard'
import StatsCard from '../shared/statsCard';


const CountAllAPIURL = "https://s-r-m-s2022.herokuapp.com/api/v1/admin/count_all_departments";
const displayAllDepartmentsAPIURL = "https://s-r-m-s2022.herokuapp.com/api/v1/admin/display_dept";




export const countAllDepartments = async (tok, setMessage) => {

    let headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + tok
    };
    await axios.create({ headers }).get(CountAllAPIURL)
        .then((res) => {
            console.log("response", res?.data);
            setMessage(res?.data);
        })
        .catch((err) => {
            console.error(err);
        });

}


export const displayAllDepartments = async (tok, setlist) => {

    let headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + tok
    };

    await axios.create({ headers }).get(displayAllDepartmentsAPIURL)
        .then((res) => {
            console.log("response", res?.data);
            setlist(res?.data);
        })
        .catch((err) => {
            console.error(err);
        });
}


export default function AdminSubjectManagement({ navigation }) {
    const [message, setMessage] = React.useState({});
    const [tok, setToke] = React.useState("");
    const [list, setlist] = React.useState([])
    const isFocused = useIsFocused();
    secureGet('token', setToke);
    // var headers = {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json',
    //     'Authorization': 'Bearer ' + tok
    // };

    useEffect(() => {

        if (tok) {
            countAllDepartments(tok, setMessage);
        };

        if (tok) {
            displayAllDepartments(tok, setlist);
        };

        if (isFocused && tok) {
            countAllDepartments(tok, setMessage);
            displayAllDepartments(tok, setlist);
        }
    }, [tok, isFocused]);



    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.body}>
                    <Text style={styles.text}>Welcome to Subject Management</Text>
                    <Text style={styles.text}>These are the Number of departments : {message.count}</Text>
                    <Text style={styles.text}>These are The List of Departments : </Text>
                    <StatsCard>
                    <FlatList
                        keyExtractor={(item) => item.dept_id}
                        data={list}
                        renderItem={({ item }) => (
                            
                                <Text>{item.deptName}</Text>
                            
                        )}
                    />
                    </StatsCard>

                </View>
                <Text style={styles.header}>
                    Add a Department
                </Text>

                <Card>
                    < AddDepartmentForm />
                </Card>
            </ScrollView>

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
        fontSize: 20,
        paddingBottom: 30
    },
    header: {
        color: 'black',
        fontWeight: 'bold',
    },


})