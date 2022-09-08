import { createNativeStackNavigator, HeaderTitle } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Index from '../screens/Index';
import Register from '../screens/Register';
import Signin from '../screens/Signin';
import HomePage from '../screens/HomePage';
import Profile from '../screens/Profile';
import SigninForm from '../screens/SigninForm';
import ForgotPassword from '../screens/ForgotPassword';
import CourseRegistration from '../screens/CourseRegistration';
import BioData from '../screens/BioData';
import Settings from '../screens/Settings';
import ViewRegistration from '../screens/ViewRegistration';
import { createDrawerNavigator } from 'react-navigation-drawer';
import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

//const Stack = createNativeStackNavigator();


function DrawerNavigator(){
  return <Drawer.Navigator>
    <Drawer.Screen name='Home' component={HomePage}/>
    <Drawer.Screen name='CourseReg' component={CourseRegistration}/>
    <Drawer.Screen name='ViewReg' component={ViewRegistration}/>
    <Drawer.Screen name='CourseReg' component={CourseRegistration}/>
    <Drawer.Screen name='Settings' component={Settings}/>
    <Drawer.Screen name='BioData' component={BioData}/>
  </Drawer.Navigator>
}





const screens = {
  
  Index:{
    screen: Index
  },
  Signin:{
    screen: Signin
  },
  ForgotPassword:{
    screen: ForgotPassword
  },
  
  Register:{
    screen: Register

  },HomePage:{
    screen: DrawerNavigator
    //HomePage,
    //navigationOptions: {
      //gestureEnabled: false,
      //headerLeft:()=>false
    
    //}
  },
  Profile:{
    screen:Profile,
  },
  CourseRegistration:{
    screen:CourseRegistration
  },
  BioData:{
    screen:BioData
  },
  Settings:{
    screen:Settings
  },
  ViewRegistration:{
    screen:ViewRegistration
  }
  
  
}




const Stack = createNativeStackNavigator(screens);


export default createAppContainer(Stack);

//export default indexStack;