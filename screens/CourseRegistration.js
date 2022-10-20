
import { Button, StyleSheet, Text, TextInput, View, Image, TouchableOpacity, Alert, FlatList } from 'react-native';
import axios from 'axios';
import React, { useEffect, useCallback } from 'react';
import { secureGet, secureSave } from '../ExternalVariables/storage';
import FlatButton from '../shared/button';
import Card from '../shared/card';
import { ScrollView } from 'react-native-gesture-handler';





export default function CourseRegistration({navigation}){
    const [message, setMessage]  = React.useState([]);
    const [response, setResponse] = React.useState([]);
    const [tok, setToke ]= React.useState("");
    const [Depts,setDepts] = React.useState("");
    const [regNo,setRegNo] = React.useState("");
    const [courses, setcourses]  = React.useState([]);
    const InsertAPIURL = "https://s-r-m-s2022.herokuapp.com/api/v1/student/view_All_course";
    const RegisterAPIURL = "https://s-r-m-s2022.herokuapp.com/api/v1/student/register_course";
    secureGet('token', setToke);
    secureGet('JAMBNO', setRegNo);
    console.log('regNO : ',regNo)


const Addcourse = useCallback((courseId) => {
    
    console.log("current course selected",courseId);
    console.log("current course after setcourses: " , courses);
       
    
        
        const body = {jambNo : regNo, courses:[courseId]};
        console.log(body);

        
        const getRegisterCourses = async() => {

            var headers = {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' +  tok
              };

            await axios.create({headers}).post(RegisterAPIURL,body)
            .then((res)=>{
                    console.log("response1" ,res?.data);
                    setResponse(res?.data);
                    console.log("response123" , res?.data[0]?.resp_msg);
                    Alert.alert("Title", res?.data[0]?.resp_msg);
                    
                    
            })
            .catch((err)=>{
                    console.error(err);
            });

        };
            if (tok && regNo){
                getRegisterCourses();
            };

       

        //console.log(Alert.alert("Course has been Added"));
        
    },[regNo, courses])
    // ,[tok,regNo]);





    useEffect(  ()=> {

        secureGet('token', setToke);
        secureGet('Dept',setDepts)
        
        
        const getNoFetchCourses = async() => {
            console.log("Token1", tok);
            console.log("Department",Depts)
            
            var headers = {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' +  tok
              };
              const Dept_new = Depts.toUpperCase()
              const values = {department_name : Dept_new};
              console.log(values);
              
 
            
            await axios.create({headers}).post(InsertAPIURL,values)
            .then((res)=>{
                    console.log("response" ,res?.data);
                    setMessage(res?.data);
                    console.log(message)
                    if(message=="The Department does not exist" || message=="The Department does not have any courses"){
                        Alert.alert(message)
                        setMessage([])
                    }
                    
            })
            .catch((err)=>{
                    console.error(err);
            });
    
            };
    
            if (tok && Depts){
                getNoFetchCourses();
            };
       
        }
    ,[tok,Depts,regNo]);
    
    useEffect(()=>{console.log("Courses: ",courses)}, [courses])

    return(
        <View style =  {styles.container}r>
            <View style={styles.header}>
            <Image source={ require("../assets/logo.png")} style={styles.image}/>
                <Text>  Welome Boma </Text> 
            </View>


            <View style={styles.body}>
                <Text style={styles.text}>Welcome to CourseRegistration</Text> 
            </View>

            
            <View style={styles.content}>

            <ScrollView>
            <Card>
                <FlatList 
                    keyExtractor={(item)=> item.courseId}
                    data={message}
                    renderItem ={({item}) => (
                        <Text style={styles.item}>{item.courseCode} {item.courseName} {item.status} {item.unit}
                            <TouchableOpacity onPress={() => {
                                setcourses([item.courseId])
                                Addcourse(item.courseId)}}>
                                <View style={styles.buttonAdd}>
                                    <Text style={styles.buttonText}> Add </Text>
                                </View> 
                            </TouchableOpacity> 
                        </Text>
                        
                    )
                }
                />
                </Card>
                </ScrollView>
               
                {/* <Text style={styles.contentText}>{message.map (item=> 
 (              
                 <Text>{item.courseCode} {item.courseName} {item.status} {item.unit} 
                    <TouchableOpacity onPress={Addcourse}>
                        <View style={styles.buttonAdd}>
                            <Text style={styles.buttonText}> Add </Text>
                        </View>
                    </TouchableOpacity> 
                    <TouchableOpacity>
                        <View style={styles.buttonDelete}>
                            <Text style={styles.buttonText}> Delete </Text>
                        </View>
                    </TouchableOpacity> 
                </Text>
                                   
            ))}</Text> */}
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
    
        header:{
            padding:40,
            flex:0.2,
            alignSelf:'flex-start'
    
        },
        body:{
            flex:0.1,
            alignItems: 'center',
        },
        text:{
            fontWeight: 'bold',
            fontSize: 20,
        },
        image:{
            flexDirection: 'row',
            height:80,
            width:80,
            borderRadius: 48, 
        },
        content:{
            flex:0.8,
        },
        buttonAdd:{
            borderRadius: 8,
            paddingVertical: 1,
            paddingHorizontal: 1,
            backgroundColor: '#B8D3EA',
            borderColor: "#7C91E1",
            borderWidth: 1
        },
        buttonDelete:{
            borderRadius: 8,
            paddingVertical: 1,
            paddingHorizontal: 1,

            backgroundColor: '#D8CBB5',
            borderColor: "#A29898",
            borderWidth: 1
        },
        buttonText:{
            color: 'black',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            fontSize: 20,
        },
        item:{
            color:'black',
            fontSize:12,
            alignSelf:'flex-end',
            justifyContent: 'flex-end',
            // padding:30,
            // marginHorizontal:10,
            // marginTop : 10
        }
    });
    