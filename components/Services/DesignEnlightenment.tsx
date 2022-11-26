import React from "react";
import TE1 from "../../public/TE1.png";
import TE2 from "../../public/TE2.png";
import TE3 from "../../public/TE3.png";
import CE1 from "../../public/CE1.png";
import CE2 from "../../public/CE2.png";
import CE3 from "../../public/CE3.png";
import CE4 from "../../public/CE4.png";
import CE5 from "../../public/CE5.png";
import CE6 from "../../public/CE6.png";
import { ClockIcon, GlobeIcon } from "@heroicons/react/outline";

const DesignEn = () =>{
    return(
        <div className="flex flex-col pt-10 gap-y-6 mt-5">
            <div className="flex h-16 text-white text-[36px] text-center justify-center align-middle font-bold bg-gradient-to-r from-pink-700 to to-pink-300 ">
                    <p className="text-center">JUNIOR ENLIGHTENMENT</p>
                </div>
                <div className="flex flex-row">
                    <p className="font-semibold text-[32px]">Graphic Designing</p>
                    <div className="w-14 h-1 mt-6 ml-2 bg-gradient-to-r from-pink-700 to-pink-300 "></div>
                </div>
                <div className="flex flex-row gap-x-10">
                    <div className="flex flex-col gap-y-4 hover:border-pink-600 hover:border-2 rounded-xl p-8">
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
                    <a href="/Service/C++">
                    <div className="flex flex-col gap-y-4 hover:border-pink-600 hover:border-2 rounded-xl p-8 ">
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
                    <a href="/Service/Python">
                    <div className="flex flex-col gap-y-4 hover:border-pink-600 hover:border-2 rounded-xl p-8">
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
                    </a>
                </div>
                <div className="flex flex-row">
                    <p className="font-semibold text-[32px]">3D Designing</p>
                    <div className="w-14 h-1 mt-6 ml-2 bg-gradient-to-r from-pink-700 to-pink-300 "></div>
                </div>
                <div className="flex flex-row gap-x-10">
                <a href="/Service/Figma">
                    <div className="flex flex-col gap-y-4 hover:border-pink-600 hover:border-2 rounded-xl p-8">
                        <img src={CE1.src}/>
                        <p className = "flex font-semibold text-[20px]">Figma</p>
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
                    <a >
                    <div className="flex flex-col gap-y-4 hover:border-pink-600 hover:border-2 rounded-xl p-8 ">
                        <img src={CE2.src}/>
                        <p className = "flex font-semibold text-[20px]">Adobe XD</p>
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
                    <div className="flex flex-col gap-y-4 hover:border-pink-600 hover:border-2 rounded-xl p-8">
                        <img src={CE3.src}/>
                        <p className = "flex font-semibold text-[20px]">Blender</p>
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
                <a href="/Service/Figma">
                    <div className="flex flex-col gap-y-4 hover:border-pink-600 hover:border-2 rounded-xl p-8">
                        <img src={CE4.src}/>
                        <p className = "flex font-semibold text-[20px]">Figma</p>
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
                    <div className="flex flex-col gap-y-4 hover:border-pink-600 hover:border-2 rounded-xl p-8">
                        <img src={CE5.src}/>
                        <p className = "flex font-semibold text-[20px]">Adobe 3D</p>
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
                    <div className="flex flex-col gap-y-4 hover:border-pink-600 hover:border-2 rounded-xl p-8">
                        <img src={CE6.src}/>
                        <p className = "flex font-semibold text-[20px]">Blender</p>
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

export default DesignEn;