// For IOS
import AsyncStorage from '@react-native-async-storage/async-storage';

// Helper function for authenticated requests


export const API_BASE_URL = 'http://127.0.0.1:8000/';
// or:

export const authFetch = async (endpoint:string, options: RequestInit = {}) => {

    const token = await AsyncStorage.getItem('access_token');

    return fetch(`${API_BASE_URL}${endpoint}`, {
        ... options,
        headers: {
            ...options.headers,
            'Auhtorization': token ? `Bearer $ {token}`: '',
            'Content-Type': 'application/json'
        }
    });
};


