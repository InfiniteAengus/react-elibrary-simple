import React, { useState, useEffect } from 'react';
import MainLayout from 'layout/MainLayout';
import Table from 'components/Table';
import Category from 'components/Category';
import { BookDialog } from 'components/BookDialog';

import { useAppDispatch, useAppSelector } from 'app/hooks';
import { RootState } from 'app/store';
import { getBookList } from 'redux/slices/bookSlice';
import { getCategories } from 'redux/slices/categorySlice';

const BookPage = () => {
  const [open, setOpen] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const books = useAppSelector((state: RootState) => state.bookSlice.books);
  const categories = useAppSelector(
    (state: RootState) => state.categorySlice.categories
  );

  useEffect(() => {
    dispatch(getBookList());
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <MainLayout title='E-Library Book'>
      <div className='shadow-[0_0_8px_2px_rgba(0,0,0,0.02)] px-2 pt-3 grow rounded-lg bg-white'>
        <div className='my-4 flex gap-2 items-center justify-end'>
          <label htmlFor='category'>Category:</label>
          <Category id='category' items={categories} />
          <button className='outlined rounded-lg' onClick={() => setOpen(true)}>
            ADD
          </button>
        </div>
        <Table
          colnames={['No', 'Title', 'Category', 'Author', 'Pages']}
          books={books}
        />{' '}
      </div>
      <BookDialog open={open} onClose={() => setOpen(false)} type='add' />
    </MainLayout>
  );
};

export default BookPage;
