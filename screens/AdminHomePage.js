import React, { useEffect, useMemo } from 'react';
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity, ActivityIndicator, useState, Alert } from 'react-native';
import { ErrorMessage } from 'formik';
import { secureGet } from '../ExternalVariables/storage';
import { ScrollView, TouchableHighlight } from 'react-native-gesture-handler';
import { Avatar, Button } from 'react-native-paper';
import { launchImageLibrary } from 'react-native-image-picker';
import axios from 'axios';
import { tokenToString } from 'typescript';
import StatsCard from '../shared/StatsCard';
import { PieChart } from "react-native-gifted-charts";


export default function AdminHomePage({ navigation }) {
    const [message, setMessage] = React.useState({});
    const [newStudentList, setNewStudentList] = React.useState();
    const [oldStudentList, setOldStudentList] = React.useState();
    const [tok, setToke] = React.useState("");

    const InsertAPIURL = "https://s-r-m-s2022.herokuapp.com/api/v1/admin/count_all_students";
    const NewStudentsAPIURL = "https://s-r-m-s2022.herokuapp.com/api/v1/admin/show_number_all_new_students"
    const OldStudentsAPIURL = "https://s-r-m-s2022.herokuapp.com/api/v1/admin/show_number_all_old_students"


    // const counter = useMemo(()=>{return tok?.length}, [tok])

    console.log("message", message);
    useEffect(() => {
        secureGet('token', setToke);
        var headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + tok
        };


        const getNoFetchStudents = async () => {
            console.log("Token1", tok);



            // console.log("I am here at the UE: ", headers);
            // console.log("InsertAPIURL: ", InsertAPIURL);

            await axios.create({ headers }).get(InsertAPIURL)
                .then((res) => {
                    console.log("response", res?.data);
                    setMessage(res?.data);
                })
                .catch((err) => {
                    console.error(err);
                });

        };

        const getNoOldStudents = async () => {
            await axios.create({ headers }).get(NewStudentsAPIURL)
                .then((res) => {
                    console.log("response", res?.data);
                    setNewStudentList(res?.data);
                })
                .catch((err) => {
                    console.error(err);
                });


        };

        const getNoNewStudents = async () => {

            await axios.create({ headers }).get(OldStudentsAPIURL)
                .then((res) => {
                    console.log("response", res?.data);
                    setOldStudentList(res?.data);
                })
                .catch((err) => {
                    console.error(err);
                });
        };

        if (tok) {
            getNoFetchStudents();
            getNoNewStudents();
            getNoOldStudents();
        };

    }
        , [tok]);



        //const barData = [{value: 15}, {value: 30}, {value: 26}, {value: 40}];
        const piechart = [{value:oldStudentList?.count,color:'#DA1313'},{value:newStudentList?.count,color:'#FAB5B6'}]


        const renderLegend = (text, color) => {
            return (
              <View style={{flexDirection: 'row', marginBottom: 12}}>
                <View
                  style={{
                    height: 18,
                    width: 18,
                    marginRight: 10,
                    borderRadius: 4,
                    backgroundColor: color || 'white',
                  }}
                />
                <Text style={{color: 'black', fontSize: 16}}>{text || ''}</Text>
              </View>
            );
          };




    return (
        <ScrollView>
        <View style={styles.container}>
            <View style={styles.body}>

                <Text style={styles.header}> Dashboard </Text>
                <StatsCard>
                    <Text style={styles.text}>These are the number of Students : {message?.count}</Text>
                </StatsCard>
                <StatsCard>
                    <Text style={styles.text}>These are the number of Old Students: {oldStudentList?.count}</Text>
                </StatsCard>
                <StatsCard>
                    <Text style={styles.text}>These are the number of New Students: {newStudentList?.count}</Text>
                </StatsCard>
            </View>

            <Text
              style={{
                color: 'black',
                fontSize: 15,
                fontWeight: 'bold',
                marginBottom: 12,
                fontStyle: 'italic',
                
              }}>
              Total No of Students.
              
            </Text>

            
            <PieChart 
            data={piechart}
            focusOnPress={true}
            />

            <View
              style={
               styles.legend
              }>
              {renderLegend('New Students', '#FAB5B6')}
              {renderLegend('Old Students', '#DA1313')}
              
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
        flex: 0.75,
        

    },
    text: {
        fontWeight: 'bold',
        fontSize: 20,
        paddingBottom: 30
    },
    header: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        paddingBottom: 40,
        color: "#1B21D0", 
    },
    legend:{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 20,
    }
})