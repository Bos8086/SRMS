import { Button, StyleSheet, Text, TextInput, View, Image, TouchableOpacity, Alert, FlatList,RefreshControl } from 'react-native';
import axios from 'axios';
import React, { useEffect, useState, useCallback } from 'react';
import { secureGet, secureSave } from '../ExternalVariables/storage';
import { useIsFocused } from '@react-navigation/native';



export default function ViewRegistration({navigation}) {
    const InsertAPIURL = "https://s-r-m-s2022.herokuapp.com/api/v1/student/view_course";
    const DeleteAPIURL = "https://s-r-m-s2022.herokuapp.com/api/v1/student/delete_course";

    const [message, setMessage] = useState([]);
    const [refreshing, setRefreshing] = React.useState(false);
    const [response, setResponse] = useState();
    const [regNo, setRegNo] = useState("");
    const [tok, setToke] = useState("");
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

      useEffect(()=> {
        if (isFocused){
        console.log("Hello view!!!");

        }
      }, [isFocused])


const onRefresh = useCallback(() => {
    secureGet('token', setToke);
    setRefreshing(true);
    
    GetCourseByRegNo();

    wait(2000).then(() => setRefreshing(false));
},[]);

    const deleteCourse = (courseId) => {
        console.log(courseId)

        const values = { jambNo: regNo, course_Id: courseId }

        const DeleteCourseByRegNo = async () => {
            await axios.create({ headers }).post(DeleteAPIURL, values)
                .then((res) => {
                    console.log("response", res?.data)
                    setResponse(res?.data);
                    console.log("response : ",response.message)                    
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

   


    useEffect(() => {
        if (tok && regNo && isFocused) {
            console.log("I'm new from the view page!");
            GetCourseByRegNo();
        };

    }, [isFocused]);

    const GetCourseByRegNo = async () => {
        const values = { regNo: regNo };
        
        // console.log("Token1", tok);
        //   console.log(values);

        await axios.create({ headers }).post(InsertAPIURL, values)
            .then((res) => {
                console.log("response from view course", res?.data);
                if (res?.data == "The student has not registered for a course"){
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


    return (
        <View style={styles.container} r>
            <View style={styles.header}>
                <Image source={require("../assets/logo.png")} style={styles.image} />
                <Text style ={styles.text}>  Welcome {regNo} </Text>
            </View>

            <View style={styles.body}>
                <Text style={styles.text}>View Selected Courses</Text>
                <View style={styles.content}>


                {!message  && (<View><Text>Please register for a course</Text></View>)}

                    <FlatList
                        keyExtractor={(item) => item.courseId}
                        data={message}
                        renderItem={({ item }) => (
                            
                            <Text style={styles.item}>{item.courseCode} {item.courseName} {item.status} {item.unit}
                                <TouchableOpacity onPress={() => deleteCourse(item.courseId)}>
                                    <View style={styles.buttonDelete}>
                                        <Text style={styles.buttonText}> Delete </Text>
                                    </View>
                                </TouchableOpacity>
                            </Text>

                        )
                        }
                        refreshControl={
                            <RefreshControl
                              refreshing={refreshing}
                              onRefresh={onRefresh}
                            />
                        }
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
        borderWidth: 1
    },
    buttonText: {
        color: 'black',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 20,
    },
    item: {
        color: 'black',
        fontSize: 12,
        alignSelf: 'flex-end',
        justifyContent: 'flex-end',

    }
});
