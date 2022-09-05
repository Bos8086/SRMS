import React, { useState } from 'react';
import { StyleSheet, Button , TextInput , View , Text, TouchableOpacity } from 'react-native';
import { Formik } from 'formik';
import FlatButton from '../shared/button';
import * as yup from 'yup';

const reviewSchema = yup.object({
    MatricNo: yup.string()
            .required('No MatricNo/Username provided')
            .min(4,'Matric no is more than 4 chars'),
    Level: yup.string()
            .required( ' NO level provided'),
    Department:yup.string()
                .required('No password provided'),
    password: yup.string()
                .required('No password provided')
                .min(8,'Password is too short- Should be 8 chars minimum'),
    reenterPassword: yup.string()
                    .required('No password provided')
                    .min(8,'Password is too short- Should be 8 chars minimum'),
                
})


export default function SignupForm({navigationValue}){
   
    return(
        <View style >
            <Formik 
            initialValues = {{MatricNo:'',Level:'',Department:'',password:'',reenterPassword:'',}}
            validationSchema = {reviewSchema}
            onSubmit = {(values) => {
                //console.log(values)
                navigationValue.navigate('Signin')
            } }            
            >
              {(formikprops) => (
                <View >
                    <Text style={styles.text}>SIGN UP</Text>
                    <TextInput
                        style = {styles.input}
                        placeholder='MatricNo. /JAMB Reg'
                        onChangeText={formikprops.handleChange('MatricNo')}
                        value={formikprops.values.MatricNo}
                    />
                    <Text style = {styles.error}>{formikprops.errors.MatricNo}</Text>
                    <TextInput                       
                        style = {styles.input}
                        placeholder='LEVEL'
                        onChangeText={formikprops.handleChange('Level')}
                        value={formikprops.values.Level}
                        
                    /> 
                    <Text style = {styles.error}>{formikprops.errors.Level}</Text>
                    <TextInput
                        style = {styles.input}
                        placeholder='Department'
                        onChangeText={formikprops.handleChange('Department')}
                        value={formikprops.values.Department}
                    />
                    <Text style = {styles.error}>{formikprops.errors.Department}</Text>
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
                        onChangeText={formikprops.handleChange('reenterPassword')}
                        value={formikprops.values.reenterPassword}
                    />
                    <Text style = {styles.error}>{formikprops.errors.reenterPassword}</Text>

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