import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  wishproducts: [],
};

const wishlistSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addToWish: (state, action) => {
      const {id} = action.payload;
      const alreadyInWishList = state.wishproducts.find(
        product => product?.id === id,
      );
      if (!alreadyInWishList) {
        state.wishproducts.push(action.payload);
      }
    },
    removeFromWish: (state, action) => {
      const id = action.payload;
      state.wishproducts = state.wishproducts.filter(
        product => product?.id !== id,
      );
    },
  },
});

export const {addToWish, removeFromWish} = wishlistSlice.actions;
export default wishlistSlice.reducer;
