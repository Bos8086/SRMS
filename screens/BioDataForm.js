import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Button,
  TextInput,
  View,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Alert,
  Platform
} from "react-native";
import { Formik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { secureGet } from "../ExternalVariables/storage";
// import { launchImageLibrary, showImagePicker} from 'react-native-image-picker';
import * as ImagePicker from "expo-image-picker";
import {BASE_URL} from '../shared/constants';
import Spinner from "react-native-loading-spinner-overlay/lib";
import { Provider as PaperProvider } from 'react-native-paper';
import DropDown from "react-native-paper-dropdown";
import DatePicker from 'react-native-date-picker';
import RNDateTimePicker, { DateTimePickerAndroid } from "@react-native-community/datetimepicker";
import DateTimePickerModal from 'react-native-modal-datetime-picker'
import { FontAwesome } from "@expo/vector-icons";

// import { useNavigation } from '@react-navigation/native';

const reviewSchema = yup.object({
  fName: yup.string().required("No MatricNo/Username provided"),
  surName: yup.string().required("No Surname Provided"),
  midName: yup
    .string()
    .required("Please Provide middle name, type none if no middle name"),
  jambNo: yup.string().required("JAMB NO required"),
  dateOfBirth: yup
    .string()
    //.matches(/^\\d{2}-\\d{2}-\\d{4}$/, 'Invalid date (DD-MM-YYYY)')
    .required("Please put date of birth in the Format : DD-MM-YYYY"),
  age: yup.string().required("No Age Provided"),
  sex: yup.string().required("No Sex provided"),
  mStatus: yup.string().required("No Marital Status given"),
  faculty: yup.string().required("No Faculty provided"),
  department: yup.string().required("No Department provided"),
  address: yup.string().required("No Address provided"),
  email: yup.string().email().required("No Email provided"),
  phoneNo: yup.string().required("No phone Number provided"),
  nationality: yup.string().required("No Nationality provided"),
  religion: yup.string().required("No Religion provided"),
  stOfOrg: yup.string().required("No State of Origin provided"),
  lga: yup.string().required("No LGA provided"),
  parName: yup.string().required("No Parent Name Provided"),
  parAdd: yup.string().required("No Parent Address Provided"),
  occName: yup.string().required("No Parent Occupation Provided"),
  parEmail: yup.string().email().required("No Parent Email Provided"),
  parNO: yup.string().required("No Parent Phone Number provided"),
  picture: yup.string().required('File has not been uploaded'),
});

const Marital = [
  {label:"Single",value:"single"},
  {label:"Married",value:"married"},
  {label:"Divorced",value:"divorced"}
]

const Sog = [
  {label: "Abia", value: "abia" },
  {label: "Adamawa", value: "adamawa" },
  { label: "Akwa Ibom", value: "Akwa Ibom" },
  { label: "Anambra", value: "Anambra" },
  { label: "Bauchi", value: "Bauchi" },
  { label: "Bayelsa", value: "Bayelsa" },
  { label: "Benue", value: "Benue" },
  { label: "Borno", value: "Borno" },
  { label: "Cross River", value: "Cross River" },
  { label: "Delta", value: "Delta" },
  { label: "Ebonyi", value: "Ebonyi" },
  { label: "Edo", value: "Edo" },
  { label: "Ekiti", value: "Ekiti" },
  { label: "Enugu", value: "Enugu" },
  { label: "Gombe", value: "Gombe" },
  { label: "Imo", value: "Imo" },
  { label: "Jigawa", value: "Jigawa" },
  { label: "Kaduna", value: "Kaduna" },
  { label: "Kano", value: "Kano" },
  { label: "Katsina", value: "Katsina" },
  { label: "Kebbi", value: "Kebbi" },
  { label: "Kogi", value: "Kogi" },
  { label: "Kwara", value: "Kwara" },
  { label: "Lagos", value: "Lagos" },
  { label: "Nasarawa", value: "Nasarawa" },
  { label: "Niger", value: "Niger" },
  { label: "Ogun", value: "Ogun" },
  { label: "Ondo", value: "Ondo" },
  { label: "Osun", value: "Osun" },
  { label: "Oyo", value: "Oyo" },
  { label: "Plateau", value: "Plateau" },
  { label: "Rivers", value: "Rivers" },
  { label: "Sokoto", value: "Sokoto" },
  { label: "Taraba", value: "Taraba" },
  {label: "Yobe", value: "Yobe" },
  {label: "Zamfara", value: "Zamfara"}    
]

const Sex = [
{label:"Male", value:"male"},
{label:"Female",value:"female"},
{label:"Others",value:"others"}
]
const Religion = [
  {label:"Christian",value:"christian"},
  {label:"Islam",value:"islam"},
  {label:"Others",value:"others"},
  {label:"Traditional Worshipper",value:"Traditional Worshipper"},
  {label:"Aethist",value:"aethist"},
]

export default function BioDataForm({ navigationValue }) {
  const InsertAPIURL = `${BASE_URL}/student/save_biodata`;
  //const InsertAPIURL = "https://s-r-m-s2022.herokuapp.com/api/v1/student/save_biodata";

  const [tok, setToke] = useState("");
  const [message, setMessage] = useState("");
  const [fileName, setfilename] = useState("");
  const [uri, setUri] = useState("");
  secureGet("token", setToke);
  const [signinValues, setSigninValues] = useState([]);
  const [spinner,setSpinner] = useState();
  const [showDropDownReligion, setShowDropDownReligion] = useState(false);
  const [showDropDownSog, setShowDropDownSog] = useState(false);
  const [showDropDownSex, setShowDropDownSex] = useState(false);
  const [showDropDownMstatus, setShowDropDownMstatus] = useState(false);
  const [Datepicker, setDatePicker] = useState(false);
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false)
  //const [hideDatePicker,setHideDatePicker] = useState(false);
  const [selectedDate, setSelectedDob] = useState('');

const monthName = [
  'January','February','March','April','May','June','July',
  'August','September','October','November','December'
]

const hideDatePicker =  () => {
    setDatePickerVisibility(false)
}

const handleConfirm = (selectedDate) => {
  const formattedDate = formatDate(selectedDate);
  setSelectedDob(formattedDate)
}

const[isDatePickerVisible,setDatePickerVisibility] = useState(false);

  const formatDate = (date) => {
    const day = date.getDate();
    const month = monthName[date.getMonth()];
    const year = date.getFullYear();
    return `${day}-${month.substring(0,3)}-${year}`;
  }
const onDateChange = (selectedDate) => {
    const currentDate = formatDate(selectedDate);
    setSelectedDob(currentDate)
}




const showmode = (currentMode) => {
    DateTimePickerAndroid.open({
      value: date,
      onChange: onDateChange
    })
} 

const showDatepicker = () => {
      showmode("date");
}

const showDatePicker = ()=>{
  setDatePickerVisibility(true);
}



  const getSigninDetails = (signinValues) => {
    <List />;
  };

  

 
    return (
    <View style>
      <Formik
        initialValues={{
          fName: "",
          surName: "",
          midName: "",
          jambNo: "",
          dateOfBirth: "",
          age: "",
          sex: "",
          mStatus: "",
          faculty: "",
          department: "",
          address: "",
          email: "",
          phoneNo: "",
          nationality: "",
          religion: "",
          stOfOrg: "",
          lga: "",
          parName: "",
          occName: "",
          parAdd: "",
          parEmail: "",
          parNO: "",
          picture: "",
        }}
        validationSchema={reviewSchema}
        onSubmit={(values, { resetForm }) => {
          const savetobiodata = async () => {
            const form = new FormData();
            form.append("picture", values.picture);
            form.append("jambNo", values.jambNo);
            form.append("fName", values.fName);
            form.append("parNO", values.parNO);
            form.append("parAdd", values.parAdd);
            form.append("parName", values.parName);
            form.append("address", values.address);
            form.append("age", values.age);
            form.append("dateOfBirth", values.dateOfBirth);
            form.append("department", values.department);
            form.append("email", values.email);
            form.append("lga", values.lga);
            form.append("mStatus", values.mStatus);
            form.append("sex", values.sex);
            form.append("faculty", values.faculty);
            form.append("nationality", values.nationality);
            form.append("surName", values.surName);
            form.append("religion", values.religion);
            form.append("parEmail", values.parEmail);
            form.append("phoneNo", values.phoneNo);
            form.append("stOfOrg", values.stOfOrg);
            form.append("occName", values.occName);
            form.append("midName", values.midName);
            //console.log(" form = " ,form);

            var headers = {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + tok,
            };

            //console.log(" BiomedPicFinal ",values.uri);
            //console.log("values",values)

            await axios
              .create({ headers })
              .post(InsertAPIURL, values)
              .then((res) => {

                <Spinner
                visible= {spinner}
                textContent={'Loading...'}
                textStyle={styles.spinnerTextStyle}
                size={"large"}
                />
                

                console.log("pressed biodata  and here");
                console.log("response", res?.data);
                setMessage(res?.data);
                Alert.alert(res?.data.message);

                if (message == "Thank you") {
                  setSpinner(false)
                  resetForm();
                }
              })
              .catch((err) => {
                if(err.response.data.responseCode == 22){
                  Alert.alert(err.response.data.message);
                }
                if(err.response.data.responseCode == 33){
                  console.log("response",err.response.data.errorFields);
                  let eRR = Object.values(err.response.data.errorFields);
                  console.log("responseErr",eRR);
                  let errString = "";
                  for (let boma of eRR ){
                    errString += boma+"\n"; 
                  }
                  Alert.alert(errString);
                }
                
                console.log("response",err.response.data.message );
              });
          };

          if (tok) {
            savetobiodata();
          }
        }}
      >
        {(formikprops) => (
          <View>
            <Text>Photo:</Text>
            <TouchableOpacity
              activeOpacity={0.5}
              style={{
                padding: 10,
                backgroundColor: "#ddd",
                borderWidth: 1,
                borderRadius: 6,
                fontSize: 20,
                width: "100%",
              }}
              onPress={async () => {
                let pickerResult = await ImagePicker.launchImageLibraryAsync({
                  base64: true,
                  quality: 1,
                });
                if (pickerResult.cancelled === true) {
                  return;
                }
                if (pickerResult.fileSize >= 5000000) {
                  Alert.alert("File is too Large");
                } else {
                  setUri(pickerResult.uri);
                  formikprops.setFieldValue("picture", pickerResult.base64);
                  //console.log(pickerResult.base64);
                }
                console.log(pickerResult.fileSize);
              }}
            >
              <Text>Upload A photo</Text>
            </TouchableOpacity>
            <Text style={styles.error}>{formikprops.errors.picture}</Text>
            <TextInput
              style={styles.input}
              placeholder="First Name"
              onChangeText={formikprops.handleChange("fName")}
              value={formikprops.values.fName}
            />
            <Text style={styles.error}>{formikprops.errors.fName}</Text>
            <TextInput
              style={styles.input}
              placeholder="Surname"
              onChangeText={formikprops.handleChange("surName")}
              value={formikprops.values.surName}
            />
            <Text style={styles.error}>{formikprops.errors.surName}</Text>
            <TextInput
              style={styles.input}
              placeholder="Middle Name"
              onChangeText={formikprops.handleChange("midName")}
              value={formikprops.values.midName}
            />
            <Text style={styles.error}>{formikprops.errors.midName}</Text>
            <TextInput
              style={styles.input}
              placeholder="JAMB Registration Number"
              onChangeText={formikprops.handleChange("jambNo")}
              value={formikprops.values.jambNo}
            />

            <Text style={styles.error}>{formikprops.errors.jambNo}</Text>
            
       
{/*       
            <TouchableOpacity onPress={()=>
            
            <DateTimePickerModal
            isVisible={true}
            mode="date"
            onConfirm={true}
            onCancel={hideDatePicker}
            date={date}
            is24Hour
            locale="en_GB"

            />

          }
            >
              <Text>
                DOB
              </Text>
              <TextInput
                style={styles.input}
                placeholder="Date of Birth"
                onChangeText={formikprops.handleChange("dateOfBirth")}
                value={formikprops.values.dateOfBirth}
              />
            </TouchableOpacity> */}

<View style={{ flexDirection: 'row' }}>
                <TextInput
                  style={styles.input}
                  // value={selectedDob}
                  value={formikprops.values.dateOfBirth}
                  editable={false}
                  mode="outlined"
                  label={'dob'}
                  selectionColor="#2E6DA8"
                  outlineColor="#cdcdcd"
                  activeOutlineColor="#2E6DA8"
                  // onChangeText={txt => {
                  //   setSelectedDob(txt);
                  //   fieldsFilled(txt);
                  // }}
                  autoCapitalize="none"
                />
                {Platform.OS === 'android' ? (
                  <TouchableOpacity onPress={showDatepicker}>
                    <FontAwesome
                      name="calendar"
                      size={24}
                      color="grey"
                      // onPress={showDatepicker}
                      style={{
                        position: 'absolute',
                        right: 10,
                        top: 15,
                        marginLeft: 0
                      }}
                    />
                  </TouchableOpacity>
                ) : (
                  <FontAwesome
                    name="calendar"
                    size={24}
                    color="grey"
                    onPress={showDatePicker}
                    style={{
                      position: 'absolute',
                      right: 10,
                      top: 15,
                      marginLeft: 0
                    }}
                  />
                )}

                <DateTimePickerModal
                  isVisible={isDatePickerVisible}
                  mode="date"
                  onConfirm={handleConfirm}
                  onCancel={hideDatePicker}
                  locale="en_GB"
                  date={date}
                  testID="dateTimePicker"
                  is24Hour
                  minimumDate={new Date('1910-01-01')}
                  maximumDate={new Date('2022-01-01')}
                />
                {/* )} */}
              </View>

            
            <Text style={styles.error}>{formikprops.errors.dateOfBirth}</Text>

            <TextInput
              style={styles.input}
              placeholder="Age"
              onChangeText={formikprops.handleChange("age")}
              value={formikprops.values.age}
            />
            <Text style={styles.error}>{formikprops.errors.age}</Text>

            {/* <TextInput
              style={styles.input}
              placeholder="Sex"
              onChangeText={formikprops.handleChange("sex")}
              value={formikprops.values.sex}
            /> */}

                <DropDown
                    label={"Sex"}
                    mode={"flat"}
                    visible={showDropDownSex}
                    showDropDown={() => setShowDropDownSex(true)}
                    onDismiss={() => setShowDropDownSex(false)}
                    value={formikprops.values.sex}
                    setValue={formikprops.handleChange('sex')}
                    list={Sex}
                    //dropDownStyle={}
                    //dropDownItemSelectedStyle={styles.dropDown}
                    //dropDownItemTextStyle={styles.input}
                    />
            <Text style={styles.error}>{formikprops.errors.sex}</Text>

            {/* <TextInput
              style={styles.input}
              placeholder="Marital Status"
              onChangeText={formikprops.handleChange("mStatus")}
              value={formikprops.values.mStatus}
            /> */}
             <DropDown
                    label={"Marital Status"}
                    mode={"flat"}
                    visible={showDropDownMstatus}
                    showDropDown={() => setShowDropDownMstatus(true)}
                    onDismiss={() => setShowDropDownMstatus(false)}
                    value={formikprops.values.mStatus}
                    setValue={formikprops.handleChange('mStatus')}
                    list={Marital}
               />     
            <Text style={styles.error}>{formikprops.errors.mStatus}</Text>

            <TextInput
              style={styles.input}
              placeholder="Faculty"
              onChangeText={formikprops.handleChange("faculty")}
              value={formikprops.values.faculty}
            />
            <Text style={styles.error}>{formikprops.errors.faculty}</Text>
            <TextInput
              style={styles.input}
              placeholder="Department"
              onChangeText={formikprops.handleChange("department")}
              value={formikprops.values.department}
            />
            <Text style={styles.error}>{formikprops.errors.department}</Text>
            <TextInput
              style={styles.input}
              placeholder="Address"
              onChangeText={formikprops.handleChange("address")}
              value={formikprops.values.address}
            />
            <Text style={styles.error}>{formikprops.errors.address}</Text>
            <TextInput
              style={styles.input}
              placeholder="Email"
              onChangeText={formikprops.handleChange("email")}
              value={formikprops.values.email}
            />
            <Text style={styles.error}>{formikprops.errors.email}</Text>

            <TextInput
              style={styles.input}
              placeholder="Phone No"
              onChangeText={formikprops.handleChange("phoneNo")}
              value={formikprops.values.phoneNo}
            />
            <Text style={styles.error}>{formikprops.errors.phoneNo}</Text>
            <TextInput
              style={styles.input}
              placeholder="Nationality"
              onChangeText={formikprops.handleChange("nationality")}
              value={formikprops.values.nationality}
            />
            <Text style={styles.error}>{formikprops.errors.nationality}</Text>
            {/* <TextInput
              style={styles.input}
              placeholder="Religion"
              onChangeText={formikprops.handleChange("religion")}
              value={formikprops.values.religion}
            /> */}
             <DropDown
                    label={"Religion"}
                    mode={"flat"}
                    visible={showDropDownReligion}
                    showDropDown={() => setShowDropDownReligion(true)}
                    onDismiss={() => setShowDropDownReligion(false)}
                    value={formikprops.values.religion}
                    setValue={formikprops.handleChange('religion')}
                    list={Religion}
                    />
 
            <Text style={styles.error}>{formikprops.errors.religion}</Text>
            {/* <TextInput
              style={styles.input}
              placeholder="State of Origin"
              onChangeText={formikprops.handleChange("stOfOrg")}
              value={formikprops.values.stOfOrg}
            /> */}
            <DropDown
                    label={"State of Origin" }
                    mode={"flat"}
                    visible={showDropDownSog}
                    showDropDown={() => setShowDropDownSog(true)}
                    onDismiss={() => setShowDropDownSog(false)}
                    value={formikprops.values.stOfOrg}
                    setValue={formikprops.handleChange('stOfOrg')}
                    list={Sog}

                    //style={{ backgroundColor: 'white', padding: 8, borderRadius: 4 }}
                    //dropDownStyle={styles.dropDown}
                    dropDownItemSelectedStyle={styles.dropDown}
                    //dropDownItemTextStyle={styles.input}
                    />
            <Text style={styles.error}>{formikprops.errors.stOfOrg}</Text>
            <TextInput
              style={styles.input}
              placeholder="LGA"
              onChangeText={formikprops.handleChange("lga")}
              value={formikprops.values.lga}
            />
            <Text style={styles.error}>{formikprops.errors.lga}</Text>
            <TextInput
              style={styles.input}
              placeholder="Parents/Guardians Name"
              onChangeText={formikprops.handleChange("parName")}
              value={formikprops.values.parName}
            />
            <Text style={styles.error}>{formikprops.errors.parName}</Text>
            <TextInput
              style={styles.input}
              placeholder="Occupation of Parent/Guardian"
              onChangeText={formikprops.handleChange("occName")}
              value={formikprops.values.occName}
            />
            <Text testID="error" style={styles.error}>{formikprops.errors.occName}</Text>
            <TextInput
              style={styles.input}
              placeholder="Parent Address"
              onChangeText={formikprops.handleChange("parAdd")}
              value={formikprops.values.parAdd}
            />
            <Text style={styles.error}>{formikprops.errors.parAdd}</Text>
            <TextInput
            testID="input"
              style={styles.input}
              placeholder="Parent/Guardian Email"
              onChangeText={formikprops.handleChange("parEmail")}
              value={formikprops.values.parEmail}
            />
            <Text style={styles.error}>{formikprops.errors.parEmail}</Text>
            <TextInput
              style={styles.input}
              placeholder="Parent/Guardian Phone No"
              onChangeText={formikprops.handleChange("parNO")}
              value={formikprops.values.parNO}
            />
            <Text style={styles.error}>{formikprops.errors.parNO}</Text>

            <View style={styles.space} />

            <TouchableOpacity onPress={formikprops.handleSubmit}>
              <View testID="savebutn" style={styles.savebutn}>
                <Text testID="savedetails" style={styles.savedetails}>Save</Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   padding:20,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
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
  smalltext: {
    fontSize: 10,
    fontWeight: "bold",
    textAlign: "center",
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
  dropDown:{
    borderRadius:1,
    elevation:100,
    backgroundColor: 'rgba(247,246,246, 0.9)',
    marginHorizontal:30,
    marginVertical:6,
    borderColor: "#A39E9E",
    borderWidth: 1,
    marginHorizontal: 20,
    marginVertical:20,
  }
});

// console.log("I have been clicked");

// let options = {
//     mediaType : 'photo',
//     quality: 1,
//     includeBased64: true,
// };

// try {
//     console.log("hererere");
//     showImagePicker(options, response => {
//         console.log("am I here been clicked?");
//         if(response?.didCancel){
//             Alert.alert('Cancelled Image Selection');
//         } else if(response?.errorCode == 'permission'){
//             Alert.alert('permission not satisfied');
//         }
//         else if(response?.errorCode == 'others'){
//             console.log("am I here been clicked?");
//             Alert.alert(response?.errorMessage);
//         }else if(response?.assets[0].fileSize > 2097152){
//             Alert.alert(
//                 "Maximum Image size exceeded",
//                 "Please choose image under 2MB",
//                 [{text:"ok"}],
//             );
//         }

//         else {
//             //setPic(response?.assets[0].base64);
//             formikprops.setFieldValue('picture', response?.assets[0].base64);
//         }
//     });

// } catch (error) {
//     console.log("am I here been? ereere");
//     Alert.alert("Error" + error)

// };
