import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { CategoryProps } from 'redux/types/category';
import { apiGetCategories } from 'utils/category';

const initialState: CategoryProps = {
  categories: [{}],
};

export const getCategories = createAsyncThunk(
  'categorySlice/getCategories',
  async () => {
    let res = await apiGetCategories();
    return res;
  }
);

export const CategorySLice = createSlice({
  name: 'categorySlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      getCategories.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.categories = action.payload;
      }
    );
  },
});

export default CategorySLice.reducer;
