import Navbar from "../components/Navbar";
import "../styles/globals.css";
import { useRouter } from "next/router";
import { SessionProvider } from 'next-auth/react';

function MyApp({ Component, pageProps, session }) {
  const router = useRouter();
  return (
    <>

      <SessionProvider>

        <Component {...pageProps} />

      </SessionProvider>
    </>
  );
}

export default MyApp;
