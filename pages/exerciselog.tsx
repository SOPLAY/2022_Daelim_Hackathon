import Auth from '@components/common/Auth';
import Container from '@components/common/Container';
import Header from '@components/common/Header';
import ExerciseLog from '@components/ExerciseLog';
import React from 'react';

const Home = () => {
  return (
    <Auth auth={true}>
      <div className="w-[90%] h-[90%] w-max-[1440px] h-max-[1024px] flex justify-center content-center my-auto ">
        <Container>
          <Header />
          <ExerciseLog />
        </Container>
      </div>
    </Auth>
  );
};

export default Home;
