/// <reference types="react-native" />

import React from 'react';
import { useEffect, useState } from 'react';
import { StyleSheet, View, Text, } from 'react-native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { RootTabParamList } from '../src/types/navigation';

type Props = BottomTabScreenProps<RootTabParamList, 'Products'>

const ProductsScreen: React.FC<Props> = ({ navigation }) => {

  return (
    <View>
      <Text>Products Screen</Text>
    </View>
  );
};

export default ProductsScreen;

