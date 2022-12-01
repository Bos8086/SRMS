import { Button, StyleSheet, Text, TextInput, View, Image, TouchableOpacity, Alert, FlatList, RefreshControl } from 'react-native';
import axios from 'axios';
import React, { useEffect, useState, useCallback } from 'react';
import { secureGet, secureSave } from '../ExternalVariables/storage';
import { useIsFocused } from '@react-navigation/native';
import ItemCard from '../shared/ItemCard'



export default function ViewRegistration({ navigation }) {
    const InsertAPIURL = "https://s-r-m-s2022.herokuapp.com/api/v1/student/view_course";
    const DeleteAPIURL = "https://s-r-m-s2022.herokuapp.com/api/v1/student/delete_course";

    const [message, setMessage] = useState([]);
    const [refreshing, setRefreshing] = React.useState(false);
    const [response, setResponse] = useState();
    const [regNo, setRegNo] = useState("");
    const [tok, setToke] = useState("");
    const [columns, setcolumns] = useState([
        "Course Code", "Course Name", "Course Status", "Course Unit"
    ]);
    secureGet('token', setToke);
    secureGet('JAMBNO', setRegNo);

    const isFocused = useIsFocused();

    var headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + tok
    };

    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
    }




    const onRefresh = useCallback(() => {
        secureGet('token', setToke);
        setRefreshing(true);

        GetCourseByRegNo();

        wait(2000).then(() => setRefreshing(false));
    }, []);

    const deleteCourse = (courseId) => {
        console.log(courseId)

        const values = { jambNo: regNo, course_Id: courseId }

        const DeleteCourseByRegNo = async () => {
            await axios.create({ headers }).post(DeleteAPIURL, values)
                .then((res) => {
                    console.log("response", res?.data)
                    setResponse(res?.data);
                    console.log("response : ", response)
                    Alert.alert(res?.data?.message);
                    GetCourseByRegNo();
                })
                .catch((err) => {
                    console.error(err);
                });

        };
        if (tok && regNo) {
            DeleteCourseByRegNo();
        };
    }

    //    if(isFocused){
    //     GetCourseByRegNo();
    //    }


    useEffect(() => {
        if (isFocused) {
            console.log("I'm new from the view page!");
            GetCourseByRegNo();
        };

    }, [isFocused]);

    console.log("View registraition token", tok);
    console.log("View registraition regno", regNo);
    console.log("focus", isFocused);

    const GetCourseByRegNo = async () => {
        const values = { regNo: regNo };
        console.log("making a calllllllll");

        // console.log("Token1", tok);
        //   console.log(values);

        await axios.create({ headers }).post(InsertAPIURL, values)
            .then((res) => {
                console.log("response from view course", res?.data);
                if (res?.data == "The student has not registered for a course") {
                    setMessage('')
                    Alert.alert(res?.data)
                    // return(
                    //     <View style={styles.content}>
                    //         <Text style = {styles.text}>
                    //             Please Register for a course
                    //         </Text>
                    //     </View>
                    // );
                    return

                }
                setMessage(res?.data);
                console.log("hahahahahha")
                // if
                // (message == "The student has not registered for a course")
                // {
                //     Alert.alert(res?.data) 
                //      setMessage([])              
                // }

            })
            .catch((err) => {
                console.error(err);
            });


    };


    // if (tok && regNo) {
    //     GetCourseByRegNo();
    // };

    const deletebutton = (courseId,courseName) => {
        Alert.alert(
            "Unregister Course "+ courseName,
            "Confirm Delete Course",

            [
                {
                    text:"YES",
                    onPress:() => deleteCourse(courseId)
                },
                {
                    text:"NO",
                    onPress:() => Alert.alert("Cancelled")
                }
               
            ]
        )
    }

    const emptyComponent = () => {
        return <Text> There are no courses for this department</Text>
    }

    //deleteCourse(item.courseId)


    return (
        <View style={styles.container} r>
            <View style={styles.header}>
                <Image source={require("../assets/logo.png")} style={styles.image} />
                <Text style={styles.text}>  Welcome {regNo} </Text>
            </View>

            <View style={styles.body}>
                <Text style={styles.text}>View Selected Courses</Text>

                <View style={styles.content}>


                    {!message && (<View><Text>Please register for a course</Text></View>)}


                    <FlatList
                        keyExtractor={(item) => item.courseId}
                        data={message}
                        // ListHeaderComponent={columns}
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={() => {
                                Alert.alert(item.courseCode)

                            }
                            }>
                                <ItemCard >
                                    <View style={styles.item} >
                                        <Text> Course Name : {item.courseName} </Text>
                                        <Text> Status : {item.status} </Text>
                                        <Text> Unit : {item.unit} </Text>

                                        <TouchableOpacity onPress={() => deletebutton(item.courseId,item.courseName) }>
                                            <View style={styles.buttonDelete}>
                                                <Text style={styles.buttonText}> Delete </Text>
                                            </View>
                                        </TouchableOpacity>


                                    </View>
                                </ItemCard>
                            </TouchableOpacity>
                        )


                        }
                        refreshControl={
                            <RefreshControl
                                refreshing={refreshing}
                                onRefresh={onRefresh}
                            />
                        }
                        //ListEmptyComponent={emptyComponent}
                    />

                </View>
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
        flex: 0.1,
        alignSelf: 'flex-start'

    },
    body: {
        flex: 0.8,
        alignItems: 'center',
    },
    text: {
        fontWeight: 'bold',
        fontSize: 20,
    },
    image: {
        flexDirection: 'row',
        height: 80,
        width: 80,
        borderRadius: 48,
    },
    buttonDelete: {
        borderRadius: 8,
        paddingVertical: 1,
        paddingHorizontal: 1,

        backgroundColor: '#D8CBB5',
        borderColor: "#A29898",
        borderWidth: 1,
        width: 80
    },
    buttonText: {
        color: 'black',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 15,
    },
    item: {
        color: 'black',
        fontSize: 12,

    }
});
