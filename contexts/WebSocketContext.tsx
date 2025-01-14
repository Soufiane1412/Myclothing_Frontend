import { Children, createContext, useContext, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const WebSocketContext = createContext<any>(null);

export const WebSocketProvider =({ children }) => {

    interface Message {
        data: any;
    }

    const [messages, setMessages] = useState<Message[]>([]);
    const [socket, setSocket] = useState(null);

    useEffect(() => {
        const getToken = async () => {
           
            const token = await AsyncStorage.getItem('token')
            const ws = new WebSocket(`ws://api/auth/token/ws?token=${token}`)

            ws.onmessage = (event) => {
            setMessages(prev => [... prev, JSON.parse(event.data)])
            }
    

        }
        getToken();

    }, []);

}