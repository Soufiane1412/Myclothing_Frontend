/// <reference types="react-native" />
import React from 'react';
import { View, Text } from 'react-native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { RootTabParamList } from '../src/types/navigation';

type Props = BottomTabScreenProps<RootTabParamList, 'History'>;

const HistoryScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View>
      <Text>History Screen</Text>
    </View>
  );
}  

export default HistoryScreen;