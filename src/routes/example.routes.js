import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { HomeExampleScreen } from '../example/Home';
import FontsExampleScreen from '../example/Fonts';
import ButtonsExampleScreen from '../example/Buttons';
import FormsExampleScreen from '../example/Forms';


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
        <AppStack.Screen name="FontsExample" component={FontsExampleScreen} />
        <AppStack.Screen name="ButtonsExample" component={ButtonsExampleScreen} />
        <AppStack.Screen name="FormsExample" component={FormsExampleScreen} />
    </AppStack.Navigator>
);

export default RoutesExample;
