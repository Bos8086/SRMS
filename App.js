
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Index from './screens/Index';
import Register from './screens/Register';
import Signin from './screens/Signin';
import HomePage from './screens/HomePage';
import ForgotPassword from './screens/ForgotPassword';
import CourseRegistration from './screens/CourseRegistration';
import BioData from './screens/BioData';
import Settings from './screens/Settings';
import ViewRegistration from './screens/ViewRegistration';
import Profile from './screens/Profile';
import LandingPage from './screens/LandingPage';
import AdminPage from './screens/AdminPage';
import AdminPageLogin from './screens/AdminPageLogin';
import AdminForgotPassword from './screens/AdminForgotPassword';
import AdminHomePage from './screens/AdminHomePage';
import AdminCharts from './screens/AdminCharts';
import AdminSettings from './screens/AdminSettings';
import AdminUserManagement from './screens/AdminUserManagement';
import AdminCourseManagement from './screens/AdminCourseManagement';
import AdminSubjectManagement from './screens/AdminSubjectManagement';
import Logout from './screens/Logout'







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

  function AdminDrawerNavigator(){
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
        <Drawer.Screen name='AdminHome' component={AdminHomePage}/>
        <Drawer.Screen name='Charts' component={AdminCharts}/>
        <Drawer.Screen name='Settings' component={AdminSettings}/>
        <Drawer.Screen name='UserManagement' component={AdminUserManagement}/>
        <Drawer.Screen name='CourseManagement' component={AdminCourseManagement}/>
        <Drawer.Screen name='SubjectManagement' component={AdminSubjectManagement}/>
        <Drawer.Screen name='Logout' component={Logout}/>
      </Drawer.Group>
    </Drawer.Navigator>
  }

  return(
          <NavigationContainer>      
            <Stack.Navigator>
              <Stack.Screen 
                name='Landing'
                component={LandingPage}
              />
              <Stack.Screen 
                name='AdminPage'
                component={AdminPage}
              />
              <Stack.Screen 
                name='AdminPageLogin'
                component={AdminPageLogin}
              />
              <Stack.Screen 
                name='AdminForgotPassword'
                component={AdminForgotPassword}
              />
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

              {/* <Stack.Screen 
                name='Landing Page'
                component={HomePage}  
                options={{header: () => null}}
              /> */}

              <Stack.Screen 
                name='LandingPage'
                component={AdminDrawerNavigator}  
                options={{header: () => null}}
              />

            </Stack.Navigator>
          </NavigationContainer>
        
      );
    }