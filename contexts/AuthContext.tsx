import React, { createContext, useContext, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { API_BASE_URL } from '../api/api' 

interface AuthContextType {
    user: any;
    login: (username: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
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

    const login = async(username: string, password:string) => {
        try {
            console.log('Attempting login to:', `${API_BASE_URL}/api/auth/token`);
            const response = await fetch(`${API_BASE_URL}/api/auth/token`, {
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
                console.warn('No access token received in response')
            }


            
            if (data.user) {
                setUser(data.user);
            } else { 
                // in case no user object is retrieved we can use the whole response object as the user
                setUser(data);
            }
        } catch (error) {
            throw error
        }
    };

    const logout = async() => {
        await AsyncStorage.removeItem('token');
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{user, login, logout }}>
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