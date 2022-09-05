import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function Card(props){
    return(
        <View style={styles.card}>
            <View style={styles.cardContent}>
                {props.children}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card:{
        borderRadius:4,
        elevation:100,
        backgroundColor: 'rgba(247,246,246, 0.9)',
        marginHorizontal:4,
        marginVertical:6,
        borderColor: "#A39E9E",
        borderWidth: 1
    },
    cardContent:{
        marginHorizontal: 20,
        marginVertical:20,
    }
})