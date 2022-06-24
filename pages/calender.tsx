import Calender from "@components/Calender";
import Container from "@components/common/Container";
import Header from "@components/common/Header";
import React from "react";

const calender = () => {
  return (
    <div className="flex justify-center items-center w-full h-full">
      <div className="w-[1440px] h-[1024px]">
        <Container>
          <Header />
          <Calender />
        </Container>
      </div>
    </div>
  );
};

export default calender;
