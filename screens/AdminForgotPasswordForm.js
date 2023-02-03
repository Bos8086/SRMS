import React from "react";
import { StyleSheet, Button , TextInput , View , Text, TouchableOpacity } from "react-native";
import { ErrorMessage, Formik } from 'formik';
import FlatButton from '../shared/button';
import * as yup from 'yup';
import {BASE_URL} from "../shared/constants";


export default function AdminForgotPasswordForm({navigationValue}){
    const reviewSchema = yup.object({
        username: yup.string()
                .required('Username is not provided'),
        newPassword: yup.string()
                    .required('No password provided')
                    .min(8,'Password is too short- Should be 8 chars minimum'),
        confirmPassword: yup.string()
            .required('Please retype your password.')
            .oneOf([yup.ref('password')], 'Your passwords do not match.'),             
    })

    return(
        <View>
            <Formik 
            initialValues = {{username:'',newPassword:'',confirmPassword:''}}
            validationSchema = {reviewSchema}
            onSubmit = {(values) => {
                try {
                    console.log(values, 'values');
                    var InsertAPIURL = `${BASE_URL}/admin/reset_password`;
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
                    .then((response)=>{
                        const { message } = response;
                        console.log(message)
                        if (message == "Password successfully Reset") {
                            console.log("true")           
                            navigationValue.navigate('AdminPageLogin');
                          }
                        
                        
                      alert(message);       // If data is in JSON => Display alert msg
    
                      //alert(response[0].Message);       // If data is in JSON => Display alert msg
                      //navigationValue.navigate('HomePage'); //Navigate to next screen if authentications are valid
                    }).catch(e=> console.log(e, "error"))
                    
                    }

                    catch(error){
                        console.log(error);
                        alert("Error Occured" + ErrorMessage);
                        
                    }
                
            } }    
                        
            >
              {(formikprops) => (
                <View >
                    <Text testID="text" style={styles.text}>Forgot Password</Text>
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
                        onChangeText={formikprops.handleChange('newPassword')}
                        value={formikprops.values.newPassword}
                    />
                    <Text testID="error" style = {styles.error}>{formikprops.errors.newPassword}</Text>
                    <TextInput
                    testID="input"
                        secureTextEntry = {true}
                        style = {styles.input}
                        placeholder='Re-enter Password:'
                        onChangeText={formikprops.handleChange('confirmPassword')}
                        value={formikprops.values.confirmPassword}
                    />
                    <Text style = {styles.error}>{formikprops.errors.confirmPassword}</Text>

                <FlatButton testID='button' style={styles.button} text ='Reset Password' onPress={formikprops.handleSubmit}/>
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
    }
});



