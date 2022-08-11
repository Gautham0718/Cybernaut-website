import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col items-start">
      <Head>
        <title>CYBERNAUT</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar className="sticky top-0 bg-white z-30 w-full h-20 flex items-center justify-between text-sm px-4 shadow-2xl shadow-gray-300" />
      <div className="w-full h-full relative -top-10">
        <Slider />
      </div>
    </div>
  );
};

export default Home;
