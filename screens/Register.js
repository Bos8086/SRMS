import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View, Keyboard,ImageBackground } from 'react-native';
import { NavigationContainer,Route } from '@react-navigation/native';
import {React, useState}  from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import Card from '../shared/card';
import SignupForm from './SignupForm';


export default function Register({navigation}){
    return (
      
        <TouchableWithoutFeedback onPress={() =>{
            Keyboard.dismiss();
            console.log('dismissed Keyboard');
          }}>
            <View style = {styles.container}>
              <ImageBackground source={require("../assets/logo.png")} style = {styles.image} resizeMode="cover">
                      <Card>
                          <SignupForm navigationValue={navigation}/>
                      </Card>
              </ImageBackground>        
          </View>
        </TouchableWithoutFeedback>

      );
};


const styles = StyleSheet.create({
  container:{
    flex:1,
}, 
image: {
    flex:1,
    justifyContent: "center",

},
})