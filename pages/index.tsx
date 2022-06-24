import React, { useEffect, useRef, useState } from 'react';
import type { NextPage } from 'next';
import { Main } from 'next/document';
import Head from 'next/head';
import Image from 'next/image';
import { Children } from 'react';
import Container from '../core/components/common/Container';
import MainPage from '../core/components/MainPage/index';
import BodyContainer from '../core/components/common/BodyContainer';

const Home: NextPage = () => {
  const ref = useRef(null);

  return (
    <div className='w-[1440px] h-[1024px] flex justify-center content-center my-auto'>
      <Container>
        <MainPage />
      </Container>
    </div>
  );
};

export default Home;
