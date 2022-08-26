import React from "react";
import bg from "../public/background.jpeg";
import bg2 from "../public/background2.jpg";
import ViewCourseButton from "./ViewCourseButton";

const career = () => {
    return(
        <div className="flex justify-center items-center ">
        <div className="flex h-[90%] w-full">
            <img src={bg.src} />
        </div>
        <div className="absolute flex h-[80%] w-[80%] justify-center align-middle items-center">
            <div className="flex flex-row justify-between">
                <div>
                    <h1>Ready to be one of us?</h1>
                    <div className="flex w-[10%] h-1 bg-gradient-to-r from-cyan-400 via-cyan-500 to-blue-300"></div>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <div className="mx-6">
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
