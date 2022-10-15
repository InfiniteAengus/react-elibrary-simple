import React, { useState } from 'react';
import { BookDialog } from 'components/BookDialog';
import { ReactComponent as EditIcon } from '@material-icons/svg/svg/edit/outline.svg';
import { ReactComponent as DeleteIcon } from '@material-icons/svg/svg/delete/outline.svg';

import { useAppDispatch } from 'app/hooks';
import { deleteBook } from 'redux/slices/bookSlice';

interface Props {
  colnames: Array<string>;
  books: Array<Record<string, any>>;
}

const Table = ({ colnames, books }: Props) => {
  const [open, setOpen] = useState<boolean>(false);
  const [item, setItem] = useState<Record<string, string | number>>({});

  const dispatch = useAppDispatch();

  const handleEdit = (book: Record<string, string | number>) => {
    setItem(book);
    setOpen(true);
  };

  const handleDelete = (id: number) => {
    dispatch(deleteBook(id));
  };

  return (
    <div className='rounded overflow-hidden'>
      <table className='w-full'>
        <thead>
          <tr className='bg-[#F4F4FB]'>
            {colnames.map((name, index) => (
              <th key={`th-${index}`}>{name}</th>
            ))}
            <th />
          </tr>
        </thead>
        <tbody>
          {books.length ? (
            books.map((book, index) => (
              <tr
                className={`text-center ${
                  index % 2 === 1 ? 'bg-[#FAFAFC]' : ''
                }`}
                key={`tr-${index}`}
              >
                <td>{index + 1}</td>
                <td>{book.title}</td>
                <td>{book.Category?.name}</td>
                <td>{book.author}</td>
                <td>{book.pages}</td>
                <td className='flex gap-2 w-fit mx-auto'>
                  <div className='flex items-center'>
                    <EditIcon
                      className='cursor-pointer'
                      onClick={() => handleEdit(book)}
                    />{' '}
                    <DeleteIcon
                      className='cursor-pointer'
                      onClick={() => handleDelete(book.id)}
                    />
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={colnames.length} align='center'>
                No Data
              </td>
            </tr>
          )}
        </tbody>

        <BookDialog
          open={open}
          onClose={() => setOpen(false)}
          type='update'
          book={item}
        />
      </table>
    </div>
  );
};

export default Table;
