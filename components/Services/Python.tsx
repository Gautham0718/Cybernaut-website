import React from "react";
import SB from "../../public/ServiceBanner.png";
import ServiceSideTag from "./SideTag";
import SD from "./servicedetails";


const Pyth = () =>{
    return(
        <div className="m-10 flex flex-col gap-y-10">
        <ServiceSideTag/>
            <div className="flex">
                <img src = {SB.src}/>
            </div>
            <div className="flex flex-col gap-y-8 w-[85%]">
                <div className="flex flex-col">
                    <h1 className="font-bold text-[32px]">Python Programming</h1>
                    <div className="flex flex-row text-gray-400 text-[15px]">
                         <p>By Team Cybernaut</p>
                        <div className="w-14 h-1 mt-2 ml-2 bg-gray-500"></div>
                     </div>
                </div>
                <div className="flex font-semibold text-[24px]">Description</div>
                <div className="flex text-gray-400 text-[15px] w-[90%]">
                With the advancements in technology, it is expected that everything should become simple to do. Everyone who expects that coding should also be simple, Python programming language is the solution. Python is one of the most accessible programming languages available because it has simplified syntax. Python is said to be “loosely typed” as this programming language doesn’t require you to state the type of value a function returns when you define the function or the type of a variable before you create it. It is used for web development, AI, ML(Machine Learning), operating systems, mobile application development, developing software, task automation, data analysis, and data visualization. Simple video games can also be built using python. Anyone who feels they don't know where to begin in coding, start with python.
                </div>
                <SD/>
            </div>
        </div>
    )
}

export default Pyth;