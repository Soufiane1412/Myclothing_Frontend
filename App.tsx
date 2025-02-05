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
import ProductsScreen from './screens/ProductsScreen';
import HistoryScreen from './screens/HistoryScreen';
import UserScreen from './screens/UserScreen';
import LoginScreen from './screens/LoginScreen';

// Type imports:
import {RootStackParamList, RootTabParamList} from "./src/types/navigation";
// / <reference types="react-native" />

// Context Providers
import { AuthProvider }  from './contexts/AuthContext';
import { WebSocketProvider } from './contexts/WebSocketContext';

import {Ionicons} from '@expo/vector-icons';  // Move up with other imports



// Import type alias file

const Stack = createNativeStackNavigator<RootStackParamList>();

const Tab = createBottomTabNavigator<RootTabParamList>();

type TabNavigatorProps = {
  navigation: any;
}


const TabNavigator = () => {
  return (
  <Tab.Navigator 
      screenOptions={({ route }) => ({
        headerShown:false,
        tabBarShowLabel:false,
        tabBarStyle: {
          height: 90,
          elevation:2,
          backgroundColor:'transparent',
          borderTopWidth:0,
          paddingTop:10,
          paddingBottom:10,
          paddingHorizontal:20,
          overflow:'visible',
        },
      })}>
        <Tab.Screen name='Login' component={LoginScreen}
        options={{
          headerShown:false,
          tabBarIcon: ({ focused, color}) => (
            <View style={{
              width: focused ? 40 : 30,
              

            }}>
              <Ionicons
              name={focused ? 'home' : 'home-outline'}
              size={focused ? 33 : 24}
              color={color}/>
            </View>
          )
        }}/>
      <Tab.Screen name='UserScreen' component={UserScreen}
      options={{
        headerShown:false,
        tabBarIcon: ({ focused, color }) => (
          <Ionicons
          name='person'
          size={focused ? 33 : 24}
          color={color}
          />
        )
      }}/>
      <Tab.Screen name='Products' component={ProductsScreen}
      options={{
        headerShown: false,
        tabBarIcon: ({focused, color}) => (
          <Ionicons
          name='pricetags'
          size={focused ? 33 : 24}
          color={color}/>
        )
      }}/>
      <Tab.Screen name='History' component={HistoryScreen}
      options={{
        headerShown:false,
        tabBarIcon: ({focused, color}) => (
          <Ionicons
          name='receipt'
          size={focused ? 33 : 24}
          color={color}/>
        )
      }}
      />
    </Tab.Navigator>
  );
};


function AppNavigator() {

  return (
    <AuthProvider>
      <WebSocketProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen name='Home' component={HomeScreen} options={{headerShown: false}}/>
            <Stack.Screen name='TabNavigator' component={TabNavigator}/>
          </Stack.Navigator>
        </NavigationContainer>
      </WebSocketProvider>
    </AuthProvider>
  )
};




// function App() {
//   return (
//     <AuthProvider>
//       <NavigationContainer>
//         <AppNavigator/>
//       </NavigationContainer>
//     </AuthProvider>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});

export default AppNavigator;