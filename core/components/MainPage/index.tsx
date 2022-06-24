import React, { useState } from 'react';
import MyListbox from '../common/MyListbox';
import BodyContainer from '../common/BodyContainer';

const index = () => {
  return (
    <>
      <div className="flex mx-auto my-auto w-full h-full">
        <div className="flex w-2/3 items-center justify-center">
          <BodyContainer width={'90%'} type={'main'} />
        </div>
        <div className="flex flex-col justify-center w-1/2 items-center">
          <MyListbox />
        </div>
      </div>
    </>
  );
};

export default index;
