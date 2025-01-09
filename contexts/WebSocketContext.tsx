import { Children, createContext, useContext, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const WebSocketContext = createContext<any>(null);

export const WebSocketProvider =({ Children }) => {

    const [message, setMessage] = useState([]);
    const [socket, setSocket] = useState(null);

    useEffect(() => {
        const getToken = async () => {
            try{
                const token = await AsyncStorage.getItem('token')
            } catch (error) {
                throw error
            }
        }
        getToken();

    }, []);

}