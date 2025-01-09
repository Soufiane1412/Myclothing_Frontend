import { useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../src/types/navigation';



export const ProtectedRoute = ({ children }) => {
    const { user } = useAuth();
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    useEffect(() => {
      if (!user) {
        navigation.navigate('Login')
      }
    }, [user, navigation]);

    return user ? children : null ;
    
}