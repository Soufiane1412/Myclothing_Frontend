/// <reference types="react-native"/>


import React, {useState} from 'react';
import { StyleSheet, View, Text, TextInput, Button, Image } from 'react-native';
import { RootTabParamList } from '../src/types/navigation';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';


type Props = BottomTabScreenProps<RootTabParamList, 'Scan'>

const ScanScreen: React.FC<Props> = ({ navigation }) =>{
    return (
        <View>
            <Text> Scan Screen </Text>
        </View>
    )
}

export default ScanScreen;