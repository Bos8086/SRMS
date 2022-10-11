import React, { useEffect, useMemo } from 'react';
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity, ActivityIndicator, useState, Alert } from 'react-native';
import {ErrorMessage} from 'formik';
import { secureGet } from '../ExternalVariables/storage';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { Avatar , Button} from 'react-native-paper';
import { launchImageLibrary } from 'react-native-image-picker';
import axios from 'axios';
import { tokenToString } from 'typescript';


export default function AdminHomePage({navigation}){
    const [message, setMessage]  = React.useState({});
    const [tok, setToke ]= React.useState("");
    
    const InsertAPIURL = "https://s-r-m-s2022.herokuapp.com/api/v1/admin/count_all_students";
    
    const counter = useMemo(()=>{return tok?.length}, [tok])
  
    console.log("message", message);
useEffect(  ()=> {
    secureGet('token', setToke);
    
    
    const getNoFetchStudents = async() => {
        console.log("Token1", tok);
        
        var headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' +  tok
          };
        
        // console.log("I am here at the UE: ", headers);
        // console.log("InsertAPIURL: ", InsertAPIURL);

        await axios.create({headers}).get(InsertAPIURL)
        .then((res)=>{
                console.log("response" ,res?.data);
                setMessage(res?.data);
        })
        .catch((err)=>{
                console.error(err);
        });

        };

        if (tok){
            getNoFetchStudents();
        };
   
    }
    ,[tok]);




    // try {
    //     var headers = {
    //         'Accept': 'application/json',
    //         'Content-Type': 'application/json',
    //         'Authorization': 'Bearer ' +  tok
    //       };
    //       fetch(InsertAPIURL,{
    //         method:'GET',
    //         headers:headers,
    //         //body: JSON.stringify(values), //convert data to JSON
    //     })
    //     .then ((response)=>{
    //         console.log("I am responseee", response);
    //         const d = response.json();
    //         console.log(d, "here");
    //         return d;
    //     }) //check response type of API (CHECK OUTPUT OF DATA IS IN JSON)
        // .then((response)=>{
        //     const { message } = response;
        //     if (message == "Successful") {
        //         console.log("true")
        //       }
            //   setMessage(response);
          //alert(response[0].Message);       // If data is in JSON => Display alert msg
          //navigationValue.navigate('Signin'); //Navigate to next screen if authentications are valid
    //     })}
    //     catch(e) { console.log(e, "error")
    //     }
    
    // },[])
        // catch(error){
        //     console.log(error);
        //     alert("Error Occured" + ErrorMessage);
            
        // }
    


    return(
        <View style =  {styles.container}>
             <View style={styles.body}>
                <Text style={styles.text}> Welcome to HomePage </Text>
                <Text style={styles.text}>These are the number of Students : {message?.count}</Text>
                <Text style={styles.text}> {counter} </Text>
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