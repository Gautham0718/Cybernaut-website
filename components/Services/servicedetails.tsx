import React from "react";
import SB from "../../public/ServiceBanner.png";
import ServiceSideTag from "./SideTag";
import Logo from "../../public/HomeLogo.jpeg";
import { BookmarkIcon } from "@heroicons/react/outline";


const SD = () =>{
    return(
        
            <div className="flex flex-col gap-y-8 mt-6 w-[85%]">
                <div className="flex flex-row gap-x-12 bg-gray-300 p-10 pr-24">
                    <div className="flex w-[20%] h-[20%]">
                        <img src = {Logo.src} className = "rounded-full "/>
                    </div>
                    <div className="flex flex-col gap-y-6">
                        <div className="text-[24px] flex font-semibold">
                        Team Cybernaut
                        </div>
                        <div className="flex text-[15px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida ridiculus porttitor et scelerisque. Donec sed vitae turpis sed odio mattis. Ultricies accumsan eget eget tristique laoreet.
                        </div>
                    </div>
                </div>
                <div className="flex text-[24px] font-semibold">
                What will you achieve?
                </div>
                <div className="flex flex-col gap-y-6">
                    <div className="flex flex-row gap-x-5">
                        <div className="flex flex-row gap-x-2">
                            <BookmarkIcon className=" text-blue-400 w-8 h-8 "/>
                            <p className="text-gray-400 text-[15px]">
                            In-depth knowledge of each concept 
                            </p>
                        </div>
                        <div className="flex flex-row gap-x-2">
                            <BookmarkIcon className=" text-blue-400 w-8 h-8 "/>
                            <p className="text-gray-400 text-[15px]">
                            Learning along with like-minded people 
                            </p>
                        </div>
                        <div className="flex flex-row gap-x-2">
                            <BookmarkIcon className=" text-blue-400 w-8 h-8 "/>
                            <p className="text-gray-400 text-[15px]">
                            Exposure and practice 
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col bg-gradient-to-r from-blue-500 text-white to-blue-200 gap-y-8 p-10 ">
                    <div className="flex text-[24px] font-semibold">Who can take this course?</div>
                    <div className="flex flex-row gap-x-2">
                            <BookmarkIcon className=" text-white w-8 h-8 "/>
                            <p className="text-[15px]">
                            Anyone with an inquisitive mind can take up this course
                            </p>
                    </div>
                    <div className="flex flex-row gap-x-2">
                            <BookmarkIcon className=" text-white w-8 h-8 "/>
                            <p className="text-[15px]">
                            One who wants to learn this particular course
                            </p>
                    </div>
                </div>
                <div className="flex text-[24px] font-semibold">
                Certificate of Completion
                </div>
                <div className="flex flex-row gap-x-12">
                <div className="flex flex-col gap-y-8">
                    <div className="flex flex-row gap-x-2">
                        <BookmarkIcon className=" text-blue-400 w-8 h-8 "/>
                        <p className="text-[15px] text-gray-400">
                            Amet orci, vitae penatibus iaculis suspendisse tortor tempor.
                        </p>
                    </div>
                    <div className="flex flex-row gap-x-2">
                        <BookmarkIcon className=" text-blue-400 w-8 h-8 "/>
                        <p className="text-[15px] text-gray-400">
                            Amet orci, vitae penatibus iaculis suspendisse tortor tempor.
                        </p>
                    </div>
                    <div className="flex flex-row gap-x-2">
                        <BookmarkIcon className=" text-blue-400 w-8 h-8 "/>
                        <p className="text-[15px] text-gray-400">
                            Amet orci, vitae penatibus iaculis suspendisse tortor tempor.
                        </p>
                    </div>
                    <div className="flex flex-row gap-x-2">
                        <BookmarkIcon className=" text-blue-400 w-8 h-8 "/>
                        <p className="text-[15px] text-gray-400">
                            Amet orci, vitae penatibus iaculis suspendisse tortor tempor.
                        </p>
                    </div>
                </div>
                <div className="bg-gray-200 p-20">
                    Certificate
                </div>
                </div>
                <div className=" flex flex-col bg-gradient-to-br from-blue-500 to-blue-300 text-white gap-y-6 p-10">
                     <div className="text-center w-[90%] justify-center text-[24px] font-semibold">Why Cybernaut ?</div>
                     <div className="w-[90%] flex flex-row gap-x-10 justify-center text-center">
                        <div className="flex flex-col">
                            <div className=" w-40 h-40 mx-[25%] rounded-full bg-white"></div>
                            <div className="text-[15px]">Online Learning</div>
                        </div>
                        <div className="flex flex-col">
                            <div className="w-40 mx-[25%] h-40 rounded-full bg-white"></div>
                            <div className="text-[15px]">Beginner Friendly</div>
                        </div>
                        <div className="flex flex-col">
                            <div className="w-40 mx-[25%] h-40 rounded-full bg-white"></div>
                            <div className="text-[15px]">Taught in English/Tamil</div>
                        </div>
                     </div>
                     <div className="w-[90%] flex flex-row gap-x-10 justify-center text-center mx-[15r%]">
                        <div className="flex flex-col">
                            <div className="w-40 mx-[25%] h-40 rounded-full bg-white"></div>
                            <div className="text-[15px]">Double Clarification Done</div>
                        </div>
                        <div className="flex flex-col">
                            <div className="w-40 mx-[25%] h-40 rounded-full bg-white"></div>
                            <div className="text-[15px]">Project for Practice</div>
                        </div>
                        <div className="flex flex-col">
                            <div className="w-40 mx-[25%] h-40 rounded-full bg-white"></div>
                            <div className="text-[15px]">Certification after training</div>
                        </div>
                     </div>
                </div>
                <div className="flex text-[24px] font-semibold">
                FAQ
                </div>
                <div className="flex flex-col text-gray-400 text-[20px]">
                    <p>Question 1</p>
                    <hr/>
                    <p>Question 2</p>
                    <hr/>
                    <p>Question 3</p>
                    <hr/>
                </div>
            </div>
    )
}

export default SD;