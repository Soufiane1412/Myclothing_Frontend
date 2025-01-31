/// <reference types="react-native" />

import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../src/types/navigation';


const UserScreen = ({ navigation }: NativeStackScreenProps<RootStackParamList, 'UserScreen'>) => {
  return (
    <View>
      <Text>User Screen</Text>
    </View>
  );
};

export default UserScreen;  // Use default export if you import it without braces
