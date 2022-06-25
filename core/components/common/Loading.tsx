import React from 'react';

type TypeLoading = {
  type?: 'calender' | 'pecs' | 'summary';
};

const LoadingContainer = ({ children }) => (
  <div className="w-[96%] bg-white/25 backdrop-blur-sm rounded-xl  m-3 p-3 box-border ">
    {children}
  </div>
);

const Loading = ({ type = 'pecs' }: TypeLoading) => {
  if (type === 'calender' || type === 'pecs')
    return (
      <LoadingContainer>
        <div className="h-24 flex">
          <div className="w-1/4 h-full flex items-center justify-center p-2">
            <div className=" w-full h-full loading" />
          </div>
          <div className="w-3/4 p-2">
            <div className="h-6 loading " />
            <div className="h-3 w-5/6 mt-2 loading" />
            <div className="h-3 w-4/6 my-1 loading" />
            <div className="h-3 w-4/5 my-1 loading" />
          </div>
        </div>
      </LoadingContainer>
    );

  if (type === 'summary')
    return (
      <LoadingContainer>
        <div className="h-10 flex items-center  justify-between">
          <div className="w-3/5  h-4/6 loading" />
          <div className="w-1/5 h-4/6 flex justify-between mr-5">
            <div className="w-2/5  h-full loading" />
            <div className="w-2/5  h-full loading" />
          </div>
        </div>
      </LoadingContainer>
    );
};

export default Loading;
