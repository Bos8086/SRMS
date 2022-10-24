import React, { useState,useEffect } from 'react';
import { StyleSheet, Button , TextInput , View , Text, TouchableWithoutFeedback, TouchableOpacity, Alert } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import { secureGet } from '../ExternalVariables/storage';
// import { launchImageLibrary, showImagePicker} from 'react-native-image-picker';
import * as ImagePicker from 'expo-image-picker';
// import { useNavigation } from '@react-navigation/native';

const reviewSchema = yup.object({
    fName: yup.string().required('No MatricNo/Username provided'),
    surName: yup.string().required('No Surname Provided'),
    midName: yup.string().required('Please Provide middle name, type none if no middle name'),
    jambNo: yup.string().required('JAMB NO required'),
    dateOfBirth: yup.string().required('Please put date of birth in the Format : DD-MM-YYYY'),
    age: yup.string().required('No Age Provided'),
    sex: yup.string().required('No Sex provided'),
    mStatus: yup.string().required('No Marital Status given'),
    faculty:yup.string().required('No Faculty provided'),
    department:yup.string().required('No Department provided'),
    address:yup.string().required('No Address provided'),
    email:yup.string().required('No Email provided'),
    phoneNo:yup.string().required('No phone Number provided'),
    nationality:yup.string().required('No Nationality provided'),
    religion:yup.string().required('No Religion provided'),
    stOfOrg:yup.string().required('No State of Origin provided'),
    lga:yup.string().required('No LGA provided'),
    parName:yup.string().required('No Parent Name Provided'),
    parAdd:yup.string().required('No Parent Address Provided'),
    occName:yup.string().required('No Parent Occupation Provided'),
    parEmail:yup.string().required('No Parent Email Provided'),
    parNO:yup.string().required('No Parent Phone Number provided'),
    //picture: yup.string().required('File has not been uploaded'),
})


export default function BioDataForm({navigationValue}){
   //const InsertAPIURL = "http://127.0.0.1:9021/api/v1/student/save_biodata";
   const InsertAPIURL = "https://s-r-m-s2022.herokuapp.com/api/v1/student/save_biodata"; 
    


    
    const [tok, setToke ]= useState("");
    const [message,setMessage] = useState("");
    const [fileName,setfilename] = useState("");
    const [uri,setUri] = useState("");
    secureGet('token', setToke);
    const [signinValues,setSigninValues] = useState([])
    const getSigninDetails = (signinValues) => {<List />}
    return(         
        <View style>
            <Formik 
            initialValues = {{ fName:'',surName:'',midName:'',jambNo:'',dateOfBirth:'',
            age:'',sex:'',mStatus:'',faculty:'',department:'',
            address:'',email:'',phoneNo:'',nationality:'',religion:'',
            stOfOrg:'',lga:'',parName:'',occName:'',parAdd:'',
            parEmail:'',parNO:'',picture: ''}}
            validationSchema={reviewSchema}

            onSubmit = {(values, { resetForm }) => {
                    const savetobiodata = async() => {
                        const form = new FormData();
                        form.append('picture',values.picture);
                        form.append('jambNo',values.jambNo);
                        form.append('fName',values.fName);
                        form.append('parNO',values.parNO);
                        form.append('parAdd',values.parAdd);
                        form.append('parName',values.parName);
                        form.append('address',values.address);
                        form.append('age',values.age);
                        form.append('dateOfBirth',values.dateOfBirth);
                        form.append('department',values.department);
                        form.append('email',values.email);
                        form.append('lga',values.lga);
                        form.append('mStatus',values.mStatus);
                        form.append('sex',values.sex);
                        form.append('faculty',values.faculty);
                        form.append('nationality',values.nationality);
                        form.append('surName',values.surName);
                        form.append('religion',values.religion);
                        form.append('parEmail',values.parEmail);
                        form.append('phoneNo',values.phoneNo);
                        form.append('stOfOrg',values.stOfOrg);
                        form.append('occName',values.occName);
                        form.append('midName',values.midName);
                        //console.log(" form = " ,form);
                     
                        var headers = {
                             'Accept': 'application/json',
                            'Content-Type': 'application/json' ,
                            'Authorization': 'Bearer ' +  tok,
                          };
                          
                          
                          //console.log(" BiomedPicFinal ",values.uri);
                          //console.log("values",values)
                        
                          
            
                        
                        await axios.create({headers}).post(InsertAPIURL,values)
                        .then((res)=>{
                            console.log("pressed biodata  and here")
                                console.log("response" ,res?.data);
                                setMessage(res?.data);
                                Alert.alert(res?.data.message);

                                if(message=="Thank you"){
                                    resetForm();
                                }
                               
                                
                        })
                        .catch((err)=>{
                                console.error(err);
                        });
                
                        };
                
                        if (tok){
                            savetobiodata();
                        };
                }  



                    
                
               
                
                
                
            }     
            >
              {(formikprops) => (

                
                <View > 
                     <Text>Photo:</Text>
                     <TouchableOpacity
                        activeOpacity={0.5}
                        style={{
                            padding:10,
                            backgroundColor: '#ddd',
                            borderWidth: 1,
                            borderRadius: 6,
                            fontSize:20,
                            width: '100%',
                }}

                onPress =
                
                {
                    async () => {
                    let pickerResult = await ImagePicker.launchImageLibraryAsync(
                        {base64: true,
                         quality: 1,}
                        
                    );
                    if (pickerResult.cancelled === true) {
                    return;
                    }
                    setUri(pickerResult.uri);
                    formikprops.setFieldValue('picture', pickerResult.base64)
                    console.log(pickerResult.base64);
                }}
              >
                <Text>Upload A photo</Text>
              </TouchableOpacity>
              <Text style = {styles.error}>{formikprops.errors.picture}</Text>
                    <TextInput
                        style = {styles.input}
                        placeholder='First Name'
                        onChangeText={formikprops.handleChange('fName')}
                        value={formikprops.values.fName}
                    />
                    <Text style = {styles.error}>{formikprops.errors.fName}</Text>
                    <TextInput
                       
                        style = {styles.input}
                        placeholder='Surname'
                        onChangeText={formikprops.handleChange('surName')}
                        value={formikprops.values.surName}
                    /> 
                     <Text style = {styles.error}>{formikprops.errors.surName}</Text>
                     <TextInput
                        style = {styles.input}
                        placeholder='Middle Name'
                        onChangeText={formikprops.handleChange('midName')}
                        value={formikprops.values.midName}
                    />
                    <Text style = {styles.error}>{formikprops.errors.midName}</Text>
                    <TextInput

                        
                        style = {styles.input}
                        placeholder='JAMB Registration Number'
                        onChangeText={formikprops.handleChange('jambNo')}
                        value={formikprops.values.jambNo}
                    /> 

                     <Text style = {styles.error}>{formikprops.errors.jambNo}</Text>
                     <TextInput
                        style = {styles.input}
                        placeholder='Date of Birth'
                        onChangeText={formikprops.handleChange('dateOfBirth')}
                        value={formikprops.values.dateOfBirth}
                    />
                    <Text style = {styles.error}>{formikprops.errors.dateOfBirth}</Text>

          
                    <TextInput
                        style = {styles.input}
                        placeholder='Age'
                        onChangeText={formikprops.handleChange('age')}
                        value={formikprops.values.age}
                    /> 
                    <Text style = {styles.error}>{formikprops.errors.age}</Text>

                 



                    <TextInput
                        style = {styles.input}
                        placeholder='Sex'
                        onChangeText={formikprops.handleChange('sex')}
                        value={formikprops.values.sex}
                    /> 
                    <Text style = {styles.error}>{formikprops.errors.sex}</Text>

                   
                   


                    
                    <TextInput
                        style = {styles.input}
                        placeholder='Marital Status'
                        onChangeText={formikprops.handleChange('mStatus')}
                        value={formikprops.values.mStatus}
                    /> 
                    <Text style = {styles.error}>{formikprops.errors.mStatus}</Text>
                    

               
                     <TextInput
                        style = {styles.input}
                        placeholder='Faculty'
                        onChangeText={formikprops.handleChange('faculty')}
                        value={formikprops.values.faculty}
                    />
                    <Text style = {styles.error}>{formikprops.errors.faculty}</Text>
                    <TextInput
                        style = {styles.input}
                        placeholder='Department'
                        onChangeText={formikprops.handleChange('department')}
                        value={formikprops.values.department}
                    /> 
                     <Text style = {styles.error}>{formikprops.errors.department}</Text>
                     <TextInput
                        style = {styles.input}
                        placeholder='Address'
                        onChangeText={formikprops.handleChange('address')}
                        value={formikprops.values.address}
                    />
                    <Text style = {styles.error}>{formikprops.errors.address}</Text>
                    <TextInput
                        style = {styles.input}
                        placeholder='Email'
                        onChangeText={formikprops.handleChange('email')}
                        value={formikprops.values.email}
                    /> 
                     <Text style = {styles.error}>{formikprops.errors.email}</Text>

                     <TextInput
                        style = {styles.input}
                        placeholder='Phone No'
                        onChangeText={formikprops.handleChange('phoneNo')}
                        value={formikprops.values.phoneNo}
                    />
                    <Text style = {styles.error}>{formikprops.errors.phoneNo}</Text>
                    <TextInput
                        style = {styles.input}
                        placeholder='Nationality'
                        onChangeText={formikprops.handleChange('nationality')}
                        value={formikprops.values.nationality}
                    /> 
                     <Text style = {styles.error}>{formikprops.errors.nationality}</Text>
                     <TextInput
                        style = {styles.input}
                        placeholder='Religion'
                        onChangeText={formikprops.handleChange('religion')}
                        value={formikprops.values.religion}
                    />
                    <Text style = {styles.error}>{formikprops.errors.religion}</Text>
                    <TextInput
                        style = {styles.input}
                        placeholder='State of Origin'
                        onChangeText={formikprops.handleChange('stOfOrg')}
                        value={formikprops.values.stOfOrg}
                    /> 
                     <Text style = {styles.error}>{formikprops.errors.stOfOrg}</Text>
                     <TextInput
                        style = {styles.input}
                        placeholder='LGA'
                        onChangeText={formikprops.handleChange('lga')}
                        value={formikprops.values.lga}
                    />
                    <Text style = {styles.error}>{formikprops.errors.lga}</Text>
                    <TextInput
                        style = {styles.input}
                        placeholder='Parents/Guardians Name'
                        onChangeText={formikprops.handleChange('parName')}
                        value={formikprops.values.parName}
                    /> 
                     <Text style = {styles.error}>{formikprops.errors.parName}</Text>
                     <TextInput
                        style = {styles.input}
                        placeholder='Occupation of Parent/Guardian'
                        onChangeText={formikprops.handleChange('occName')}
                        value={formikprops.values.occName}
                    />
                    <Text style = {styles.error}>{formikprops.errors.occName}</Text>
                     <TextInput
                        style = {styles.input}
                        placeholder='Parent Address'
                        onChangeText={formikprops.handleChange('parAdd')}
                        value={formikprops.values.parAdd}
                    />
                    <Text style = {styles.error}>{formikprops.errors.parAdd}</Text>
                    <TextInput
                    
                        style = {styles.input}
                        placeholder='Parent/Guardian Email'
                        onChangeText={formikprops.handleChange('parEmail')}
                        value={formikprops.values.parEmail}
                    /> 
                     <Text style = {styles.error}>{formikprops.errors.parEmail}</Text>
                     <TextInput
                        style = {styles.input}
                        placeholder='Parent/Guardian Phone No'
                        onChangeText={formikprops.handleChange('parNO')}
                        value={formikprops.values.parNO}
                    />
                    <Text style = {styles.error}>{formikprops.errors.parNO}</Text>
                    
                    
                     <View style={styles.space} />
                


                    <TouchableOpacity onPress={formikprops.handleSubmit }>
                        
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
    // container: {
    //   flex: 1,
    //   padding:20,
    //   alignItems: 'center',
    //   justifyContent: 'center',
    // },
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
    },
    error:{
        fontSize:10,
        fontWeight:"bold"
    },
    smalltext:{
        fontSize:10,
        fontWeight:"bold",
        textAlign: "center"
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
