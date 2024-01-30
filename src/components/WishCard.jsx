import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  moderateScale,
  moderateScaleVertical,
  textScale,
} from '../utils/theme/responsive';
import {FONT} from '../assets/fonts';
import {COLOR} from '../utils/theme/colors';
import {useNavigation} from '@react-navigation/native';

export default function WishCard({item}) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.replace('ProductScreen', {productDetail: item})}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: moderateScaleVertical(16),
        borderRadius: moderateScale(10),
      }}>
      <Image
        source={{uri: item?.thumbnail}}
        style={{
          width: 80,
          height: 80,
          borderTopLeftRadius: moderateScale(10),
          borderBottomLeftRadius: moderateScale(10),
        }}
      />
      <View
        style={{
          flex: 1,
          paddingHorizontal: moderateScale(16),
          //   paddingVertical: moderateScaleVertical(10),
          rowGap: moderateScaleVertical(10),
        }}>
        <View style={{flexDirection: 'row'}}>
          <Text
            style={{
              fontFamily: FONT.Poppins600,
              fontSize: textScale(16),
              color: COLOR.white,
            }}>
            {item?.title}
          </Text>
        </View>
        <Text
          style={{
            fontFamily: FONT.Poppins500,
            fontSize: textScale(14),
            color: COLOR.white,
          }}>
          ₹{item?.price}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
