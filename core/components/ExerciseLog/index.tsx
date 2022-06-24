import BodyContainer from '@components/common/BodyContainer';
import Container from '@components/common/Container';
import Logo from '@components/common/Logo';
import React from 'react';

const ExerciseLog = () => {
  return (
    <div className='w-[1440px] h-[1024px] flex justify-center content-center my-auto'>
      <Container>
        <div className='flex flex-col px-[45px] pt-[45px] mb-5'>
          <Logo />
        </div>
        <div className='flex w-full h-full px-10'>
          <div className='flex  w-1/3 h-5/6 mr-10'>
            <Container>
              <div className='flex flex-col mx-auto my-auto pl-5'>
                <BodyContainer width={400} type={'target'} />
              </div>
            </Container>
          </div>
          <div className='flex w-2/3 h-5/6'>
            <Container>
              <div>
                <h1 className='flex justify-center mb-[100px] mt-[70px]'>
                  인클라인 벤치프레스
                </h1>
              </div>
              <div className='flex justify-center items-center'>
                <div className='flex flex-col justify-start w-1/2 h-full'>
                  <div>
                    <h2>
                      중량: <Input /> kg
                    </h2>
                    <h2>
                      횟수: <Input /> 회
                    </h2>
                    <h2>
                      세트: <Input /> 세트
                    </h2>
                  </div>
                </div>
                <div className='flex justify-center items-center w-[300px] h-[300px] border-red-500 border'>
                  이미지
                </div>
              </div>
              <div className='flex w-full h-full justify-end items-end'>
                <button className='w-[180px] h-[80px] bg-white mr-[70px] mb-[70px] text-[40px] rounded-[10px] hover:opacity-50'>
                  저장
                </button>
              </div>
            </Container>
          </div>
        </div>
      </Container>
    </div>
  );
};

const Input = () => {
  return (
    <>
      <input
        className='mb-3 w-[80px] drop-shadow-md rounded-[10px]'
        type='number'
      />
    </>
  );
};

export default ExerciseLog;
