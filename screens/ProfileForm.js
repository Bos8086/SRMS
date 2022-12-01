import { View, Text, Alert } from "react-native";
import { useState } from 'react';
import { secureGet } from '../ExternalVariables/storage';
import { StyleSheet } from "react-native";
import { useEffect } from "react";
import axios from "axios";


export default function ProfileForm({ }) {
    const [message, setMessage] = useState({});
    const [regNo, setRegNo] = useState("");
    const [tok, setToke] = useState("");
    secureGet('token', setToke);
    secureGet('JAMBNO', setRegNo);




   


    var InsertAPIURL = "https://s-r-m-s2022.herokuapp.com/api/v1/student/profile";
    var headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + tok

    };


    useEffect(() => {
        const values = { jambNo: regNo };
       

    const displayProfile = async() => {
        await axios.create({ headers }).post(InsertAPIURL, values)
        .then((res) => {
            console.log(values)
            console.log("token : " , tok)
            console.log("response", res?.data);
            setMessage(res?.data);
            Alert.alert(res?.data.message);


        })
        .catch((err) => {
            console.error(err);
        });

    }

    if (tok && regNo) {
        displayProfile();
    };

    },
        [tok,regNo])



return (


    <View>
        {/* {!message  && (<View><Text>Please register for a course</Text></View>)} */}

        <Text style={styles.text}>First Name : {message.fname}</Text>
        <Text style={styles.text}>Surname : {message.surName}</Text>
        <Text style={styles.text}>Middle Name : {message.midName}</Text>
        <Text style={styles.text}> Sex :  {message.sex}</Text>
        <Text style={styles.text}>Faculty : {message.faculty}</Text>
        <Text style={styles.text}>Department : {message.department}</Text>
        <Text style={styles.text}>dateOfBirth : {message.dateOfBirth}</Text>
        <Text style={styles.text}>LGA : {message.lga}</Text>
        <Text style={styles.text}>State Of Origin : {message.stOfOrg}</Text>
        <Text style={styles.text}>Age : {message.age}</Text>
    </View>
)
};

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "left"
    }
});
