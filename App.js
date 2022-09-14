
import React from 'react';
//import  Navigator  from './routes/indexStack';
//import Navigator from './routes/indexStack';
//import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Index from './screens/Index';
import Register from './screens/Register';
import Signin from './screens/Signin';
import HomePage from './screens/HomePage';
//import Profile from './screens/Profile';
//import SigninForm from '../screens/SigninForm';
import ForgotPassword from './screens/ForgotPassword';
import CourseRegistration from './screens/CourseRegistration';
import BioData from './screens/BioData';
import Settings from './screens/Settings';
import ViewRegistration from './screens/ViewRegistration';
import { Header } from '@react-navigation/stack';
import { HeaderTitle } from 'react-navigation-stack';
import Profile from './screens/Profile';
//import 'react-native-gesture-handler';






export default function  App() {

  const Drawer = createDrawerNavigator();

const Stack = createNativeStackNavigator();

  function DrawerNavigator(){
    return <Drawer.Navigator 
    
      
    screenOptions={{drawerStyle: {
      backgroundColor: '#FFFFFF',
      borderColor: "#AA0E0F",
      borderWidth: 4,
      headerTitle: 'Dashboard',
      headerStyle: { height: 300 },
      headerTitleStyle: {fontSize:18,padding:20}

    }
    }
    }>
      <Drawer.Group screenOptions={{ headerStyle: { height:80 }}}>
      <Drawer.Screen name='Home' component={HomePage}/>
      <Drawer.Screen name='ViewReg' component={ViewRegistration}/>
      <Drawer.Screen name='CourseReg' component={CourseRegistration}/>
      <Drawer.Screen name='Profile' component={Profile}/>
      <Drawer.Screen name='Settings' component={Settings}/>
      <Drawer.Screen name='BioData' component={BioData}/>
      
      </Drawer.Group>
    </Drawer.Navigator>
  }

  return(
          <NavigationContainer>      
          <Stack.Navigator>
            <Stack.Screen 
            name='Index'
            component={Index}
            />

            <Stack.Screen 
            name='Signin'
            component={Signin}
            />

            <Stack.Screen 
            name='ForgotPassword'
            component={ForgotPassword}
            />

           <Stack.Screen 
            name='Register'
            component={Register}
            />

           <Stack.Screen 
            name='HomePage'
            component={DrawerNavigator}
            options={{header: () => null}}
           />
           

           <Stack.Screen 
            name='CourseRegistration'
            component={CourseRegistration}
            //options={{header: () => null}}
            />

             <Stack.Screen 
            name='BioData'
            component={BioData}
            //options={{header: () => null}}
            />

            <Stack.Screen 
            name='Profile'
            component={Profile}
            //options={{header: () => null}}
            />
            <Stack.Screen 
            name='Landing Page'
            component={HomePage}
            options={{header: () => null}}
           />

          </Stack.Navigator>
          </NavigationContainer>
        
      );
    }