import React, { createContext, useContext, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { API_BASE_URL } from '../api/api' 
2
interface AuthContextType {
    user: any;
    login: (username: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
    register: (username: string, email: string, password: string, password_confirm: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({children}: {children:React.ReactNode}): JSX.Element {
    const [user, setUser] = useState(null);

    const parseJwt = (token:string) => {
        try{
            const payload = token.split(".")[1];
            return JSON.parse(atob(payload))
        }
        catch (error) {
            return null;
        }

    }

    const register = async(username: string, email: string, password: string, password_confirm: string) => {
        try {
            console.log('Attempting registration:', `${API_BASE_URL}api/auth/register/`);
            const response = await fetch(`${API_BASE_URL}api/auth/register/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username,
                    email,
                    password,
                    password_confirm
                })
            });

            if (!response.ok) {
                const errorText = await response.text();
                console.error('Registration failed:', errorText);
                throw new Error(`Registration failed: ${response.status}`);
            }

            const data = await response.json();
            console.log('Registration successful:', data);
            
            // Automatically login after successful registration
            await login(username, password);
            
        } catch (error) {
            console.error('Registration error:', error);
            throw error;
        }
    };

    const login = async(username: string, password:string) => {
        try {
            console.log('Attempting login to:', `${API_BASE_URL}api/auth/token/`);
            const response = await fetch(`${API_BASE_URL}api/auth/token/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body:JSON.stringify({username, password})
            });

            console.log('response status:', response.status);
            if (!response.ok) {
                const errorText = await response.text();
                console.error('Server response', errorText);
                throw new Error(`HTTP error! status: ${response.status}`)
            }

            const data = await response.json();
            console.log('Login successful', data)


            // JWT token should come as acess and refresh:
            if (data.access && data.refresh) {
                await AsyncStorage.setItem('access_token', data.access);
                await AsyncStorage.setItem('refresh_token', data.refresh)

                // Decode the access token to get user info:
                const userInfo = parseJwt(data.access);
                setUser(userInfo)
            } else {
                console.warn('No token received in response, Response structure:', JSON.stringify(data));
            };

        } catch (error) {
            throw error;
        }
    };

    const logout = async() => {
        await AsyncStorage.removeItem('access_token');
        await AsyncStorage.removeItem('refresh_token');
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{user, login, logout, register }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within AuthProvider");
        }
        return context;
    };