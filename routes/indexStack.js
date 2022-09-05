import { createStackNavigator, HeaderTitle } from 'react-navigation-stack';
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
import appStack from './appStack';

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
    screen: 
    HomePage,
    navigationOptions: {
      gestureEnabled: false,
      headerLeft:()=>false
    
    }
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
  
  
  // SigninForm: {
  //   screen:SigninForm
  // }
}




const Stack = createStackNavigator(screens);


export default createAppContainer(Stack);

//export default indexStack;