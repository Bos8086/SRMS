import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, Alert,Image, ImageBackground } from 'react-native';
import React from 'react';
import SigninForm from './SigninForm';
import Card from '../shared/card';



export default function Signin({navigation}){
    //console.log(navigation)

    return(
        <View style = {styles.container}>
            <ImageBackground source={require("../assets/logo.png")} style = {styles.image} resizeMode="cover">
                    <Card>
                        <SigninForm navigationValue={navigation}/>
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
       
    },

  
});




