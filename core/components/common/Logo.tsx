import React from 'react';
import Image from 'next/image';

const Logo = () => {
  return (
    <>
      <div className='flex items-center'>
        <Image src='/assets/logo.png' width={80} height={80} />
        <h2 className='ml-[10px]'>MUSCLE.md</h2>
      </div>
    </>
  );
};

export default Logo;
