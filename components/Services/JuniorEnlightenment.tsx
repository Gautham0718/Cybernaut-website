import React from "react";
import JE1 from "../../public/JE1.png";
import JE2 from "../../public/JE2.png";
import JE3 from "../../public/JE3.png";
import JE4 from "../../public/JE4.png";
import JE5 from "../../public/JE5.png";
import JE6 from "../../public/JE6.png";
import { ClockIcon, GlobeIcon } from "@heroicons/react/outline";

const JuniorEn = () =>{
    return(
        <div className="flex flex-col pt-10 gap-y-6 mt-5">
            <div className="flex h-16 text-white text-[36px] text-center justify-center align-middle font-bold bg-gradient-to-r from-yellow-500 to to-yellow-200 ">
                    <p className="text-center">JUNIOR ENLIGHTENMENT</p>
                </div>
                <div className="flex flex-row gap-x-10">
                    <div className="flex flex-col gap-y-4 hover:border-yellow-400 hover:border-2 rounded-xl p-8">
                        <img src={JE1.src}/>
                        <p className = "flex font-semibold text-[20px]">MS Office</p>
                        <div className="flex flex-row">
                            <ClockIcon className="w-6 h-6"/>
                            <p className="text-gray-400">30+Hrs Live session</p>
                            <GlobeIcon className="w-6 h-6 ml-3"/>
                            <p className="text-gray-400">Tamil | English</p>
                        </div>
                        <div className="flex w-24 bg-gray-300 h-8 rounded-xl align-middle px-6">
                            ₹499
                        </div>
                    </div>
                    <a>
                    <div className="flex flex-col gap-y-4 hover:border-yellow-400 hover:border-2 rounded-xl p-8 ">
                        <img src={JE2.src}/>
                        <p className = "flex font-semibold text-[20px]">Paint 3D</p>
                        <div className="flex flex-row">
                            <ClockIcon className="w-6 h-6"/>
                            <p className="text-gray-400">30+Hrs Live session</p>
                            <GlobeIcon className="w-6 h-6 ml-3"/>
                            <p className="text-gray-400">Tamil | English</p>
                        </div>
                        <div className="flex w-24 bg-gray-300 h-8 rounded-xl align-middle  px-6">
                            ₹499
                        </div>
                    </div>
                    </a>
                    <div className="flex flex-col gap-y-4 hover:border-yellow-400 hover:border-2 rounded-xl p-8">
                        <img src={JE3.src}/>
                        <p className = "flex font-semibold text-[20px]">HTML</p>
                        <div className="flex flex-row">
                            <ClockIcon className="w-6 h-6"/>
                            <p className="text-gray-400">30+Hrs Live session</p>
                            <GlobeIcon className="w-6 h-6 ml-3"/>
                            <p className="text-gray-400">Tamil | English</p>
                        </div>
                        <div className="flex w-24 bg-gray-300 h-8 rounded-xl align-middle  px-6">
                            ₹499
                        </div>
                    </div>
                </div>       
                <div className="flex flex-row gap-x-10">
                    <div className="flex flex-col gap-y-4 hover:border-yellow-400 hover:border-2 rounded-xl p-8">
                        <img src={JE4.src}/>
                        <p className = "flex font-semibold text-[20px]">MS Office</p>
                        <div className="flex flex-row">
                            <ClockIcon className="w-6 h-6"/>
                            <p className="text-gray-400">30+Hrs Live session</p>
                            <GlobeIcon className="w-6 h-6 ml-3"/>
                            <p className="text-gray-400">Tamil | English</p>
                        </div>
                        <div className="flex w-24 bg-gray-300 h-8 rounded-xl align-middle  px-6">
                            ₹499
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-4 hover:border-yellow-400 hover:border-2 rounded-xl p-8">
                        <img src={JE5.src}/>
                        <p className = "flex font-semibold text-[20px]">Paint 3D</p>
                        <div className="flex flex-row">
                            <ClockIcon className="w-6 h-6"/>
                            <p className="text-gray-400">30+Hrs Live session</p>
                            <GlobeIcon className="w-6 h-6 ml-3"/>
                            <p className="text-gray-400">Tamil | English</p>
                        </div>
                        <div className="flex w-24 bg-gray-300 h-8 rounded-xl align-middle px-6">
                            ₹499
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-4 hover:border-yellow-400 hover:border-2 rounded-xl p-8">
                        <img src={JE6.src}/>
                        <p className = "flex font-semibold text-[20px]">HTML</p>
                        <div className="flex flex-row">
                            <ClockIcon className="w-6 h-6"/>
                            <p className="text-gray-400">30+Hrs Live session</p>
                            <GlobeIcon className="w-6 h-6 ml-3"/>
                            <p className="text-gray-400">Tamil | English</p>
                        </div>
                        <div className="flex w-24 bg-gray-300 h-8 rounded-xl align-middle px-6">
                            ₹499
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default JuniorEn;