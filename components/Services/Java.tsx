import React from "react";
import SB from "../../public/ServiceBanner.png";
import SD from "./servicedetails";
import ServiceSideTag from "./SideTag";


const Java = () =>{
    return(
        <div className="m-10 flex flex-col gap-y-10">
        <ServiceSideTag/>
            <div className="flex">
                <img src = {SB.src}/>
            </div>
            <div className="flex flex-col gap-y-8 w-[85%]">
                <div className="flex flex-col">
                    <h1 className="font-bold text-[32px]">Java Programming</h1>
                    <div className="flex flex-row text-gray-400 text-[15px]">
                         <p>By Team Cybernaut</p>
                        <div className="w-14 h-1 mt-2 ml-2 bg-gray-500"></div>
                     </div>
                </div>
                <div className="flex font-semibold text-[24px]">Description</div>
                <div className="flex text-gray-400 text-[15px] w-[90%]">
                Applications that are constructed in laptops to the scientific supercomputers, all are done with Java. It is the world's third most popular programming language, after Python and C –.  Use cases of Java have expanded to Data Science applications, Machine Learning applications, and IoT, which makes it most preferred for designing various applications. The high-level concurrency tools and packages make it possible to create highly scalable solutions. If you want high security and easy coding experience, then you should learn Java.
                </div>
                <SD/>
            </div>
        </div>
    )
}

export default Java;