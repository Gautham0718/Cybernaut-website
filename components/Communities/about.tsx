import React from "react";
import cdsc from "../../public/CDSC.png";
import ViewCourseButton from "../ViewCourseButton";

const AboutCDSC = () => {
    return(
        <div className="m-8">
            <div className="flex flex-row pt-10">
            <div className="flex items-center">
                <img className="relative ml-10 flex justify-center object-center align-middle md:w-[800px]" src = {cdsc.src}/>
            </div>
            <div className="flex flex-col w-fit pl-20">
            <h2 className="font-bold justify-left text-[36px]">
                 About Us
            </h2>
            <div className=" pt-6">
                <div className="justify-between mr-36">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida ridiculus porttitor et scelerisque. Donec sed vitae turpis sed odio mattis. Ultricies accumsan eget eget tristique laoreet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida ridiculus porttitor et scelerisque. Donec sed vitae turpis sed odio mattis. Ultricies accumsan eget eget tristique laoreet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida ridiculus porttitor et scelerisque. Donec sed vitae turpis sed odio mattis. Ultricies accumsan eget eget tristique laoreet.  </div>
            </div>
            <div className="mt-10 text-blue-500">
                <ViewCourseButton/>
            </div>    
            </div>
        </div>
        </div>
    )
}

export default AboutCDSC;