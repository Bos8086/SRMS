import React from 'react';
import { Button, StyleSheet, Text, TextInput, View, Image, TouchableOpacity } from 'react-native';

export default function LandingPage({navigation}){

    const RedirectAdmin = () => {
        navigation.navigate('AdminPage')
    }
    
    const RedirectStudent=() => {
        navigation.navigate('Index')
    }

    // const RedirectTeacher=() => {
    //     navigation.navigate('Teacher')
    // }
    return(
        <View style = {styles.container}>
            <View style={styles.header}>
                <Image source={require("../assets/logo.png")} style = {styles.main_image}/>    
            </View>  
            <View style={styles.body}>
                <Text style={styles.text}>Welcome to TOL University</Text>
                <Text style={styles.text}>Please Choose Select the appropriate button</Text>
            </View>
            <View style={styles.bottom}>
            <TouchableOpacity onPress={RedirectStudent}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Student</Text>
                </View>
                <View style={styles.space} />
            </TouchableOpacity>
            <View style={styles.space} />
            <TouchableOpacity onPress={RedirectAdmin}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Admin</Text>
                </View>
             </TouchableOpacity>
             {/* <TouchableOpacity onPress={RedirectTeacher}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Teacher</Text>
                </View>
             </TouchableOpacity> */}
            
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
          flex:0.1,
          flexDirection:'row'
      },
      header:{
        flex:0.1,
        flexDirection:'row'
    },
    main_image:{
        //justifyContent:'flex-start',
        borderRadius: 48,
        //flexDirection: 'row',
        height:100,
        width:100,
    },
    text:{
        fontWeight: 'bold',
        fontSize: 20,
    },  
    bottom:{
        flex:0.2,
        flexDirection:'row',
    },
    button:{
        borderRadius: 8,
        paddingVertical: 14,
        paddingHorizontal: 30,
        backgroundColor: '#7A0606',
        borderColor: "#000000",
        borderWidth: 2
    },
    buttonText:{
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 20,
    },
    space:{
        height:10,
        width:30
    },
})