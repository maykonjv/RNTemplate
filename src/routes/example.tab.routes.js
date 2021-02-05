import React from 'react';
import { TransitionPresets } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeExampleScreen } from '../example/Home';
import FontsExampleScreen from '../example/Fonts';

const Tab = createBottomTabNavigator();

const RouteTab = () => {

    return (
        <Tab.Navigator
            initialRouteName='Home Example'
            screenOptions={{
                gestureDirection: 'horizontal',
                ...TransitionPresets.SlideFromRightIOS,
            }}
            headerMode="none">
            <Tab.Screen name="Home Example" component={HomeExampleScreen} />
            <Tab.Screen name="Fonts Example" component={FontsExampleScreen} />
        </Tab.Navigator>
    )
}

export default RouteTab;
