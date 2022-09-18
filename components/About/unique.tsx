import React from "react";
import juniorspace from "../../public/LeftNavImg.jpeg";
import HomeLogo from "../../public/HomeLogo.jpeg";
import StudentClub from "../../public/StudentClub.png";

const Unique = () =>{
    return(
        <div className="m-8">
            <div>
                <h1>How we are Unique</h1>
            </div>
            <div className="flex flex-row">
                <div className="bg-gray-300 w-[50%]">
                    <div className="py-10">
                    Our uniqueness is our greatest strength. We ensure that no concept is memorized when it comes to our training, instead, they are made to understand right from the beginning i.e 'Smart Learning'.
                    </div>
                    <div className="py-10">
                    Live classes and interaction during class support Smart Learning. Having quizzes during meets and seeing to it that all are in a comfortable environment with no pressure is what helps us stand out.
                    </div>
                </div>
                <div className="flex flex-row">
                <div className=" align-bottom w-[20%] h-[20%] bg-gray-300 rounded-[500px] pl-4 ">
                    <img src = {juniorspace.src}/>
                </div>
                <div className=" align-bottom w-[40%] h-[40%] bg-gray-300 rounded-[800px] pl-4">
                    <img src = {HomeLogo.src}/>
                </div>
                <div className=" align-bottom w-[20%] h-[20%] bg-gray-300 rounded-[500px] pl-4">
                    <img src = {StudentClub.src}/>
                </div>
                </div>
            </div>

        </div>
    )
};

export default Unique;
