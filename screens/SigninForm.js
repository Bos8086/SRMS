import React, { useState } from 'react';
import { StyleSheet, Button , TextInput , View , Text, TouchableWithoutFeedback, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Formik } from 'formik';
import FlatButton from '../shared/button';
import * as yup from 'yup';
import { secureGet, secureSave } from '../ExternalVariables/storage'
import {BASE_URL} from '../shared/constants';
import  Spinner  from "react-native-loading-spinner-overlay";
 

// import { useNavigation } from '@react-navigation/native';

// const token = '';

const reviewSchema = yup.object({
    
    jambNo: yup.string()
            .required('No/Username provided')
            .min(4),
    password: yup.string()
            .required('No password provided') 
            .min(8,'Password is too short- Should be 8 chars minimum')
})

export default function SigninForm({navigationValue}){
    
    const [tok, setToke ]= useState("");
    const [regNo,setRegNo] = useState("");
    const [Depts,setDept] = useState("");
    const [levels,setLevel] = useState("");
    
    const Home = () => {
      navigationValue.navigate('ForgotPassword')
    }

    const [signinValues,setSigninValues] = useState([])
    const getSigninDetails = (signinValues) => {<List />}
 
    return(         
        <View style>
            <Formik 
            initialValues = {{ jambNo:'',password:''}}
            validationSchema={reviewSchema}
            onSubmit = {(values) => {
                try {
                    console.log(values, 'values');
                    var InsertAPIURL = `${BASE_URL}/student/login`;
                    //var InsertAPIURL = "https://s-r-m-s2022.herokuapp.com/api/v1/student/login"
                    var headers = {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        
                      };

                      fetch(InsertAPIURL,{
                        method:'POST',
                        headers:headers,
                        body: JSON.stringify(values), //convert data to JSON
                    })
                
                    .then((response)=>{
                        const d = response.json();
                        console.log(d, "here");
                        return d;
                    }) //check response type of API (CHECK OUTPUT OF DATA IS IN JSON)
                    .then(async (response)=>{
                        const { message } = response;
                        console.log(response);
                       const token = response.token;
                       const number = response.jambNo;
                       const dept = response.department;
                       const level = response.level;


                       console.log("hello", token);

                       

                        if (message == "Login Successful") {
                            secureSave('token' , token);
                            secureSave('JAMBNO',number);
                            secureSave('Dept',dept);
                            secureSave('Level',level);                           
                            console.log("true")  ;
                           
                              
                                   
                            navigationValue.navigate('HomePage');
                            
                           
                          }

                          secureGet('token', setToke);
                          secureGet('JAMBNO',setRegNo);
                          secureGet('Dept',setDept);
                          secureGet('Level',setLevel);
                         
                         

                        console.log("hello2", tok);
                        console.log("hello3",regNo);
                        console.log("hello4",Depts);
                        console.log("hello5",levels);
                        
                      alert(message);       // If data is in JSON => Display alert msg
                     
                      //alert(response[0].Message);       // If data is in JSON => Display alert msg
                      //navigationValue.navigate('HomePage'); //Navigate to next screen if authentications are valid
                    }).catch(e=> console.log(e, "error"))
                    
                    }

                    catch(error){
                        console.log(error);
                        alert("Error Occured" + ErrorMessage);
                        
                    }
                  }
                    
                //console.log(values)
                //navigationValue.navigate('Signin')
            }  
            >
              {(formikprops) => (
                <View  >     
                    <Text testID='text' style={styles.text}>Login</Text>
                    <TextInput
                    testID='input'
                        style = {styles.input}
                        placeholder='Username'
                        onChangeText={formikprops.handleChange('jambNo')}
                        value={formikprops.values.jambNo}
                    />
                    <Text style = {styles.error}>{formikprops.errors.jambNo}</Text>
                    <TextInput
                        secureTextEntry = {true}
                        style = {styles.input}
                        placeholder='Password'
                        onChangeText={formikprops.handleChange('password')}
                        value={formikprops.values.password}
                
                    
                    /> 
                     <Text testID='error'  style = {styles.error}>{formikprops.errors.password}</Text>

                     <View style={styles.space} />
                <FlatButton  testID="login-button"  text ='Login'  onPress={formikprops.handleSubmit} />
                <TouchableOpacity testID="login-button234" onPress={() => {
                    Home()
                            }}>
                    <View testID='fpasswordbutn'  style = {styles.fpasswordbutn}>
                        <Text  testID='fpassword' style={styles.fpassword}>'Forgot Password?'</Text>
                    </View>
                </TouchableOpacity>
            
                </View>
              )}
            </Formik>
        </View>
    )
}

const styles = StyleSheet.create({
    // container: {
    //   flex: 1,
    //   padding:20,
    //   alignItems: 'center',
    //   justifyContent: 'center',
    // },
    input:{
        padding:10,
        backgroundColor: '#ddd',
        borderWidth: 1,
        borderRadius: 6,
        fontSize:20,
        width: '100%',
      },
      text:{
        fontSize:30,
        fontWeight:"bold",
        textAlign: "center"
    },
    space:{
        height:10,
        width:30
    },
    error:{
        fontSize:10,
        fontWeight:"bold",
        color:"red",
    },
    
    fpassword:{
        fontSize:20,
        fontWeight:"bold",
        textAlign: "center"
        
    },
    fpasswordbutn:{
        alignSelf:'flex-start',
        alignItems:'flex-start'
    }
});
