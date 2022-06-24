import Container from '@components/common/Container';
import ExerciseLog from '@components/ExerciseLog';
import React from 'react';

const Home = () => {
  return (
    <div className='w-[1440px] h-[1024px] flex justify-center content-center my-auto'>
      <Container>
        <ExerciseLog />
      </Container>
    </div>
  );
};

export default Home;
