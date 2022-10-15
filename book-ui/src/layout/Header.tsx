import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className='fixed w-full top-0 px-4 lg:px-8 pt-5 lg:pt-8 z-50'>
      <div className='flex border-b border-white items-center justify-between max-w-11xl mx-auto border-opacity-0'>
        <button className='filled shadow-2xl' onClick={() => navigate('/')}>
          DIGICCERT
        </button>
        <button
          className='outlined rounded-lg'
          onClick={() => navigate('/book')}
        >
          Books
        </button>
      </div>
    </header>
  );
};

export default Header;
