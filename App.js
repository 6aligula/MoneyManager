import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Toast from 'react-native-toast-message';
import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';
import AllData from './screens/AllData';

const Stack = createStackNavigator();

const App = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="HomeScreen"
                    component={HomeScreen}
                    // options={({ navigation }) => ({
                    //     header: () => <CustomHeader locationHome={true} navigation={navigation} />,
                    // })}
                />
                <Stack.Screen
                    name="DetailScreen"
                    component={DetailScreen}
                    // options={({ navigation }) => ({
                    //     header: () => <CustomHeader navigation={navigation} />,
                    // })}
                />
                <Stack.Screen
                    name="AllData"
                    component={AllData}
                    // options={({ navigation }) => ({
                    //     header: () => <CustomHeader navigation={navigation} />,
                    // })}
                />
            </Stack.Navigator>
            <Toast />
        </NavigationContainer>

    );
};

export default App;