import { StyleSheet, TextInput, View, Button } from 'react-native'
import React from 'react'
import { useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { RootTabParamList } from '../src/types/navigation';

type Props = BottomTabScreenProps<RootTabParamList, 'Login'>;

export default function LoginScreen ({ navigation }) {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const {login} = useAuth();

  const handleLogin = async () => {
    try {
      await login(username, password);
    } catch (error) {
      console.error('Login failed 🤔:', error);
    }
  }

  return (
    <View style={styles.container}>
      <TextInput
      placeholder='Username'
      value={username}
      onChangeText={setUsername}
      />
      <TextInput
      placeholder='Password'
      value={password}
      onChangeText={setPassword}
      secureTextEntry
      />
      <Button title='Login' onPress={handleLogin}/>
    </View>
  )
}

const styles = StyleSheet.create({
  
  container: {

    flex: 1,
    justifyContent: 'center',
    padding: 20,
  }
  
})
