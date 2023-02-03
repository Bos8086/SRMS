import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  Alert,
  FlatList,
  RefreshControl,
  
} from "react-native";
import axios from "axios";
import React, { useEffect, useState, useCallback } from "react";
import { secureGet, secureSave } from "../ExternalVariables/storage";
import { useIsFocused } from "@react-navigation/native";
import ItemCard from "../shared/ItemCard";
import {BASE_URL} from '../shared/constants';

export default function ViewRegistration({ navigation }) {
  const [message, setMessage] = useState([]);
  const [refreshing, setRefreshing] = React.useState(false);
  const [response, setResponse] = useState();
  const [regNo, setRegNo] = useState("");
  const [tok, setToke] = useState("");
  const [columns, setcolumns] = useState([
    "Course Code",
    "Course Name",
    "Course Status",
    "Course Unit",
  ]);
  secureGet("token", setToke);
  secureGet("JAMBNO", setRegNo);

  const isFocused = useIsFocused();

  var headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: "Bearer " + tok,
  };

  const InsertAPIURL = `${BASE_URL}/student/view_course?regNo=${regNo}`;
  const DeleteAPIURL = `${BASE_URL}/student/delete_course`;

  const wait = (timeout) => {
    return new Promise((resolve) => setTimeout(resolve, timeout));
  };

  const onRefresh = useCallback(() => {
    secureGet("token", setToke);
    setRefreshing(true);

    GetCourseByRegNo();

    wait(2000).then(() => setRefreshing(false));
  }, []);

  const deleteCourse = (courseId) => {
    console.log(courseId);

    const values = {jambNo: regNo, course_Id: courseId };
    console.log("I am in delete button", values);

    const DeleteCourseByRegNo = async () => {
      await axios
        .create({ headers })
        .delete(DeleteAPIURL, { data: values })
        .then((res) => {
          console.log("I am in delete button 2");
          console.log("response", res?.data);
          setResponse(res?.data);
          console.log("response : ", response);
          Alert.alert(res?.data?.message || "Deleted Successfully");
          GetCourseByRegNo();
        })
        .catch((err) => {
          console.error(err);
          console.error(err.response.data);
        });
    };
    if (tok && regNo) {
      DeleteCourseByRegNo();
    }
  };

  //    if(isFocused){
  //     GetCourseByRegNo();
  //    }

  useEffect(() => {
    if (isFocused) {
      console.log("I'm new from the view page!");
      GetCourseByRegNo();
    }
  }, [isFocused]);

  console.log("View registraition token", tok);
  console.log("View registraition regno", regNo);
  console.log("focus", isFocused);

  const GetCourseByRegNo = async () => {

    console.log("making a calllllllll");

  
    await axios
      .create({ headers })
      .get(InsertAPIURL)
      .then((res) => {
        console.log("response from view course", res?.data);
        if (res?.data == "The student has not registered for a course") {
          setMessage("");
          Alert.alert(res?.data);
          // return(
          //     <View style={styles.content}>
          //         <Text style = {styles.text}>
          //             Please Register for a course
          //         </Text>
          //     </View>
          // );
          return;
        }
        setMessage(res?.data);
        console.log("hahahahahha");
      
      })
      .catch((err) => {
        if(err.response.data.message=="The student has not registered for a course"){
          setMessage("")
          return
        }
        console.error(err);
        //Alert.alert(err.response.data.message);
      });
  };

  // if (tok && regNo) {
  //     GetCourseByRegNo();
  // };

  const deletebutton = (courseId, courseName) => {
    Alert.alert(
      "Unregister Course " + courseName,
      "Confirm Delete Course",

      [
        {
          text: "YES",
          onPress: () => deleteCourse(courseId),
        },
        {
          text: "NO",
          onPress: () => Alert.alert("Cancelled"),
        },
      ]
    );
  };

  const emptyComponent = () => {
    return <Text> There are no courses for this department</Text>;
  };

  //deleteCourse(item.courseId)

  return (
    <View testID="container" style={styles.container} r>
      <View testID="header" style={styles.header}>
        <Image
          testID="image"
          source={require("../assets/logo.png")}
          style={styles.image}
        />
        <Text testID="text" style={styles.text}>
          Welcome {regNo}
        </Text>
      </View>

      <View testID="body" style={styles.body}>
        <Text style={styles.text}>View Selected Courses</Text>

        <View style={styles.content}>
          {!message && (
            <View>
              <Text>Please register for a course</Text>
            </View>
          )}
          

          <FlatList
            keyExtractor={(item) => item.courseId}
            data={message}
            // ListHeaderComponent={columns}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => {
                  Alert.alert(item.courseCode);
                }}
              >
                <ItemCard>
                  <View testID="item" style={styles.item}>
                    <Text> Course Name : {item.courseName} </Text>
                    <Text> Status : {item.status} </Text>
                    <Text> Unit : {item.unit} </Text>

                    <TouchableOpacity
                      onPress={() =>
                        deletebutton(item.courseId, item.courseName)
                      }
                    >
                      <View testID="button-Del" style={styles.buttonDelete}>
                        <Text testID="buttonText" style={styles.buttonText}>
                          Delete
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </ItemCard>
              </TouchableOpacity>
            )}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
            //ListEmptyComponent={emptyComponent}
          />
        </View>
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
  },

  header: {
    padding: 40,
    flex: 0.1,
    alignSelf: "flex-start",
  },
  body: {
    flex: 0.8,
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
  buttonDelete: {
    borderRadius: 8,
    paddingVertical: 1,
    paddingHorizontal: 1,
    backgroundColor: "#D8CBB5",
    borderColor: "#A29898",
    borderWidth: 1,
    width: 80,
  },
  buttonText: {
    color: "black",
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: 15,
  },
  item: {
    color: "black",
    fontSize: 12,
  },
});
