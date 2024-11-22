import { NavigationProp, RouteProp } from '@react-navigation/native';

// Root Stack (for main navigation)

export type RootStackParamList = {
    TabNavigator: undefined;
    UserScreen: undefined;
    SettingsScreen: undefined;
};

// Tab Navigation 
export type RootTabParamList = {
    Home: undefined;
    Scan: undefined;
    Products: undefined;
    History: undefined;
};

export type StackScreenProps<T extends keyof RootStackParamList> = {

    navigation: NavigationProp<RootStackParamList, T>;
    route: RouteProp<RootStackParamList, T>;
};

// Generic screen props for Tab screens
export type TabScreenProps<T extends keyof RootTabParamList> = {
    navigation: NavigationProp<RootTabParamList, T>;
    route: RouteProp<RootTabParamList,T>
};