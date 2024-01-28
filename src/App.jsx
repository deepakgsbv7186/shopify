import {StatusBar} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RouteNavigation from './navigations/RouteNavigation';
import {COLOR} from './utils/theme/colors';

export default function App() {
  return (
    <>
      <StatusBar
        translucent
        barStyle={'light-content'}
        backgroundColor={COLOR.transparent}
      />
      <NavigationContainer>
        <RouteNavigation />
      </NavigationContainer>
    </>
  );
}
