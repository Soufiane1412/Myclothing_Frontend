/// <reference types="react-native" />

import React from 'react';
import { StyleSheet, View, Text, ViewStyle } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../src/types/navigation';


type Props = NativeStackScreenProps<RootStackParamList, 'SettingsScreen'>;

export default function SettingsScreen({ navigation }: Props) {
  return (
    <View style={styles.container}> 
      <Text>Settings Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // ... your styles
  }
});
