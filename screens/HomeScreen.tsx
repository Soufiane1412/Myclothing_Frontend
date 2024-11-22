/// <reference types="react-native" />
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
    </View>
  );
};

export default Home;  // Use default export if you import it without braces

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e4e6ea',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: 'Helvetica Neue, Helvetica ,Arial, sans-serif',
    fontSize:45,
    color:'#2dc0b8'
  },
});