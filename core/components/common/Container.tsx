import React from 'react';

const Container = ({ ...props }) => {
  const { children, type } = props;
  return (
    <div
      className={`flex flex-col w-full h-full bg-white/40 ${
        type === 'target' ? 'rounded-[20px]' : 'rounded-[50px]'
      } border backdrop-blur-lg drop-shadow-xl z-10`}
    >
      {children}
    </div>
  );
};

export default Container;
