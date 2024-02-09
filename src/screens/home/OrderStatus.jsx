import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import WrapperLayout from '../../components/WrapperLayout';
import LottieView from 'lottie-react-native';
import {ANIMATIONS} from '../../assets/animations';
import Button from '../../components/Button';
import {FONT} from '../../assets/fonts';
import {
  moderateScale,
  moderateScaleVertical,
  textScale,
} from '../../utils/theme/responsive';
import {COLOR} from '../../utils/theme/colors';
import {useNavigation, useRoute} from '@react-navigation/native';

export default function OrderStatus() {
  const route = useRoute();
  const navigation = useNavigation();
  const totalprice = route.params.totalprice;
  return (
    <WrapperLayout>
      <View style={styles.container}>
        <Text style={styles.orderSuccessText}>Order Successful</Text>
        <Text style={styles.totalPriceText}>{`₹ ${totalprice}`}</Text>
        <LottieView
          style={{flex: 1}}
          source={ANIMATIONS.success}
          autoPlay
          loop
        />
        <Button
          title={'Return to home'}
          onPress={() => navigation.replace('Home')}
        />
      </View>
    </WrapperLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingVertical: moderateScaleVertical(30),
    paddingHorizontal: moderateScale(16),
  },
  orderSuccessText: {
    textAlign: 'center',
    fontFamily: FONT.Poppins600,
    fontSize: textScale(20),
    color: COLOR.whiteOpacity70,
  },
  totalPriceText: {
    textAlign: 'center',
    fontFamily: FONT.Poppins700,
    fontSize: textScale(26),
    color: COLOR.white,
  },
});
