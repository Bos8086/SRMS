import React from 'react';
import { Button, StyleSheet, Text, TextInput, View, Image, TouchableOpacity } from 'react-native';
import Card from '../shared/card';
import AdminSignUpForm from './AdminSignUpForm';

export default function AdminPage({navigation}){
    return(
        <View style = {styles.container}>
            <View style={styles.header}>
                <Image source={require("../assets/ADlogo.png")} style = {styles.header_image}/> 
            </View>
            <View style={styles.body}>
                    <Card>
                          <AdminSignUpForm navigationValue={navigation}/>
                      </Card>
            </View>
        </View> 
    )  
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    header:{
        flex:0.2, 
        display: 'flex',
        width: '100%',
    },
    body:{
        flex:0.75
    },
    header_image:{
        height:100,
        width:'100%',
        resizeMode: 'contain'
    },

})