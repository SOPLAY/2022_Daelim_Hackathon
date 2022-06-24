import Calender from '@components/Calender';
import Container from '@components/common/Container';
import Logo from '@components/common/Logo';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const Home = () => {
  const router = useRouter();
  return (
    <div className='w-[1440px] h-[1024px] flex justify-center content-center my-auto'>
      <Container>
        <div className='flex px-[45px] pt-[45px] mb-5'>
          <Logo />
          <div className='flex justify-end items-center w-[75%]'>
            <Link href='/summery'>
              <h3
                className={`mr-10 hover:text-gray-500 cursor-pointer ${
                  router.pathname === '/summery'
                    ? 'text-gray-500'
                    : 'text-black'
                }`}
              >
                Summery
              </h3>
            </Link>
            <Link href='/calender'>
              <h3
                className={`mr-10 hover:text-gray-500 cursor-pointer ${
                  router.pathname === '/calender'
                    ? 'text-gray-500'
                    : 'text-black'
                }`}
              >
                Calendar
              </h3>
            </Link>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-8 w-8 mb-3 cursor-pointer'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth={2}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1'
              />
            </svg>
          </div>
        </div>
        <Calender />
      </Container>
    </div>
  );
};

export default Home;
