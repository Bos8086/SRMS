import React, { useEffect } from 'react';
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity, ActivityIndicator, useState, Alert } from 'react-native';
import { ScrollView, TouchableHighlight } from 'react-native-gesture-handler';
import { Avatar, Button } from 'react-native-paper';
import { launchImageLibrary } from 'react-native-image-picker';
import axios from 'axios';
import { secureGet } from '../ExternalVariables/storage';
import { Value } from 'react-native-reanimated';
import { BarChart } from 'react-native-gifted-charts';




export default function AdminCharts({ navigation }) {
    const [message, setMessage] = React.useState();
    const [message_list, setMessage_list] = React.useState();
    const [tok, setToke] = React.useState("");
    const [dept, setDept] = React.useState("");
    secureGet('token', setToke);
    const displayAllCountByDepartmentsAPIURL = "https://s-r-m-s2022.herokuapp.com/api/v1/admin/count_all_students_by_departments";
    const displayAllCountGroupByLevelByDepartmentsAPIURL = "https://s-r-m-s2022.herokuapp.com/api/v1/admin/show_count_all_level_by_department";


    var headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + tok
    };

    const values = { deptName: dept };


    const countStudentsByLevel = async () => {
        if (dept == '') {
            Alert.alert("Please Enter A Department")
            return
        }



        await axios.create({ headers }).post(displayAllCountGroupByLevelByDepartmentsAPIURL, values)
            .then((res) => {
                setMessage_list(res?.data);
                console.log(res?.data);
            })
            .catch((err) => {
                console.error(err);
            });
    }


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
            console.log("message length",message[0][0][0].length);
            console.log("message contains",message);
           
            const array = [];

            for (let i = 0; i < message[0][0][0].length; i++) {
                let index = 0;
                array.push({ value: message[0][i][index+1], label: message[0][i][index] })
            }

            const barChart = array;
            console.log("this is barchart",barChart);

            return barChart



            
        }

    }



    const createBarChartForLevels = () => {
        if (message_list != null) {
            if (message_list.list != null) {
                // console.log("This is what is in the List ", message_list.list[0][0]);
                const array = [];
                console.log("message_list length ",message_list.list.length);


                for (let i = 0; i < message_list.list.length; i++) {
                    let index = 0;
                    array.push({ value: message_list.list[i][index+1], label: message_list.list[i][index] })

                }
                const barChart = array;

                return barChart
            }
        }
    }

    if (message) {
        createbarChart();
    }

    if (message_list) {
        createBarChartForLevels()
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
        <ScrollView>
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
                        barWidth={30}
                        noOfSections={3}
                        barBorderRadius={4}
                        frontColor={'#9DD6DC'}
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
                        <Text style={{ fontWeight: 'bold', textDecorationLine: 'underline' }}>
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

                    <View>
                        <Text style={styles.intro} >
                            Enter the Department you want to view the number of student by level
                        </Text>

                        <TextInput style={styles.TextInput}
                            placeholder='Enter a department'
                            onChangeText={(dept) => setDept(dept)}
                            Value={dept}
                        >
                            Enter a Department
                        </TextInput>

                        <TouchableOpacity onPress={countStudentsByLevel}>
                            <View style={styles.button}>
                                <Text style={styles.buttonText}> Search </Text>
                            </View>
                        </TouchableOpacity>


                        <Text
                            style={{
                                color: 'black',
                                fontSize: 15,
                                fontWeight: 'bold',
                                marginBottom: 12,
                            }}>
                            Total No of Students By  grouped by Levels

                        </Text>

                        <BarChart
                            barWidth={30}
                            noOfSections={4}
                            barBorderRadius={4}
                            frontColor={'#E66464'}
                            data={createBarChartForLevels()}
                            yAxisThickness={2}
                            xAxisThickness={2}
                            isAnimated={true}

                        />



                    </View>

                </View>
            </View>
        </ScrollView>
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
    intro: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    TextInput: {
        padding: 10,
        backgroundColor: '#ddd',
        borderWidth: 1,
        borderRadius: 6,
        fontSize: 20,
        width: '100%',

    },
    button: {
        borderRadius: 8,
        paddingVertical: 1,
        paddingHorizontal: 1,
        backgroundColor: '#B8D3EA',
        borderColor: "#7C91E1",
        borderWidth: 1,
        width: 60

    },

})