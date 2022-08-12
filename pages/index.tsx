import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/Navbar";
import NewSlider from "../components/NewSlider";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col items-start overflow-hidden">
      <Head>
        <title>CYBERNAUT</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar className="fixed top-0 bg-white z-30 w-full h-[80px] flex items-center justify-between text-sm px-4 shadow-2xl shadow-gray-300" />
      <div className="w-full h-[80px]"></div>
      <NewSlider />
    </div>
  );
};

export default Home;
