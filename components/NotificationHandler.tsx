/// <reference types="react-native">

import React, { useEffect, useContext, useState } from 'react';
import { createContext } from 'react';
import WebSocket from 'ws';



export const WebSocketContext:React.Context<any> = WebSocket (null);

const WebSocketProvider: React.FC = ({}) => {
    const [socket, setSocket] = useState(null);

    useEffect(() => {
        const newSocket = new WebSocket('ws://ws/notifications');

        newSocket.on('connect', () => {
            console.log('Connected to WebSocket!');
        });

        newSocket.on('message', (data: any) => {
            console.log('Received notification:', data);
        });
        setSocket(newSocket)
        return () => {
            newSocket.disconnect();  // Disconnect on component unmount
        };
    }, []);

    return (
        <WebSocketContext.Provider value={{ socket }}>
            
        </WebSocketContext.Provider>
    );
};
export const useWebSocket = () => {
    const socket = useContext(WebSocketContext);
    return socket 
};