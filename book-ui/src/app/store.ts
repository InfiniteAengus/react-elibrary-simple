import { configureStore } from '@reduxjs/toolkit';
import bookSlice from 'redux/slices/bookSlice';
import categorySlice from 'redux/slices/categorySlice';

export const store = configureStore({
  reducer: {
    bookSlice: bookSlice,
    categorySlice: categorySlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
