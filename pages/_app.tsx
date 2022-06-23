import '../styles/globals.css';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>
        {`
          html {
            width: 100%;
            height: 100%;
            background: linear-gradient(
              160deg,
              rgba(82, 97, 107, 1) 0%,
              rgba(201, 214, 223, 1) 49%,
              rgba(30, 32, 34, 1) 100%
            );
          }
        `}
      </style>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
