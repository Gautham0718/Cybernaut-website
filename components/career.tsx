import React from "react";
import bg2 from "../public/background2.jpg";
import ViewCourseButton from "./ViewCourseButton";

const career = () => {
    return(
        <div className="flex justify-center items-center ">
        <div className="flex bg-ReadyBg bg-fixed bg-clip-border bg-cover px-[15%] py-[15%]"> 
        <div className="bg-white  p-[3%] gap-y-10 flex flex-col">
            <div className="flex flex-row mx-[2%] justify-between">
                <div className=" align-middle items-center md:w-[38%] w-[95%] mt-[2%]">
                    
                        <span className=" font-bold text-3xl">Ready to be one of us? <span className="mx-2 mt-2 w-14 align-middle h-1 bg-gradient-to-r from-cyan-400 via-cyan-500 to-blue-300"></span>  </span>
                        
                    
                    <div className="mt-[3%]">
                    <p>All have some talent or skill in them waiting to be brought and shown to the world. Some are waiting for the fire to be ignited. Every great talent needs to have the right platform to showcase them and the ones yet to gain the skills need the right place to learn them. </p>
                    <p className=" mt-4">There is no better team to gain exposure and pursue your passion. Register and join our team here through the link.</p>
                    </div>
                    <div className="gap-y-2 float-left mt-4">
                         <a href="/Career"><ViewCourseButton text="Explore the available career oppurtunities " /></a>
                    </div>
                </div>
                <img className="flex flex-row h-auto p-6 w-[0%] md:w-[60%]" src = {bg2.src}   />
            </div>
        </div>
        </div>
        </div>
    );
};
export default career;