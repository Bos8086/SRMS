import React, { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import Card from "../shared/card";
import ProfileForm from "./ProfileForm";
import { secureGet } from "../ExternalVariables/storage";

export default function Profile() {
  const [regNo, setRegNo] = useState("");

  secureGet("JAMBNO", setRegNo);
  console.log("regno", setRegNo);
  console.log("RegNo : ", regNo);

  return (
    <View testID="container" style={styles.container} >
      <View testID="header" style={styles.header}>
        <Image testID="image" source={require("../assets/logo.png")} style={styles.image} />
        <Text> Profile </Text>
      </View>
      <View testID='bodyTest101' style={styles.body}>
        <Text testID='textTest101' style={styles.text}>Welcome {regNo}</Text>
        <Card style={{width:'150%'}}>
          <ProfileForm />
        </Card>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAE2E2",
    alignItems: "center",
    justifyContent: "space-between",
    minWidth: "100%",
    paddingBottom:20
  },

  header: {
    padding: 40,
    flex: 0.2,
    alignSelf: "flex-start",
  },
  body: {
    flex: 0.9,
    alignItems: "center",
    minWidth: "100%",
    marginBottom:100
  },
  text: {
    fontWeight: "bold",
    fontSize: 20,
  },
  image: {
    flexDirection: "row",
    height: 80,
    width: 80,
    borderRadius: 48,
  },
});
