import axios from 'axios';

export const apiGetBookList = async () => {
  const { data } = await axios.get('/book/readAll');
  return data;
};

export const apiGetBookById = async (id: number) => {
  const { data } = await axios.get(`/book/readById/${id}`);
  return data;
};

export const apiAddBook = async (book: Record<string, any>) => {
  const { data } = await axios.post('/book/create', book);
  return data;
};

export const apiUpdateBook = async (book: Record<string, any>) => {
  const { data } = await axios.put('/book/update', book);
  return data;
};

export const apiSearchByCategory = async (categoryId: number) => {
  const { data } = await axios.get(`/book/search/${categoryId}`);
  return data;
};

export const apiDeleteBook = async (id: number) => {
  const { data } = await axios.delete(`/book/delete/${id}`);
  return data;
};
