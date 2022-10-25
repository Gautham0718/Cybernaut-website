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
    <div className="flex flex-row">
      <Image
        height={60}
        width={screen.width / 5}
        src={Logo.src}
        className="h-[80%] md:w-[30%] lg:w-fit w-full"
      />
      <div className="hidden md:flex w-[70%] items-end justify-end">
        <div className="hidden md:flex sm:w-[90%] lg:w-[70%] pl-8 items-center justify-around">
          <Link
            href="/Home"
          >
            <h4 className="hover:border-b-2 hover:border-b-black hover:text-blue-400 hover:font-semibold ease-linear duration-150 cursor-pointer">
            Home
            </h4>
          </Link>
          <Link
            href="/About"
          >
            <h4 className="hover:border-b-2 hover:border-b-black hover:text-blue-400 hover:font-semibold ease-linear duration-150 cursor-pointer">
            About Us
            </h4>
          </Link>
          <Link
            href="/Service"
          >
            <h4 className="hover:border-b-2 hover:border-b-black hover:text-blue-400 hover:font-semibold ease-linear duration-150 cursor-pointer">
            Services
            </h4>
          </Link>
          <Link
            href="/Career"
          >
            <h4 className="hover:border-b-2 hover:border-b-black hover:text-blue-400 hover:font-semibold ease-linear duration-150 cursor-pointer">
            Career
            </h4>
          </Link>
          <Link
            href="/Communities"
          >
            <h4 className="hover:border-b-2 hover:border-b-black hover:text-blue-400 hover:font-semibold ease-linear duration-150 cursor-pointer">
            Communities
            </h4>
          </Link>
          <Image
            width={screen.width / 15}
            height={50}
            className="h-[90%]"
            src={LeftNavImg.src}
          />
          <Link
          href="/Menu"
        >
          <h4 className="hover:border-b-2 hover:border-b-black hover:text-blue-400 hover:font-semibold ease-linear duration-150 cursor-pointer">
            Menu
            </h4>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
