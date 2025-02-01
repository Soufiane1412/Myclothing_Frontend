// React imports:
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

function AppNavigator() {
  return (
  
    <Stack.Navigator> 
      <Stack.Screen
      name='Login'
      component={LoginScreen}
      options={{headerShown:false}}/>
    {/* //     screenOptions={({ route }) => ({
        
    //     tabBarIcon:({ focused, color}: {focused: boolean, color: string}) => {
    //       let iconName='';
    //       if(route.name==='Home') {
    //         iconName='home';
    //       } else if(route.name==='Scan') {    
    //         iconName='barcode';
    //       } else if (route.name==='Products') {
    //         iconName='pricetag'
    //       } else if (route.name==='History') {
    //         iconName='archive';
    //       }

    //       return <Ionicons 
    //       name={iconName} 
    //       size={focused ? 32 : 24} // bigger when focused 
    //       style={{ opacity: focused ? 1 : 0.7 }}
    //       color={color}/>;
    //     },
    //     tabBarActiveTintColor:'#2dc0b8',
    //     tabBarInactiveTintColor:'gray',
    //     headerShown:false,
    //     tabBarStyle: {
    //       backgroundColor:'transparent',
    //       elevation:0,
    //       position:'absolute',
    //       borderTopWidth:0,
    //     },
    //     tabBarShowLabel:false,
    //     })}>
    //     <Tab.Screen name="Home" component={HomeScreen}/>
    //     <Tab.Screen name="Scan" component={ScanScreen}/>
    //     <Tab.Screen name="Products" component={ProductsScreen}/>
    //     <Tab.Screen name="History" component={HistoryScreen}/> */}
    </Stack.Navigator>
  );
};

type Props = {
  children?: React.ReactNode;
}

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <WebSocketProvider>
          <AppNavigator/>
        </WebSocketProvider>
      </AuthProvider>
      {/* <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen}>
        </Stack.Screen>
      </Stack.Navigator> */}
    </NavigationContainer>
  );
}

    // export default function App() {
    //   const TestComponent = () => <View><Text>Test Screen</Text></View>
    //   return (
    //     <NavigationContainer>
    //       <AuthProvider>
    //         <WebSocketProvider>
    //           <StatusBar translucent backgroundColor="transparent" />
    //           <Stack.Navigator 
    //             initialRouteName="Login"
    //             screenOptions={{ headerShown:false }}>
    //             <Stack.Screen name="Login" component={TestComponent} />
    //           </Stack.Navigator>
    //         </WebSocketProvider>
    //       </AuthProvider>
    //     </NavigationContainer>
    //   );
    // };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
