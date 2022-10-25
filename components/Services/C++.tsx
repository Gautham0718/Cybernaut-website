import React from "react";
import SB from "../../public/ServiceBanner.png";
import ServiceSideTag from "./SideTag";
import Logo from "../../public/HomeLogo.jpeg";
import { BookmarkIcon } from "@heroicons/react/outline";


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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida ridiculus porttitor et scelerisque. Donec sed vitae turpis sed odio mattis. Ultricies accumsan eget eget tristique laoreet. At facilisis ante massa congue ipsum. Habitant sit nascetur accumsan, malesuada sed posuere felis. Dolor rhoncus porttitor id tincidunt diam gravida eget. Ut egestas scelerisque at tortor dictum mauris laoreet venenatis. Aliquet at vitae sed augue non ut adipiscing odio consequat. Viverra commodo ac risus amet id leo. Adipiscing dolor elementum nisl enim tempor porttitor vulputate morbi. Amet orci, vitae penatibus iaculis suspendisse tortor tempor. Id tincidunt facilisis facilisis nulla tristique convallis at.
                </div>
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
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            </p>
                        </div>
                        <div className="flex flex-row gap-x-2">
                            <BookmarkIcon className=" text-blue-400 w-8 h-8 "/>
                            <p className="text-gray-400 text-[15px]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-row gap-x-5">
                        <div className="flex flex-row gap-x-2">
                            <BookmarkIcon className=" text-blue-400 w-8 h-8 "/>
                            <p className="text-gray-400 text-[15px]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            </p>
                        </div>
                        <div className="flex flex-row gap-x-2">
                            <BookmarkIcon className=" text-blue-400 w-8 h-8 "/>
                            <p className="text-gray-400 text-[15px]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col bg-gradient-to-r from-blue-500 text-white to-blue-200 gap-y-8 p-10 ">
                    <div className="flex text-[24px] font-semibold">Who can take this course?</div>
                    <div className="flex flex-row gap-x-2">
                            <BookmarkIcon className=" text-white w-8 h-8 "/>
                            <p className="text-[15px]">
                            Amet orci, vitae penatibus iaculis suspendisse tortor tempor. Id tincidunt facilisis facilisis nulla tristique convallis at. 
                            </p>
                    </div>
                    <div className="flex flex-row gap-x-2">
                            <BookmarkIcon className=" text-white w-8 h-8 "/>
                            <p className="text-[15px]">
                            Amet orci, vitae penatibus iaculis suspendisse tortor tempor. Id tincidunt facilisis facilisis nulla tristique convallis at. 
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
                            <div className="text-[15px]">Live Interactive session with one and one doubt session</div>
                        </div>
                        <div className="flex flex-col">
                            <div className="w-40 mx-[25%] h-40 rounded-full bg-white"></div>
                            <div className="text-[15px]">Live Interactive session with one and one doubt session</div>
                        </div>
                        <div className="flex flex-col">
                            <div className="w-40 mx-[25%] h-40 rounded-full bg-white"></div>
                            <div className="text-[15px]">Live Interactive session with one and one doubt session</div>
                        </div>
                     </div>
                     <div className="w-[90%] flex flex-row gap-x-10 justify-center text-center mx-[15r%]">
                        <div className="flex flex-col">
                            <div className="w-40 mx-[25%] h-40 rounded-full bg-white"></div>
                            <div className="text-[15px]">Live Interactive session with one and one doubt session</div>
                        </div>
                        <div className="flex flex-col">
                            <div className="w-40 mx-[25%] h-40 rounded-full bg-white"></div>
                            <div className="text-[15px]">Live Interactive session with one and one doubt session</div>
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
        </div>
    )
}

export default Cpp;