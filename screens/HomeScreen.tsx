/// <reference types="react-native" />
import React from 'react';
import { StyleSheet, View, TextInput, Text } from 'react-native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { RootTabParamList } from '../src/types/navigation';

type Props = BottomTabScreenProps<RootTabParamList, 'Home'>;

export default function HomeScreen ({ navigation}: Props) {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <TextInput value='username' placeholder='username'/>
      <TextInput value='password' placeholder='password'/>
      
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e4e6ea',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: 'Helvetica Neue, Helvetica ,Arial, sans-serif',
    fontSize:45,
    color:'#2dc0b8'
  },
});