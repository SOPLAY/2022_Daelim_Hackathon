import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link href='/'>
      <div className='flex items-center cursor-pointer'>
        <Image src='/assets/logo.png' width={80} height={80} />
        <h2 className='ml-[10px]'>MUSCLE.md</h2>
      </div>
    </Link>
  );
};

export default Logo;
