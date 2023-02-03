import React from 'react';
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity, ActivityIndicator, useState, Alert } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { Avatar , Button} from 'react-native-paper';
import { launchImageLibrary } from 'react-native-image-picker';
import Card from '../shared/card';
import AdminChangePasswordForm from './AdminChangePasswordForm';


export default function AdminSettings({navigation}){
    return(
        <View testID='container' style =  {styles.container}>
             <View testID='body' style={styles.body}>
                <Text testID = 'textTest' style={styles.text}> Welcome to Settings </Text>
                <Card>
                    < AdminChangePasswordForm />
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
    body:{
        flex:0.75
    },

    text:{
        fontWeight: 'bold',
        fontSize: 20,
        paddingBottom:30
    },

})