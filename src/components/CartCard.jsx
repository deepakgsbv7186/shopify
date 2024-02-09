import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  moderateScale,
  moderateScaleVertical,
  scale,
  textScale,
} from '../utils/theme/responsive';
import {FONT} from '../assets/fonts';
import {COLOR} from '../utils/theme/colors';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {
  addToCart,
  removeFromCart,
  removeSingleProductFromCart,
} from '../app/cart/cartSlice';
import {showMessage} from 'react-native-flash-message';

export default function CartCard({item}) {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(item));
    showMessage({
      message: 'Removed successfully!',
      icon: 'success',
      type: 'success',
      description: item?.title,
    });
  };
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('ProductScreen', {productDetail: item})
      }
      style={styles.cardContainer}>
      <Image source={{uri: item?.thumbnail}} style={styles.imageStyle} />
      <View style={styles.detailContainer}>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.titleText}>{item?.title}</Text>
        </View>
        <Text style={styles.priceText}>
          {`₹ ${item?.price} * ${item?.quantity} = ${
            item?.price * item?.quantity
          }`}
        </Text>
        <View style={styles.containBtn}>
          <TouchableOpacity
            onPress={() => dispatch(addToCart(item))}
            style={styles.btnContainer}>
            <AntDesign name="pluscircle" color={COLOR.white} size={20} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => dispatch(removeSingleProductFromCart(item))}
            style={styles.btnContainer}>
            <AntDesign name="minuscircle" color={COLOR.white} size={20} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleRemoveFromCart}
            style={styles.btnContainer}>
            <Text style={styles.removeText}>Remove</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: moderateScaleVertical(16),
    borderRadius: moderateScale(10),
  },
  imageStyle: {
    width: scale(80),
    height: scale(80),
    borderTopLeftRadius: moderateScale(10),
    borderBottomLeftRadius: moderateScale(10),
  },
  detailContainer: {
    flex: 1,
    paddingHorizontal: moderateScale(16),
    rowGap: moderateScaleVertical(10),
  },
  titleText: {
    fontFamily: FONT.Poppins600,
    fontSize: textScale(16),
    color: COLOR.white,
  },
  priceText: {
    fontFamily: FONT.Poppins500,
    fontSize: textScale(14),
    color: COLOR.white,
  },
  btnContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: COLOR.whiteOpacity50,
    borderBottomWidth: 0.5,
    paddingBottom: 10,
  },
  removeText: {
    textAlign: 'center',
    fontFamily: FONT.Poppins400,
    fontSize: textScale(14),
    color: COLOR.white,
  },
});
