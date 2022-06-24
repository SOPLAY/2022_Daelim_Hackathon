import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import React from 'react';

const Auth = ({ children, auth = false }) => {
  const { status } = useSession();
  const router = useRouter();
  if (status === 'unauthenticated' && auth === true) {
    router.push('/signin');
    return <div>로그인이 필요한 페에지 입니다.</div>;
  } else if (status === 'authenticated' && auth === false) {
    router.push('/');
    return <div>로그인상태로는 접근이 불가능한 페이지 입니다.</div>;
  } else {
    return children;
  }
};

export default Auth;
