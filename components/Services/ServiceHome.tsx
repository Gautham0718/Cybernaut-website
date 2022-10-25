import React from "react";
import TechEn from "./TechnicalEnlightenment";
import GeneralEn from "./GeneralEnlightenment";
import JuniorEn from "./JuniorEnlightenment";
import DesignEn from "./DesignEnlightenment";
import { ArrowUpIcon } from "@heroicons/react/outline";

const ServiceHome = () =>{
    return(
        <div className="m-10 ">
            <div className="fixed mt-[600px] ml-[93%] ">
                <a href="#start" className=" text-white">
                    <ArrowUpIcon className="font-bold text-blue-700 w-12 h-12 hover:bg-blue-500 hover:text-white bg-blue-100 shadow-blue-900 shadow-xl   rounded-full "/>    
                </a>
            </div>
            <div id="start" className="h-[300px] bg-gray-300">
                Service Banner
            </div>
            <div className="bg-gray-300 px-[22%] h-16 pt-6 text-center border-y-gray-500 border-y flex flex-row gap-x-32">
                <a href="#TechPack" className="text-black no-underline font-semibold hover:text-blue-600 text-[16px]">Tech Pack</a>
                <a href="#NonTechPack" className="text-black no-underline font-semibold hover:text-red-600 text-[16px]">Non-Tech Pack</a>
                <a href="#JuniorPack" className="text-black no-underline font-semibold hover:text-yellow-500 text-[16px]">Junior Pack</a>
                <a href="#DesignPack" className="text-black no-underline font-semibold hover:text-pink-700 text-[16px]">Design Pack</a>
            </div>
            <div id="TechPack" >
                <TechEn/>
            </div>
            <div id="NonTechPack">
                <GeneralEn/>
            </div>
            <div id="JuniorPack">
                <JuniorEn/>
            </div>
            <div id="DesignPack">
                <DesignEn/>
            </div>
        </div>
    )
}

export default ServiceHome;