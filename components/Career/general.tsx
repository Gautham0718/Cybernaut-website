import React from "react";
import Opp2 from "../../public/opp2.png";
import Opp3 from "../../public/opp3.png";
import Opp4 from "../../public/opp4.png";


const Intro = () =>{
    return(
        <div className="m-10 gap-y-12">
            <div className="bg-gray-300 flex flex-col p-[18%] h-full w-full">
                <h1 className="font-bold text-[40px] justify-center text-center">Good Life Begins With A Good Company</h1>
                <div className="pl-[38%]">
                    <div className=" h-10 w-48 border-blue-500 border-2 translate-x-8 translate-y-12 bg-none bg-transparent "></div>
                    <div className=" absolute h-10 w-48 text-[24px] font-semibold bg-gradient-to-br from-blue-600 to to-blue-400 text-white text-center justify-center">Join Us</div>
                </div>
            </div>
        </div>
    )
}

export default Intro;