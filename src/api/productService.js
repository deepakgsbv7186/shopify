import API from './index';
export const fetchProducts = async () => {
  try {
    const response = await API.get('/products');
    return response?.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};
