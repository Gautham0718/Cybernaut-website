import React from "react";
import CTS from "../../public/ClubTechService.png";
import CSS from "../../public/ClubSoftService.png";
import CES from "../../public/ClubEMService.png";

const ClubService = () =>{
    return(
        <div className="m-10 flex flex-col ">
           <div className="flex flex-row gap-x-3 mt-10">
                <div className="h-1 mt-8 flex w-full  bg-gradient-to-r from-blue-600 via-blue-400 to-blue-200"></div>
                <h1 className="font-bold text-[48px]">Service</h1>
           </div>
           <div className=" mt-10 flex flex-row  items-center align-middle gap-x-10">
                <img src={CTS.src} className = "w-[80%]"/>
                <h1 className = "font-semibold text-center justify-center text-blue-600 text-[36px]">TECH</h1>
           </div>
           <div className=" mt-10 flex flex-row items-center align-middle gap-x-10">
                <h1 className = "font-semibold text-center justify-center text-blue-600 text-[36px]">SOFT SKILLS</h1>
                <img src={CSS.src} className="w-[80%]"/>
           </div>
           <div className=" mt-10  flex flex-row items-center align-middle gap-x-10">
                <img src={CES.src} className = "w-[80%]" />
                <h1 className = "font-semibold text-center justify-center text-blue-600 text-[36px]">EVENT MANAGEMENT</h1>
           </div>
        </div>
    )
}

export default ClubService;