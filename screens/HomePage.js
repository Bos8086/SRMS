import React ,{useState,useEffect} from 'react';
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity, ActivityIndicator, Alert } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { Avatar , Button} from 'react-native-paper';
import { launchImageLibrary } from 'react-native-image-picker';
import DocumentPicker from 'react-native-document-picker';
import { secureGet } from '../ExternalVariables/storage';
import axios from 'axios';
import { useIsFocused } from '@react-navigation/native';


//const Drawer = createDrawerNavigator();

export default function HomePage({navigation}){
    const[Pic,setPic] = useState('');
    const [singleFile, setSingleFile] = useState();
    const [tok,setToke] = useState();
    const [regNo,setRegNo] = useState();
    const [response,setResponse] = useState();
    const isFocused = useIsFocused();


    const DisplayPictureUrl = "https://s-r-m-s2022.herokuapp.com/api/v1/student/display_biodata_picture";
    const body = {jambNo:regNo}

    var headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' +  tok
      };

    secureGet('token',setToke);
    secureGet('JAMBNO',setRegNo);


    useEffect(  ()=> {

    const DisplayPicture =  async()=> {
        await axios.create({headers}).post(DisplayPictureUrl,body)
        .then((res)=>{
            setResponse(res?.data);
            console.log(" response1 " , res?.data);
            console.log(" picture Url ",res?.data.picUrl);
             console.log("Response of picture URL : ",response?.picUrl)
            
            if(res?.data.message=="Cannot display picture to unknown JambNo" || res?.data.picUrl==""){
                setResponse(res?.data);
                Alert.alert("Please Upload a picture to BioData to display your profile picture")
            }
    })
    .catch((err)=>{
        console.error(err);
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
    <View style =  {styles.container}>

        <View style={styles.header}>

         
        <Image source={ require("../assets/logo.png")} style={styles.image}/>
            <Text>  Welome  {regNo}</Text> 
            
        </View>

        <View style={styles.body}>
            <Text style={styles.text}>Welcome to HomePage</Text>

            <TouchableHighlight 
            onPress={()=>alert('pressed2')}
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
            <View style={styles.button}>
                <Text style={styles.buttonText}>Logout</Text>
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
