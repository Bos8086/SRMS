import React  from 'react';
import { Button, StyleSheet, Text, TextInput, View, Image, TouchableOpacity,ScrollView } from 'react-native';
import Card from '../shared/card';
import ChangePasswordForm from '../screens/ChangePasswordForm';
import Notification from './Notification';






export default function Settings({navigation}){
    return(
        <View testID='containerTest' style =  {styles.container}r>
            <ScrollView 
            // style={styles.scrollView}
            >
                <View testID='header' style={styles.header}>
                <Image testID='image' source={ require("../assets/logo.png")} style={styles.image}/>
                    <Text>  Settings </Text> 
                </View>
        
                <View testID='body' style={styles.body}>
                    <Text testID='text104' style={styles.text}>Welcome to Settings</Text>
                    <Card>
                        <ChangePasswordForm navigationValue={navigation}/>
                    </Card>

                    <Notification/>

                        

                </View>
            </ScrollView>
        </View>
        )
    }
    
    const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#FAE2E2',
          alignItems: 'center',
          justifyContent: 'space-between',
        },
    
        header:{           
            padding:40,
            flex:0.3,
            alignSelf:'flex-start'   
        },
        body:{
            flex:1,
             alignItems: 'center',
           
        },
        text:{
            fontWeight: 'bold',
            fontSize: 20,
        },
        image:{
            flexDirection: 'row',
            height:80,
            width:80,
            borderRadius: 48,            
        }
    });
    