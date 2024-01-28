import {
  ImageBackground,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  height,
  moderateScale,
  moderateScaleVertical,
  scale,
  textScale,
} from '../../utils/theme/responsive';
import {COLOR} from '../../utils/theme/colors';
import {FONT} from '../../assets/fonts';
import Button from '../../components/Button';

export default function ProductScreen() {
  const route = useRoute();
  const navigation = useNavigation();
  const {
    thumbnail,
    title,
    description,
    category,
    price,
    discountPercentage,
    stock,
    brand,
  } = route.params.productDetail;
  const discountedPrice = (price - (price / 100) * discountPercentage).toFixed(
    2,
  );
  return (
    <View style={{flex: 1, position: 'relative'}}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: moderateScaleVertical(100)}}>
        <ImageBackground
          source={{uri: thumbnail}}
          resizeMode="cover"
          style={{flex: 1, height: height * 0.4}}>
          <View style={styles.headerContainer}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{...styles.headIconContainer, alignItems: 'flex-start'}}>
              <AntDesign name="leftcircleo" color={COLOR.white} size={24} />
            </TouchableOpacity>

            <TouchableOpacity
              style={{...styles.headIconContainer, alignItems: 'flex-end'}}>
              <AntDesign name="heart" color={COLOR.red} size={24} />
            </TouchableOpacity>
          </View>
        </ImageBackground>
        <View style={{flex: 1, paddingHorizontal: moderateScale(16)}}>
          <View style={styles.titleConatiner}>
            <Text style={{...styles.titleText, textTransform: 'capitalize'}}>
              {title}
            </Text>
          </View>

          <Text style={styles.catergoryText}>{category}</Text>

          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                ...styles.titleText,
                fontFamily: FONT.Poppins400,
                fontSize: textScale(15),
              }}>
              {description}
            </Text>
          </View>
          <View style={styles.priceContainer}>
            <Text style={styles.labelText}>From:</Text>
            <Text
              style={{
                fontFamily: FONT.Poppins500,
                fontSize: textScale(15),
                color: COLOR.white,
              }}>
              {brand}
            </Text>
          </View>
          <View style={styles.priceContainer}>
            <Text style={styles.labelText}>Retail Price:</Text>
            <Text
              style={{
                fontFamily: FONT.Poppins500,
                fontSize: textScale(15),
                color: COLOR.gray,
                textDecorationLine: 'line-through',
              }}>
              ₹{price}
            </Text>
          </View>
          <View style={styles.priceContainer}>
            <Text style={styles.labelText}>Discount up to:</Text>
            <Text
              style={{
                fontFamily: FONT.Poppins500,
                fontSize: textScale(15),
                color: COLOR.green,
              }}>
              {discountPercentage}%
            </Text>
          </View>
          <View style={styles.priceContainer}>
            <Text style={styles.labelText}>Stock:</Text>
            <Text
              style={{
                fontFamily: FONT.Poppins500,
                fontSize: textScale(15),
                color: COLOR.white,
              }}>
              {stock}
            </Text>
          </View>
          <View style={styles.priceContainer}>
            <Text style={styles.labelText}>For you only:</Text>
            <Text
              style={{
                fontFamily: FONT.Poppins500,
                fontSize: textScale(16),
                color: COLOR.white,
              }}>
              ₹ {discountedPrice}
            </Text>
          </View>
        </View>
      </ScrollView>
      <View style={styles.bottomBtnContainer}>
        <Button title={'Add to cart'} bgColor={COLOR.primary} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: StatusBar.currentHeight,
    paddingHorizontal: moderateScale(16),
    backgroundColor: COLOR.blackOpacity40,
  },
  headIconContainer: {
    width: scale(40),
    height: scale(40),
    justifyContent: 'center',
  },
  titleConatiner: {
    flexDirection: 'row',
    paddingTop: moderateScaleVertical(20),
  },
  titleText: {
    fontFamily: FONT.Poppins600,
    fontSize: textScale(20),
    flex: 1,
    flexWrap: 'wrap',
    color: COLOR.white,
  },
  catergoryText: {
    fontFamily: FONT.Poppins400,
    fontSize: textScale(14),
    textTransform: 'capitalize',
    backgroundColor: COLOR.primary,
    borderRadius: moderateScale(10),
    paddingHorizontal: moderateScale(10),
    paddingVertical: moderateScaleVertical(5),
    marginVertical: moderateScaleVertical(10),
    alignSelf: 'flex-start',
  },
  bottomBtnContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: moderateScale(16),
    paddingVertical: moderateScaleVertical(20),
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: moderateScaleVertical(10),
  },
  labelText: {
    fontFamily: FONT.Poppins400,
    fontSize: textScale(14),
    color: COLOR.white,
  },
});
