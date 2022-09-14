import React from 'react';
import { Button, StyleSheet, Text, TextInput, View, Image, TouchableOpacity, ActivityIndicator, useState } from 'react-native';


//const Drawer = createDrawerNavigator();

export default function HomePage({navigation}){
   

    
    
    const onPress = () => {
        //console.log(navigation)
        navigation.navigate('CourseRegistration')
         //console.log(navigation)
     }
     const onPress2 = () => {
        //console.log(navigation)
        navigation.navigate('BioData')
         //console.log(navigation)
     }
     const onPress3 = () => {
        //console.log(navigation)
        navigation.navigate('Settings')
         //console.log(navigation)
     }
     const onPress4 = () => {
        //console.log(navigation)
        navigation.navigate('ViewRegistration')
         //console.log(navigation)
     }
     const onPress5 = () => {
        //console.log(navigation)
        navigation.navigate('Index')
         //console.log(navigation)
     }

    return(
    <View style =  {styles.container}r>
       


        <View style={styles.header}>

         {/* <MaterialIcons name='menu' size={28} onPress={openMenu} style={styles.icon}/>    */}
        <Image source={ require("../assets/logo.png")} style={styles.image}/>
            <Text>  Welome  </Text> 
        </View>

        <View style={styles.body}>
            <Text style={styles.text}>Welcome to HomePage</Text>
        <TouchableOpacity onPress={onPress}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>ADD Courses</Text>
            </View>
        </TouchableOpacity>
        <View style={styles.space} />
        <TouchableOpacity onPress={onPress2}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>EDIT BIO DATA FORM</Text>
            </View>
        </TouchableOpacity>
        <View style={styles.space} />
        <TouchableOpacity onPress={onPress3}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>Settings</Text>
            </View>
        </TouchableOpacity>
        <View style={styles.space} />
        <TouchableOpacity onPress={onPress4}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>View Registration</Text>
            </View>
        </TouchableOpacity>
        <View style={styles.space} />
        <TouchableOpacity onPress={onPress5}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>Logout</Text>
            </View>
        </TouchableOpacity>
        

        </View>


    </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F8D5D4',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    space:{
        height:10,
        width:30
    },

    header:{
        padding:40,
        flex:0.3,
        alignSelf:'flex-start'

    },
    body:{
        flex:0.9,
        alignItems: 'center',
    },
    text:{
        fontWeight: 'bold',
        fontSize: 20,
        paddingBottom:30
    },
    image:{
        flexDirection: 'row',
        height:80,
        width:80,
        borderRadius: 48,     
    },
    button:{
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

});
