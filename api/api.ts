// For IOS
import AsyncStorage from '@react-native-async-storage/async-storage';

// Helper function for authenticated requests


export const API_BASE_URL = 'http://192.168.200.151:8081/';
// or:

export const authFetch = async (endpoint:string, options: RequestInit = {}) => {

    const token = await AsyncStorage.getItem('access_token');

    return fetch(`${API_BASE_URL}${endpoint}`, {
        ... options,
        headers: {
            ...options.headers,
            'Authorization': token ? `Bearer $ {token}`: '',
            'Content-Type': 'application/json'
        }
    });
};


