import React,  { createContext, useContext, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

type WebSocketContextType = {
    socket: WebSocket | null;
}

const WebSocketContext = createContext<WebSocketContextType>({ socket: null });


export function WebSocketProvider({ children }: {children: React.ReactNode }) {


    // const [messages, setMessages] = useState<Message[]>([]);
    const [socket, setSocket] = useState< WebSocket | null>(null);

    useEffect(() => {
        const newSocket = new WebSocket('ws://ws/notifications');
        setSocket(newSocket);
        return () => newSocket.close();

    }, [])

    return (
        <WebSocketContext.Provider value={{ socket }}>
            {children}
        </WebSocketContext.Provider>
    )
};