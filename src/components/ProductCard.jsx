import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  height,
  moderateScale,
  moderateScaleVertical,
  textScale,
  width,
} from '../utils/theme/responsive';
import {COLOR} from '../utils/theme/colors';
import {FONT} from '../assets/fonts';

export default function ProductCard({item}) {
  return (
    <View>
      <View
        style={{
          width: width * 0.44,
          height: height * 0.2,
          borderRadius: moderateScale(10),
        }}>
        <Image
          source={{uri: item?.thumbnail}}
          resizeMode="cover"
          style={{
            width: '100%',
            height: '100%',
            borderRadius: moderateScale(10),
          }}
        />
      </View>
      <View
        style={{
          marginTop: moderateScaleVertical(10),
          rowGap: moderateScaleVertical(5),
        }}>
        <View style={{flexDirection: 'row'}}>
          <Text
            style={{
              flex: 1,
              fontFamily: FONT.Poppins600,
              fontSize: textScale(14),
              color: COLOR.white,
              flexWrap: 'wrap',
            }}>
            {item?.title}
          </Text>
        </View>
        <Text
          style={{
            fontFamily: FONT.Poppins400,
            fontSize: textScale(12),
            color: COLOR.white,
            textTransform: 'capitalize',
          }}>
          {item?.category}
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: moderateScaleVertical(10),
          rowGap: moderateScaleVertical(5),
        }}>
        <Text
          style={{
            fontFamily: FONT.Poppins400,
            fontSize: textScale(14),
            color: COLOR.gray,
          }}>
          up to {item?.discountPercentage}%
        </Text>
        <Text
          style={{
            fontFamily: FONT.Poppins600,
            fontSize: textScale(16),
            color: COLOR.white,
            textTransform: 'capitalize',
          }}>
          ₹{item?.price}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
