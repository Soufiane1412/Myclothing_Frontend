import { StatusBar } from 'expo-status-bar';
import * as eva from 'eva-icons';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import {ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Stack = createNativeStackNavigator() 
const Tab = createBottomTabNavigator()

const TabNavigator = ()=> {
return(
  <Tab.Navigator screenOptions={({route }) => ({
    tabBarIcon:({ color,size}) => {
      let iconName='';


      if(route.name==='Home') {
        iconName='home-outline';
      } else if(route.name==='Scan') {
        iconName='search-outline';
      } else if (route.name==='Products') {
        iconName='shopping-bag-outline'
      } else if (route.name==='History') {
        iconName='archive-outline';
      }

      return <Icon name={iconName} size={size} color={color}/>;
    },
    tabBarActiveTintColor:'#2196f3',
    tabBarInactiveTintColor:'gray',
    headerShown:false,
    })}>
    <Tab.Screen name="Home" component={HomeScreen}/>
    <Tab.Screen name="Scan" component={ScanScreen}/>
    <Tab.Screen name="Products" component={ProductsScreen}/>
    <Tab.Screen name="History" component={HistoryScreen}/>
  </Tab.Navigator>
);
}


export default function App() {
  return (
  <>
    <IconRegistry icons={EvaIconsPack}/>
    <ApplicationProvider {...eva} theme={eva.light}>
      <NavigationContainer>
        <Stack.Navigator screnOptions={{ headerShown:false}}>
          <Stack.Screen name="User" component={UserScreen}/>
          <Stack.Screen name="Settings" component={SettingsScreen}/>
          <Stack.Screen name="TabNavigator" component={TabNavigator}/>
        </Stack.Navigator>
      </NavigationContainer>
    </ApplicationProvider>
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
