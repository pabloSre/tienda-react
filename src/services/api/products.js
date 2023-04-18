import axios from 'axios';
import endPoints from '@services/api';

const addProduct = async (body) => {
  const config = {
    Headers: {
      accept: '*/*',
      'Conten-type': 'application/json',
    },
  };
  const response = await axios.post(endPoints.products.addProducts, body, config);
  return response.data;
};

const deleteProduct = async (id) => {
  const response = await axios.delete(endPoints.products.deleteProduct(id));
  return response.data; /* asdfaasdfasdf */
};
const updateProduct = async (id, body) => {
  const config = {
    Headers: {
      accept: '*/*',
      'Conten-type': 'application/json',
    },
  };
  const response = await axios.put(endPoints.products.updateProducts(id), body, config);
  return response.data;
};

export { addProduct, deleteProduct, updateProduct };
