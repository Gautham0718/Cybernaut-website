import React from "react";
import bg from "../public/background.jpeg";
import bg2 from "../public/background2.jpg";
import ViewCourseButton from "./ViewCourseButton";

const career = () => {
    return(
        <div className="absolute flex justify-center items-center ">
        <div className="flex h-full w-full">
            <img src={bg.src} />
        </div>
        <div className="flex h-[80%] w-[80%] justify-center align-middle items-center">
            <img className="h-[70%] w-[70%] p-6" src = {bg2.src} />
        </div>
        </div>
    );
};
export default career;
