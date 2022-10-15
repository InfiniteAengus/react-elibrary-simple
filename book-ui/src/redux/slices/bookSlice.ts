import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { BookProps } from 'redux/types/book';
import {
  apiGetBookList,
  apiGetBookById,
  apiAddBook,
  apiUpdateBook,
  apiSearchByCategory,
  apiDeleteBook,
} from 'utils/book';

const initialState: BookProps = {
  books: [{}],
};

export const getBookList = createAsyncThunk(
  'bookSlice/getBookList',
  async () => {
    let res = await apiGetBookList();
    return res;
  }
);

export const getBookById = createAsyncThunk(
  'bookSlice/getBookById',
  async (id: number) => {
    let res = await apiGetBookById(id);
    return res;
  }
);

export const addBook = createAsyncThunk(
  'bookSlice/addBook',
  async (book: Record<string, string | number>) => {
    let res = await apiAddBook(book);
    return res;
  }
);

export const updateBook = createAsyncThunk(
  'bookSlice/updateBook',
  async (book: Record<string, any>) => {
    let res = await apiUpdateBook(book);
    return res;
  }
);

export const searchByCategory = createAsyncThunk(
  'bookSlice/searchByCategory',
  async (categoryId: number) => {
    let res = await apiSearchByCategory(categoryId);
    return res;
  }
);

export const deleteBook = createAsyncThunk(
  'bookSlice/deleteBook',
  async (id: number) => {
    let res = await apiDeleteBook(id);
    return res;
  }
);

export const BookSlice = createSlice({
  name: 'bookSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      getBookList.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.books = action.payload;
      }
    );
    builder.addCase(
      getBookById.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.books = action.payload;
      }
    );
    builder.addCase(addBook.fulfilled, (state, action: PayloadAction<any>) => {
      state.books = action.payload;
    });
    builder.addCase(
      updateBook.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.books = action.payload;
      }
    );
    builder.addCase(
      searchByCategory.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.books = action.payload;
      }
    );
    builder.addCase(
      deleteBook.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.books = action.payload;
      }
    );
  },
});

export default BookSlice.reducer;
