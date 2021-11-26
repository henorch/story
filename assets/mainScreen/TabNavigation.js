import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import React from 'react';
import HomeScreen from './HomeScreen';



const Tabs = createMaterialBottomTabNavigator();

const TabNavigation = ({ navigation }) => {
    return (
        <Tabs.Navigator>
            <Tabs.Screen name='Home' component={HomeScreen}/>
        </Tabs.Navigator>
    );
}

export default TabNavigation;