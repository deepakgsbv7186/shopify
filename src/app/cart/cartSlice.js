import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  cartproducts: [],
  totalprice: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const {id, price} = action.payload;
      const existingProductIndex = state.cartproducts.findIndex(
        product => product?.id === id,
      );

      if (existingProductIndex !== -1) {
        state.cartproducts[existingProductIndex].quantity += 1;
      } else {
        state.cartproducts.push({...action.payload, quantity: 1});
      }
      state.totalprice += price;
    },
    removeFromCart: (state, action) => {
      const {id, price, quantity} = action.payload;
      const existingProductIndex = state.cartproducts.findIndex(
        product => product?.id === id,
      );
      state.cartproducts.splice(existingProductIndex, 1);
      state.totalprice -= price * quantity;
    },
    removeSingleProductFromCart: (state, action) => {
      const {id, price} = action.payload;
      const existingProductIndex = state.cartproducts.findIndex(
        product => product?.id === id,
      );

      if (existingProductIndex !== -1) {
        state.cartproducts[existingProductIndex].quantity -= 1;
        if (state.cartproducts[existingProductIndex].quantity === 0) {
          state.cartproducts.splice(existingProductIndex, 1);
        }
        state.totalprice -= price;
      }
    },
    clearCart: state => {
      state.cartproducts = [];
      state.totalprice = 0;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  removeSingleProductFromCart,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
