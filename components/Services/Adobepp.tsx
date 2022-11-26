import React from "react";
import SB from "../../public/ServiceBanner.png";
import ServiceSideTag from "./SideTag";
import SD from "./servicedetails";


const Cpp = () =>{
    return(
        <div className="m-10 flex flex-col gap-y-10">
        <ServiceSideTag/>
            <div className="flex">
                <img src = {SB.src}/>
            </div>
            <div className="flex flex-col gap-y-8 w-[85%]">
                <div className="flex flex-col">
                    <h1 className="font-bold text-[32px]">Adobe PremierePro</h1>
                    <div className="flex flex-row text-gray-400 text-[15px]">
                         <p>By Team Cybernaut</p>
                        <div className="w-14 h-1 mt-2 ml-2 bg-gray-500"></div>
                     </div>
                </div>
                <div className="flex font-semibold text-[24px]">Description</div>
                <div className="flex text-gray-400 text-[15px] w-[90%]">
                Want to design a video that is artistic and can be done quickly? Adobe Premiere Pro is an editing software used for creating innovative and wonderful videos quickly.  It also includes an audio editing functionality which helps create better videos and edit them. It is often used with After Effects and Photoshop for better and more creative projects. It is generally used by video production firms, news stations, marketing professionals, and design firms. Want a quick designed video, here is the answer.
                </div>
                <SD/>
            </div>
        </div>
    )
}

export default Cpp;