import React, { useEffect, useRef } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/Navbar";
import NewSlider from "../components/NewSlider";
import { useRouter } from "next/router";
import Courses from "../components/Courses";
import AboutComponent from "../components/AboutComponent";
import JuniorSpace from "../components/JuniorSpace";
import Founders from "../components/Founders";

const Home: NextPage = () => {
  const { asPath } = useRouter();
  const navRef = useRef<HTMLDivElement>();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div id="home" className="overflow-hidden">
      <Head>
        <title>CYBERNAUT</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar
        ref={navRef as any}
        className="bg-white z-30 w-full h-[80px] flex items-center justify-between text-sm px-4"
      />
      <div
        key={asPath}
        className="flex flex-col items-center justify-center overflow-hidden"
      >
        <NewSlider />
        <AboutComponent />
        <Courses />
        <JuniorSpace />
        <Founders />
      </div>
    </div>
  );
};

export default Home;
