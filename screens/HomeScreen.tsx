/// <reference types="react-native" />
import React from 'react';
import { StyleSheet, View, TextInput, Text, Button } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../src/types/navigation';
import { RootTabParamList } from '../src/types/navigation'
import LottieView from "lottie-react-native";

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen: React.FC<Props> = ({ navigation }) => {

  return (
    <View style={styles.container}>
      <LottieView
      style={styles.lottieAnim} source={require("../assets/Animation - 1728234414566.json")}
      autoPlay
      loop
      />
      <View style={styles.ButtonClick}>
        <Button title='Enter' onPress={()=> navigation.navigate('TabNavigator', {screen: 'Products'})}/>
      </View>
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
  lottieAnim: {
    height:'80%',
    width:"98%",
    position: 'absolute'
  },
  ButtonClick: {
    flex:0.85,
    justifyContent:'flex-end',
    marginBottom:'20%',
    width:'60%',
    
  }
});

export default HomeScreen;