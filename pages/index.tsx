import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import MainPage from '../core/components/MainPage/index';
import Common from '../core/components/common/Container';

const Home: NextPage = () => {
  return (
    <div className='flex justify-center content-center py-10 overflow-y-scroll'>
      <Common />
    </div>
  );
};

export default Home;
