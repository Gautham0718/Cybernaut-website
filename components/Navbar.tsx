import React, { useEffect, useLayoutEffect, useState } from "react";
import Logo from "../public/Logo.jpeg";
import LeftNavImg from "../public/LeftNavImg.jpeg";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";


interface Props {
  className: string;
  NavRef: React.Ref<HTMLDivElement>;
  show: boolean;
}

const Navbar: React.FC<Props> = () => {
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
    <div>
      <Image
        height={60}
        width={screen.width / 5}
        src={Logo.src}
        className="h-[80%] md:w-[30%] lg:w-fit w-full"
      />
      <div className="hidden md:flex w-[70%] items-center justify-end">
        <div className="hidden md:flex sm:w-[90%] lg:w-[70%] items-center justify-around">
          <Link
            href="/"
            className="hover:border-b-2 hover:border-b-black hover:text-blue-400 hover:font-semibold ease-linear duration-150 cursor-pointer"
          >
            Home
          </Link>
          <Link
            href="/About"
            className="hover:border-b-2 hover:border-b-black hover:text-blue-400 hover:font-semibold ease-linear duration-150 cursor-pointer"
          >
            About Us
          </Link>
          <Link
            href="/"
            className="hover:border-b-2 hover:border-b-black hover:text-blue-400 hover:font-semibold ease-linear duration-150 cursor-pointer"
          >
            Services
          </Link>
          <Link
            href="/"
            className="hover:border-b-2 hover:border-b-black hover:text-blue-400 hover:font-semibold ease-linear duration-150 cursor-pointer"
          >
            Career
          </Link>
          <Link
            href="/"
            className="hover:border-b-2 hover:border-b-black hover:text-blue-400 hover:font-semibold ease-linear duration-150 cursor-pointer"
          >
            Communities
          </Link>
          <Image
            width={screen.width / 15}
            height={50}
            className="h-[90%]"
            src={LeftNavImg.src}
          />
          <Link
          href="/"
          className="hover:border-b-2 hover:border-b-black hover:text-blue-400 hover:font-semibold ease-linear duration-150 cursor-pointer"
        >
          Menu 
        </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
