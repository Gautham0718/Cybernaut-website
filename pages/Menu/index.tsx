import { CheckCircleIcon } from "@heroicons/react/outline";
import React from "react";

const Menu = () =>{
    return(
        <div className="m-10 ">
            <div className="bg-gradient-to-br from-black via-blue-600 to-blue-200 p-[12%] flex flex-col gap-y-32">
                <div className="flex flex-row gap-x-20">
                    <div className=" flex flex-row text-white text-[50px] gap-x-4">
                        <CheckCircleIcon className="w-16 h-16 flex rounded-full"/>
                        <a href="/" className="font-bold flex hover:bg-white hover:rounded-xl hover:text-black ease-linear duration-200 delay-200">HOME</a>
                    </div>
                    <div className=" flex flex-row text-white text-[50px] gap-x-3">
                        <CheckCircleIcon className="w-16 h-16 flex rounded-full"/>
                        <a href="/About" className="font-bold flex hover:bg-white hover:rounded-xl hover:text-black ease-linear duration-200 delay-200">ABOUT US</a>
                    </div>
                    <div className=" flex flex-row text-white text-[50px] gap-x-3">
                        <CheckCircleIcon className="w-16 h-16 flex rounded-full"/>
                        <a href="/Service" className="font-bold flex hover:bg-white hover:rounded-xl hover:text-black ease-linear duration-200 delay-200">SERVICES</a>
                    </div>
                </div>
                <div className="flex flex-row gap-x-20">
                    <div className=" flex flex-row text-white text-[50px] gap-x-3">
                        <CheckCircleIcon className="w-16 h-16 flex rounded-full"/>
                        <a href="/Career" className="font-bold flex hover:bg-white hover:rounded-xl hover:text-black ease-linear duration-200 delay-200">CAREER</a>
                    </div>
                    <div className=" flex flex-row text-white text-[50px] gap-x-3">
                        <CheckCircleIcon className="w-16 h-16 flex rounded-full"/>
                        <a href="/Communities" className="font-bold flex hover:bg-white hover:rounded-xl hover:text-black ease-linear duration-200 delay-200">COMMUNITIES</a>
                    </div>
                    <div className=" flex flex-row text-white text-[50px] gap-x-3">
                        <CheckCircleIcon className="w-16 h-16 flex rounded-full"/>
                        <a href="/" className="font-bold flex hover:bg-white hover:rounded-xl hover:text-black ease-linear duration-200 delay-200">BACK</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu;