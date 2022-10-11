import { View , Text } from "react-native";
import  { useState }  from 'react';
import { secureGet } from '../ExternalVariables/storage';
import { StyleSheet } from "react-native";


export default function ProfileForm({}){
    const [message, setMessage]  = useState({});
    try {

        const [tok, setToke ]= useState("");
        secureGet('token', setToke);
        const values = {jambNo : "20302030"};
       
        var InsertAPIURL = "https://s-r-m-s2022.herokuapp.com/api/v1/student/profile";
        var headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' +  tok
            // 'x-client-id' : 'qdfsyrtiyjtyfdrrtyfhr5ui7ytjh',
            // 'x-client-secret':'ewrwut79u0ypoiufuyuiyutiogiuytuyr',
            // 'x-source-code':'TEST'
          };

          fetch(InsertAPIURL,{
            method:'POST',
            headers:headers,
            body: JSON.stringify(values), //convert data to JSON
        })
    
        .then((response)=>{
            const d = response.json();
           // console.log(d, "here");
            return d;
        }) //check response type of API (CHECK OUTPUT OF DATA IS IN JSON)
        .then((response)=>{
            setMessage(response);
            // console.log(response);
            
            


            
            // if (message == "Password successfully Reset") {
            //     console.log("true")           
            //     //navigationValue.navigate('Signin');
            //   }
            
            
          //alert(message);   

              // If data is in JSON => Display alert msg

          //alert(response[0].Message);       // If data is in JSON => Display alert msg
          //navigationValue.navigate('HomePage'); //Navigate to next screen if authentications are valid
        }).catch(e=> console.log(e, "error"))
        
        }

        catch(error){
            console.log(error);
            alert("Error Occured");
            
        }

    return(
        

        <View>
            <Text style =  {styles.text}>First Name : { message.fname}</Text>
            <Text style =  {styles.text}>Surname : { message.surName}</Text>
            <Text style =  {styles.text}>Middle Name : { message.midName}</Text>
            <Text style =  {styles.text}> Sex :  { message.sex}</Text>
            <Text style =  {styles.text}>Faculty : { message.faculty}</Text>
            <Text style =  {styles.text}>Department : { message.department}</Text>
            <Text style =  {styles.text}>dateOfBirth : { message.dateOfBirth}</Text>
            <Text style =  {styles.text}>LGA : { message.lga}</Text>
            <Text style =  {styles.text}>State Of Origin : { message.stOfOrg}</Text>
            <Text style =  {styles.text}>Age : { message.age}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
      text:{
        fontSize:20,
        fontWeight:"bold",
        textAlign: "left"
    }  
});
