import {StatusBar} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RouteNavigation from './navigations/RouteNavigation';
import {COLOR} from './utils/theme/colors';
import FlashMessage from 'react-native-flash-message';
import {FONT} from './assets/fonts';
import {textScale} from './utils/theme/responsive';

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
      <FlashMessage
        position="top"
        statusBarHeight={StatusBar.currentHeight}
        titleStyle={{
          fontFamily: FONT.Poppins500,
          fontSize: textScale(16),
          color: COLOR.white,
        }}
        textStyle={{
          fontFamily: FONT.Poppins400,
          fontSize: textScale(14),
          color: COLOR.white,
        }}
      />
    </>
  );
}
