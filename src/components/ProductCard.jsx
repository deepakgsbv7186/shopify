import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  height,
  moderateScale,
  moderateScaleVertical,
  textScale,
  width,
} from '../utils/theme/responsive';
import {COLOR} from '../utils/theme/colors';
import {FONT} from '../assets/fonts';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {addToWish, removeFromWish} from '../app/wishlist/wishlistSlice';

export default function ProductCard({item}) {
  const navigation = useNavigation();
  const {wishproducts} = useSelector(state => state.wishList);
  const isWish = wishproducts.find(product => product?.id === item?.id);
  const dispatch = useDispatch();

  const handleWish = () =>
    isWish ? dispatch(removeFromWish(item?.id)) : dispatch(addToWish(item));

  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() =>
        navigation.navigate('ProductScreen', {productDetail: item})
      }>
      <View style={styles.imgContainer}>
        <Image
          source={{uri: item?.thumbnail}}
          resizeMode="cover"
          style={styles.coverImage}
        />
        <TouchableOpacity
          onPress={handleWish}
          style={{position: 'absolute', right: 10, top: 10}}>
          <AntDesign
            name={isWish ? 'heart' : 'hearto'}
            color={isWish ? COLOR.red : COLOR.white}
            size={20}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.titleCategoryContainer}>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.titleText}>{item?.title}</Text>
        </View>
        <Text style={styles.categoryText}>{item?.category}</Text>
      </View>
      <View style={styles.priceContainer}>
        <Text style={styles.discountText}>
          up to {item?.discountPercentage}%
        </Text>
        <Text style={styles.priceText}>₹{item?.price}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  imgContainer: {
    width: width * 0.44,
    height: height * 0.2,
    borderRadius: moderateScale(10),
    position: 'relative',
  },
  coverImage: {
    width: '100%',
    height: '100%',
    borderRadius: moderateScale(10),
  },
  titleCategoryContainer: {
    marginTop: moderateScaleVertical(10),
    rowGap: moderateScaleVertical(5),
  },
  titleText: {
    flex: 1,
    fontFamily: FONT.Poppins600,
    fontSize: textScale(14),
    color: COLOR.white,
    flexWrap: 'wrap',
  },
  categoryText: {
    fontFamily: FONT.Poppins400,
    fontSize: textScale(12),
    color: COLOR.white,
    textTransform: 'capitalize',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: moderateScaleVertical(10),
    rowGap: moderateScaleVertical(5),
  },
  discountText: {
    fontFamily: FONT.Poppins400,
    fontSize: textScale(14),
    color: COLOR.gray,
  },
  priceText: {
    fontFamily: FONT.Poppins600,
    fontSize: textScale(16),
    color: COLOR.white,
    textTransform: 'capitalize',
  },
});
