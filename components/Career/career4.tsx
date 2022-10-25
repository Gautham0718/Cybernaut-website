import { BookmarkIcon, QuestionMarkCircleIcon } from "@heroicons/react/outline";
import React from "react";
import Opp4 from "../../public/opp4.png";
import ViewCourseButton from "../ViewCourseButton";

const Career4 = () =>{
    return(
        <div className="m-10 gap-y-12">
                <div className="text-blue-500 font-bold text-[40px]">
                Luck is what happens when preparation meets opportunity
                </div>
                <div className="flex flex-row gap-x-10 mt-10">
                    <div className="flex flex-col gap-y-8">
                        <div className="flex flex-row">
                            <h1 className="font-semibold text-[26px]">Career with Cybernaut </h1>
                            <div className="w-14 h-1 mt-5 ml-2 bg-gradient-to-r from-cyan-400 via-cyan-500 to-blue-400"></div>
                        </div>
                        <div className="text-gray-500">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida ridiculus porttitor et scelerisque. Donec sed vitae turpis sed odio mattis. Ultricies accumsan eget eget tristique laoreet. 
                        </div>
                        <div className="bg-blue-500 text-white rounded-xl gap-y-8 p-4">
                            <div className="font-semibold text-[20px]">
                                Perks of joining
                            </div> 
                            <div className="mt-2">
                                <table className="gap-y-16 ">
                                    <tr className="gap-x-10 flex flex-row">
                                        <td className="flex flex-row">
                                            <div className="flex flex-row">
                                            <BookmarkIcon className="w-12 h-12"/>
                                            <p className="text-[15px]">Id tincidunt facilisis facilisis nulla tristique convallis at.</p>
                                            </div>
                                        </td>
                                        <td className="flex flex-row">
                                            <BookmarkIcon className="w-12 h-12"/>
                                            <p className="text-[15px]">Id tincidunt facilisis facilisis nulla tristique convallis at.</p>
                                        </td>
                                    </tr>
                                    <tr className="gap-x-10 flex flex-row">
                                        <td className="flex flex-row">
                                            <div className="flex flex-row">
                                            <BookmarkIcon className="w-12 h-12"/>
                                            <p className="text-[15px]">Id tincidunt facilisis facilisis nulla tristique convallis at.</p>
                                            </div>
                                        </td>
                                        <td className="flex flex-row">
                                            <BookmarkIcon className="w-12 h-12"/>
                                            <p className="text-[15px]">Id tincidunt facilisis facilisis nulla tristique convallis at.</p>
                                        </td>
                                    </tr>
                                </table>
                            </div>       
                        </div>
                        <div className="gap-y-8 ">
                            <div className="font-semibold text-[20px]">
                               Who can Apply?
                            </div> 
                            <div className="mt-2 p-4 text-gray-400  ">
                                <table className="gap-y-16 ">
                                    <tr className="gap-x-10 flex flex-row">
                                        <td className="flex flex-row">
                                            <div className="flex flex-row">
                                            <QuestionMarkCircleIcon className="w-12 h-12"/>
                                            <p className="text-[15px]">Id tincidunt facilisis facilisis nulla tristique convallis at.</p>
                                            </div>
                                        </td>
                                        <td className="flex flex-row">
                                            <QuestionMarkCircleIcon className="w-12 h-12"/>
                                            <p className="text-[15px]">Id tincidunt facilisis facilisis nulla tristique convallis at.</p>
                                        </td>
                                    </tr>
                                    <tr className="gap-x-10 flex flex-row">
                                        <td className="flex flex-row">
                                            <div className="flex flex-row">
                                            <QuestionMarkCircleIcon className="w-12 h-12"/>
                                            <p className="text-[15px]">Id tincidunt facilisis facilisis nulla tristique convallis at.</p>
                                            </div>
                                        </td>
                                        <td className="flex flex-row">
                                            <QuestionMarkCircleIcon className="w-12 h-12"/>
                                            <p className="text-[15px]">Id tincidunt facilisis facilisis nulla tristique convallis at.</p>
                                        </td>
                                    </tr>
                                </table>
                            </div>       
                        </div>
                        <ViewCourseButton/>
                    </div>
                    <div>
                        <img src = {Opp4.src} className = "h-[80%] object-fill w-[100%]"/>
                    </div>
                </div>
            </div>
    )
}

export default Career4;