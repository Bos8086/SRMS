import { Alert, View, Text } from "react-native";
import {useEffect} from 'react';
import { ON_PAGE } from "../shared/constants";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function AdminPage({navigation}){

   


        function logOut(){
            return Alert.alert(
                'Confirm', 'Do you want to Logout',
                [{
                    text: "YES",
                    onPress: () => {
                        navigation.navigate('AdminPage')
                    }
                },
                {
                    text: "NO",
                    onPress: () => {
                    navigation.navigate('AdminHome')}
                }
                ]
            )

        }


     return (

        

        <View>
            <TouchableOpacity
                onPress={logOut}
            >
                <Text>Click to Log out</Text>
            </TouchableOpacity>
        </View>
        
           
            
        )  
}