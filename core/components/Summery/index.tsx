import BodyContainer from '@components/common/BodyContainer';
import Container from '@components/common/Container';
import api from '@lib/api';
import React, { useEffect, useState } from 'react';
import ExerciseList from '@lib/ExerciseList.json';
import Loading from '@components/common/Loading';

const index = () => {
  const [userData, setUserData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const myData = [];
  const getUserData = async () => {
    // setIsLoading(true);
    let data = await api.user
      .get({ date: new Date().toLocaleDateString() })
      .then((res) => setUserData(res.data.data))
      .catch((err) => console.log(err.response.data));
    // setIsLoading(false);
    return data;
  };
  useEffect(() => {
    !userData.length && getUserData();
  }, [userData]);

  const getEng = (name) => {
    return ExerciseList.data.find((v) => v.subTarget.includes(name)).eng;
  };
  userData.map((e, i) => {
    let engName = getEng(e.name);
    let volume = e.weight * e.count * e.set;
    myData.push({ target: engName, volume: volume, id: e.id });
  });
  const initial = 0;
  const totalVol = myData.reduce((acc, cur) => acc + cur.volume, initial);

  myData.map((e, i) => {
    myData[i]['percent'] = e.volume / totalVol;
  });

  return (
    <div className="flex justify-center w-full h-full px-10">
      <div className="flex w-1/2 h-[90%] mr-10">
        <Container>
          <div className="p-5 pointer-events-none">
            <BodyContainer width={'100%'} type={'summery'} myData={myData} />
          </div>
        </Container>
      </div>
      <div className="flex  w-1/2 h-[90%]">
        <Container>
          <div className="flex flex-col h-full p-[30px]">
            <h2 className="drop-shadow-md ml-5">Volumes</h2>
            <div className="flex flex-col items-center">
              {isLoading ? (
                <>
                  <Loading type="summary" />
                  <Loading type="summary" />
                  <Loading type="summary" />
                  <Loading type="summary" />
                </>
              ) : myData.length ? (
                myData.map((v) => {
                  return (
                    <div
                      className="h-[60px] mt-5 flex justify-between px-5 items-center w-[90%]  bg-white/30 rounded-[10px] backdrop-blur-md drop-shadow-xl z-10"
                      key={v.id}
                    >
                      <h3 className="flex m-0">{`${v.target}: ${v.volume}`}</h3>
                      <div className="flex">
                        {/* <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-7 w-7 cursor-pointer text-gray-500 hover:text-black mr-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                          />
                        </svg> */}

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-7 w-7 cursor-pointer text-gray-500 hover:text-red-600 "
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          onClick={async () => {
                            await api.user
                              .delete({ id: v.id })
                              .then((res) => getUserData())
                              .catch((err) =>
                                alert(`서버오류로 인해 삭재에 실패했습니다.`)
                              );
                          }}
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                      </div>
                    </div>
                  );
                })
              ) : (
                <h3 className="my-2/6 text-center">
                  아직 운동기록이 없습니다.
                  <br />
                  운동을 기록해 주세요.
                </h3>
              )}
            </div>
          </div>
          <div className="flex flex-col justify-center items-center w-full h-1/4 border-white border-t-2">
            <div className="flex flex-col w-[80%]  bg-white/30 rounded-[10px] border backdrop-blur-md drop-shadow-xl z-10 items-center">
              <h2 className="mx-auto my-auto">Total Volume: {totalVol}</h2>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default index;
