import {
  StyleSheet,
  Button,
  TextInput,
  View,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useState } from "react";
import { secureGet } from "../ExternalVariables/storage";
import { Formik, yupToFormErrors } from "formik";
import * as yup from "yup";
import FlatButton from "../shared/button";
import axios from "axios";
import {BASE_URL} from '../shared/constants';


const reviewSchema = yup.object({
  course_code: yup.string().required("Please input course code"),
  nameOfCourse: yup.string().required("Please input Name of Course"),
  course_Descr: yup.string().required("Input Description of Course"),
  status_course: yup.string().required(),
  len_course: yup.string().required(),
  unit_of_course: yup.string().required(),
  status_course: yup.string().required(),
  departmentname: yup.string().required(),
});

export default function AddCourseForm({}) {
  const [message, setMessage] = useState();
  const [tok, setToke] = useState("");
  secureGet("token", setToke);

  const createCoursesAPIURL = `${BASE_URL}/v1/admin/create_courses`;

  var headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: "Bearer " + tok,
  };

  return (
    <View>
      <Formik
        initialValues={{
          course_code: "",
          nameOfCourse: "",
          course_Descr: "",
          len_course: "",
          unit_of_course: "",
          status_course: "",
          departmentname: "",
        }}
        validationSchema={reviewSchema}
        onSubmit={(values, { resetForm }) => {
          const createCourses = async () => {
            await axios
              .create({ headers })
              .post(createCoursesAPIURL, values)
              .then((res) => {
                setMessage(res?.data);
                console.log("Response", res?.data);
                Alert.alert(res?.data.message);
              })
              .catch((err) => {
                console.error(err);
              });
          };

          if (tok) {
            createCourses();
          }
        }}
      >
        {(formikProps) => (
          <View>
            <TextInput
              style={styles.input}
              placeholder="Course Code"
              onChangeText={formikProps.handleChange("course_code")}
              value={formikProps.values.course_code}
            />
            <Text style={styles.error}>{formikProps.errors.course_code}</Text>
            <TextInput
              style={styles.input}
              placeholder="Name of Course"
              onChangeText={formikProps.handleChange("nameOfCourse")}
              value={formikProps.values.nameOfCourse}
            />
            <Text style={styles.error}>{formikProps.errors.nameOfCourse}</Text>
            <TextInput
              style={styles.input}
              placeholder="Course Description"
              onChangeText={formikProps.handleChange("course_Descr")}
              value={formikProps.values.course_Descr}
            />
            <Text style={styles.error}>{formikProps.errors.course_Descr}</Text>
            <TextInput
              style={styles.input}
              placeholder="Length of Course"
              onChangeText={formikProps.handleChange("len_course")}
              value={formikProps.values.len_course}
            />
            <Text style={styles.error}>{formikProps.errors.len_course}</Text>
            <TextInput
              testID="input"
              style={styles.input}
              placeholder="Unit of Course"
              onChangeText={formikProps.handleChange("unit_of_course")}
              value={formikProps.values.unit_of_course}
            />
            <Text style={styles.error}>
              {formikProps.errors.unit_of_course}
            </Text>
            <TextInput
              style={styles.input}
              placeholder="Status of Course"
              onChangeText={formikProps.handleChange("status_course")}
              value={formikProps.values.status_course}
            />
            <Text style={styles.error}>{formikProps.errors.status_course}</Text>
            <TextInput
              style={styles.input}
              placeholder="Name of Department"
              onChangeText={formikProps.handleChange("departmentname")}
              value={formikProps.values.departmentname}
            />
            <Text testID="error" style={styles.error}>
              {formikProps.errors.departmentname}
            </Text>
            <TouchableOpacity onPress={formikProps.handleSubmit}>
              <View testID="savebutton" style={styles.savebutn}>
                <Text testID="savedetails" style={styles.savedetails}>
                  Save
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    padding: 10,
    backgroundColor: "#ddd",
    borderWidth: 1,
    borderRadius: 6,
    fontSize: 20,
    width: "100%",
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
  error: {
    fontSize: 10,
    fontWeight: "bold",
  },
  savedetails: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  savebutn: {
    alignSelf: "flex-end",
    alignItems: "flex-end",
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 30,
    backgroundColor: "#7DBAE2",
    borderColor: "#000000",
    borderWidth: 2,
  },
});
