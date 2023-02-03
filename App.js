
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from '@expo/vector-icons/Ionicons';

import { Provider as PaperProvider } from 'react-native-paper';

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
import Logout from './screens/Logout';
import { ToastProvider } from 'react-native-toast-notifications';





export default function App() {

  const Drawer = createDrawerNavigator();

  const Stack = createNativeStackNavigator();


  function DrawerNavigator() {
    return <Drawer.Navigator
      screenOptions={{

        drawerIcon: ({ }) => (
          <Ionicons
            name='menu'
            size={32}
            color='black'
          />
        ),
        drawerStyle: {
          backgroundColor: '#FFFFFF',
          borderColor: "#AA0E0F",
          borderWidth: 4,
          headerStyle: { height: 300 },
          headerTitleStyle: { fontSize: 18, padding: 20 },
        }
      }
      }
    >
      <Drawer.Group screenOptions={{ headerStyle: { height: 80 } }}>
        <Drawer.Screen name='Home'
          component={HomePage}
          options={{
            title: "Dashboard",
            drawerIcon: ({ }) => (
              <Ionicons
                name='home'
                size={32}
                color='black'
              />
            )
          }}
        />
        <Drawer.Screen
          name='ViewReg'
          component={ViewRegistration}
          options={{
            title: "View Selected Courses",
            drawerIcon: ({ }) => (

              <Ionicons
                name='book'
                size={32}
                color='black'
              />
            )
          }}
        />
        <Drawer.Screen
          name='CourseReg'
          component={CourseRegistration}
          options={{
            title: "Register Courses",
            drawerIcon: ({ }) => (

              <Ionicons
                name='md-file-tray-full-sharp'
                size={32}
                color='black'
              />
            )
          }}

        />
        <Drawer.Screen
          name='Profile'
          component={Profile}
          options={{
            title: "Profile",
            drawerIcon: ({ }) => (

              <Ionicons
                name='person'
                size={32}
                color='black'
              />
            )
          }} />
        <Drawer.Screen
          name='Settings'
          component={Settings}
          options={{
            title: "Settings",
            drawerIcon: ({ }) => (
              <Ionicons name='settings'
                size={32}
                color='black'
              />
            )
          }}
        />
        <Drawer.Screen
          name='BioData'
          component={BioData}
          options={{
            title: "Bio Data",
            drawerIcon: ({ }) => (
              <Ionicons name='clipboard'
                size={32}
                color='black'
              />
            )
          }}
        />

      </Drawer.Group>
    </Drawer.Navigator>
  }

  function AdminDrawerNavigator() {
    return <Drawer.Navigator


      screenOptions={{
        drawerStyle: {
          backgroundColor: '#F9B5B4',
          borderColor: "#FBC7C6",
          borderWidth: 1,
          headerTitle: 'Dashboard',
          headerStyle: { height: 200 },
          headerTitleStyle: { fontSize: 18, padding: 20 }

        }
      }
      }>
      <Drawer.Group screenOptions={{ headerStyle: { height: 80 } }}>
        <Drawer.Screen
          name='AdminHome'
          component={AdminHomePage}
          options={{
            title: "Dashboard",
            drawerIcon: ({ }) => (

              <Ionicons
                name='home'
                size={32}
                color='black'
              />
            )
          }}
        />
        <Drawer.Screen
          name='Charts'
          component={AdminCharts}
          options={{
            title: "Charts",
            drawerIcon: ({ }) => (
              <Ionicons
                name='md-pie-chart-outline'
                size={32}
                color='black'
              />
            )
          }}

        />
        <Drawer.Screen
          name='Settings'
          component={AdminSettings}
          options={{
            title: "Settings",
            drawerIcon: ({ }) => (
              <Ionicons name='settings'
                size={32}
                color='black'
              />
            )
          }}
        />
        <Drawer.Screen
          name='UserManagement'
          component={AdminUserManagement}
          options={{
            title: "Student Management",
            drawerIcon: ({ }) => (
              <Ionicons name='people'
                size={32}
                color='black'
              />
            )
          }}
        />
        <Drawer.Screen
          name='CourseManagement'
          component={AdminCourseManagement}
          options={{
            title: "Course Management",
            drawerIcon: ({ }) => (
              <Ionicons
                name='file-tray-full'
                size={32}
                color='black'

              />
            )
          }}
        />
        <Drawer.Screen
          name='SubjectManagement'
          component={AdminSubjectManagement}
          options={{
            title: "Department Management",
            drawerIcon: ({ }) => (
              <Ionicons
                name='school'
                size={32}
                color='black'
              />
            )
          }}
        />
        <Drawer.Screen
          name='Logout'
          component={Logout}
          options={{
            title: "Log out",
            drawerIcon: ({ }) => (
              <Ionicons
                name='log-out'
                size={32}
                color='black'
              />
            )
          }}
          

      
        />
      </Drawer.Group>
    </Drawer.Navigator>
  }

  
  return (
    <PaperProvider>
    <ToastProvider>
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
          options={{ header: () => null }}
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
          name='AdminLandingPage'
          component={AdminDrawerNavigator}
          options={{ header: () => null }}
        />

      </Stack.Navigator>
    </NavigationContainer>
    </ToastProvider>
    </PaperProvider>

  );
}