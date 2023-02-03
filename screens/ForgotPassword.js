import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, Alert,Image, ImageBackground } from 'react-native';
import React from 'react';
import SigninForm from './SigninForm';
import Card from '../shared/card';
import ForgotPasswordForm from './ForgotPasswordForm';


export default function ForgotPassword({navigation}){
    console.log(navigation)

    return(
        <View testID='container' style = {styles.container}>
            <ImageBackground testID='image' source={require("../assets/logo.png")} style = {styles.image} resizeMode="cover">
                    <Card>
                        <ForgotPasswordForm navigationValue={navigation}/>
                    </Card>
            </ImageBackground>        
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'pink',
        flex:1,
    }, 
    image: {
        flex:1,
        justifyContent: "center",
        //width:50,
        //height:50,
        //opacity:0.5

    },

    
    // input:{
    //     marginBottom:5,
    //     paddingHorizontal:5,
    //     paddingVertical:5,
    //     backgroundColor: '#ddd',
    //     borderBottomwWifth: 1,
    //   },

    // text:{
    //     fontWeight: 'bold',
    //     fontSize: 20
    // }
});




