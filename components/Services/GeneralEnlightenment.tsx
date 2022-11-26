import React from "react";
import GE1 from "../../public/GE1.png";
import GE2 from "../../public/GE2.png";
import GE3 from "../../public/GE3.png";
import GE4 from "../../public/GE4.png";
import GE5 from "../../public/GE5.png";
import { ClockIcon, GlobeIcon } from "@heroicons/react/outline";

const GeneralEn = () =>{
    return(
        <div className="flex flex-col pt-10 gap-y-6 mt-5">
            <div className="flex h-16 text-white text-[36px] text-center justify-center align-middle font-bold bg-gradient-to-r from-red-500 to to-red-200 ">
                    <p className="text-center">GENERAL ENLIGHTENMENT</p>
                </div>
                <div className="flex flex-row gap-x-10">
                    <a href = "/Service/ContentWriting">
                    <div className="flex flex-col gap-y-4 hover:border-red-400 hover:border-2 rounded-xl p-8">
                        <img src={GE1.src}/>
                        <p className = "flex font-semibold text-[20px]">Content Writing</p>
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
                    </a>
                    <a href = "/Service/Communication">
                    <div className="flex flex-col gap-y-4 hover:border-red-400 hover:border-2 rounded-xl p-8 ">
                        <img src={GE2.src}/>
                        <p className = "flex font-semibold text-[20px]">Communication</p>
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
                    <a href = "/Service/Spoken">
                    <div className="flex flex-col gap-y-4 hover:border-red-400 hover:border-2 rounded-xl p-8">
                        <img src={GE3.src}/>
                        <p className = "flex font-semibold text-[20px]">Spoken and written english</p>
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
                </div>       
                <div className="flex flex-row gap-x-10">
                    <div className="flex flex-col gap-y-4 hover:border-red-400 hover:border-2 rounded-xl p-8">
                        <img src={GE4.src}/>
                        <p className = "flex font-semibold text-[20px]">Event Management</p>
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
                    <div className="flex flex-col gap-y-4 hover:border-red-400 hover:border-2 rounded-xl p-8">
                        <img src={GE5.src}/>
                        <p className = "flex font-semibold text-[20px]">Business</p>
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

export default GeneralEn;