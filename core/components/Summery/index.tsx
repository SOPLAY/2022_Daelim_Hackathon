import BodyContainer from '@components/common/BodyContainer';
import Container from '@components/common/Container';
import React, { useEffect } from 'react';

const index = () => {
  const testData = [
    {
      id: 1,
      name: 'pecs',
      value: 1500,
    },
    {
      id: 2,
      name: 'Triceps',
      value: 1000,
    },
    {
      id: 3,
      name: 'cex',
      value: 3000,
    },
  ];
  const totalVol = testData.reduce((acc, cur) => acc + cur.value, 0);

  return (
    <div className='flex justify-center w-full h-full px-10 mt-10'>
      <div className='flex w-1/2 h-5/6 mr-10'>
        <Container>
          <div className='flex flex-col mx-auto my-auto'>이미지</div>
        </Container>
      </div>
      <div className='flex  w-1/2 h-5/6'>
        <Container>
          <div className='flex flex-col h-full p-[30px]'>
            <h2 className='drop-shadow-md ml-5'>Volumes</h2>
            <div className='flex flex-col items-center'>
              {testData.map((v) => {
                return (
                  <div
                    className='h-[60px] mt-5 flex justify-between px-5 items-center w-[90%]  bg-white/30 rounded-[10px] backdrop-blur-md drop-shadow-xl z-10'
                    key={v.id}
                  >
                    <h3 className='flex m-0'>{`${v.name}: ${v.value}`}</h3>
                    <div className='flex'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-7 w-7 cursor-pointer text-gray-500 hover:text-black mr-5'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z'
                        />
                      </svg>

                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-7 w-7 cursor-pointer text-gray-500 hover:text-red-600'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
                        />
                      </svg>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className='flex flex-col justify-center items-center w-full h-1/3 border-white border-t-2'>
            <div className='flex flex-col w-[80%] h-[60px] mt-5 items-start bg-white/30 rounded-[10px] border backdrop-blur-md drop-shadow-xl z-10'>
              <h2 className='mx-auto'>Total Volume: {totalVol}</h2>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default index;
