/// <reference types="react-native" />

import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { RootTabParamList } from '../src/types/navigation';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';


type  Props = BottomTabScreenProps<RootTabParamList, 'UserScreen'>

const UserScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>User Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default UserScreen;

