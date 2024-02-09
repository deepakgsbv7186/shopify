import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../screens/auth/SplashScreen';
import Home from '../screens/home/Home';
import ProductScreen from '../screens/home/ProductScreen';
import WishListScreen from '../screens/home/WishListScreen';
import CartScreen from '../screens/home/CartScreen';
import OrderStatus from '../screens/home/OrderStatus';

const Stack = createNativeStackNavigator();

export default function RouteNavigation() {
  return (
    <Stack.Navigator
      initialRouteName="SplashScreen"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="ProductScreen" component={ProductScreen} />
      <Stack.Screen name="WishListScreen" component={WishListScreen} />
      <Stack.Screen name="CartScreen" component={CartScreen} />
      <Stack.Screen name="OrderStatus" component={OrderStatus} />
    </Stack.Navigator>
  );
}
