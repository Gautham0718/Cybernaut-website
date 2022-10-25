import React, { useEffect, useRef, useState } from "react";
import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Inaugration from "../../components/Communities/Inaugration";
import AboutCdsc from "../../components/Communities/about";
import Branch from "../../components/Communities/Branch";
import Club from "../../components/Communities/StudentsClub";
import ClubService from "../../components/Communities/ClubService";
import ACCF from "../../components/Communities/AmbassadorCrewContact";

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {},
  };
};

const Communities: NextPage = () => {
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
        <Inaugration/>
        <AboutCdsc/>
        <Branch/>
        <Club/>
        <ClubService/>
        <ACCF/>
        <Footer/>
    </div>
  );
};

export default Communities;
