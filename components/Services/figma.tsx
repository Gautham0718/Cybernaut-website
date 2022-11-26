import React from "react";
import SB from "../../public/ServiceBanner.png";
import ServiceSideTag from "./SideTag";
import SD from "./servicedetails";


const Fig = () =>{
    return(
        <div className="m-10 flex flex-col gap-y-10">
        <ServiceSideTag/>
            <div className="flex">
                <img src = {SB.src}/>
            </div>
            <div className="flex flex-col gap-y-8 w-[85%]">
                <div className="flex flex-col">
                    <h1 className="font-bold text-[32px]">Figma Designing</h1>
                    <div className="flex flex-row text-gray-400 text-[15px]">
                         <p>By Team Cybernaut</p>
                        <div className="w-14 h-1 mt-2 ml-2 bg-gray-500"></div>
                     </div>
                </div>
                <div className="flex font-semibold text-[24px]">Description</div>
                <div className="flex text-gray-400 text-[15px] w-[90%]">
                All the apps that we use have a user interface. Have you ever had an interest to design them? Figma is a tool that can be used to design user interfaces for apps and also for web pages. It is a vector graphics tool and can easily be accessed via the web. The best part is, it is available on all platforms like Windows, Linux, and Mac. Figma is an easy platform to design compared to others and can be used by a group to design. A project which one is working on can easily be shared with the other group members and we can easily see who it was edited by last. The pen tool in Figma allows you to connect paths to closed shapes in order to construct 3D forms in the same way you would if you were drawing on paper. If designing is your interest, Figma is the right platform for you.
                </div>
                <SD/>
            </div>
        </div>
    )
}

export default Fig;