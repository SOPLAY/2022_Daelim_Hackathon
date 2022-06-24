import React from 'react';
import Container from '../core/components/common/Container';
import BodyContainer from '../core/components/common/BodyContainer';
import Logo from '../core/components/common/Logo';

const target = () => {
  return (
    <div className='w-[1440px] h-[1024px] flex justify-center content-center my-auto'>
      <Container>
        <div className='flex p-[45px]'>
          <Logo />
        </div>
        <div className='flex mx-auto my-auto'>
          {/* <Image src='/assets/body.svg' width={800} height={700} /> */}
          <BodyContainer width={400} type={'target'} />
        </div>
      </Container>
    </div>
  );
};

export default target;
