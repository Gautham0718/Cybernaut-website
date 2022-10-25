import React, { useEffect, useRef, useState } from "react";
import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Intro from "../../components/Career/general";
import Career1 from "../../components/Career/career1";
import Career2 from "../../components/Career/career2";
import Career3 from "../../components/Career/Career3";
import Career4 from "../../components/Career/career4";
import Promise from "../../components/Career/promise";
import Opportunities from "../../components/Career/Oppurtunities";
import PrgCoordinator from "../../components/Career/Coordinator";

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {},
  };
};

const Career: NextPage = () => {
    const { asPath } = useRouter();
  const navRef = useRef<HTMLDivElement>();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

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
        <Intro/>
        <Career1/>
        <Career2/>
        <Career3/>
        <Career4/>
        <Promise/>
        <Opportunities/>
        <PrgCoordinator/>
        <Footer/>
    </div>
  );
};

export default Career;
