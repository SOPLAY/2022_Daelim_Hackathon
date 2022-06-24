import React, { useState, useEffect } from 'react';
import Container from '../core/components/common/Container';
import BodyContainer from '../core/components/common/BodyContainer';
import Logo from '../core/components/common/Logo';
import { useRouter } from 'next/router';
import api from '@lib/api';

const Home = () => {
  const [youtubeData, setYoutubeData] = useState([]);
  const route = useRouter();
  const search = {
    Quads: '대퇴사두근운동',
    Obliques: '복근운동',
    Biceps: '이두근운동',
    Pecs: '대흉근운동',
    Traps: '승모근운동',
    Calves: '비복근운동',
    Deltoids: '전면삼각근운동',
    Forearms: '전완근운동',
    'Back-Forearms': '전완근운동',
    'Back-Deltoids': '후면삼각근운동',
    LowTraps: '승모근운동',
    Triceps: '삼두근운동',
    Lats: '광배근운동',
    Glutes: '대둔근운동',
    Hamstrings: '대퇴이두근운동',
    LowerBack: '척추기립근운동',
  };
  let targetData = route.query.target;
  targetData = typeof targetData === 'object' ? targetData[0] : targetData;
  let searchData = search[targetData];

  useEffect(() => {
    const getYoutubeData = async () => {
      await api.youtube
        .get(searchData)
        .then((res) => {
          setYoutubeData(res.data.items);
          console.log(res.data);
        })
        .catch((e) => {
          console.log(e.response);
        });
    };
    getYoutubeData();
  }, []);
  console.log(youtubeData);
  return (
    <div className='w-[1440px] h-[1024px] flex justify-center content-center my-auto'>
      <Container>
        <div className='flex flex-col px-[45px] pt-[45px] mb-5'>
          <Logo />
          <h2 className='ml-[90px] leading-8'>{searchData}</h2>
        </div>
        <div className='flex w-full h-full px-10'>
          <div className='flex  w-1/3 h-5/6 mr-10'>
            <Container>
              <div className='flex flex-col mx-auto my-auto pl-5 pointer-events-none'>
                <h3 className='ml-3'>Target</h3>
                <BodyContainer width={400} type={'target'} />
              </div>
            </Container>
          </div>
          <div className='flex  w-2/3 h-5/6'>
            <Container>
              <div className='flex flex-col p-10 h-full'>
                <h3>How to work?</h3>
                <div className='flex flex-col h-full justify-between mt-5 overflow-scroll'>
                  {youtubeData.map((e, i) => {
                    return (
                      <div className='mb-5' key={i}>
                        <Container type={'target'}>
                          <div className='flex p-5'>
                            <img
                              className='cursor-pointer'
                              src={`${youtubeData[i].snippet.thumbnails.default.url}`}
                              width='120px'
                              onClick={() =>
                                window.open(
                                  `https://www.youtube.com/watch?v=${youtubeData[i].id.videoId}`,
                                  '_blank'
                                )
                              }
                            />
                            <div className='ml-5 cursor-pointer'>
                              <h4
                                onClick={() =>
                                  window.open(
                                    `https://www.youtube.com/watch?v=${youtubeData[i].id.videoId}`,
                                    '_blank'
                                  )
                                }
                              >
                                {youtubeData[i].snippet.title.length > 40
                                  ? youtubeData[i].snippet.title.slice(0, 35) +
                                    ' ...'
                                  : youtubeData[i].snippet.title}
                              </h4>
                              <h5
                                className='text-[#7c7c7c] mb-2 cursor-pointer'
                                onClick={() =>
                                  window.open(
                                    `https://www.youtube.com/watch?v=${youtubeData[i].id.videoId}`,
                                    '_blank'
                                  )
                                }
                              >
                                {youtubeData[i].snippet.description}
                              </h5>
                              <h6
                                className='text-[#7c7c7c] cursor-pointer"'
                                onClick={() =>
                                  window.open(
                                    `https://www.youtube.com/channel/${youtubeData[i].snippet.channelId}`,
                                    '_blank'
                                  )
                                }
                              >
                                {youtubeData[i].snippet.channelTitle}
                              </h6>
                            </div>
                          </div>
                        </Container>
                      </div>
                    );
                  })}
                </div>
              </div>
            </Container>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Home;
