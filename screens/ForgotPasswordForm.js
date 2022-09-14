import React, { useState } from 'react';
import { StyleSheet, Button , TextInput , View , Text, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import { Formik } from 'formik';
import FlatButton from '../shared/button';
import * as yup from 'yup';
// import { useNavigation } from '@react-navigation/native';

const reviewSchema = yup.object({
    JambNo: yup.string().required('No JambNo provided'),
    Password: yup.string()
    .required('No password provided') 
    .min(8,'Password is too short- Should be 8 chars minimum'),
    confirmPassword: yup.string()
            .required('No password provided') 
            .min(8,'Password is too short- Should be 8 chars minimum')
})


export default function ForgotPasswordForm({navigationValue}){
    

    const [signinValues,setSigninValues] = useState([])
    const getSigninDetails = (signinValues) => {<List />}
    return(         
        <View style>
            <Formik 
            initialValues = {{ JambNo:'',newPassword:'',confirmPassword:''}}
            validationSchema={reviewSchema}
            onSubmit = {(values) => {
                navigationValue.navigate('Signin')
            } }            
            >
              {(formikprops) => (
                <View >     
                    <Text style={styles.text}>Forgot Password</Text>
                    <Text style={styles.smalltext}>Please Re-Enter Password</Text>
                    <TextInput
                        style = {styles.input}
                        placeholder='Enter JambNo'
                        onChangeText={formikprops.handleChange('JambNo')}
                        value={formikprops.values.JambNo}
                    />
                    <Text style = {styles.error}>{formikprops.errors.JambNo}</Text>
                    <TextInput
                        secureTextEntry = {true}
                        style = {styles.input}
                        placeholder='Enter New Password'
                        onChangeText={formikprops.handleChange('Password')}
                        value={formikprops.values.Password}
                    />
                    <Text style = {styles.error}>{formikprops.errors.Password}</Text>
                    <TextInput
                        secureTextEntry = {true}
                        style = {styles.input}
                        placeholder='Re-Enter New Password'
                        onChangeText={formikprops.handleChange('NewPassword')}
                        value={formikprops.values.confirmPassword}
                    /> 
                    <Text style = {styles.error}>{formikprops.errors.confirmPassword}</Text>


                <FlatButton text ='RESET' onPress={formikprops.handleSubmit}/>
            
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
    smalltext:{
        fontSize:10,
        fontWeight:"bold",
        textAlign: "center"
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
