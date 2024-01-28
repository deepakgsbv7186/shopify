import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../screens/auth/SplashScreen';
import Home from '../screens/home/Home';

const Stack = createNativeStackNavigator();

export default function RouteNavigation() {
  return (
    <Stack.Navigator
      initialRouteName="SplashScreen"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}
