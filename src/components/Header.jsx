import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
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

export default function Header({brand = ''}) {
  const navigation = useNavigation();
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

      {/* <View
        style={{
          flex: 1,
          justifyContent: 'center',
          borderWidth: 1,
          borderColor: COLOR.graydarkshade,
          borderRadius: moderateScale(10),
          paddingHorizontal: moderateScale(10),
        }}>
        <TextInput
          placeholder="Search"
          placeholderTextColor={COLOR.gray}
          style={{
            color: COLOR.white,
            fontFamily: FONT.Poppins400,
            fontSize: textScale(14),
          }}
        />
      </View> */}
      <View style={styles.wishCartContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('WishListScreen')}
          style={{...styles.headIconContainer, alignItems: 'flex-end'}}>
          <AntDesign name="hearto" color={COLOR.white} size={24} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('CartScreen')}
          style={{...styles.headIconContainer, alignItems: 'flex-end'}}>
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
});
