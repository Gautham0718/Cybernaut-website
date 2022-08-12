import React from "react";
import Logo from "../public/Logo.jpeg";
import LeftNavImg from "../public/LeftNavImg.jpeg";
import { MenuIcon } from "@heroicons/react/outline";
import Link from "next/link";

interface Props {
  className: string;
}

const Navbar: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <img src={Logo.src} className="h-[80%] w-[60%] md:w-[30%] lg:w-fit" />
      <div className="flex w-[70%] items-center justify-end">
        <div className="hidden md:flex sm:w-full lg:w-[70%] items-center justify-around">
          <Link href={"/"}>
            <p className="hover:border-b-4 hover:border-b-black ease-linear duration-200">
              Home
            </p>
          </Link>
          <Link href={"/services"}>
            <p className="hover:border-b-4 hover:border-b-black ease-linear duration-200">
              Services
            </p>
          </Link>
          <Link href={"/about_us"}>
            <p className="hover:border-b-4 hover:border-b-black ease-linear duration-200">
              About Us
            </p>
          </Link>
          <Link href={"/contact_us"}>
            <p className="hover:border-b-4 hover:border-b-black ease-linear duration-200">
              Career
            </p>
          </Link>
          <Link href={"/communities"}>
            <p className="hover:border-b-4 hover:border-b-black ease-linear duration-200">
              Communities
            </p>
          </Link>
          <img className="h-[90%]" src={LeftNavImg.src} />
        </div>
        <div className="flex gap-2 items-center justify-center md:hidden">
          <p>Menu</p>
          <MenuIcon className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
