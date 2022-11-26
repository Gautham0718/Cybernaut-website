import React from "react";
import SB from "../../public/ServiceBanner.png";
import ServiceSideTag from "./SideTag";
import SD from "./servicedetails";


const Comm = () =>{
    return(
        <div className="m-10 flex flex-col gap-y-10">
        <ServiceSideTag/>
            <div className="flex">
                <img src = {SB.src}/>
            </div>
            <div className="flex flex-col gap-y-8 w-[85%]">
                <div className="flex flex-col">
                    <h1 className="font-bold text-[32px]">Communication Skills</h1>
                    <div className="flex flex-row text-gray-400 text-[15px]">
                         <p>By Team Cybernaut</p>
                        <div className="w-14 h-1 mt-2 ml-2 bg-gray-500"></div>
                     </div>
                </div>
                <div className="flex font-semibold text-[24px]">Description</div>
                <div className="flex text-gray-400 text-[15px] w-[90%]">
                Communication is the basic means of sharing information from one person to another. The information should be shared clearly and understandably. For this good communication skills are needed. To make your communication crystal clear, you need to practice on a daily basis. The stronger the communication skills the easier it is to speak. Take up communication to become a better speaker.
                </div>
                <SD/>
            </div>
        </div>
    )
}

export default Comm;