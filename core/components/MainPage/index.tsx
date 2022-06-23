import React from 'react';
import Container from '../common/Container';
import Logo from '../common/Logo';
import Image from 'next/image';
import MyListbox from '../common/MyListbox';
import ExerciseList from '../common/ExerciseList.json';

const index = () => {
  return (
    <>
      <div className='flex p-[45px]'>
        <Logo />
      </div>
      <div className='flex mx-auto my-auto'>
        <Image src='/assets/body.svg' width={800} height={700} />
        <div className='flex flex-col'>
          <MyListbox />
        </div>
      </div>
    </>
  );
};

export default index;
