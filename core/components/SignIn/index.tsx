import Container from "../common/Container";
import Image from "next/image";
import kakaotalk from "./images/kakaotalk.png";
import React from "react";
import Logo from "@components/common/Logo";

function SignIn() {
  return (
    <div className="flex justify-center items-center w-full h-full">
      <div className="w-[500px] h-[290px]">
        <Container>
          <div className="flex flex-col items-center m-[50px]">
            <Logo />
            <div className="mt-[50px]">
              <button className="flex justify-center items-center w-[400px] h-[70px] p-[20px] bg-kakao-yellow rounded-[10px] drop-shadow-lg">
                <Image src={kakaotalk} width={30} height={30}></Image>
                <h4 className="flex-1">카카오로 계속하기</h4>
              </button>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default SignIn;
