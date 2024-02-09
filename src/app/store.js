import {configureStore} from '@reduxjs/toolkit';
import productsReducer from './products/productsSlice';
import wishlistReducer from './wishlist/wishlistSlice';
import cartSlice from './cart/cartSlice';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    wishList: wishlistReducer,
    cartList: cartSlice,
  },
});
