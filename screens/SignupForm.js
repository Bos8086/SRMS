import React, { useState } from 'react';
import { StyleSheet, Button , TextInput , View , Text, TouchableOpacity } from 'react-native';
import { ErrorMessage, Formik } from 'formik';
import FlatButton from '../shared/button';
import * as yup from 'yup';

const reviewSchema = yup.object({
    jambNo: yup.string()
            .required('No MatricNo/Username provided')
            .min(4,'Matric no is more than 4 chars'),
    level: yup.string()
            .required( ' NO level provided'),
    department:yup.string()
                .required('No password provided'),
    password: yup.string()
                .required('No password provided')
                .min(8,'Password is too short- Should be 8 chars minimum'),
    confirmPassword: yup.string()
        .required('Please retype your password.')
        .oneOf([yup.ref('password')], 'Your passwords do not match.'),
    email: yup.string()
    .required('No Email Provided')
    .email()
                
})


export default function SignupForm({navigationValue}){

    
   
    return(
        <View style >
            <Formik 
            initialValues = {{jambNo:'',level:'',department:'',password:'',confirmPassword:'',email:''}}
            validationSchema = {reviewSchema}
            onSubmit = {(values) => {
                try {
                    console.log(values, 'values');
                    var InsertAPIURL = "https://s-r-m-s2022.herokuapp.com/api/v1/student/register";
                    //var InsertAPIURL = "https://127.0.0.1:9021/api/v1/student/register";
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
                        if (message == "Thank you for registering") {
                            console.log("true")
                            navigationValue.navigate('Signin');
                          }
                          alert(message);       // If data is in JSON => Display alert msg
                          console.log(response);
                      //alert(response[0].Message);       // If data is in JSON => Display alert msg
                      //navigationValue.navigate('Signin'); //Navigate to next screen if authentications are valid
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
                <View >
                    <Text style={styles.text}>SIGN UP</Text>
                    <TextInput
                        style = {styles.input}
                        placeholder='MatricNo. /JAMB Reg'
                        onChangeText={formikprops.handleChange('jambNo')}
                        value={formikprops.values.jambNo.toUpperCase()}
                    />
                    <Text style = {styles.error}>{formikprops.errors.jambNo}</Text>
                    <TextInput                       
                        style = {styles.input}
                        placeholder='LEVEL'
                        onChangeText={formikprops.handleChange('level')}
                        value={formikprops.values.level}
                        
                    /> 
                    <Text style = {styles.error}>{formikprops.errors.level}</Text>
                    <TextInput
                        style = {styles.input}
                        placeholder='Department'
                        onChangeText={formikprops.handleChange('department')}
                        value={formikprops.values.department}
                    />
                    <Text style = {styles.error}>{formikprops.errors.department}</Text>
                    <TextInput
                        style = {styles.input}
                        placeholder='Email'
                        onChangeText={formikprops.handleChange('email')}
                        value={formikprops.values.email}
                    />
                    <Text style = {styles.error}>{formikprops.errors.email}</Text>
                    <TextInput
                        secureTextEntry = {true}
                        style = {styles.input}
                        placeholder='password:'
                        onChangeText={formikprops.handleChange('password')}
                        value={formikprops.values.password}
                    />
                    <Text style = {styles.error}>{formikprops.errors.password}</Text>
                    <TextInput
                        secureTextEntry = {true}
                        style = {styles.input}
                        placeholder='Re-enter Password:'
                        onChangeText={formikprops.handleChange('confirmPassword')}
                        value={formikprops.values.confirmPassword}
                    />
                    <Text style = {styles.error}>{formikprops.errors.confirmPassword}</Text>

                <FlatButton style={styles.button} text ='SIGN IN' onPress={formikprops.handleSubmit}/>
                </View>
              )}
            </Formik>
        </View>
    )
};


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
        backgroundColor: '#E66464',
        borderColor: "#AA0E0F",
        borderWidth: 1
    }
});