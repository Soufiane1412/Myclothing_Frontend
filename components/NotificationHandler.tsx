/// <reference types="react-native">

import React, { useEffect, useContext, useState } from 'react';
import { createContext } from 'react';


export const WebSocketContext =  createContext<any>(null);

const WebSocketProvider: React.FC = ({}) => {
    const [socket, setSocket] = useState(null);

    useEffect(() => {
        const newSocket = new WebSocket('ws://ws/notifications');

        newSocket.onopen = () => {
            console.log('Connected to WebSocket!');
        };

        newSocket.onmessage = (event: MessageEvent) => {
            console.log('Received notification:', event.data);
        };
        setSocket(socket)
        return () => {
            newSocket.close();  // Disconnect on component unmount
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