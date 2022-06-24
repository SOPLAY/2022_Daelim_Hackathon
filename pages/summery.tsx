import Container from '@components/common/Container';
import React from 'react';
import Summery from '@components/Summery';
import Logo from '@components/common/Logo';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Header from '@components/common/Header';
import Auth from '@components/common/Auth';

const Home = () => {
  const router = useRouter();
  return (
    <Auth auth={true}>
      <div className="w-[90%] h-[90%] w-max-[1440px] h-max-[1024px] flex justify-center content-center my-auto">
        <Container>
          <Header />
          <Summery />
        </Container>
      </div>
    </Auth>
  );
};

export default Home;
