const DiscoverItem = () => {
  return (
    <div className='fixed h-20 bottom-4 right-0 lg:bottom-8 lg:right-8 lg:px-0 px-4 w-full lg:w-full lg:max-w-xl '>
      <div className='bg-[#2c6ba1] w-full text-white rounded relative float-right lg:pr-30 pr-3 h-20 flex items-center shadow-me'>
        <img
          className='lg:w-22 w-[120px] rounded-md lg:block absolute z-100 bottom-0 -left-15 -top-11'
          src='/images/elibrary.png'
          alt='elibrary'
        />
        <div className='block lg:mr-4 mr-auto lg:ml-[8rem] ml-28'>
          <p className='text-3xs tracking-widest font-400 uppercase opacity-50'>
            The World of
          </p>
          <p className='uppercase font-[900] lg:text-lg text-sm'>DIGICERT</p>
        </div>

        <div className='ml-auto'>
          <a
            className='lg:px-6 px-4 group flex shadow-me items-center justify-center lg:text-base text-2xs uppercase lg:h-12 h-12 duration-300 cursor-pointer font-[900] transform border border-none text-gray-800 hover:text-black bg-white'
            href='https://google.com'
          >
            Discover
          </a>
        </div>
      </div>
    </div>
  );
};

export default DiscoverItem;
