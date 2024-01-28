import {StatusBar, SafeAreaView} from 'react-native';
import React from 'react';
import {COLOR} from '../utils/theme/colors';

export default function WrapperLayout({children}) {
  return (
    <>
      <StatusBar animated barStyle={'light-content'} />
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: COLOR.blackOpacity80,
          paddingTop: StatusBar.currentHeight,
        }}>
        {children}
      </SafeAreaView>
    </>
  );
}
