import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {COLOR} from '../../utils/theme/colors';
import WrapperLayout from '../../components/WrapperLayout';
import {FONT} from '../../assets/fonts';
import {
  height,
  moderateScale,
  moderateScaleVertical,
  textScale,
  width,
} from '../../utils/theme/responsive';
import API from '../../api';
import Loader from '../../components/Loader';
import ProductCard from '../../components/ProductCard';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const getProducts = async () => {
    setLoading(true);
    try {
      const response = await API.get('/products');
      if (response?.status === 200) {
        setProducts(response?.data?.products);
        setLoading(false);
      }
    } catch (error) {
      console.error('Error fetching products:', error);
      setLoading(false);
      throw error;
    }
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <WrapperLayout>
      <FlatList
        data={products}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: 'space-between',
          paddingVertical: 10,
        }}
        renderItem={({item}) => <ProductCard item={item} />}
        contentContainerStyle={{
          marginHorizontal: moderateScale(16),
        }}
      />
      <Loader loading={loading} />
    </WrapperLayout>
  );
}

const styles = StyleSheet.create({});
