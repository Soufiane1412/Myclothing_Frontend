// React imports:
import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';

// Navigation setup imports:
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Screen imports:
import HomeScreen from './screens/HomeScreen';
import ScanScreen from './screens/ScanScreen';
import ProductsScreen from './screens/ProductsScreen';
import HistoryScreen from './screens/HistoryScreen';
import UserScreen from './screens/UserScreen';
import Settings from './screens/SettingsScreen';
import LoginScreen from './screens/LoginScreen';

// Type imports:
import {RootStackParamList, RootTabParamList} from "./src/types/navigation";
// / <reference types="react-native" />

// Context Providers
import { AuthProvider }  from './contexts/AuthContext';
import { WebSocketProvider } from './contexts/WebSocketContext';

import Ionicons from 'react-native-vector-icons/Ionicons';  // Move up with other imports



// Import type alias file

const Stack = createNativeStackNavigator();

// const Tab = createBottomTabNavigator<RootTabParamList>()


function App() {
  return (
    <NavigationContainer>
        <Stack.Screen name='Login' component={LoginScreen}/>
    </NavigationContainer>
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

export default App;