/// <reference types="react-native" />

import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// import FontAwesome from 'react-native-vector-icons/FontAwesome';

import Home from './screens/HomeScreen';
import Scan from './screens/ScanScreen';
import Products from './screens/ProductsScreen';
import History from './screens/HistoryScreen';
import UserScreen from './screens/UserScreen';
import Settings from './screens/SettingsScreen';
import LoginScreen from './screens/LoginScreen'
import Ionicons from 'react-native-vector-icons/Ionicons';


// Context Providers
import {AuthProvider} from './contexts/AuthContext';
import {WebSocketProvider} from './contexts/WebSocketContext';

// new import 
import {NavigationProp, RouteProp} from '@react-navigation/native';

// import WebSocket logic
import {WebSocketContext} from './components/NotificationHandler';

// Import type alias file
import {RootStackParamList, RootTabParamList} from "../Front_cloth/src/types/navigation";

const Stack = createNativeStackNavigator<RootStackParamList>() 
const Tab = createBottomTabNavigator<RootTabParamList>()

const TabNavigator = ()=> {
return(

  
  <Tab.Navigator 

    screenOptions={({route }) => ({
    
    tabBarIcon:({ color,size}: {color: string; size: number}) => {
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

      return <Ionicons name={iconName} size={35} color={color}/>;
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
    <Tab.Screen name="Home" component={Home}/>
    <Tab.Screen name="Scan" component={Scan}/>
    <Tab.Screen name="Products" component={Products}/>
    <Tab.Screen name="History" component={History}/>
  </Tab.Navigator>
);
}


export default function App() {

  const socket = new WebSocket('ws://ws/notifications');
  return (
    <AuthProvider>
      <WebSocketProvider>
          <NavigationContainer>
        <StatusBar translucent backgroundColor="transparent" />
            <Stack.Navigator 
            initialRouteName="Login"
            screenOptions={{ headerShown:false }}>
              <Stack.Screen name="TabNavigator" component={TabNavigator}/>
              <Stack.Screen name="UserScreen" component={UserScreen}/>
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
