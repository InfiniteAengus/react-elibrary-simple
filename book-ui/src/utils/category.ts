import axios from 'axios';

export const apiGetCategories = async () => {
  const { data } = await axios.get('/category/read');
  return data;
};
