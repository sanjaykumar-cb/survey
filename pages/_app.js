import Navbar from "../components/Navbar";
import "../styles/globals.css";
import { useRouter } from "next/router";
import { SessionProvider } from 'next-auth/react';
import SignIn from "./signIn";
import Contact from "./contact";

function MyApp({ Component, pageProps, session }) {
  const router = useRouter();
  return (
    <>
      {router.route === "/" && <Navbar />}

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
