import BodyContainer from '@components/common/BodyContainer';
import Container from '@components/common/Container';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import ExerciseList from '@lib/ExerciseList.json';
import api from '@lib/api';

const ExerciseLog = () => {
  const router = useRouter();
  const exName = router.query.target;
  const [inputData, setInputData] = useState({
    name: typeof exName === 'object' ? exName[0] : exName,
    set: 0,
    count: 0,
    weight: 0,
  });
  console.log(ExerciseList.data[`${router.query.id}`].subTarget[0]);
  return (
    <>
      <div className='flex w-full h-full px-10'>
        <div className='flex  w-1/3 h-[90%] mr-10'>
          <Container>
            <div className='flex flex-col mx-auto my-auto pl-5 pointer-events-none'>
              <BodyContainer width={'100%'} type={'summary'} />
            </div>
          </Container>
        </div>
        <div className='w-2/3 h-[90%] '>
          <Container>
            <div>
              <div>
                <h1 className='flex justify-center my-7'>
                  {exName ||
                    ExerciseList.data[`${router.query.id}`].subTarget[0]}
                </h1>
              </div>
              <div className='flex items-center justify-center'>
                <div className='flex flex-col h-full mr-3'>
                  <div>
                    <h3>
                      중량 :
                      <Input
                        value={inputData.weight}
                        onChange={(e) =>
                          setInputData({ ...inputData, weight: e.target.value })
                        }
                      />
                      kg
                    </h3>
                    <h3>
                      횟수 :
                      <Input
                        value={inputData.count}
                        onChange={(e) =>
                          setInputData({ ...inputData, count: e.target.value })
                        }
                      />
                      회
                    </h3>
                    <h3>
                      세트 :
                      <Input
                        value={inputData.set}
                        onChange={(e) =>
                          setInputData({ ...inputData, set: e.target.value })
                        }
                      />
                      세트
                    </h3>
                  </div>
                </div>
                <div className='flex justify-center items-center w-1/2 h-[300px] border-red-500 border'>
                  이미지
                </div>
              </div>
              <div className='flex mt-5 justify-end items-end'>
                <button
                  className='w-[180px]  bg-white mr-[30px] mb-[30px] text-[40px] rounded-[10px] hover:opacity-50'
                  onClick={async () =>
                    await api.user
                      .post(inputData)
                      .then((res) => {
                        router.push('/summery');
                      })
                      .catch((err) =>
                        alert(
                          '서버 통신중 오류 발생 : 이미 존재하는 값 같 습니다.'
                        )
                      )
                  }
                >
                  저장
                </button>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
};

const Input = ({ ...props }) => {
  return (
    <>
      <input
        className='mb-3 mx-2 w-[100px] drop-shadow-md rounded-[10px] pl-3'
        type='number'
        {...props}
      />
    </>
  );
};

export default ExerciseLog;
