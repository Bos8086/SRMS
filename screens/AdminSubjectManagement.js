import React from 'react';
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity, ActivityIndicator, useState, Alert } from 'react-native';
import { ErrorMessage } from 'formik';
import { secureGet } from '../ExternalVariables/storage';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { Avatar , Button} from 'react-native-paper';
import { launchImageLibrary } from 'react-native-image-picker';


export default function AdminSubjectManagement({navigation}){
    const [message, setMessage]  = React.useState({});
    const [tok, setToke ]= React.useState("");
    const [list,setlist] = React.useState([])

    
    try {
        secureGet('token', setToke);
        const InsertAPIURL = "https://s-r-m-s2022.herokuapp.com/api/v1/admin/count_all_departments";
        var headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' +  tok
          };

          fetch(InsertAPIURL,{
            method:'GET',
            headers:headers,
            //body: JSON.stringify(values), //convert data to JSON
        })

        .then((response)=>{
            const d = response.json();
            console.log(d, "here");
            return d;
        }) //check response type of API (CHECK OUTPUT OF DATA IS IN JSON)
        .then((response)=>{
            const { message } = response;
            if (message == "Successful") {
                console.log("true")
              }
              setMessage(response);
          //alert(response[0].Message);       // If data is in JSON => Display alert msg
          //navigationValue.navigate('Signin'); //Navigate to next screen if authentications are valid
        }).catch(e=> console.log(e, "error"))
        
        }

        catch(error){
            console.log(error);
            alert("Error Occured" + ErrorMessage);
            
        }



        try {
            secureGet('token', setToke);
            const InsertAPIURL = "https://s-r-m-s2022.herokuapp.com/api/v1/admin/display_dept";
            var headers = {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' +  tok
              };
    
              fetch(InsertAPIURL,{
                method:'GET',
                headers:headers,
                //body: JSON.stringify(values), //convert data to JSON
            })
        
            .then((response)=>{
                const d = response.json();
                console.log(d, "here");
                return d;
            }) //check response type of API (CHECK OUTPUT OF DATA IS IN JSON)
            .then((response)=>{
                const { message } = response;
                if (message == "Successful") {
                    console.log("true")
                  }
                  setlist(response);
              //alert(response[0].Message);       // If data is in JSON => Display alert msg
              //navigationValue.navigate('Signin'); //Navigate to next screen if authentications are valid
            }).catch(e=> console.log(e, "error"))
            
            }
    
            catch(error){
                console.log(error);
                alert("Error Occured" + ErrorMessage);
                
            }


    return(
        <View style =  {styles.container}>
             <View style={styles.body}>
                <Text style={styles.text}>Welcome to Subject Management</Text>
                <Text style={styles.text}>These are the Number of departments : {message.count}</Text>
                <Text style={styles.text}>These are The List of Departments : </Text>
                {list.map (item=> 
 (
                 <Text>{item.deptName}</Text>
                                   
            ))}
                
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