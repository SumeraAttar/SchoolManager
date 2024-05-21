import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Logo from './Logo';
import HomePage from './HomePage';
import NewAccountScreen from './NewAccountScreen';
import LoginScreen from './LoginScreen';
import DashboardScreen from './DashboardScreen';
import Dash from './Dash';
import Attendance from './Attendance';
import LoginPopup from './LoginPopup';
import TimeTable from './TimeTable';
import MyServices from './MyServices';
import NotificationScreenComponent from './NotificationScreenComponent';
import ParentSignup from './ParentSignup';
import ParentLogin from './ParentLogin';
import HelpCenterScreen from './HelpCenterScreen';
import Profile from './Profile';
import TeacherCard from './TeacherCard';
import ChatScreen from './ChatScreen';
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Logo">
        <Stack.Screen name="Logo" component={Logo} options={{ title: 'School Manager' }} />
        <Stack.Screen name="HomePage" component={HomePage} options={{ title: 'HomePage' }} />
        <Stack.Screen name="NewAccount" component={NewAccountScreen} options={{ title: 'New Account' }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Login' }} />
        <Stack.Screen name="Dashboard" component={DashboardScreen} options={{ title: 'Dashboard' }} />
        <Stack.Screen name="Dash" component={Dash} options={{ title: 'Dash' }} />
        <Stack.Screen name="Timetable" component={TimeTable} options={{ title: 'Calender' }} />
        <Stack.Screen name="Parent_Dashboard" component={MyServices} options={{ title: 'Services' }} />
        <Stack.Screen name="ParentSignup" component={ParentSignup} options={{ title: 'Parent Signup' }} />
        <Stack.Screen name="ParentLogin" component={ParentLogin} options={{ title: 'Parent Login' }} />
        <Stack.Screen name="Notification" component={NotificationScreenComponent} options={{ title: 'Notification' }} />
        <Stack.Screen name="HelpCenter" component={HelpCenterScreen} options={{ title: 'HelpCenter' }} />
        <Stack.Screen name="Profile" component={Profile} options={{ title: 'Profile' }} />
        <Stack.Screen name="Teacher" component={TeacherCard} options={{ title: 'Teacher' }} />
        <Stack.Screen name="Chat" component={ChatScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
