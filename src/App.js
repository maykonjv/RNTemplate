import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './routes/app.routes';

export default function App() {

  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}