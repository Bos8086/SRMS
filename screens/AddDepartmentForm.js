import { StyleSheet, Button , TextInput , View , Text, TouchableWithoutFeedback, TouchableOpacity, Alert, SectionList } from "react-native";
import  { useState }  from 'react';
import { secureGet } from '../ExternalVariables/storage';
import { Formik, yupToFormErrors } from 'formik';
import * as yup from 'yup';
import FlatButton from "../shared/button";
import axios from "axios";
import  { countAllDepartments,displayAllDepartments} from "./AdminSubjectManagement";


const reviewSchema = yup.object({
    deptName: yup.string().required("Please input department"),
})




export default function AddDepartmentForm({}){
    const[message,setMessage] = useState();
    const [tok, setToke ]= useState("");
    const [list,setlist] = useState([]);
    secureGet('token', setToke);

    const createDepartmentAPIURL = "https://s-r-m-s2022.herokuapp.com/api/v1/admin/create_department";

    var headers = {
        'Accept': 'application/json',
       'Content-Type': 'application/json' ,
       'Authorization': 'Bearer ' +  tok,
     };

     return(

     <View>
         <Formik 
         initialValues={{deptName:""}}
         validationSchema={reviewSchema}
         onSubmit={(values, { resetForm }) => {
            const createDepartment = async() => {
                await axios.create({headers}).post(createDepartmentAPIURL,values)
                .then((res)=>{
                    setMessage(res?.data)
                    countAllDepartments(tok,setMessage);  
                    displayAllDepartments(tok,setlist); 
                   
                    console.log("Response",res?.data);
                    Alert.alert(res?.data.message)
                })
                .catch((err)=>{
                    console.error(err);
            });
    
             }

             if (tok){
                createDepartment();
            };


         }}
         >
            {(formikProps) => (
                <View>
                    <TextInput
                    style = {styles.input}
                    placeholder='Department Name'
                    onChangeText={formikProps.handleChange('deptName')}
                    value={formikProps.values.deptName.toUpperCase()}
                    />
                     <Text style = {styles.error}>{formikProps.errors.deptName}</Text>
                    <TouchableOpacity onPress={formikProps.handleSubmit}>
                        <View style = {styles.savebutn}>
                            <Text style={styles.savedetails}>Save</Text>
                        </View>   
                    </TouchableOpacity>   
                 </View>
                
            )}      
         </Formik>
     </View>

     )
}

const styles = StyleSheet.create({
    input:{
        padding:10,
        backgroundColor: '#ddd',
        borderWidth: 1,
        borderRadius: 6,
        fontSize:20,
        width: '100%',
      },
      text:{
        fontSize:30,
        fontWeight:"bold",
        textAlign: "center"
    }, error:{
        fontSize:10,
        fontWeight:"bold"
    },
    savedetails:{ 
    
        fontSize:20,
        fontWeight:"bold",
        textAlign: "center"
        
    },
    savebutn:{
        alignSelf:'flex-end',
        alignItems:'flex-end',
        borderRadius: 8,
        paddingVertical: 14,
        paddingHorizontal: 30,
        backgroundColor: '#7DBAE2',
        borderColor: "#000000",
        borderWidth: 2
    },

})