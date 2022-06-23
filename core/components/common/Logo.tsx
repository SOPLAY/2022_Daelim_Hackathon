import React from 'react';
import Image from 'next/image';

const Logo = () => {
  return (
    <>
      <div className='flex items-center'>
        <Image src='/assets/logo.png' width={90} height={90} />
        <h1 className='ml-[10px]'>MUSCLE.md</h1>
      </div>
    </>
  );
};

export default Logo;
