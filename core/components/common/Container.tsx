import React from 'react';

const Container = ({ children }) => {
  return (
    <div className='flex flex-col w-full h-full bg-white/30 rounded-[50px] border backdrop-blur-md drop-shadow-xl z-10'>
      {children}
    </div>
  );
};

export default Container;
