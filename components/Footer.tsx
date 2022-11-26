    import React from "react";
    import Link from "next/link";
    import { CameraIcon , InboxIcon, PhoneIcon } from "@heroicons/react/outline";
    const footer = () =>{
        
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
                <Link
                href="/Home"
                className= "hover:border-b-2 hover:border-b-white ease-linear duration-150 cursor-pointer"
            >
                Home
            </Link>
            <Link
                href="/About"
                className="hover:border-b-2 hover:border-b-white ease-linear duration-150 cursor-pointer"
                
            >
                About Us
            </Link>
            <Link
                href="/Service"
                className="hover:border-b-2 hover:border-b-white ease-linear duration-150 cursor-pointer"
            >
                Services
            </Link>
            <Link
                href="/Career"
                className= "hover:border-b-2 hover:border-b-white ease-linear duration-150 cursor-pointer"
            >
                Career
            </Link>
            <Link
                href="/Communities"
                className="hover:border-b-2 hover:border-b-white ease-linear duration-150 cursor-pointer"
            >
                Communities
            </Link>
            </div>
            </div>
        );
    };
    export default footer;