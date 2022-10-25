import React from "react";
import StudentClub from "../../public/StudentClub.png"
import ViewCourseButton from "../ViewCourseButton";

const Club = () =>{
    return(
       <div className="flex m-10">
         <div className=" flex  bg-StudentsClubBG bg-fixed bg-clip-border bg-cover px-72 py-40">
                <div className="bg-gray-100 shadow-2xl shadow-gray-300 p-20 gap-y-10 flex flex-col">
                    <div className="flex flex-row gap-x-6">   
                        <img src = {StudentClub.src} className = "w-24 h-24" />
                        <h1 className="font-bold text-[36px] flex flex-row">Cybernaut Developers Student Club<div className="w-48 h-1 mt-20 ml-20 flex absolute  bg-gradient-to-r from-blue-600 via-blue-400 to-blue-200"></div></h1>   
                    </div> 
                    <div className="text-center justify-center">
                    Cybernaut developers Club connects all the developers in one place. This community is for undergraduate students who are willing to develop technologies and for students with a curiosity to grow as a developer.
                    </div>
                    <div className="font-semibold text-xl bg-gradient-to-r from-blue-500 to-blue-300 text-white text-center justify-center">
                    This club motivates the phrase "Create leaders and not employees."
                    </div>
                    <div className="text-center justify-center">
                    Our motive is not only to improve a student's hard skills but also the soft skills needed for his life. By joining this, students can upgrade their skills and initiate solutions for their universities.
                    </div>
                    <div className="align-middle items-center content-center">
                    <ViewCourseButton/>
                    </div>
                </div>
            </div>
            
       </div>
    )
}

export default Club;