import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import SplashScreen from './../pages/Splash/index';
import HomeScreen from './../pages/Home/index';
import RoutesExample from './example.routes';

const AppStack = createStackNavigator();

const Routes = () => (
	<AppStack.Navigator
		// initialRouteName='Splash'
		initialRouteName='Example'
		screenOptions={{
			gestureDirection: 'horizontal',
			...TransitionPresets.SlideFromRightIOS,
		}}
		headerMode="none">
		<AppStack.Screen name="Splash" component={SplashScreen} />
		<AppStack.Screen name="Home" component={HomeScreen} />
		<AppStack.Screen name="Example" component={RoutesExample} />
	</AppStack.Navigator>
);

export default Routes;
