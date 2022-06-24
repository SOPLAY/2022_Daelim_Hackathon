import { LogoutIcon } from '@heroicons/react/Outline';
import { signOut } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import Logo from './Logo';

const Header = () => {
  const router = useRouter();
  return (
    <div className="flex px-[45px] pt-[20px] mb-5">
      <Logo />
      <div className="flex justify-end items-center w-[75%]">
        <Link href="/summery">
          <h3
            className={`mr-10 hover:text-gray-500 cursor-pointer ${
              router.pathname === '/summery' ? 'text-gray-500' : 'text-black'
            }`}
          >
            Summery
          </h3>
        </Link>
        <Link href="/calender">
          <h3
            className={`mr-10 hover:text-gray-500 cursor-pointer ${
              router.pathname === '/calender' ? 'text-gray-500' : 'text-black'
            }`}
          >
            Calendar
          </h3>
        </Link>
        <LogoutIcon
          height={30}
          width={30}
          className="cursor-pointer"
          onClick={() => signOut()}
        />
      </div>
    </div>
  );
};

export default Header;
