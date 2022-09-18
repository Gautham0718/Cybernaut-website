import React from "react";
import { CheckCircleIcon , KeyIcon} from "@heroicons/react/outline";
import bg1 from "../../public/bg1.png";

const VisionMission = () => {
    return(
        <div className="m-8">
            <div>
            <img src = {bg1.src}/>
            </div>
            <div className=" absolute items-center content-center align-middle justify-center origin-center  object-center px-[30%]">
            <div className=" border-solid border border-gray-300  h-96 w-96 rounded-[500px] origin-top-left mt-20">
                <CheckCircleIcon  className="absolute shadow-blue-200 shadow-sm ease-linear duration-200 hover:bg-blue-400 hover:text-white cursor-pointer py-0 w-12 h-12 border border-solid border-gray-400 rounded-full bg-white text-blue-400 translate-y-40 -translate-x-6"/>
                <KeyIcon  className="absolute shadow-blue-200  hover:bg-blue-400 hover:text-white cursor-pointer w-12 h-12 border border-solid border-gray-400 rounded-full bg-white text-blue-400 translate-x-[88] translate-y-40"/>
              <div className=" absolute m-16 origin-center shadow  shadow-gray-500  bg-gray-300 ease-linear duration-200 justify-center align-middle items-center border border-solid border-gray-300 w-64 h-64 rounded-full">
                <p className=" justify-center ease-linear duration-200 pt-[25%] align-middle items-center text-2x1">Data Here</p>
              </div>
                </div>
            </div>
        </div>
    )
};

export default VisionMission;