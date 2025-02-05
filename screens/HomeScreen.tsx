/// <reference types="react-native" />
import React from 'react';
import { StyleSheet, View, TextInput, Text, Button } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
// import { RootStackParamList } from '../src/types/navigation';
import { RootTabParamList } from '../src/types/navigation'
import LottieView from "lottie-react-native"; 
import ProductsScreen from '../screens/ProductsScreen';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen: React.FC<Props> = ({ navigation }) => {

  return (
    <View>
      <LottieView
      style={styles.lottieAnim} source={require("../assets/Animation - 1728234414566.json")}
      autoPlay
      loop
      />
      <Button title='Enter' onPress={()=> navigation.navigate('ProductsScreen' as keyof RootTabParamList)}/>
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
    height:'98%',
    width:"95%",
    position: 'absolute'
  }
});

export default HomeScreen;