import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { HomeExampleScreen } from '../example/Home';
import FontsExampleScreen from '../example/Fonts';
import ButtonsExampleScreen from '../example/Buttons';
import FormsExampleScreen from '../example/Forms';
import ImageExampleScreen from '../example/Image/index';
import RouteTab from './example.tab.routes';
import LoginScreen from '../example/Login';


const AppStack = createStackNavigator();

const RoutesExample = () => (
    <AppStack.Navigator
        initialRouteName='Tab'
        screenOptions={{
            gestureDirection: 'horizontal',
            ...TransitionPresets.SlideFromRightIOS,
        }}
        headerMode="none">
        <AppStack.Screen name="Tab" component={RouteTab} />
        <AppStack.Screen name="Login" component={LoginScreen} />
        <AppStack.Screen name="FontsExample" component={FontsExampleScreen} />
        <AppStack.Screen name="ButtonsExample" component={ButtonsExampleScreen} />
        <AppStack.Screen name="FormsExample" component={FormsExampleScreen} />
        <AppStack.Screen name="ImageExample" component={ImageExampleScreen} />
    </AppStack.Navigator>
);

export default RoutesExample;
