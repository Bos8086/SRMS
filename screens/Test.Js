import React, { useState } from 'react';
import { StyleSheet, Button , TextInput , View , Text, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import { Formik } from 'formik';
import FlatButton from '../shared/button';
import * as yup from 'yup';
import ModalDropdown from 'react-native-modal-dropdown';
import { onChange } from 'react-native-reanimated';
import DatePicker from 'react-datepicker';

// import { useNavigation } from '@react-navigation/native';



const reviewSchema = yup.object({
   
    FirstName: yup.string().required('No MatricNo/Username provided'),
    SurName: yup.string().required('No Surname Provided'),
    MiddleName: yup.string().required('Please Provide middle name, type none is dont have middle name'),
    JAMBRegNo: yup.string().required('JAMB NO required'),
    DOB: yup.string().required('Please put date of birth'),
    Age: yup.string().required('No Age Provided'),
    Sex: yup.string().required('No Sex provided'),
    MarStatus: yup.string().required('No Marital Status given'),
    Faculty:yup.string().required('No Faculty provided'),
    Department:yup.string().required('No Department provided'),
    Address:yup.string().required('No Address provided'),
    Email:yup.string().required('No Email provided'),
    PhoneNo:yup.string().required('No phone Number provided'),
    Nationality:yup.string().required('No Nationality provided'),
    Religion:yup.string().required('No Religion provided'),
    StofOrigin:yup.string().required('No State of Origin provided'),
    LGA:yup.string().required('No LGA provided'),
    ParentName:yup.string().required('No Parent Name Provided'),
    ParAddress:yup.string().required('No Parent Address Provided'),
    OccParent:yup.string().required('No Parent Occupation Provided'),
    EmailParent:yup.string().required('No Parent Email Provided'),
    PhoneParent:yup.string().required('No Parent Phone Number provided'),
   


    password: yup.string()
            .required('No password provided') 
            .min(8,'Password is too short- Should be 8 chars minimum'),
        
})

export default function BioDataForm({navigationValue}){
    console.log('im here')
   

    const [signinValues,setSigninValues] = useState([])
    const getSigninDetails = (signinValues) => {<List />}
 
    return(       
        console.log('im also here'),  
        <View style>
            <Formik 
            initialValues = {{ FirstName:'',SurName:'',MiddleName:'',JAMBRegNo:'',DOB:'',
            Age:'',Sex:'',MarStatus:'',Faculty:'',Department:'',
            Address:'',Email:'',PhoneNo:'',Nationality:'',Religion:'',
            StofOrigin:'',LGA:'',ParentName:'',OccParent:'',ParAddress:'',
            EmailParent:'',PhoneParent:'',}}
            validationSchema={reviewSchema}

            onSubmit = {(values) => {
                navigationValue.navigate('Signin')
            } }   
           
                //console.log(values)
                //navigationValue.navigate("HomePage")
                       
                >
                {(formikprops) => (
                  
                <View >        
                   
                    <TextInput
                        style = {styles.input}
                        placeholder='First Name'
                        onChangeText={formikprops.handleChange('FirstName')}
                        value={formikprops.values.FirstName}
                    />
                    <Text style = {styles.error}>{formikprops.errors.FirstName}</Text>
                    <TextInput
                       
                        style = {styles.input}
                        placeholder='Surname'
                        onChangeText={formikprops.handleChange('SurName')}
                        value={formikprops.values.SurName}
                    /> 
                     <Text style = {styles.error}>{formikprops.errors.SurName}</Text>
                     <TextInput
                        style = {styles.input}
                        placeholder='Middle Name'
                        onChangeText={formikprops.handleChange('MiddleName')}
                        value={formikprops.values.MiddleName}
                    />
                    <Text style = {styles.error}>{formikprops.errors.FirstName}</Text>
                    <TextInput
                        
                        style = {styles.input}
                        placeholder='JAMB Registration Number'
                        onChangeText={formikprops.handleChange('JAMBRegNo')}
                        value={formikprops.values.JAMBRegNo}
                    /> 
                     <Text style = {styles.error}>{formikprops.errors.JAMBRegNo}</Text>

        

                    
                     <TextInput
                        style = {styles.input}
                        placeholder='Date of Birth'
                        onChangeText={formikprops.handleChange('DOB')}
                        value={formikprops.values.DOB}
                    />
                    <Text style = {styles.error}>{formikprops.errors.DOB}</Text>

          
                    <TextInput
                        style = {styles.input}
                        placeholder='Age'
                        onChangeText={formikprops.handleChange('Age')}
                        value={formikprops.values.Age}
                    /> 
                    <Text style = {styles.error}>{formikprops.errors.Age}</Text>

                 



                    <TextInput
                        style = {styles.input}
                        placeholder='Sex'
                        onChangeText={formikprops.handleChange('Sex')}
                        value={formikprops.values.Sex}
                    /> 
                    <Text style = {styles.error}>{formikprops.errors.Sex}</Text>

                   
                   


                    
                    <TextInput
                        style = {styles.input}
                        placeholder='Marital Status'
                        onChangeText={formikprops.handleChange('MarStatus')}
                        value={formikprops.values.MarStatus}
                    /> 
                    <Text style = {styles.error}>{formikprops.errors.MarStatus}</Text>
                    

               
                     <TextInput
                        style = {styles.input}
                        placeholder='Faculty'
                        onChangeText={formikprops.handleChange('Faculty')}
                        value={formikprops.values.Faculty}
                    />
                    <Text style = {styles.error}>{formikprops.errors.Faculty}</Text>
                    <TextInput
                        style = {styles.input}
                        placeholder='Department'
                        onChangeText={formikprops.handleChange('Department')}
                        value={formikprops.values.Department}
                    /> 
                     <Text style = {styles.error}>{formikprops.errors.Department}</Text>
                     <TextInput
                        style = {styles.input}
                        placeholder='Address'
                        onChangeText={formikprops.handleChange('Address')}
                        value={formikprops.values.Address}
                    />
                    <Text style = {styles.error}>{formikprops.errors.Address}</Text>
                    <TextInput
                        style = {styles.input}
                        placeholder='Email'
                        onChangeText={formikprops.handleChange('Email')}
                        value={formikprops.values.Email}
                    /> 
                     <Text style = {styles.error}>{formikprops.errors.Email}</Text>

                     <TextInput
                        style = {styles.input}
                        placeholder='Phone No'
                        onChangeText={formikprops.handleChange('PhoneNo')}
                        value={formikprops.values.PhoneNo}
                    />
                    <Text style = {styles.error}>{formikprops.errors.PhoneNo}</Text>
                    <TextInput
                        style = {styles.input}
                        placeholder='Nationality'
                        onChangeText={formikprops.handleChange('Nationality')}
                        value={formikprops.values.Nationality}
                    /> 
                     <Text style = {styles.error}>{formikprops.errors.Nationality}</Text>
                     <TextInput
                        style = {styles.input}
                        placeholder='Religion'
                        onChangeText={formikprops.handleChange('Religion')}
                        value={formikprops.values.Religion}
                    />
                    <Text style = {styles.error}>{formikprops.errors.Religion}</Text>
                    <TextInput
                        style = {styles.input}
                        placeholder='State of Origin'
                        onChangeText={formikprops.handleChange('StofOrigin')}
                        value={formikprops.values.StofOrigin}
                    /> 
                     <Text style = {styles.error}>{formikprops.errors.StofOrigin}</Text>
                     <TextInput
                        style = {styles.input}
                        placeholder='LGA'
                        onChangeText={formikprops.handleChange('LGA')}
                        value={formikprops.values.LGA}
                    />
                    <Text style = {styles.error}>{formikprops.errors.LGA}</Text>
                    <TextInput
                        style = {styles.input}
                        placeholder='Parents/Guardians Name'
                        onChangeText={formikprops.handleChange('ParentName')}
                        value={formikprops.values.ParentName}
                    /> 
                     <Text style = {styles.error}>{formikprops.errors.ParentName}</Text>
                     <TextInput
                        style = {styles.input}
                        placeholder='Occupation of Parent/Guardian'
                        onChangeText={formikprops.handleChange('OccParent')}
                        value={formikprops.values.OccParent}
                    />
                    <Text style = {styles.error}>{formikprops.errors.OccParent}</Text>
                     <TextInput
                        style = {styles.input}
                        placeholder='Parent Address'
                        onChangeText={formikprops.handleChange('ParAddress')}
                        value={formikprops.values.ParAddress}
                    />
                    <Text style = {styles.error}>{formikprops.errors.ParAddress}</Text>
                    <TextInput
                    
                        style = {styles.input}
                        placeholder='Parent/Guardian Email'
                        onChangeText={formikprops.handleChange('EmailParent')}
                        value={formikprops.values.EmailParent}
                    /> 
                     <Text style = {styles.error}>{formikprops.errors.EmailParent}</Text>
                     <TextInput
                        style = {styles.input}
                        placeholder='Parent/Guardian Phone No'
                        onChangeText={formikprops.handleChange('PhoneParent')}
                        value={formikprops.values.PhoneParent}
                    />
                    <Text style = {styles.error}>{formikprops.errors.PhoneParent}</Text>
                    
                     <View style={styles.space} />
                <TouchableOpacity onPress={formikprops.handleSubmit}>
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
    },
    space:{
        height:10,
        width:30
    },
    error:{
        fontSize:10,
        fontWeight:"bold",
        color:"red",
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
    dropdown:{
        padding:10,
        backgroundColor: '#ddd',
        borderWidth: 1,
        borderRadius: 6,
        fontSize:20,
        width: '100%',
    }

});



                    {/* <DatePicker 
                     selected={formikprops.values.DOB}
                        onSelect={(value)=>{formikprops.values.DOB}} //when day is clicked
                        onChange={formikprops.handleChange('DOB')}
                        /> */}

                           {/* <ModalDropdown style = {styles.dropdown}
                    options  = {[('Female'),('Male')]}
                    defaultValue='Please Select Sex'
                    onSelect={(index,value)=>{formikprops.values.Sex}}
                    onChangeText = {formikprops.handleChange('Sex')}
                    value={formikprops.values.Sex}
                    onValueChange={(value) => {
                        setFieldValue("Sex", value);
                        handleChange('Sex');
                      }}
                    /> */}


                    {/* <ModalDropdown style = {styles.dropdown}
                    options={[('Married'),('Single'),('Widow'),('Divorced')]}
                    defaultValue='Please Select Marital Status'
                    value={formikprops.values.MarStatus}
                    onSelect={(value)=>{formikprops.values.MarStatus}}
                    onChange={(_, { value }) => formikprops.setFieldValue("MarStatus",value)}
                    onChangeText = {formikprops.handleChange('onChange')}
                    /> */}

                         {/* <TextInput
                        style = {styles.input}
                        placeholder='Marital Status'
                        onChangeText={formikprops.handleChange('MarStatus')}
                        value={formikprops.values.MarStatus}
                    />  */}
                     
