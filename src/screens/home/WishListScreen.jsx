import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import WrapperLayout from '../../components/WrapperLayout';
import {useSelector} from 'react-redux';
import Header from '../../components/Header';
import WishCard from '../../components/WishCard';
import {
  moderateScale,
  moderateScaleVertical,
  textScale,
} from '../../utils/theme/responsive';
import {COLOR} from '../../utils/theme/colors';
import {FONT} from '../../assets/fonts';

export default function WishListScreen() {
  const {wishproducts} = useSelector(state => state.wishList);
  return (
    <WrapperLayout>
      <Header />
      <FlatList
        data={wishproducts}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => <WishCard item={item} />}
        contentContainerStyle={{
          marginHorizontal: moderateScale(16),
          marginVertical: moderateScaleVertical(16),
        }}
        ListEmptyComponent={
          <View style={{marginTop: moderateScaleVertical(60)}}>
            <Text
              style={{
                fontFamily: FONT.Poppins600,
                fontSize: textScale(16),
                color: COLOR.gray,
                textAlign: 'center',
              }}>
              Wish more...
            </Text>
          </View>
        }
      />
    </WrapperLayout>
  );
}

const styles = StyleSheet.create({});
