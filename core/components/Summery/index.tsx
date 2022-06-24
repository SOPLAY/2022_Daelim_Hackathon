import BodyContainer from '@components/common/BodyContainer';
import Container from '@components/common/Container';
import React from 'react';

const index = () => {
  return (
    <div className='flex justify-center w-full h-full px-10 mt-10'>
      <div className='flex w-1/2 h-5/6 mr-10'>
        <Container>
          <div className='flex flex-col mx-auto my-auto'>이미지</div>
        </Container>
      </div>
      <div className='flex  w-1/2 h-5/6'>
        <Container>
          <div className='flex flex-col p-12'>
            <h2 className='drop-shadow-md'>Volumes</h2>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default index;
