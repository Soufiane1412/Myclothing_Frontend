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

const Stack = createNativeStackNavigator<RootStackParamList>();

const Tab = createBottomTabNavigator<RootTabParamList>()

type TabNavigatorProps = {
  navigation: any;
  route: any;
}

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false}}>
      <Tab.Screen name='Home' component={HomeScreen}
      options={{
        headerShown: false,
        tabBarIcon: ({ focused, color }) => (
          <Ionicons
          name="home"
          size={focused ? 32 :24 }
          color={color}
          />
        )
      }}/>
      <Tab.Screen name='Scan' component={ScanScreen}
      options={{
        headerShown: false,
        tabBarIcon: ({ focused, color}) => (
          <Ionicons
          name="qrcode"
          size= {focused ? 32 :24 }
          color={color}/>
        )
      }}/>
      <Tab.Screen name='Products' component={ProductsScreen}
      options={{
        headerShown: false,
        tabBarIcon: ({focused, color}) => (
          <Ionicons
          name="pricetags"
          size={focused ? 32 : 24}
          color={color}/>
        )
      }}/>
      <Tab.Screen name='History' component={HistoryScreen}
      options={{
        headerShown: false,
        tabBarIcon: ({focused, color}) => (
          <Ionicons
          name="receipt"
          size={focused ? 32 :24}
          color={color}
          />
        )
      }}/>
    </Tab.Navigator>

  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Login' component={LoginScreen}/>
      </Stack.Navigator>
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