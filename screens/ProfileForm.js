import { View , Text, Alert } from "react-native";
import  { useState }  from 'react';
import { secureGet } from '../ExternalVariables/storage';
import { StyleSheet } from "react-native";


export default function ProfileForm({}){
    const [message, setMessage]  = useState({});
    const[regNo,setRegNo] = useState("");
    const [tok, setToke ]= useState("");
    secureGet('token', setToke);
    secureGet('JAMBNO', setRegNo);
    

    try {
       
        const values = {jambNo : regNo};
       
       
        var InsertAPIURL = "https://s-r-m-s2022.herokuapp.com/api/v1/student/profile";
        var headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' +  tok
            
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

            if(response == "Please Fill BioData form"){
                Alert.alert(message)
            }
            //console.log(response);
            
        }).catch(e=> console.log(e, "error"))
        
        }

        catch(error){
            console.log(error);
            alert("Error Occured");
            
        }

    return(
        

        <View>
            {!message  && (<View><Text>Please register for a course</Text></View>)}

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
