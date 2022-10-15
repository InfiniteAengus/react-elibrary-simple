import React from 'react';
import { useAppDispatch } from 'app/hooks';
import { searchByCategory } from 'redux/slices/bookSlice';

interface Props {
  id: string;
  items: Array<Record<string, string | number>>;
}

const Category = ({ items, id }: Props) => {
  const dispatch = useAppDispatch();
  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(searchByCategory(Number(e.target.value)));
  };

  return (
    <select
      id={id}
      onChange={handleSelect}
      className='border-[1px] px-2 py-1 rounded-md outline-none'
    >
      <option value={0}>All</option>
      {items.map((item, index) => (
        <option key={`option-${index}`} value={item.id}>
          {item.name}
        </option>
      ))}
    </select>
  );
};

export default Category;
