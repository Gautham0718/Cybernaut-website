import React from "react";
import Kings from "../../public/kings.png";
import SRM from "../../public/srm.png";
import VSP from "../../public/vsp.jpeg";

const Branch = () => {
    return(
        <div className="m-10">
            <div className="flex flex-row">
                <h1 className="text-[36px] font-bold">Our Branches</h1>
                <div className="w-36 ml-2 h-1 mt-8 bg-gradient-to-r from-blue-600 via-blue-400 to-blue-200"></div>
            </div>
            <div className="mt-4 bg-gradient-to-br from-blue-500 via-blue-400 to-blue-300 flex flex-row p-12">
                <div className="flex flex-col gap-x-10  px-16">
                    <img src={Kings.src} className= "h-[300px] w-[300px]"/>
                    <p className = "font-bold text-[24px] text-white">SRM</p>
                    <p className = "text-white">Location name, District, State</p>
                </div>
                <div className="flex flex-col gap-x-10 px-16 ">
                    <img src={SRM.src} className= "h-[300px] w-[300px]"/>
                    <p className = "font-bold text-[24px] text-white">Kings</p>
                    <p className = "text-white">Location name, District, State</p>
                </div>
                <div className="flex flex-col gap-x-10 px-16 ">
                    <img src={VSP.src} className= "h-[300px] w-[300px]"/>
                    <p className = "font-bold text-[24px] text-white">VSP</p>
                    <p className = "text-white">Location name, District, State</p>
                </div>

            </div>
        </div>
    )
}

export default Branch;