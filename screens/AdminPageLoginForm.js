import React, { useState } from 'react';
import { StyleSheet, Button , TextInput , View , Text, TouchableOpacity } from "react-native";
import { ErrorMessage, Formik } from 'formik';
import FlatButton from '../shared/button';
import * as yup from 'yup';
import { secureGet, secureSave } from '../ExternalVariables/storage'


export default function AdminPageLoginForm({navigationValue}){
    const [tok, setToke ]= useState("");
    
    const reviewSchema = yup.object({
      
        username: yup.string()
                .required('Username is not provided'),
        password: yup.string()
                    .required('No password provided')
                    .min(8,'Password is too short- Should be 8 chars minimum'),        
    })

    const forgot = () => {
        navigationValue.navigate('AdminForgotPassword')
    }


    return(
        <View>
            <Formik 
            initialValues = {{username:'',password:''}}
            validationSchema = {reviewSchema}
            onSubmit = {(values) => {
                try {
                    console.log(values, 'values');
                    var InsertAPIURL = "https://s-r-m-s2022.herokuapp.com/api/v1/admin/login";
                    var headers = {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
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
                    .then((response)=>{
                        const { message } = response;
                        const token = response.token;
                        const username = response.username;
                        console.log(response);
                        secureSave('token' , token);
                        secureSave('username',username);
                        if (message == "Login Successful") {
                            console.log("true")
                            navigationValue.navigate('LandingPage');
                          }
                          alert(message);       // If data is in JSON => Display alert msg
                          
                      //alert(response[0].Message);       // If data is in JSON => Display alert msg
                      //navigationValue.navigate('Signin'); //Navigate to next screen if authentications are valid
                    }).catch(e=> console.log(e, "error"))
                    
                    }

                    catch(error){
                        console.log(error);
                        alert("Error Occured" + ErrorMessage);
                        
                    }
                  }}             
            >
              {(formikprops) => (
                <View >
                   
                    <TextInput                       
                        style = {styles.input}
                        placeholder='Username'
                        onChangeText={formikprops.handleChange('username')}
                        value={formikprops.values.username}
                    /> 
                    <Text style = {styles.error}>{formikprops.errors.username}</Text>
                    <TextInput
                        secureTextEntry = {true}
                        style = {styles.input}
                        placeholder='password:'
                        onChangeText={formikprops.handleChange('password')}
                        value={formikprops.values.password}
                    />
                    <Text style = {styles.error}>{formikprops.errors.password}</Text>

                <FlatButton style={styles.button} text ='LOGIN' onPress={formikprops.handleSubmit}/>
                <TouchableOpacity onPress={() => {
                    forgot()
                            }}>
                    <View style = {styles.fpasswordbutn}>
                        <Text style={styles.fpassword}>'Forgot Password?'</Text>
                    </View>
                </TouchableOpacity>
                </View>
              )}
            </Formik>
        </View>
    )
}

const styles = StyleSheet.create( {
    input: {
        padding:10,
        backgroundColor: '#ddd',
        borderWidth: 1,
        borderRadius: 6,
        fontSize:20,
        width: '100%',
        opacity:0.5
    },
    text:{
        fontSize:30,
        fontWeight:"bold",
        textAlign: "center"
    },
    error:{
        fontSize:10,
        fontWeight:"bold"
    },

     button:{
        borderRadius: 8,
        paddingVertical: 14,
        paddingHorizontal: 10,
        backgroundColor: '#DA1313',
        borderColor: "#AA0E0F",
        borderWidth: 1
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