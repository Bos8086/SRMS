import React from 'react';
import { Button, StyleSheet, Text, TextInput, View, Image, TouchableOpacity,ScrollView } from 'react-native';
import Card from '../shared/card';
import ChangePasswordForm from './ChangePasswordForm'

export default function Notification({navigation}){
    return(
        <View style =  {styles.container}r>        
                    <Card>
                        <View>
                            <Text>
                                These are your Notifications
                            </Text>
                        </View>
                    </Card>
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


});
