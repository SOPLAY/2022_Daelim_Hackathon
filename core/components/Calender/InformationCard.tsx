import { Progress } from "antd";
import React from "react";

const InformationCard = () => {
  return (
    <div className="flex items-center w-[500px] h-[150px] bg-white/30 rounded-[20px] border backdrop-blur-md drop-shadow-xl mb-5">
      <div className="flex justify-center items-center w-[150px] h-[150px]">
        이미지
      </div>
      <div className="flex flex-col content-center font-s leading-none">
        <h4 className="font-bold mb-5">인클라인 벤치프레스</h4>
        <h4>중량 : 65</h4>
        <h4>횟수 : 65</h4>
        <h4>세트 : 65</h4>
      </div>
      <div className="flex flex-col justify-center items-center ml-10">
        <h4>Volume</h4>
        <Progress
          type="circle"
          percent={50}
          strokeColor="red"
          width={80}
          strokeWidth={10}
        />
      </div>
    </div>
  );
};

export default InformationCard;
