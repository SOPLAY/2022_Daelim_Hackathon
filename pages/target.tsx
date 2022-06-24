import React from 'react';
import Container from '../core/components/common/Container';
import BodyContainer from '../core/components/common/BodyContainer';
import Logo from '../core/components/common/Logo';
import Api from '../core/lib/youtubeAPI';
import { useRouter } from 'next/router';

const target = () => {
  const route = useRouter();

  const items = Api.items;
  console.log(items[0].snippet.thumbnails.default);
  return (
    <div className='w-[1440px] h-[1024px] flex justify-center content-center my-auto'>
      <Container>
        <div className='flex flex-col px-[45px] pt-[45px] mb-5'>
          <Logo />
          <h2 className='ml-[90px] leading-8'>{route.query.target}</h2>
        </div>
        <div className='flex w-full h-full px-10'>
          <div className='flex  w-1/3 h-5/6 mr-10'>
            <Container>
              <div className='flex flex-col mx-auto my-auto pl-5'>
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
                  {items.map((e, i) => {
                    return (
                      <div className='mb-5'>
                        <Container type={'target'}>
                          <div className='flex p-5'>
                            <img
                              src={`${items[i].snippet.thumbnails.default.url}`}
                              width='120px'
                            />
                            <div className='ml-5'>
                              <h4>
                                {items[i].snippet.title.length > 40
                                  ? items[i].snippet.title.slice(0, 35) + ' ...'
                                  : items[i].snippet.title}
                              </h4>
                              <h5 className='text-[#7c7c7c] mb-2'>
                                {items[i].snippet.description}
                              </h5>
                              <h6 className='text-[#7c7c7c]'>
                                {items[i].snippet.channelTitle}
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

export default target;
