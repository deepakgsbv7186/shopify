import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import productApi from '../../api';

const initialState = {
  isLoading: false,
  products: [],
  isError: false,
};

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    try {
      const response = await productApi.get('/products');
      return response?.data;
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error;
    }
  },
);

const productsSlice = createSlice({
  name: 'products',
  initialState,
  extraReducers: builder => {
    builder.addCase(fetchProducts.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.products = action.payload;
    });
    builder.addCase(fetchProducts.rejected, state => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export default productsSlice.reducer;
