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
import SettingsScreen from './screens/SettingsScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';

// new import 
import {NavigationProp, RouteProp} from '@react-navigation/native';

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
  return (
  <>
    <StatusBar translucent backgroundColor="transparent" />
      <NavigationContainer>
        <Stack.Navigator 
        initialRouteName="TabNavigator"
        screenOptions={{ headerShown:false }}>
          <Stack.Screen name="TabNavigator" component={TabNavigator}/>
          <Stack.Screen name="UserScreen" component={UserScreen}/>
          <Stack.Screen name="SettingsScreen" component={SettingsScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
  </>
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
