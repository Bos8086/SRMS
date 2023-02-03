import React ,{useState,useEffect} from 'react';
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity, ActivityIndicator, Alert } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { Avatar , Button} from 'react-native-paper';
import { launchImageLibrary } from 'react-native-image-picker';
import DocumentPicker from 'react-native-document-picker';
import { secureGet } from '../ExternalVariables/storage';
import axios from 'axios';
import { useIsFocused } from '@react-navigation/native';
import {BASE_URL} from '../shared/constants';
import { useToast } from "react-native-toast-notifications";
import Spinner from 'react-native-loading-spinner-overlay/lib';




//const Drawer = createDrawerNavigator();

export default function HomePage({navigation}){
    const[Pic,setPic] = useState('');
    const [singleFile, setSingleFile] = useState();
    const [tok,setToke] = useState();
    const [regNo,setRegNo] = useState();
    const [response,setResponse] = useState();
    const isFocused = useIsFocused();
    const [spinner,setSpinner] = useState();
    const toast = useToast();


    const DisplayPictureUrl = `${BASE_URL}/student/display_biodata_picture?jambNo=${regNo}`;
    
    

    var headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' +  tok
      };

    secureGet('token',setToke);
    secureGet('JAMBNO',setRegNo);


    useEffect(  ()=> {
        setSpinner(true)
       


    const DisplayPicture =  async()=> {
        
        await axios.create({headers}).get(DisplayPictureUrl)
        .then((res)=>{
            setResponse(res?.data);
            
            console.log(" response1 " , res?.data);
            console.log(" picture Url ",res?.data.picUrl);
             console.log("Response of picture URL : ",response?.picUrl)
             setSpinner(false)
            
            // if(res?.data.message=="Cannot display picture to unknown JambNo" || res?.data.picUrl==""){
            //     setResponse(res?.data);
            //     //Alert.alert("Please Upload a picture to BioData to display your profile picture")
            // }
    })
    .catch((err)=>{
        if(err.response.data.message=="Cannot display picture to unknown JambNo"){
            setSpinner(false)
            toast.show("upload picture in BioData ",{
                type:"normal",
                placement:"top",
                
            })
            //Toast.showWithGravity('Please Upload a picture to BioData to display your profile picture',Toast.SHORT,Toast.TOP);
           // Alert.alert("Please Upload a picture to BioData to display your profile picture")
        }
       
        //console.error(err.response.data.message);
        
    });


    }; 
    if (tok && regNo){
       DisplayPicture();
    };
    
}
,[tok,regNo,isFocused]);


   
     const onPress5 = () => {    
        navigation.navigate('Index')
        Alert.alert('You have been logged out');
     }
//console.log(response.picUrl)
    return(
        
       
     
    <View style =  {styles.container} testID='container'>
         <Spinner
                            visible= {spinner}
                            textContent={'Loading...'}
                            textStyle={styles.spinnerTextStyle}
                            size={"large"}
                            />

        <View style={styles.header} testID='header'>
        <Image  testID='image' source={ require("../assets/logo.png")} style={styles.image}/>
            <Text>  Welome  {regNo}</Text> 
            
        </View>

        <View style={styles.body} testID='body'>
            <Text testID='text' style={styles.text}>Welcome to HomePage</Text>

            {!response && (
            <View>
                
           
            <TouchableOpacity onPress={() => {navigation.navigate('BioData')}}>
                <Text>Please Upload a photo </Text>
            </TouchableOpacity>
            
                
            </View>
          )}

            <TouchableHighlight 
            onPress={()=>alert('Picture Displayed here')}
            underlayColor="rgba(0,0,0,0)">
            <Avatar.Image
                size={200}    
                source={{uri:response?.picUrl}}
                //avatarStyle={{backgroundColor:'#FFFFFF' }}
                style={{backgroundColor:'grey'}}    
            />
            </TouchableHighlight>
        <View style={styles.space} />
        <TouchableOpacity onPress={onPress5}>
            <View style={styles.button} testID='button'>
                <Text style={styles.buttonText} testID='buttonText'>Logout</Text>
            </View>
        </TouchableOpacity>
        

        </View>


    </View>
    )
}




const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F8D5D4',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    space:{
        height:10,
        width:30
    },

    header:{
        padding:40,
        flex:0.3,
        alignSelf:'flex-start'

    },
    body:{
        flex:0.9,
        alignItems: 'center',
    },
    text:{
        fontWeight: 'bold',
        fontSize: 20,
        paddingBottom:30
    },
    image:{
        flexDirection: 'row',
        height:80,
        width:80,
        borderRadius: 48,     
    },
    button:{
        borderRadius: 8,
        paddingVertical: 14,
        paddingHorizontal: 10,
        backgroundColor: '#E66464',
        borderColor: "#AA0E0F",
        borderWidth: 1
    },
    buttonText:{
        color: 'black',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 20,
        //textAlign: 'right',
     }

});
