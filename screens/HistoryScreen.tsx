/// <reference types="react-native" />
import React from 'react';
import { View, Text } from 'react-native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { RootTabParamList } from '../src/types/navigation';

type Props = BottomTabScreenProps<RootTabParamList, 'History'>;

export default function HistoryScreen({ navigation }: Props) {
  return (
    <View>
      <Text>History Screen</Text>
    </View>
  );
}  
