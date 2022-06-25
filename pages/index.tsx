import React from 'react';
import type { NextPage } from 'next';

import Container from '../core/components/common/Container';
import MainPage from '../core/components/MainPage/index';

import Header from '@components/common/Header';
import Auth from '@components/common/Auth';

const Home: NextPage = () => {
  return (
    <Auth auth={true}>
      <div className="w-[90%] h-[90%] w-max-[1440px] h-max-[1024px] flex justify-center content-center my-auto">
        <Container>
          <Header />
          <MainPage />
        </Container>
      </div>
    </Auth>
  );
};

export default Home;
