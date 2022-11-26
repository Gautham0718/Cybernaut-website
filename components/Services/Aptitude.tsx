import React from "react";
import SB from "../../public/ServiceBanner.png";
import ServiceSideTag from "./SideTag";
import SD from "./servicedetails";


const Aptitude = () =>{
    return(
        <div className="m-10 flex flex-col gap-y-10">
        <ServiceSideTag/>
            <div className="flex">
                <img src = {SB.src}/>
            </div>
            <div className="flex flex-col gap-y-8 w-[85%]">
                <div className="flex flex-col">
                    <h1 className="font-bold text-[32px]">Basic Aptitude</h1>
                    <div className="flex flex-row text-gray-400 text-[15px]">
                         <p>By Team Cybernaut</p>
                        <div className="w-14 h-1 mt-2 ml-2 bg-gray-500"></div>
                     </div>
                </div>
                <div className="flex font-semibold text-[24px]">Description</div>
                <div className="flex text-gray-400 text-[15px] w-[90%]">
                Out of a hundred candidates, when you have to choose the best, it is a task. Going through hundreds of applications is not determining the right person for the role. Having an aptitude test is a way to find one’s ability with various tests in an interview. Mastering the basic concepts helps in the testing process. Being logically sound is one of the major criteria to pass this process. Each question tests you in a number of ways, not only in the genre it is asked from. Skills don't determine your post but the combination of logic and skills does. Learn the basics of aptitude to get through any interview smoothly.
                </div>
                <SD/>
            </div>
        </div>
    )
}

export default Aptitude;