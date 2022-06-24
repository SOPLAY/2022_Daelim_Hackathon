import Calender from "@components/Calender";
import Container from "@components/common/Container";
import Header from "@components/common/Header";
import Logo from "@components/common/Logo";
import React from "react";

const calender = () => {
  return (
    <div className="w-[1440px] h-[1024px] flex justify-center content-center my-auto">
      <Container>
        <div className="flex p-[45px]">
          <Logo />
        </div>
        <div className="flex mx-auto my-auto">
          <Calender />
        </div>
      </Container>
    </div>
  );
};

export default calender;
