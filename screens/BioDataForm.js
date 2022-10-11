import React, { useState } from 'react';
import { StyleSheet, Button , TextInput , View , Text, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import SigninForm from './SigninForm';
import { secureGet } from '../ExternalVariables/storage';
import { launchImageLibrary } from 'react-native-image-picker';
// import { useNavigation } from '@react-navigation/native';

const reviewSchema = yup.object({
    fName: yup.string().required('No MatricNo/Username provided'),
    surName: yup.string().required('No Surname Provided'),
    midName: yup.string().required('Please Provide middle name, type none if no middle name'),
    jambNo: yup.string().required('JAMB NO required'),
    dateOfBirth: yup.string().required('Please put date of birth'),
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
    //picture: yup.string().required('File has not been uploaded')
})


export default function BioDataForm({navigationValue}){
    
    const [tok, setToke ]= useState("");
    const [signinValues,setSigninValues] = useState([])
    const getSigninDetails = (signinValues) => {<List />}
    return(         
        <View style>
            <Formik 
            initialValues = {{ fName:'',surName:'',midName:'',jambNo:'',dateOfBirth:'',
            age:'',sex:'',mStatus:'',faculty:'',department:'',
            address:'',email:'',phoneNo:'',nationality:'',religion:'',
            stOfOrg:'',lga:'',parName:'',occName:'',parAdd:'',
            parEmail:'',parNO:'',picture:'',}}
            validationSchema={reviewSchema}

            onSubmit = {(values, { resetForm }) => {
                try {
                    secureGet('token', setToke);
                    //const token = secureGet('token');
                    console.log('here is token',tok);
                    console.log(values, 'values');
                    var InsertAPIURL = "https://s-r-m-s2022.herokuapp.com/api/v1/student/save_biodata";
                    var headers = {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        // 'x-client-id' : 'qdfsyrtiyjtyfdrrtyfhr5ui7ytjh',
                        // 'x-client-secret':'ewrwut79u0ypoiufuyuiyutiogiuytuyr',
                        // 'x-source-code':'TEST',
                        'Authorization': 'Bearer ' +  tok
                      };

                      fetch(InsertAPIURL,{
                        method:'POST',
                        headers:headers,
                        body: JSON.stringify(values), //convert data to JSON
                    })
                
                    .then((response)=>{
                        //const x = getLocal('TokenBearer')
                        const d = response.json();
                       // console.log(d, "here");
                        //console.log(getLocal('TokenBearer'))
                        return d;
                        
                        
                    }) //check response type of API (CHECK OUTPUT OF DATA IS IN JSON)
                    .then((response)=>{
                        const { message } = response;
                        if (message == "Thank you") {
                            console.log("true")           
                            navigationValue.navigate("Profile");
                            resetForm();
                          }
                        
                        
                      alert(message);       // If data is in JSON => Display alert msg
    
                      //alert(response[0].Message);       // If data is in JSON => Display alert msg
                      //navigationValue.navigate('HomePage'); //Navigate to next screen if authentications are valid
                    }).catch(e=> console.log(e, "error"))
                    
                    }

                    catch(error){
                        console.log(error);
                        alert("Error Occured");
                        
                    }
                
               
                
                
                
            } }    
            >
              {(formikprops) => (
                <View > 
                     <Text>Photo:</Text>
                     <TouchableOpacity
                        activeOpacity={0.5}
                        style={{
                    backgroundColor: '#04b040',
                    borderRadius: 15,
                  paddingHorizontal: 15,
                  paddingVertical: 5,
                  alignItems: 'center',
                  shadowColor: '#E67E22',
                  shadowOpacity: 0.8,
                  elevation: 8
                }}
                onPress={() => {
                    launchImageLibrary(options, (response) => {
                    if (response.uri) {
                      let data = {
                        name: response.fileName,
                        type: response.type,
                        // uri:
                        //   Platform.OS === 'android'
                        //   ? response.uri
                        //   : response.uri.replace('file://', ''),
                      };
                      formikprops.setFieldValue('picture', data);
                    }
                  });
                }}
              >
                <Text>Open</Text>
              </TouchableOpacity>



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
