import {FlatList} from 'react-native';
import React, {useEffect} from 'react';
import WrapperLayout from '../../components/WrapperLayout';
import {moderateScale} from '../../utils/theme/responsive';
import Loader from '../../components/Loader';
import ProductCard from '../../components/ProductCard';
import {useDispatch, useSelector} from 'react-redux';
import {fetchProducts} from '../../app/products/productsSlice';
import Header from '../../components/Header';

export default function Home() {
  const dispatch = useDispatch();
  const {isLoading, products, isError} = useSelector(state => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return (
    <WrapperLayout>
      <Header brand={'Shopify'} />
      <FlatList
        data={products?.products}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={{
          justifyContent: 'space-between',
          paddingVertical: 10,
        }}
        renderItem={({item}) => <ProductCard item={item} />}
        contentContainerStyle={{
          marginHorizontal: moderateScale(16),
        }}
      />
      <Loader loading={isLoading} />
    </WrapperLayout>
  );
}
