
import { Button, StyleSheet, Text, TextInput, View, Image, TouchableOpacity, Alert, FlatList } from 'react-native';
import axios from 'axios';
import React, { useEffect } from 'react';
import { secureGet, secureSave } from '../ExternalVariables/storage';
import CourseRegistration from './CourseRegistration';
import Card from '../shared/card';
import ItemCard from '../shared/ItemCard';
import StatsCard from '../shared/StatsCard';
import AddCourseForm from './AddCourseForm'
import { ScrollView } from 'react-native-gesture-handler';
import {BASE_URL} from '../shared/constants';


export default function AdminCourseManagement({ navigation }) {

    const [message, setMessage] = React.useState([]);
    const [dept, setDept] = React.useState("");
    const [tok, setTok] = React.useState("");

   



    const values = { department_name: dept };


    const InsertAPIURL = `${BASE_URL}/student/view_All_course?department_name=${dept}`
    console.log(InsertAPIURL);
    const searchDept = () => {
        // if(checkValues){
        //     return;
        // }

        secureGet('token', setTok);

        const getAllcoursesByDept = async () => {
            if (dept == '') {
                Alert.alert("Please Enter A Department")
                return
            }



            ;

            console.log(values)

            var headers = {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + tok
            };





            await axios.create({ headers }).get(InsertAPIURL)
                .then((res) => {
                    console.log("response", res?.data);
                    setMessage(res?.data);

                    if (res?.data == "The Department does not exist" || res?.data == "The Department does not have any courses") {
                        Alert.alert(res?.data);
                        return
                    } else {

                    }



                })
                .catch((err) => {
                    console.error(err);
                });

        }
        if (tok) {
            getAllcoursesByDept();
        };



    }

    const emptyComponent = () => {
        return <Text> There are no courses for this department</Text>
    }


    return (
        <View testID='container' style={styles.container}>
            <View testID='body' style={styles.body}>
                <ScrollView>
                    <Text testID='text' style={styles.text}>Welcome to Course Management</Text>
                    <TextInput testID='TextInput' style={styles.TextInput}
                        placeholder='Enter a department'
                        onChangeText={(dept) => setDept(dept)}
                        Value={dept}



                    > Enter a Department
                    </TextInput>
                    <TouchableOpacity onPress={searchDept}>
                        <View testID='button' style={styles.button}>
                            <Text testID='buttonText' style={styles.buttonText}> Search </Text>
                        </View>
                    </TouchableOpacity>

                    <View>

                        <Text testID='intro' style={styles.intro}>These are the list of courses of the department:</Text>
                        <Text testID='contentText' style={styles.contentText}>
                            <StatsCard style = {styles.displayCard}>
                                <FlatList

                                    keyExtractor={(item) => item.courseId}
                                    data={message}
                                    renderItem={({ item }) => (

                                        <Text>{item.courseCode} {item.courseName} {item.status} {item.unit} </Text>

                                    )}
                                    ListEmptyComponent={emptyComponent}
                                />
                            </StatsCard>
                        </Text>
                    </View>
                    <Text testID='header' style={styles.header}>
                        ADD A COURSE
                    </Text>

                    <Card >
                        <AddCourseForm />
                    </Card>

                </ScrollView>
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
        borderWidth: 1

    },
    buttonText: {
        color: 'black',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 20,
    },
    header: {
        color: 'black',
        fontWeight: 'bold',
    },
    displayCard:{
        paddingVertical:20
        
    }

})

