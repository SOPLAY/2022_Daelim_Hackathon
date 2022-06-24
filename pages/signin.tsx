import SignIn from '../core/components/SignIn';
import React from 'react';
import Container from '../core/components/common/Container';
import Auth from '@components/common/Auth';

function Home() {
  return (
    <>
      <Auth>
        <SignIn />
      </Auth>
    </>
  );
}

export default Home;
