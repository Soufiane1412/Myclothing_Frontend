import React,  { createContext, useContext, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const WebSocketContext = createContext<any>(null);

interface WebSocketProviderProps {
    children: React.ReactNode;
}


interface Message {
    data: any;
}

export const WebSocketProvider: React.FC<WebSocketProviderProps>  =({ children }) => {


    const [messages, setMessages] = useState<Message[]>([]);
    const [socket, setSocket] = useState< WebSocket | null>(null);

    useEffect(() => {
       
        const connectWebSocket = async () => {
    
        try {
            const token = await AsyncStorage.getItem('token');
            const ws = new WebSocket(`ws://api/auth/token/ws?token=${token}`);

            ws.onmessage = (event) => {
            setMessages(prev => [... prev, JSON.parse(event.data)])
            };

            setSocket(ws);
            return ws;
            
        } catch (error) {
          console.error('WebSocket connection error:', error);
        }   
    };
    const wsInstance = connectWebSocket();
    return () => {
        wsInstance?.then(ws => ws?.close());
        };
    }, []);

    return (
        <WebSocketContext.Provider value={{messages, socket }}>
            {children}
        </WebSocketContext.Provider>
    )
};

export const useWebSocket = () => useContext(WebSocketContext);