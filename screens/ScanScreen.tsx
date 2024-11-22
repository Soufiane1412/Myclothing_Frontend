/// <reference types="react-native"/>

import {NavigationProp, RouteProp} from '@react-navigation/native';
import {TabScreenProps} from '../src/types/navigation';
import React, {useState} from 'react';
import { StyleSheet, View, Text, TextInput, Button, Image } from 'react-native';
import LottieView from 'lottie-react-native';


type Props = TabScreenProps<'Scan'>;
const Scan: React.FC<Props> = ({ navigation }) => {
    return (
        <View>
            <Text> Scan Screen </Text>
        </View>
    )
}
