import React from "react";
import UniqueJunior from "../../public/LeftNavImg.png";
import UniqueLogo from "../../public/UniqueLogo.png";
import StudentClub from "../../public/StudentClub.png";

const Unique = () =>{
    return(
        <div className="m-8 -mt-56">
            <h1 className="font-bold text-[36px]">How we are Unique</h1>
            <div className="flex flex-row gap-x-8">
                <div className="bg-gray-300 w-[50%]">
                    <div className="py-10">
                    Our uniqueness is our greatest strength. We ensure that no concept is memorized when it comes to our training, instead, they are made to understand right from the beginning i.e 'Smart Learning'.
                    </div>
                    <div className="py-10">
                    Live classes and interaction during class support Smart Learning. Having quizzes during meets and seeing to it that all are in a comfortable environment with no pressure is what helps us stand out.
                    </div>
                </div>
                <div className="flex flex-row pl-4">
                    <div className="pt-20">
                <div className=" relative text-center align-bottom w-36 h-36 bg-gray-300 rounded-[100%] p-4 pt-6">
                    <img className=" align-middle items-center rounded-full self-center" src = {UniqueJunior.src}/>
                </div>
                </div>
                <div className=" relative align-bottom w-64 h-64 bg-gray-300 rounded-[100%] ">
                    <img className=" align-middle items-center rounded-full self-center w-[90%] h-[90%] m-3 object-fill" src = {UniqueLogo.src}/>
                </div>
                <div className=" relative align-bottom w-36 h-36 bg-gray-300 rounded-[100%]">
                    <img className="align-middle items-center rounded-full w-[70%] h-[70%] self-center m-5 object-fill" src = {StudentClub.src}/>
                    <p className="font-bold text-[10px] text-blue-400 text-center">CYBERNAUT DEVELOPERS</p>
                    <p className="text-[10px] text-center">STUDENTS CLUB</p>
                </div>
                </div>
            </div>

        </div>
    )
};

export default Unique;