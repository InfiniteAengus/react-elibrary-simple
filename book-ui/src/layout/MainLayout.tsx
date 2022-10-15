import React from 'react';
import ReactHelmet from 'react-helmet';

type Props = {
  title?: string;
  children?: React.ReactNode;
  className?: string;
};

const MainLayout: React.FC<Props> = ({ title, children, className = '' }) => {
  return (
    <>
      <ReactHelmet>
        <title>{title}</title>
      </ReactHelmet>
      <main
        className={`${className} min-h-screen h-full pt-20 pb-4 px-4 sm:px-6 lg:px-8 overflow-x-hidden flex flex-col`}
      >
        {children}
      </main>
    </>
  );
};

export default MainLayout;
