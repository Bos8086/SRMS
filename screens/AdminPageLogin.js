import React from 'react';
import { Button, StyleSheet, Text, TextInput, View, Image, TouchableOpacity } from 'react-native';
import Card from '../shared/card';
import AdminPageLoginForm from './AdminPageLoginForm';


export default function AdminPageLogin({navigation}){
    
    return(
        <View testID='container' style = {styles.container}>
            <View testID='header' style={styles.header}>
                <Image testID='headerImage' source={require("../assets/ADlogo.png")} style = {styles.header_image}/> 
            </View>
            <View testID='body' style={styles.body}>
                    <Card>
                          <AdminPageLoginForm navigationValue={navigation}/>
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