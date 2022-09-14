import React from 'react';
import { Button, StyleSheet, Text, TextInput, View, Image, TouchableOpacity } from 'react-native';



export default function CourseRegistration({navigation}){

    const onPress = ()=>{
            console.log('Course Registration')
            navigation.navigate("HomePage")
    }

    return(
        <View style =  {styles.container}r>
            <View style={styles.header}>
            <Image source={ require("../assets/logo.png")} style={styles.image}/>
                <Text>  Welome Boma </Text> 
            </View>


    
            <View style={styles.body}>
                <Text style={styles.text}>Welcome to CourseRegistration</Text>
                <TouchableOpacity onPress={onPress}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>HomePage</Text>
            </View>
        </TouchableOpacity>
            </View>


    
    
        </View>
        )
    }
    
    const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#FAE2E2',
          alignItems: 'center',
          justifyContent: 'space-between',
        },
    
        header:{
            padding:40,
            flex:0.5,
            alignSelf:'flex-start'
    
        },
        body:{
            flex:0.5,
            alignItems: 'center',
        },
        text:{
            fontWeight: 'bold',
            fontSize: 20,
        },
        image:{
            flexDirection: 'row',
            height:80,
            width:80,
            borderRadius: 48,
    
            
        }
    });
    