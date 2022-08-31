import React from "react";
import bg from "../public/background.jpeg";
import bg2 from "../public/background2.jpg";
import ViewCourseButton from "./ViewCourseButton";

const career = () => {
    return(
        <div className="flex justify-center items-center ">
        <div className="flex lg:h-[50%] w-full"> 
            <img src={bg.src} />
        </div>
        <div className="absolute flex h-[80%] w-[80%] justify-center align-middle items-center bg-white">
            <div className="flex flex-row mx-4 justify-between">
                <div className=" align-middle items-center mt-4 ">
                    <div className="flex flex-row">
                        <h1 className=" font-bold text-3xl">Ready to be one of us?   </h1>
                        <div className="flex flex-row mt-5 w-14 align-middle h-1 bg-gradient-to-r from-cyan-400 via-cyan-500 to-blue-300"></div>
                    </div>
                    <div className="mt-4">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                    <p className=" mt-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    </div>
                    <div className="gap-y-2 float-left mt-4">
                         <ViewCourseButton text="Explore the available career oppurtunities " />
                    </div>
                </div>
                <img className="flex flex-row h-[70%] w-[70%] p-6" src = {bg2.src} />
            </div>
        </div>
        </div>
    );
};
export default career;
