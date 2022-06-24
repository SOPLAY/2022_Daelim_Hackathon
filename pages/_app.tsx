import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import { RecoilRoot } from 'recoil';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>
        {`
          body {
            width: 100vw;
            height: 100vh;
            background: linear-gradient(
              160deg,
              rgba(82, 97, 107, 1) 0%,
              rgba(201, 214, 223, 1) 49%,
              rgba(30, 32, 34, 1) 100%
            );
          }
          #__next {
            width: 100vw;
            height: 100vh;
            display: flex;
            justify-content: center;
            aling-content: center;
          }
          h1 {
            font-size: 50px;
          }
          h2 {
            font-size: 40px;
          }
          h3 {
            font-size: 30px;
          }
          h4 {
            font-size: 20px;
          }
          h5 {
            font-size: 10px;
          }
        `}
      </style>
      <SessionProvider>
        <RecoilRoot>
          <Component {...pageProps} />
        </RecoilRoot>
      </SessionProvider>
    </>
  );
}

export default MyApp;
