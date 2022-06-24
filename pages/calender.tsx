import Calender from '@components/Calender';
import Auth from '@components/common/Auth';
import Container from '@components/common/Container';
import Header from '@components/common/Header';
import Logo from '@components/common/Logo';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const Home = () => {
  const router = useRouter();
  return (
    <Auth auth={true}>
      <div className="w-[90%] h-[90%] w-max-[1440px] h-max-[1024px] flex justify-center content-center my-auto ">
        <Container>
          <Header />
          <Calender />
        </Container>
      </div>
    </Auth>
  );
};

export default Home;
