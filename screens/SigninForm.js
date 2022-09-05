import React, { useState } from 'react';
import { StyleSheet, Button , TextInput , View , Text, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import { Formik } from 'formik';
import FlatButton from '../shared/button';
import * as yup from 'yup';
// import { useNavigation } from '@react-navigation/native';


const reviewSchema = yup.object({
    username: yup.string()
            .required('No MatricNo/Username provided')
            .min(4),
    password: yup.string()
            .required('No password provided') 
            .min(8,'Password is too short- Should be 8 chars minimum')
})

export default function SigninForm({navigationValue}){
    const Home = () => {
      navigationValue.navigate('ForgotPassword')
    }

    const [signinValues,setSigninValues] = useState([])
    const getSigninDetails = (signinValues) => {<List />}
 
    return(         
        <View style>
            <Formik 
            initialValues = {{ username:'',password:''}}
            validationSchema={reviewSchema}
            onSubmit = {(values) => {
                navigationValue.navigate('HomePage')
                //navigationValue.navigate('')
            } }            
            >
              {(formikprops) => (
                <View >     
                    <Text style={styles.text}>Login</Text>
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
                        placeholder='Password'
                        onChangeText={formikprops.handleChange('password')}
                        value={formikprops.values.password}
                    /> 
                     <Text style = {styles.error}>{formikprops.errors.password}</Text>


                <FlatButton text ='Login' onPress={formikprops.handleSubmit}/>
                <TouchableOpacity onPress={() => {
                    Home()
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
    error:{
        fontSize:10,
        fontWeight:"bold"
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
