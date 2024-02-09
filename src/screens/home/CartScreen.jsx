import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import WrapperLayout from '../../components/WrapperLayout';
import {useDispatch, useSelector} from 'react-redux';
import Header from '../../components/Header';
import {
  moderateScale,
  moderateScaleVertical,
  textScale,
} from '../../utils/theme/responsive';
import Button from '../../components/Button';
import {COLOR} from '../../utils/theme/colors';
import {FONT} from '../../assets/fonts';
import CartCard from '../../components/CartCard';
import {useNavigation} from '@react-navigation/native';
import {clearCart} from '../../app/cart/cartSlice';

export default function CartScreen() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {cartproducts, totalprice} = useSelector(state => state.cartList);
  const handleConfirmOrder = totalprice => {
    dispatch(clearCart());
    navigation.replace('OrderStatus', {totalprice: totalprice});
  };
  return (
    <WrapperLayout>
      <Header />
      <FlatList
        data={cartproducts}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => <CartCard item={item} />}
        contentContainerStyle={styles.contentContainerStyle}
        ListHeaderComponent={
          <View style={{marginVertical: moderateScaleVertical(10)}}>
            <Text style={styles.cartHeadText}>Cart items:</Text>
          </View>
        }
        ListEmptyComponent={
          <View style={{marginTop: moderateScaleVertical(60)}}>
            <Text style={styles.listEmptyText}>Add something to buy...</Text>
          </View>
        }
      />
      <View style={styles.bottomBtnContainer}>
        <View style={{flex: 1}}>
          <Text style={styles.totalPriceText}>Total Price:</Text>
          <Text style={styles.totalAmount}>{`₹ ${totalprice}`}</Text>
        </View>
        <Button
          onPress={() => handleConfirmOrder(totalprice)}
          title={'Confirm Order'}
          bgColor={COLOR.primary}
          btnContainerStyle={{flex: 1}}
        />
      </View>
    </WrapperLayout>
  );
}

const styles = StyleSheet.create({
  contentContainerStyle: {
    marginHorizontal: moderateScale(16),
    marginVertical: moderateScaleVertical(16),
    paddingBottom: moderateScaleVertical(90),
  },
  cartHeadText: {
    fontFamily: FONT.Poppins500,
    fontSize: textScale(16),
    color: COLOR.whiteOpacity70,
  },
  listEmptyText: {
    fontFamily: FONT.Poppins600,
    fontSize: textScale(16),
    color: COLOR.gray,
    textAlign: 'center',
  },
  bottomBtnContainer: {
    backgroundColor: COLOR.blackOpacity60,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: moderateScale(16),
    paddingVertical: moderateScaleVertical(10),
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 10,
  },
  totalPriceText: {
    color: COLOR.white,
    fontFamily: FONT.Poppins400,
    fontSize: textScale(14),
  },
  totalAmount: {
    color: COLOR.white,
    fontFamily: FONT.Poppins500,
    fontSize: textScale(18),
  },
});
