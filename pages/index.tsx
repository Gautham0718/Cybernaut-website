import React, { useEffect, useRef, useState } from "react";
import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/Navbar";
import NewSlider from "../components/NewSlider";
import { useRouter } from "next/router";
import Courses from "../components/Courses";
import AboutComponent from "../components/AboutComponent";
import JuniorSpace from "../components/JuniorSpace";
import Founders from "../components/Founders";
import Contact from "../components/Contact";
import { MessageDataType } from "../types";
import Footer from "../components/Footer";

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {},
  };
};

const Home: NextPage = () => {
  const { asPath } = useRouter();
  const navRef = useRef<HTMLDivElement>();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [MessageData, setMessageData] = useState<MessageDataType>({
    email: "",
    name: "",
    phone: "",
    message: "",
  });

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY < 150) {
        setShow(true);
      } else if (window.scrollY > lastScrollY) {
        setShow(false);
      } else {
        setShow(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  const SubmitHandler = async (data: MessageDataType) => {
    setMessageData(data);
    await fetch(process.env.NEXT_PUBLIC_CLIENT_URL + "api/user", {
      method: "POST",
      body: JSON.stringify(data),
    });
    setMessageData({
      email: "",
      name: "",
      phone: "",
      message: "",
    });
  };

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
      <div
        key={asPath}
        className={
          show
            ? "flex flex-col items-center justify-center overflow-hidden mt-[80px] ease-in duration-200"
            : "flex flex-col items-center justify-center overflow-hidden"
        }
      >
        <NewSlider />
        <AboutComponent />
        <Courses />
        <JuniorSpace />
        <Founders />
        <Contact submitDataFN={SubmitHandler} />
        <Footer/>
      </div>
    </div>
  );
};

export default Home;
