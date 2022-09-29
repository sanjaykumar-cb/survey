import { useRouter } from "next/router";
import Navbar from "../components/Navbar";
import Contact from "./contact";
import SignIn from "./signIn";

export default function Home() {
  const router = useRouter();
  return <>
    <Navbar />

  </>
}