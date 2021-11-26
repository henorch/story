import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';



const Stack = createNativeStackNavigator();

function AuthNav(props) {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
        }}>
            <Stack.Screen name='login' component={SignIn}/>
            <Stack.Screen name='register' component={SignUp}/>
            
        </Stack.Navigator>
    );
}

export default AuthNav;