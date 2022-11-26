import React from "react";
import SB from "../../public/ServiceBanner.png";
import SD from "./servicedetails";
import ServiceSideTag from "./SideTag";


const AAE = () =>{
    return(
        <div className="m-10 flex flex-col gap-y-10">
        <ServiceSideTag/>
            <div className="flex">
                <img src = {SB.src}/>
            </div>
            <div className="flex flex-col gap-y-8 w-[85%]">
                <div className="flex flex-col">
                    <h1 className="font-bold text-[32px]">Adobe After Effects</h1>
                    <div className="flex flex-row text-gray-400 text-[15px]">
                         <p>By Team Cybernaut</p>
                        <div className="w-14 h-1 mt-2 ml-2 bg-gray-500"></div>
                     </div>
                </div>
                <div className="flex font-semibold text-[24px]">Description</div>
                <div className="flex text-gray-400 text-[15px] w-[90%]">
                Ever wondered how Nike has great advertisements? They are all done with adobe after effects. It is a software used for adding motion animation and visual effects. It has hundreds of effects that can be used to manipulate imagery and can be used to combine various layers of images and videos into the same frame. With the help of after effects, you can create 2D Vector Animation, Basic 3D Animation, Character Animation, Kinetic Typography, UI/UX mock-up animations, and Visual Effects. Design your way through and learn adobe after effects.
                </div>
                <SD/>
            </div>
        </div>
    )
}

export default AAE;