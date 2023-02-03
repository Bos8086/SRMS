import React from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import BioDataForm from "./BioDataForm";

export default function BioData({ navigation }) {
  return (
    <View testID='container' style={styles.container}>
      <ScrollView 
      // style={styles.scrollView}
      >
        <View testID="header" style={styles.header}>
          <Image testID="image" source={require("../assets/logo.png")} style={styles.image} />
          <Text> Bio - Data Form</Text>
        </View>

        <View testID="body" style={styles.body}>
          <Text testID="text" style={styles.text}>Welcome to BioData</Text>
          <BioDataForm navigationValue={navigation} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAE2E2",
    alignItems: "center",
    justifyContent: "space-between",
  },

  header: {
    padding: 40,
    flex: 0.3,
    alignSelf: "flex-start",
  },
  body: {
    flex: 0.5,
    alignItems: "center",
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
