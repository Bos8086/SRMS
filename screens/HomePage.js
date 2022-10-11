import React from 'react';
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity, ActivityIndicator, useState, Alert } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { Avatar , Button} from 'react-native-paper';
import { launchImageLibrary } from 'react-native-image-picker';
import DocumentPicker from 'react-native-document-picker';


//const Drawer = createDrawerNavigator();

export default function HomePage({navigation}){
    const[Pic,setPic] = React.useState('');
    const [singleFile, setSingleFile] = React.useState();


    const uploadImage = () =>{
        let options = {
            mediaType : 'photo',
            quality: 1,
            includeBased64: true,
        };

    

        

        try {
            launchImageLibrary(options, response => {
                if(response?.didCancel){
                    Alert.alert('Cancelled Image Selection');
                } else if(response?.errorCode == 'permission'){
                    Alert.alert('permission not satisfied');
                }
                else if(response?.errorCode == 'others'){
                    Alert.alert(response?.errorMessage);
                }else if(response?.assets[0].fileSize > 2097152){
                    Alert.alert(
                        "Maximum Image size exceeded",
                        "Please choose image under 2MB",
                        [{text:"ok"}],
                    );
                }
                
                else {
                    setPic(response?.assets[0].base64);
                }
            });
            
        } catch (error) {
            Alert.alert("Error" + error)
            
        };

      
    };

    const selectFile = async () => {
        console.log("I clicked!!!!!!!!!!!");
        // Opening Document Picker to select one file
        try {
          const res = await DocumentPicker.pickSingle({
            
            // Provide which type of file you want user to pickr
            type: [DocumentPicker.types.allFiles],
            // There can me more options as welle
            // DocumentPicker.types.allFiles
            // DocumentPicker.types.images
            // DocumentPicker.types.plainText
            // DocumentPicker.types.audio
            // DocumentPicker.types.pdf
          });
          // Printing the log realted to the file
          console.log('res -----------: ' + JSON.stringify(res));
          // Setting the state to show single file attributes
          setSingleFile(res);
        } catch (err) {
          setSingleFile(null);
          // Handling any exception (If any)
          if (DocumentPicker.isCancel(err)) {
            // If user canceled the document selection
            alert('Canceled');
          } else {
            // For Unknown Error
            alert('Unknown Error: ' + JSON.stringify(err));
            throw err;
          }
        }
      };


    const RemoveImage = () => {
        setPic('')
        Alert.alert('Image removed');
    }

   
     const onPress5 = () => {    
        navigation.navigate('Index')
        Alert.alert('You have been logged out');
     }

    return(
    <View style =  {styles.container}>

        <View style={styles.header}>

         {/* <MaterialIcons name='menu' size={28} onPress={openMenu} style={styles.icon}/>    */}
        <Image source={ require("../assets/logo.png")} style={styles.image}/>
            <Text>  Welome  </Text> 
        </View>

        <View style={styles.body}>
            <Text style={styles.text}>Welcome to HomePage</Text>

            <TouchableHighlight 
            onPress={()=>alert('pressed2')}
            underlayColor="rgba(0,0,0,0)">
            <Avatar.Image
                size={250}
                source={{uri:"data:image/png;based," + Pic}}
            />
            </TouchableHighlight>

            {singleFile != null ? (
                    <Text style={styles.textStyle}>
                    File Name: {singleFile.name ? singleFile.name : ''}
                    {'\n'}
                    Type: {singleFile.type ? singleFile.type : ''}
                    {'\n'}
                    File Size: {singleFile.size ? singleFile.size : ''}
                    {'\n'}
                    URI: {singleFile.uri ? singleFile.uri : ''}
                    {'\n'}
                    </Text>
                ) : null}

            <View>
                <Button mode = "contained" onPress={()=> uploadImage()}>
                    Upload Image
                </Button> 
                <Button mode='contained' onPress={()=> RemoveImage()}>
                    Remove Image
                </Button>
                <Button mode='contained' onPress={()=> selectFile()}>
                    Select Image
                </Button>
            </View>
            
       
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
