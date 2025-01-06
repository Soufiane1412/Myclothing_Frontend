/// <reference types="react-native" />

import React from 'react';
import { StyleSheet, View, Text, ViewStyle } from 'react-native';

const Settings: React.FC = () => {
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

export default Settings;