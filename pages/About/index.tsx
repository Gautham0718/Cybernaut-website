import React, { useEffect, useRef, useState } from "react";
import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import VisionMission from "../../components/About/VisionMission";
import AboutHome from "../../components/About/about";
import Uniqueness from "../../components/About/unique";
import Founder from "../../components/About/founders";
import Team from "../../components/About/team";

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {},
  };
};

const About: NextPage = () => {
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
        <AboutHome/>
        <VisionMission />
        <Uniqueness/>
        <Founder/>
        <Team/>
        <Footer/>
    </div>
  );
};

export default About;
