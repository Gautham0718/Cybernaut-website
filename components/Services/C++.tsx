import React from "react";
import SB from "../../public/ServiceBanner.png";
import ServiceSideTag from "./SideTag";
import SD from "./servicedetails";


const Cpp = () =>{
    return(
        <div className="m-10 flex flex-col gap-y-10">
        <ServiceSideTag/>
            <div className="flex">
                <img src = {SB.src}/>
            </div>
            <div className="flex flex-col gap-y-8 w-[85%]">
                <div className="flex flex-col">
                    <h1 className="font-bold text-[32px]">C++ Programming</h1>
                    <div className="flex flex-row text-gray-400 text-[15px]">
                         <p>By Team Cybernaut</p>
                        <div className="w-14 h-1 mt-2 ml-2 bg-gray-500"></div>
                     </div>
                </div>
                <div className="flex font-semibold text-[24px]">Description</div>
                <div className="flex text-gray-400 text-[15px] w-[90%]">
                For all the youngsters interested in developing games and gaming consoles (Xbox, PlayStation, and Nintendo Switch) to the people interested in developing operating systems and browsers, C++ is the answer. It is a general-purpose programming language that is powerful. C++ supports different ways of programming like procedural, functional, etc. making it flexible and portable. Being an object-oriented programming language, it gives a clear structure to programs and allows code to be reused, lowering development costs. Also, it supports the four primary features of OOP: encapsulation, polymorphism, abstraction, and inheritance.C++ is a superset of C language. If one knows the C programming language, C++ is very easy to learn as both are similar. 
                </div>
                <SD/>
            </div>
        </div>
    )
}

export default Cpp;