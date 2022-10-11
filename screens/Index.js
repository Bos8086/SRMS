
import React from 'react';
import { Button, StyleSheet, Text, TextInput, View, Image, TouchableOpacity } from 'react-native';

export default function Index({navigation}){

const pressHandler = () => {
    navigation.navigate('Register')
}

const pressHandler2=() => {
    navigation.navigate('Signin')
}
    return(
        
  
    <View style = {styles.container}>
        <View style={styles.header}>
            <Image source={ require("../assets/franinnocent.jpg")} style={styles.image}/>
            <Image source={require("../assets/jansen-miller-GFFAXGdhbg4-unsplash.jpg")} style={styles.image}/>
            <Image source={ require("../assets/bucerius-law-school-U587PEB9Xjo-unsplash.jpg")} style={styles.image}/>
            <Image source={require("../assets/nick-samoylov-GrLnSHJT1fI-unsplash.jpg")} style={styles.image}/>
        </View>  
        <View  style ={styles.body}>   
            <Text style={styles.text}>Welcome to TOL University</Text>
            <Text style={styles.textsmall}>...Fast Access to Courses</Text>
            <Image source={require("../assets/logo.png")} style = {styles.main_image}/>    
        </View>
        <View style = {styles.bottom}>
        {/* <Button onPress={pressHandler3} title='Homepage' style ={styles.button}/> */}
            <TouchableOpacity onPress={pressHandler2}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Login</Text>
                </View>
            </TouchableOpacity>
            <View style={styles.space} />
            <TouchableOpacity onPress={pressHandler}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Register..</Text>
                </View>
             </TouchableOpacity>
            
        </View>

    </View>
    )
};


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

    body:{
        flex:0.2,
        alignItems: 'center',
    },
    bottom:{
        flex:0.2,
        flexDirection:'row',
    },
    main_image:{
        //justifyContent:'flex-start',
        borderRadius: 48,
        //flexDirection: 'row',
        height:100,
        width:100,
       
    },
    image:{
        flexDirection: 'row',
        height:100,
        width:100,
    
    },
    button:{
        borderRadius: 8,
        paddingVertical: 14,
        paddingHorizontal: 30,
        backgroundColor: '#7A0606',
        borderColor: "#000000",
        borderWidth: 2
    },
    space:{
        height:10,
        width:30
    },

    buttonText:{
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 20,
    },
    text:{
        fontWeight: 'bold',
        fontSize: 20,
    },  
    textsmall:{
        fontSize: 10,
    }
});
