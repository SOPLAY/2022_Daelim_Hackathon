import React from 'react';
import Image from 'next/image';
import { withRouter } from 'next/router';

const Logo = ({ router }) => {
  return (
    <>
      <div
        className="flex items-center cursor-pointer"
        onClick={() => router.push('/')}
      >
        <Image src="/assets/logo.png" width={80} height={80} />
        <div className="flex items-center">
          <Image src="/assets/logotext.png" width={180} height={30} />
          <h2 className="ml-1">.md</h2>
        </div>
      </div>
    </>
  );
};

export default withRouter(Logo);
