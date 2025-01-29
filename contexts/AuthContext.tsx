import React, { Children, createContext, useContext, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthContext = createContext<any>(null);

export default function AuthProvider({children}) {
    const [user, setUser] = useState(null);

    const login = async(username: string, password:string) => {
        try {
            const response = await fetch('api/auth/token', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body:JSON.stringify({username, password})
            });
            const data = await response.json();
            await AsyncStorage.setItem('token', data.access);
            setUser(data.user);
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

export const useAuth = () => useContext(AuthContext)