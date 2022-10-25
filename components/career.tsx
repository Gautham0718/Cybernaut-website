import React from "react";
import bg2 from "../public/background2.jpg";
import ViewCourseButton from "./ViewCourseButton";

const career = () => {
    return(
        <div className="flex justify-center items-center ">
        <div className="flex bg-ReadyBg bg-fixed bg-clip-border bg-cover px-48 py-56"> 
        <div className="bg-white  p-5 gap-y-10 flex flex-col">
            <div className="flex flex-row mx-4 justify-between">
                <div className=" align-middle items-center mt-12 ">
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
                <img className="flex flex-row h-auto w-auto p-6" src = {bg2.src} />
            </div>
        </div>
        </div>
        </div>
    );
};
export default career;