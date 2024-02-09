import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {COLOR} from '../utils/theme/colors';
import {
  moderateScale,
  moderateScaleVertical,
  scale,
  textScale,
} from '../utils/theme/responsive';
import {FONT} from '../assets/fonts';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

export default function Header({brand = ''}) {
  const navigation = useNavigation();
  const {cartproducts} = useSelector(state => state.cartList);
  const itemsInCart = cartproducts?.length;

  return (
    <View style={styles.container}>
      {brand.length ? (
        <Text style={styles.brandText}>{brand}</Text>
      ) : (
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{...styles.headIconContainer, alignItems: 'flex-start'}}>
          <AntDesign name="leftcircleo" color={COLOR.white} size={24} />
        </TouchableOpacity>
      )}
      <View style={styles.wishCartContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('WishListScreen')}
          style={{...styles.headIconContainer, alignItems: 'flex-end'}}>
          <AntDesign name="hearto" color={COLOR.white} size={24} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('CartScreen')}
          style={{
            ...styles.headIconContainer,
            alignItems: 'flex-end',
            position: 'relative',
          }}>
          {itemsInCart > 0 && (
            <View style={styles.cartNumberContainer}>
              <Text style={styles.cartNumberText}>{itemsInCart}</Text>
            </View>
          )}
          <AntDesign name="shoppingcart" color={COLOR.white} size={28} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLOR.blackOpacity60,
    paddingHorizontal: moderateScale(16),
    paddingVertical: moderateScaleVertical(8),
  },
  brandText: {
    fontFamily: FONT.Poppins600,
    fontSize: textScale(18),
    color: COLOR.white,
  },
  headIconContainer: {
    width: scale(40),
    height: scale(40),
    justifyContent: 'center',
  },
  wishCartContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    columnGap: moderateScale(10),
  },
  cartNumberContainer: {
    position: 'absolute',
    zIndex: 10,
    backgroundColor: COLOR.red,
    width: scale(20),
    height: scale(20),
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
    right: -8,
    borderRadius: 999,
  },
  cartNumberText: {
    textAlign: 'center',
    fontFamily: FONT.Poppins500,
    fontSize: textScale(11),
    color: COLOR.white,
    lineHeight: 24,
  },
});
