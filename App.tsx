/// <reference types="react-native" />

import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


// Screen imports:

import {RootStackParamList, RootTabParamList} from "./src/types/navigation";
import HomeScreen from './screens/HomeScreen';
import ScanScreen from './screens/ScanScreen';
import ProductsScreen from './screens/ProductsScreen';
import HistoryScreen from './screens/HistoryScreen';
import UserScreen from './screens/UserScreen';
import Settings from './screens/SettingsScreen';
import LoginScreen from './screens/LoginScreen';

import Ionicons from 'react-native-vector-icons/Ionicons';


// Context Providers
import { AuthProvider }  from './contexts/AuthContext';
import { WebSocketProvider } from './contexts/WebSocketContext';

// Import type alias file

const Stack = createNativeStackNavigator<RootStackParamList>() 
const Tab = createBottomTabNavigator<RootTabParamList>()

const TabNavigator = ()=> {
return(

  
  <Tab.Navigator 

    screenOptions={({route }) => ({
    
    tabBarIcon:({ focused, color}: {focused: boolean, color: string}) => {
      let iconName='';
      if(route.name==='Home') {
        iconName='home';
      } else if(route.name==='Scan') {    
        iconName='barcode';
      } else if (route.name==='Products') {
        iconName='pricetag'
      } else if (route.name==='History') {
        iconName='archive';
      }

      return <Ionicons 
      name={iconName} 
      size={focused ? 32 : 24} // bigger when focused 
      style={{ opacity: focused ? 1 : 0.7 }}
      color={color}/>;
    },
    tabBarActiveTintColor:'#2dc0b8',
    tabBarInactiveTintColor:'gray',
    headerShown:false,
    tabBarStyle: {
      backgroundColor:'transparent',
      elevation:0,
      position:'absolute',
      borderTopWidth:0,
    },
    tabBarShowLabel:false,
    })}>
    <Tab.Screen name="Home" component={HomeScreen}/>
    <Tab.Screen name="Scan" component={ScanScreen}/>
    <Tab.Screen name="Products" component={ProductsScreen}/>
    <Tab.Screen name="History" component={HistoryScreen}/>
  </Tab.Navigator>
);
}


export default function App(): JSX.Element {

  return (
    <AuthProvider>
      <WebSocketProvider>
          <NavigationContainer>
        <StatusBar translucent backgroundColor="transparent" />
            <Stack.Navigator 
            initialRouteName="Login"
            screenOptions={{ headerShown:false }}>
              <Stack.Screen name= "Login" component={LoginScreen}/>
              <Stack.Screen name="TabNavigator" component={TabNavigator}/>
              <Stack.Screen name= "UserScreen" component={UserScreen}/>
              <Stack.Screen name="SettingsScreen" component={Settings}/>
            </Stack.Navigator>
          </NavigationContainer>
      </WebSocketProvider>
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
