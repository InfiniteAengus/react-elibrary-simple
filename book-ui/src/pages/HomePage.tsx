import React from 'react';
import MainLayout from 'layout/MainLayout';
import DiscoverItem from 'components/DiscoverItem';

const HomePage = () => {
  return (
    <MainLayout title='DIGICCERT' className='relative flex flex-col px-4 pb-4'>
      <img
        src='/images/background.png'
        alt='backgrounds'
        className='absolute top-0 left-0 w-full h-screen object-cover z-0'
      />
      <img
        src={require('images/walking-man.gif')}
        alt='walking-man'
        className='z-10 absolute top-[55%] left-[30%] xs:hidden'
      />

      <DiscoverItem />
    </MainLayout>
  );
};

export default HomePage;
