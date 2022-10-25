import React from "react";
import TE1 from "../../public/TE1.png";
import TE2 from "../../public/TE2.png";
import TE3 from "../../public/TE3.png";
import TE4 from "../../public/TE4.png";
import TE5 from "../../public/TE5.png";
import TE6 from "../../public/TE6.png";
import { ClockIcon, GlobeIcon } from "@heroicons/react/outline";

const TechEn = () =>{
    return(
        <div className="flex flex-col pt-10 gap-y-6 mt-5">
            <div className="flex h-16 text-white text-[36px] text-center justify-center align-middle font-bold bg-gradient-to-r from-blue-500 to to-blue-200 ">
                    <p className="text-center">TECHNICAL ENLIGHTENMENT</p>
                </div>
                <div className="flex flex-row">
                    <p className="font-semibold text-[32px]">Fundamental Enlightenment</p>
                    <div className="w-14 h-1 mt-6 ml-2 bg-gradient-to-r from-cyan-400 via-cyan-500 to-blue-400"></div>
                </div>
                <div className="flex flex-row gap-x-10">
                    <div className="flex flex-col gap-y-4 hover:border-blue-400 hover:border-2 rounded-xl p-8">
                        <img src={TE1.src}/>
                        <p className = "flex font-semibold text-[20px]">C Programming</p>
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
                    <a href = "/Service/Cpp">
                    <div className="flex flex-col gap-y-4 hover:border-blue-400 hover:border-2 rounded-xl p-8 ">
                        <img src={TE2.src}/>
                        <p className = "flex font-semibold text-[20px]">C++ Programming</p>
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
                    <div className="flex flex-col gap-y-4 hover:border-blue-400 hover:border-2 rounded-xl p-8">
                        <img src={TE3.src}/>
                        <p className = "flex font-semibold text-[20px]">Python Programming</p>
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
                <div className="flex flex-row">
                    <p className="font-semibold text-[32px]">Master Enlightenment</p>
                    <div className="w-14 h-1 mt-6 ml-2 bg-gradient-to-r from-cyan-400 via-cyan-500 to-blue-400"></div>
                </div>
                <div className="flex flex-row gap-x-10">
                    <div className="flex flex-col gap-y-4 hover:border-blue-400 hover:border-2 rounded-xl p-8">
                        <img src={TE1.src}/>
                        <p className = "flex font-semibold text-[20px]">C Programming</p>
                        <div className="flex flex-row">
                            <ClockIcon className="w-6 h-6"/>
                            <p className="text-gray-400">30+Hrs Live session</p>
                            <GlobeIcon className="w-6 h-6 ml-3"/>
                            <p className="text-gray-400">Tamil | English</p>
                        </div>
                        <div className="flex w-24 bg-gray-300 h-8 rounded-xl align-middle px-6">
                            ₹2,499
                        </div>
                    </div>
                    <a >
                    <div className="flex flex-col gap-y-4 hover:border-blue-400 hover:border-2 rounded-xl p-8 ">
                        <img src={TE2.src}/>
                        <p className = "flex font-semibold text-[20px]">C++ Programming</p>
                        <div className="flex flex-row">
                            <ClockIcon className="w-6 h-6"/>
                            <p className="text-gray-400">30+Hrs Live session</p>
                            <GlobeIcon className="w-6 h-6 ml-3"/>
                            <p className="text-gray-400">Tamil | English</p>
                        </div>
                        <div className="flex w-24 bg-gray-300 h-8 rounded-xl align-middle  px-6">
                            ₹2,499
                        </div>
                    </div>
                    </a>
                    <div className="flex flex-col gap-y-4 hover:border-blue-400 hover:border-2 rounded-xl p-8">
                        <img src={TE3.src}/>
                        <p className = "flex font-semibold text-[20px]">Python Programming</p>
                        <div className="flex flex-row">
                            <ClockIcon className="w-6 h-6"/>
                            <p className="text-gray-400">30+Hrs Live session</p>
                            <GlobeIcon className="w-6 h-6 ml-3"/>
                            <p className="text-gray-400">Tamil | English</p>
                        </div>
                        <div className="flex w-24 bg-gray-300 h-8 rounded-xl align-middle  px-6">
                            ₹2,499
                        </div>
                    </div>
                </div>       
                <div className="flex flex-row gap-x-10">
                    <div className="flex flex-col gap-y-4 hover:border-blue-400 hover:border-2 rounded-xl p-8">
                        <img src={TE4.src}/>
                        <p className = "flex font-semibold text-[20px]">Java Programming</p>
                        <div className="flex flex-row">
                            <ClockIcon className="w-6 h-6"/>
                            <p className="text-gray-400">30+Hrs Live session</p>
                            <GlobeIcon className="w-6 h-6 ml-3"/>
                            <p className="text-gray-400">Tamil | English</p>
                        </div>
                        <div className="flex w-24 bg-gray-300 h-8 rounded-xl align-middle  px-6">
                            ₹2,499
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-4 hover:border-blue-400 hover:border-2 rounded-xl p-8">
                        <img src={TE5.src}/>
                        <p className = "flex font-semibold text-[20px]">SQL</p>
                        <div className="flex flex-row">
                            <ClockIcon className="w-6 h-6"/>
                            <p className="text-gray-400">30+Hrs Live session</p>
                            <GlobeIcon className="w-6 h-6 ml-3"/>
                            <p className="text-gray-400">Tamil | English</p>
                        </div>
                        <div className="flex w-24 bg-gray-300 h-8 rounded-xl align-middle px-6">
                            ₹2,499
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-4 hover:border-blue-400 hover:border-2 rounded-xl p-8">
                        <img src={TE6.src}/>
                        <p className = "flex font-semibold text-[20px]">DSA</p>
                        <div className="flex flex-row">
                            <ClockIcon className="w-6 h-6"/>
                            <p className="text-gray-400">30+Hrs Live session</p>
                            <GlobeIcon className="w-6 h-6 ml-3"/>
                            <p className="text-gray-400">Tamil | English</p>
                        </div>
                        <div className="flex w-24 bg-gray-300 h-8 rounded-xl align-middle px-6">
                            ₹2,499
                        </div>
                    </div>
                </div>
                <div className="flex flex-row">
                    <p className="font-semibold text-[32px]">DSA Enlightenment</p>
                    <div className="w-14 h-1 mt-6 ml-2 bg-gradient-to-r from-cyan-400 via-cyan-500 to-blue-400"></div>
                </div>
                <div className="flex flex-row gap-x-10">
                    <div className="flex flex-col gap-y-4 hover:border-blue-400 hover:border-2 rounded-xl p-8">
                        <img src={TE1.src}/>
                        <p className = "flex font-semibold text-[20px]">C Programming</p>
                        <div className="flex flex-row">
                            <ClockIcon className="w-6 h-6"/>
                            <p className="text-gray-400">30+Hrs Live session</p>
                            <GlobeIcon className="w-6 h-6 ml-3"/>
                            <p className="text-gray-400">Tamil | English</p>
                        </div>
                        <div className="flex w-24 bg-gray-300 h-8 rounded-xl align-middle px-6">
                            ₹2,499
                        </div>
                    </div>
                    <a >
                    <div className="flex flex-col gap-y-4 hover:border-blue-400 hover:border-2 rounded-xl p-8 ">
                        <img src={TE2.src}/>
                        <p className = "flex font-semibold text-[20px]">C++ Programming</p>
                        <div className="flex flex-row">
                            <ClockIcon className="w-6 h-6"/>
                            <p className="text-gray-400">30+Hrs Live session</p>
                            <GlobeIcon className="w-6 h-6 ml-3"/>
                            <p className="text-gray-400">Tamil | English</p>
                        </div>
                        <div className="flex w-24 bg-gray-300 h-8 rounded-xl align-middle  px-6">
                            ₹2,499
                        </div>
                    </div>
                    </a>
                    <div className="flex flex-col gap-y-4 hover:border-blue-400 hover:border-2 rounded-xl p-8">
                        <img src={TE3.src}/>
                        <p className = "flex font-semibold text-[20px]">Python Programming</p>
                        <div className="flex flex-row">
                            <ClockIcon className="w-6 h-6"/>
                            <p className="text-gray-400">30+Hrs Live session</p>
                            <GlobeIcon className="w-6 h-6 ml-3"/>
                            <p className="text-gray-400">Tamil | English</p>
                        </div>
                        <div className="flex w-24 bg-gray-300 h-8 rounded-xl align-middle  px-6">
                            ₹2,499
                        </div>
                    </div>
                </div>       
                <div className="flex flex-row gap-x-10">
                    <div className="flex flex-col gap-y-4 hover:border-blue-400 hover:border-2 rounded-xl p-8">
                        <img src={TE4.src}/>
                        <p className = "flex font-semibold text-[20px]">Java Programming</p>
                        <div className="flex flex-row">
                            <ClockIcon className="w-6 h-6"/>
                            <p className="text-gray-400">30+Hrs Live session</p>
                            <GlobeIcon className="w-6 h-6 ml-3"/>
                            <p className="text-gray-400">Tamil | English</p>
                        </div>
                        <div className="flex w-24 bg-gray-300 h-8 rounded-xl align-middle  px-6">
                            ₹2,499
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-4 hover:border-blue-400 hover:border-2 rounded-xl p-8">
                        <img src={TE5.src}/>
                        <p className = "flex font-semibold text-[20px]">SQL</p>
                        <div className="flex flex-row">
                            <ClockIcon className="w-6 h-6"/>
                            <p className="text-gray-400">30+Hrs Live session</p>
                            <GlobeIcon className="w-6 h-6 ml-3"/>
                            <p className="text-gray-400">Tamil | English</p>
                        </div>
                        <div className="flex w-24 bg-gray-300 h-8 rounded-xl align-middle px-6">
                            ₹2,499
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-4 hover:border-blue-400 hover:border-2 rounded-xl p-8">
                        <img src={TE6.src}/>
                        <p className = "flex font-semibold text-[20px]">DSA</p>
                        <div className="flex flex-row">
                            <ClockIcon className="w-6 h-6"/>
                            <p className="text-gray-400">30+Hrs Live session</p>
                            <GlobeIcon className="w-6 h-6 ml-3"/>
                            <p className="text-gray-400">Tamil | English</p>
                        </div>
                        <div className="flex w-24 bg-gray-300 h-8 rounded-xl align-middle px-6">
                            ₹2,499
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default TechEn;