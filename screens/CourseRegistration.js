
import { Button, StyleSheet, Text, TextInput, View, Image, TouchableOpacity, Alert, FlatList, Modal } from 'react-native';
import axios from 'axios';
import React, { useEffect, useCallback } from 'react';
import { secureGet, secureSave } from '../ExternalVariables/storage';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import FlatButton from '../shared/button';
import Card from '../shared/card';
import ItemCard from '../shared/ItemCard'
import { ScrollView } from 'react-native-gesture-handler';
import {BASE_URL} from '../shared/constants';





export default function CourseRegistration({ navigation }) {
    const [message, setMessage] = React.useState([]);
    const [response, setResponse] = React.useState([]);
    const [tok, setToke] = React.useState("");
    const [Depts, setDepts] = React.useState("");
    const [regNo, setRegNo] = React.useState("");
    const [courses, setcourses] = React.useState([]);
    const [modalVisible, setVisible] = React.useState(false);
    const Dept_new = Depts.toUpperCase()
    const values = { department_name: Dept_new };

    const InsertAPIURL = `${BASE_URL}/student/view_All_course?department_name=${Dept_new}`
    const RegisterAPIURL = `${BASE_URL}/student/register_course`;
    secureGet('token', setToke);
    secureGet('JAMBNO', setRegNo);
    console.log('regNO : ', regNo)



    const Addcourse = useCallback((courseId) => {

        console.log("current course selected", courseId);
        console.log("current course after setcourses: ", courses);



        const body = { jambNo: regNo, courses: [courseId] };
        console.log(body);


        const getRegisterCourses = async () => {

            var headers = {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + tok
            };

            await axios.create({ headers }).post(RegisterAPIURL, body)
                .then((res) => {
                    console.log("response1", res?.data);
                    setResponse(res?.data);
                    console.log("response123", res?.data[0]?.resp_msg);
                    Alert.alert("Notification", res?.data[0]?.resp_msg);


                })
                .catch((err) => {
                    console.error(err.response.data);
                });

        };
        if (tok && regNo) {
            getRegisterCourses();
        };



        //console.log(Alert.alert("Course has been Added"));

    }, [regNo, courses])
    // ,[tok,regNo]);





    useEffect(() => {

        secureGet('token', setToke);
        secureGet('Dept', setDepts)


        const getNoFetchCourses = async () => {
            console.log("Token1", tok);
            console.log("Department", Dept_new)

            var headers = {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + tok
            };
           
            console.log(values);



            await axios.create({ headers }).get(InsertAPIURL)
                .then((res) => {
                    console.log("I am here")
                    console.log("response", res?.data);
                    setMessage(res?.data);
                    console.log(message)
                    if (message == "The Department does not exist" || message == "The Department does not have any courses") {
                        Alert.alert(message)
                        setMessage([])
                    }

                })
                .catch((err) => {
                    console.error(err);
                });

        };

        if (tok && Depts) {
            getNoFetchCourses();
        };

    }
        , [tok, Depts, regNo]);

    useEffect(() => { console.log("Courses: ", courses) }, [courses])


    const tableHeader = ['Course Code', 'Course Name', 'Status', 'Units', '']
    const data = [
        ['1', 'qweqw', 'r', '2']
    ]

    const headerComponent = () => {
        return <Text testID='listHeaderItem' style={styles.listHeaderItem}>Courses</Text>
    }

    const itemSeparator = () => {
        return <View style={styles.separator} />
    }

    const emptyComponent = () => {
        return <Text> There are no courses for this department</Text>
    }

    const addButton = (courseName, courseId) => {
        Alert.alert(
            " Add Course " + courseName,
            "Confirm Add Course",
            [{
                text: "YES",
                onPress: () => {
                    setcourses([courseId])
                    Addcourse(courseId)
                }
            },
            {
                text: "NO",
                onPress: () => Alert.alert("Cancelled")

            }
            ]
        )
    }

    const toggleModal = () => {
        setVisible(!modalVisible);
    };



    return (

        <View testID='container' style={styles.container} r>
            <View testID='header' style={styles.header}>
                <Image testID='image' source={require("../assets/logo.png")} style={styles.image} />
                <Text>  Welome {regNo} </Text>
            </View>


            <View testID='body' style={styles.body}>
                <Text testID='text' style={styles.text}>Welcome to CourseRegistration</Text>
                <Text testID='info' style={styles.info}>Click on a course to find out more </Text>
            </View>


            <View testID='content' style={styles.content}>


                <FlatList
                   
                    
                    ListHeaderComponentStyle={styles.listHeader}
                    testID='listHeader'
                    ListHeaderComponent={headerComponent}
                    keyExtractor={(item) => item.courseId}
                    data={message}
                    renderItem={({ item }) => (


                        <TouchableOpacity onPress={() => {

                            toggleModal();
                            console.log("This is current state of  Modal : ", modalVisible);
                         
                            Alert.alert("Description : ", item.courseDesc);
                            //Alert.alert(item.courseCode);
                            <View>
                                <Modal
                                    visible={modalVisible}
                                    animationType={"fade"}
                                    transparent={false}
                                >
                                    <View testID='modal' style={styles.modal}>
                                        <Text>
                                            {item.courseDesc}
                                        </Text>
                                    </View>

                                </Modal>
                            </View>

                        }
                        }>
                            <ItemCard >
                                <View>
                                    <Text testID='item' style={styles.item}> Course Name : {item.courseName} </Text>
                                    <Text style={styles.item}> Status : {item.status} </Text>
                                    <Text style={styles.item}> Units : {item.unit} </Text>
                                    <TouchableOpacity onPress={() => {
                                        addButton(item.courseName, item.courseId)
                                    }}>
                                        <View testID='buttonAdd' style={styles.buttonAdd}>
                                            <Text testID='buttonText' style={styles.buttonText}> Add </Text>
                                        </View>
                                    </TouchableOpacity>


                                </View>
                            </ItemCard>
                        </TouchableOpacity>
                    )
                    }
                    ListEmptyComponent={emptyComponent}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                //ItemSeparatorComponent={itemSeparator}

                />






            </View>


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FAE2E2',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    header: {
        padding: 40,
        flex: 0.2,
        alignSelf: 'flex-start'

    },
    listHeader: {
        height: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    listHeaderItem: {
        fontSize: 21,
        fontWeight: 'bold',
    },

    body: {
        flex: 0.1,
        alignItems: 'center',
    },
    text: {
        fontWeight: 'bold',
        fontSize: 20,
    },
    info: {
        fontSize: 15,
        fontWeight: 'bold'
    },
    image: {
        flexDirection: 'row',
        height: 80,
        width: 80,
        borderRadius: 48,
    },
    content: {
        flex: 0.8,
    },
    buttonAdd: {
        borderRadius: 8,
        paddingVertical: 1,
        paddingHorizontal: 1,
        backgroundColor: '#B8D3EA',
        borderColor: "#7C91E1",
        borderWidth: 1,
        width: 50
    },
    buttonDelete: {
        borderRadius: 8,
        paddingVertical: 1,
        paddingHorizontal: 1,

        backgroundColor: '#D8CBB5',
        borderColor: "#A29898",
        borderWidth: 1
    },
    buttonText: {
        color: 'black',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 15,
    },


    item: {
        color: 'black',
        fontSize: 18,
        paddingVertical: 3,
        flexDirection: 'column',
        

    },
    separator: {
        height: 1,
        width: '100%',
        backgroundColor: '#CCC',
    },
    modal: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#00BCD4",
        height: 300,
        width: '80%',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff',
        marginTop: 80,
        marginLeft: 40,

    },

});

