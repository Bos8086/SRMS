import React from 'react';
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity, ActivityIndicator, useState, Alert } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { Avatar , Button} from 'react-native-paper';
import { launchImageLibrary } from 'react-native-image-picker';


export default function AdminUserManagement({navigation}){
    return(
        <View style =  {styles.container}>
             <View style={styles.body}>
                <Text style={styles.text}>Welcome to Student Management</Text>
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
    body:{
        flex:0.75
    },
    text:{
        fontWeight: 'bold',
        fontSize: 20,
        paddingBottom:30
    },
})