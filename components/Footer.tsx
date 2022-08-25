    import React from "react";
    import { useRouter } from "next/router";
    import { CameraIcon , InboxIcon, PhoneIcon } from "@heroicons/react/outline";
    const footer = () =>{
        const router = useRouter();
        return (
            <div className="flex flex-col justify-center items-center bg-black w-full gap-y-8">
                <h2 className=" font-bold text-4xl text-white justify-center ">CYBERNAUT</h2>
                <h4 className=" font-semibold text-2xl text-white justify-center ">ENDEAVOUR TO EXPLORE</h4>
                <div className="flex flex-row fill-white justify-center gap-x-6">
                    <CameraIcon className="w-6 h-6 bg-gradient-to-r text-white" />
                    <InboxIcon className="w-6 h-6 bg-gradient-to-r text-white" />
                    <PhoneIcon className="w-6 h-6 bg-gradient-to-r text-white" />
                    <CameraIcon className="w-6 h-6 bg-gradient-to-r text-white" />
                    <CameraIcon className="w-6 h-6 bg-gradient-to-r text-white" />
                </div>
                <p className="justify-center text-white text-4x1">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione
                natus.</p>
                <div className="flex flex-row justify-center items-center text-white gap-x-8">
                <a
                href="#home"
                className={
                router.pathname === "/home"
                    ? "border-b-2 border-b-black ease-linear duration-150 cursor-pointer "
                    : "hover:border-b-2 hover:border-b-white ease-linear duration-150 cursor-pointer"
                }
            >
                Home
            </a>
            <a
                href="../about_components/test"
                className={
                router.pathname === "/about_us"
                    ? "border-b-2 border-b-black ease-linear duration-150 cursor-pointer"
                    : "hover:border-b-2 hover:border-b-white ease-linear duration-150 cursor-pointer"
                }
            >
                About Us
            </a>
            <a
                href="#services"
                className={
                router.pathname === "/services"
                    ? "border-b-2 border-b-black ease-linear duration-150 cursor-pointer"
                    : "hover:border-b-2 hover:border-b-white ease-linear duration-150 cursor-pointer"
                }
            >
                Services
            </a>
            <a
                href="#career"
                className={
                router.pathname === "/contact_us"
                    ? "border-b-2 border-b-black ease-linear duration-150 cursor-pointer"
                    : "hover:border-b-2 hover:border-b-white ease-linear duration-150 cursor-pointer"
                }
            >
                Career
            </a>
            <a
                href="#community"
                className={
                router.pathname === "/communities"
                    ? "border-b-2 border-b-black ease-linear duration-150 cursor-pointer"
                    : "hover:border-b-2 hover:border-b-white ease-linear duration-150 cursor-pointer"
                }
            >
                Communities
            </a>
            </div>
            </div>
        );
    };
    export default footer;
