import React, { useEffect, useLayoutEffect, useState } from "react";
import Logo from "../public/Logo.jpeg";
import LeftNavImg from "../public/LeftNavImg.jpeg";
import { useRouter } from "next/router";
import Image from "next/image";

interface Props {
  className: string;
  NavRef: React.Ref<HTMLDivElement>;
  show: boolean;
}

const Navbar: React.FC<Props> = ({ className, NavRef, show }) => {
  const router = useRouter();
  const [screen, setScreen] = React.useState({
    width: 0,
    height: 0,
  });
  typeof window !== "undefined" &&
    useLayoutEffect(() => {
      setScreen({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }, []);
  return (
    <div ref={NavRef} className={className}>
      <Image
        height={60}
        width={screen.width / 5}
        src={Logo.src}
        className="h-[80%] md:w-[30%] lg:w-fit w-full"
      />
      <div className="hidden md:flex w-[70%] items-center justify-end">
        <div className="hidden md:flex sm:w-[90%] lg:w-[70%] items-center justify-around">
          <a
            href="#home"
            className={
              router.pathname === "/home"
                ? "border-b-2 border-b-black ease-linear duration-150 cursor-pointer"
                : "hover:border-b-2 hover:border-b-black hover:text-blue-400 hover:font-semibold ease-linear duration-150 cursor-pointer"
            }
          >
            Home
          </a>
          <a
            href="../about_components/test"
            className={
              router.pathname === "/services"
                ? "border-b-2 border-b-black ease-linear duration-150 cursor-pointer"
                : "hover:border-b-2 hover:border-b-black hover:text-blue-400 hover:font-semibold ease-linear duration-150 cursor-pointer"
            }
          >
            About Us
          </a>
          <a
            href="#services"
            className={
              router.pathname === "/services"
                ? "border-b-2 border-b-black ease-linear duration-150 cursor-pointer"
                : "hover:border-b-2 hover:border-b-black hover:text-blue-400 hover:font-semibold ease-linear duration-150 cursor-pointer"
            }
          >
            Services
          </a>
          <a
            href="#career"
            className={
              router.pathname === "/contact_us"
                ? "border-b-2 border-b-black ease-linear duration-150 cursor-pointer"
                : "hover:border-b-2 hover:border-b-black hover:text-blue-400 hover:font-semibold ease-linear duration-150 cursor-pointer"
            }
          >
            Career
          </a>
          <a
            href="#community"
            className={
              router.pathname === "/communities"
                ? "border-b-2 border-b-black ease-linear duration-150 cursor-pointer"
                : "hover:border-b-2 hover:border-b-black hover:text-blue-400 hover:font-semibold ease-linear duration-150 cursor-pointer"
            }
          >
            Communities
          </a>
          <Image
            width={screen.width / 15}
            height={50}
            className="h-[90%]"
            src={LeftNavImg.src}
          /><a
          href="#menu"
          className={
            router.pathname === "/menu"
              ? "border-b-2 border-b-black ease-linear duration-150 cursor-pointer"
              : "hover:border-b-2 hover:border-b-black hover:text-blue-400 hover:font-semibold ease-linear duration-150 cursor-pointer"
          }
        >
          Menu 
        </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
