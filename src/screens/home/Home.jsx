import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Button from '../../components/Button';
import {COLOR} from '../../utils/theme/colors';
import WrapperLayout from '../../components/WrapperLayout';
import {FONT} from '../../assets/fonts';
import {textScale} from '../../utils/theme/responsive';

export default function Home() {
  return (
    <WrapperLayout>
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Text
          style={{
            fontFamily: FONT.Poppins500,
            fontSize: textScale(18),
            color: COLOR.white,
            textAlign: 'center',
          }}>
          Home Shopify
        </Text>
      </View>
    </WrapperLayout>
  );
}

const styles = StyleSheet.create({});
