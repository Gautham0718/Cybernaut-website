import React, { useEffect, useRef, useState } from "react";
import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Navbar from "../Navbar";
import { useRouter } from "next/router";
import Footer from "../Footer";
import VisionMission from "./VisionMission";

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {},
  };
};

const Home: NextPage = () => {
    const navRef = useRef<HTMLDivElement>();
    const [show, setShow] = useState(true);

  return (
    <div id="home" className="overflow-hidden">
      <Head>
        <title>CYBERNAUT</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar
        NavRef={navRef as any}
        show={show}
        className={
          show
            ? "bg-white z-30 w-full h-[80px] flex items-center justify-center md:justify-between text-sm px-4 fixed top-0  ease-in duration-200"
            : "bg-white z-30 w-full h-[80px] flex items-center justify-center md:justify-between text-sm px-4 fixed -top-[80px]  ease-in duration-300"
        }
      />
        <VisionMission />
        <Footer/>
    </div>
  );
};

export default Home;
