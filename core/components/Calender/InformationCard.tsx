import { Progress } from 'antd';
import Image from 'next/image';
import React from 'react';
type TypeInformationCard = {
  name: string;
  weight: number;
  count: number;
  set: number;
  progress?: number;
};
const InformationCard = ({
  name,
  weight,
  count,
  set,
  progress = 10,
}: TypeInformationCard) => {
  return (
    <div className="flex items-center w-full h-[150px] bg-white/30 rounded-[20px] border backdrop-blur-md drop-shadow-xl mb-5 justify-between">
      <div className="flex items-center ">
        <div className="flex justify-center items-center w-[150px] h-[150px]">
          <Image
            src={`/assets/exercise/${name}.png`}
            width={'100%'}
            height={'100%'}
          />
        </div>
        <div className="flex flex-col content-center font-s leading-none">
          <h4 className="font-bold mb-5">{name}</h4>
          <h4>중량 : {weight}</h4>
          <h4>횟수 : {count}</h4>
          <h4>세트 : {set}</h4>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center mr-10">
        <h4>Day Volume</h4>
        <Progress
          type="circle"
          percent={progress}
          strokeColor="red"
          width={80}
          strokeWidth={10}
        />
      </div>
    </div>
  );
};

export default InformationCard;
