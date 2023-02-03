import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';


export  default function FlatButton({text,onPress}){
    return(
        <TouchableOpacity onPress={onPress}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button:{
        alignSelf:'flex-end',
        //justifyContent:'flex-end',
        borderRadius: 8,
        paddingVertical: 14,
        paddingHorizontal: 10,
        backgroundColor: '#E66464',
        borderColor: "#AA0E0F",
        borderWidth: 1

    },
    buttonText:{
       color: 'black',
       fontWeight: 'bold',
       textTransform: 'uppercase',
       fontSize: 20,
       //textAlign: 'right',
    }
})