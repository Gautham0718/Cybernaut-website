import React from "react";
import SB from "../../public/ServiceBanner.png";
import ServiceSideTag from "./SideTag";
import SD from "./servicedetails";


const Spoken = () =>{
    return(
        <div className="m-10 flex flex-col gap-y-10">
        <ServiceSideTag/>
            <div className="flex">
                <img src = {SB.src}/>
            </div>
            <div className="flex flex-col gap-y-8 w-[85%]">
                <div className="flex flex-col">
                    <h1 className="font-bold text-[32px]">Spoken English</h1>
                    <div className="flex flex-row text-gray-400 text-[15px]">
                         <p>By Team Cybernaut</p>
                        <div className="w-14 h-1 mt-2 ml-2 bg-gray-500"></div>
                     </div>
                </div>
                <div className="flex font-semibold text-[24px]">Description</div>
                <div className="flex text-gray-400 text-[15px] w-[90%]">
                English is one of the most commonly spoken languages worldwide and is understood by the majority and a basic hold on it will make communicating simple and easy. Being a common language, knowing it will help broaden your world while increasing job opportunities and will help relate to people more. Basic English knowledge is a must for you to speak to others. Grasp the basics of spoken English.
                </div>
                <SD/>
            </div>
        </div>
    )
}

export default Spoken;