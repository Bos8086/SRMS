
import { Button, StyleSheet, Text, TextInput, View, Image, TouchableOpacity, Alert, FlatList } from 'react-native';
import axios from 'axios';
import React, { useEffect } from 'react';
import { secureGet, secureSave } from '../ExternalVariables/storage';
import CourseRegistration from './CourseRegistration';


export default function AdminCourseManagement({navigation}){

   const [message,setMessage] = React.useState([]);
    const [Dept,setDept] = React.useState("");
    const [tok,setTok] = React.useState("");

    const InsertAPIURL = "https://s-r-m-s2022.herokuapp.com/api/v1/student/view_All_course";

    const values = {department_name:Dept};
    


     const searchDept = () => {
            
                secureGet('token', setTok);

                const getAllcoursesByDept = async() => {
                    console.log(values)

                    var headers = {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' +  tok
                    };
                    
                    await axios.create({headers}).post(InsertAPIURL,values)
                    .then((res)=>{
                        console.log("response" ,res?.data);
                        
                        if(res?.data=="The Department does not exist"||"The Department does not have any courses"){
                            Alert.alert(res?.data);
                            return
                        }
                        setMessage(res?.data);
                        
                        
                })
                .catch((err)=>{
                        console.error(err);
                });

                }
                if (tok){
                    getAllcoursesByDept();  
                };


            }

     

    return(
        <View style =  {styles.container}>
             <View style={styles.body}>
                <Text style={styles.text}>Welcome to Course Management</Text>
                <TextInput style={styles.TextInput}
                placeholder='Enter a department'
                onChangeText={Dept => setDept(Dept)}
                Value={Dept}
                > Enter a Department 
                </TextInput>
                <TouchableOpacity onPress={searchDept}>
                        <View style={styles.button}>
                            <Text style={styles.buttonText}> Search </Text>
                        </View>
                </TouchableOpacity>
            <View>
                <Text>These are the list of courses of the department:</Text>
                <Text style={styles.contentText}>
                {!message  && (<View><Text>Please register for a course</Text></View>)}

                <FlatList
                   keyExtractor={(item)=> item.courseId}
                    data={message}
                    renderItem ={({item}) => (
                        <Text>{item.courseCode} {item.courseName} {item.status} {item.unit} </Text>
                    )}
                />
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

    body:{
        flex:0.75
    },

    text:{
        fontWeight: 'bold',
        fontSize: 20,
        paddingBottom:30
    },
    TextInput:{
        padding:10,
        backgroundColor: '#ddd',
        borderWidth: 1,
        borderRadius: 6,
        fontSize:20,
        width: '100%',
        
    },
    button:{
        borderRadius: 8,
            paddingVertical: 1,
            paddingHorizontal: 1,
            backgroundColor: '#B8D3EA',
            borderColor: "#7C91E1",
            borderWidth: 1

    },
    buttonText:{
        color: 'black',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 20,
    }

})

