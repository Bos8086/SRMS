import { View, Text, Alert, ScrollView } from "react-native";
import { useState } from "react";
import { secureGet } from "../ExternalVariables/storage";
import { StyleSheet } from "react-native";
import { useEffect } from "react";
import axios from "axios";
import {BASE_URL} from '../shared/constants';

export default function ProfileForm({}) {
  const [message, setMessage] = useState({});
  const [regNo, setRegNo] = useState("");
  const [tok, setToke] = useState("");
  secureGet("token", setToke);
  secureGet("JAMBNO", setRegNo);

  var InsertAPIURL = `${BASE_URL}/student/profile?jambNo=${regNo}`;
  var headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: "Bearer " + tok,
  };

  useEffect(() => {
    const values = { jambNo: regNo };

    const displayProfile = async () => {
      await axios
        .create({ headers })
        .get(InsertAPIURL)
        .then((res) => {
          console.log(values);
          console.log("token : ", tok);
          console.log("response", res?.data);
          setMessage(res?.data);
          Alert.alert(res?.data.message);
        })
        .catch((err) => {
          Alert.alert(err.response.data.message)
          console.error(err.response.data.message);
        });
    };

    if (tok && regNo) {
      displayProfile();
    }
  }, [tok, regNo]);


  const inputs = [
    {title:"Firstname : ", value: message.fname},
    {title:"Middle Name : ", value: message.midName},
    {title:"Surname : ", value: message.surName},
    {title:"Sex : ", value: message.sex},
    {title:"Faculty : ", value: message.faculty},
    {title:"Department : ", value: message.department},
    {title:"Date Of Birth : ", value: message.dateOfBirth},
    {title:"LGA : ", value: message.lga},
    {title:"State Of Origin : ", value: message.stOfOrg},
    {title:"Age : ", value: message.age}

  ];

  return (

    
    <ScrollView style={{minWidth:'100%'}}>
      {inputs.map((input, index)=>(
        <View testID="bodyTest103"  key= {index} style={styles.body}>
        <Text testID="titleTest103" style={styles.title}>{input.title}</Text>
        <Text testID="textTest103" style={styles.text}>{input.value}</Text>
      </View>
        
    ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  text: {
    fontSize: 20,
    fontWeight: "500",
  },
  body: {
    backgroundColor:'skyblue', 
    borderRadius:10, 
    padding:15, 
    margin:5,
    flexDirection:'row',
    justifyContent: "space-between"

  } 
  
});
