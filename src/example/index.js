import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { HomeExampleScreen } from '../example/Home';
import FontsScreen from './Fonts/index';


const AppStack = createStackNavigator();

const RoutesExample = () => (
    <AppStack.Navigator
        initialRouteName='HomeExample'
        screenOptions={{
            gestureDirection: 'horizontal',
            ...TransitionPresets.SlideFromRightIOS,
        }}
        headerMode="none">
        <AppStack.Screen name="HomeExample" component={HomeExampleScreen} />
        <AppStack.Screen name="FontsExample" component={FontsScreen} />
    </AppStack.Navigator>
);

export default RoutesExample;
