import Modal from 'react-modal';
import { Form, Field } from 'react-final-form';
import { ReactComponent as CloseIcon } from '@material-icons/svg/svg/close/outline.svg';

import { useAppDispatch, useAppSelector } from 'app/hooks';
import { RootState } from 'app/store';
import FinalFormInput from './FinalFormInput';
import { addBook, updateBook } from 'redux/slices/bookSlice';

interface Props {
  book?: Record<string, string | number>;
  open: boolean;
  onClose: () => void;
  type: string;
}

const customStyles = {
  content: {
    border: '0px',
    padding: '16px',
    marginLeft: '50%',
    transform: 'translate(-50%, 50%)',
    boxShadow: '0 0 10px rgba(0, 0, 0, .3)',
    height: 'fit-content',
    minWidth: '288px',
    maxWidth: '720px',
    outline: '0px',
  },
};

export const BookDialog = ({ book = {}, open, onClose, type }: Props) => {
  const categories = useAppSelector(
    (state: RootState) => state.categorySlice.categories
  );
  const dispatch = useAppDispatch();

  const onSubmit = (val: Record<string, string | number>) => {
    switch (type) {
      case 'add':
        dispatch(addBook(val));
        break;
      case 'update':
        dispatch(updateBook({ ...val, id: book.id }));
        break;
      default:
        break;
    }
    onClose();
  };

  return (
    <Modal
      closeTimeoutMS={100}
      isOpen={open}
      onRequestClose={onClose}
      contentLabel='Book flex flex-col'
      style={customStyles}
      ariaHideApp={false}
    >
      <CloseIcon
        className='absolute top-2 right-2 cursor-pointer fill-primary'
        onClick={onClose}
      />
      <Form
        onSubmit={(val: any) => onSubmit(val)}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <h1 className='font-bold text-3xl text-primary'>
              {type === 'add' ? 'Add' : 'Update'} Book
            </h1>
            <div className='grid gap-2 my-6'>
              <Field
                name='title'
                label='Title'
                render={(props) => (
                  <FinalFormInput {...props} defaultValue={book.title} />
                )}
              />

              <Field
                name='author'
                label='Author'
                defaultValue={book.author}
                render={(props) => (
                  <FinalFormInput {...props} defaultValue={book.author} />
                )}
              />
              <div className='flex grid-rows-2 gap-2'>
                <Field
                  name='categoryId'
                  defaultValue={book.categoryId}
                  label='Category'
                >
                  {(props) => (
                    <FinalFormInput
                      {...props}
                      component='select'
                      options={categories}
                    />
                  )}
                </Field>
                <Field
                  name='pages'
                  label='Pages'
                  defaultValue={book.pages}
                  render={(props) => (
                    <FinalFormInput {...props} defaultValue={book.pages} />
                  )}
                />
              </div>
            </div>
            <div className='flex gap-2'>
              <button className='filled rounded-lg ml-auto' type='submit'>
                {type === 'add' ? 'Add' : 'Update'}
              </button>
              <button
                className='outlined rounded-lg hover:!bg-white hover:!text-primary'
                type='button'
                onClick={onClose}
              >
                Cancel
              </button>
            </div>
          </form>
        )}
      />
    </Modal>
  );
};
