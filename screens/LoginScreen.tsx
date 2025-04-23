import { StyleSheet, TextInput, View, Button, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { RootTabParamList } from '../src/types/navigation';

type Props = BottomTabScreenProps<RootTabParamList, 'Login'>;

export default function LoginScreen ({ navigation }) {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const { login, register } = useAuth();

  const handleLogin = async () => {
    try {
      await login(username, password);
    } catch (error) {
      console.error('Login failed 🤔:', error);
    }
  }

  const handleRegister = async () => {
    try {
      await register(username, email, password, passwordConfirm);
    } catch (error) {
      console.error('Registration failed:', error);
    }
  }

  const toggleForm = () => {
    setIsLogin(!isLogin);
    // Clear form fields when switching
    setUsername('');
    setEmail('');
    setPassword('');
    setPasswordConfirm('');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{isLogin ? 'Login' : 'Create Account'}</Text>
      
      <TextInput
        style={styles.input}
        placeholder='Username'
        value={username}
        onChangeText={setUsername}
      />
      
      {!isLogin && (
        <TextInput
          style={styles.input}
          placeholder='Email'
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
      )}
      
      <TextInput
        style={styles.input}
        placeholder='Password'
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      
      {!isLogin && (
        <TextInput
          style={styles.input}
          placeholder='Confirm Password'
          value={passwordConfirm}
          onChangeText={setPasswordConfirm}
          secureTextEntry
        />
      )}
      
      <Button 
        title={isLogin ? 'Login' : 'Register'} 
        onPress={isLogin ? handleLogin : handleRegister}
      />
      
      <TouchableOpacity onPress={toggleForm} style={styles.toggleButton}>
        <Text style={styles.toggleText}>
          {isLogin ? "Don't have an account? Register" : "Already have an account? Login"}
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  toggleButton: {
    marginTop: 15,
    alignItems: 'center',
  },
  toggleText: {
    color: '#0066cc',
    fontSize: 16,
  }
})
