import React, { useEffect, createContext, useContext, useState } from 'react';
import io from 'socket.io-client';

interface WebSocketContextValue {
    socket: SocketIOClient.Socket | null;
}

const WebSocketContext = createContext<WebSocketContextValue | null> (null);

export const WebSocketProvider: React.FC<{ children: React.ReactNode }> = ({}) => {
    const [socket, setSocket] = useState<SocketIOClient.Socket | null>(null);

    useEffect(() => {
        const newSocket = io('ws://ws/notifications/');

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