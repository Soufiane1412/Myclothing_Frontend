import { NativeStackScreenProps } from '@react-navigation/native-stack';


// Root Stack (for main navigation)

export type RootStackParamList = {
    Login: undefined;
    UserScreen: undefined;
    TabNavigator: undefined;
    SettingsScreen: undefined;
};

// Tab Navigation 
export type RootTabParamList = {
    Home: undefined;
    Scan: undefined;
    Products: undefined;
    History: undefined;
};
