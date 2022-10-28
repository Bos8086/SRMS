import React, { useEffect } from 'react';
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity, ActivityIndicator, useState, Alert } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { Avatar, Button } from 'react-native-paper';
import { launchImageLibrary } from 'react-native-image-picker';
import axios from 'axios';
import { secureGet } from '../ExternalVariables/storage';
import { Value } from 'react-native-reanimated';
import { BarChart } from 'react-native-gifted-charts';




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


    const createbarChart = () => {
        if (message != null) {
            const barChart = [
                { value: message[0][0][1], label: 'HIS' },
                { value: message[0][1][1], label: 'MA' },
                { value: message[0][2][1], label: 'ME' },
                // { value: message[0][3][1], label: 'history' },
                { value: message[0][4][1], label: 'CS' },
                { value: message[0][5][1], label: 'ART' },
                { value: message[0][6][1], label: 'LI' }
            ]
            return barChart
        }

    }

    if (message) {
        createbarChart();
    }


    const renderLegend = (text, color) => {
        return (
            <View style={{ flexDirection: 'row', marginBottom: 12 }}>
                <View
                    style={{
                        height: 18,
                        width: 18,
                        marginRight: 10,
                        borderRadius: 4,
                        backgroundColor: color || 'white',
                    }}
                />
                <Text style={{ color: 'black', fontSize: 16 }}>{text || ''}</Text>
            </View>
        );
    };

    



    return (
        <View style={styles.container}>
            <View style={styles.body}>
                <Text style={styles.text}>Welcome to Charts</Text>


                <Text
                    style={{
                        color: 'black',
                        fontSize: 15,
                        fontWeight: 'bold',
                        marginBottom: 12,
                    }}>
                    Total No of Students By Department

                </Text>

                <BarChart
                    barWidth={22}
                    noOfSections={3}
                    barBorderRadius={4}
                    frontColor='black'
                    data={createbarChart()}
                    yAxisThickness={0}
                    xAxisThickness={0}
                    isAnimated={true}
                />

                <View
                    style={{
                        width: '100%',
                        flexDirection: 'row',
                        justifyContent: 'space-evenly',
                        marginTop: 20,
                    }}>
                   
                </View>

                <View style={{ flexDirection: 'column', marginBottom: 12 }}>
                    <Text style={{fontWeight: 'bold', textDecorationLine: 'underline'}}>
                        Legend
                    </Text>

                    <Text  >
                        HIS : History
                        MA : MATHEMATICS
                        ME : Medicine
                        CS : Computer Science
                        ART : ARTS
                        LI : LINGUISTICS
                    </Text>
                </View>

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