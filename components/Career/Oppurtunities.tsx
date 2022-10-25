import {ArrowDownIcon } from "@heroicons/react/outline";
import React from "react";

function Links1(){
    const menu : HTMLElement = document.getElementById('dropdown1') as HTMLElement;
    menu.style.display = "block";
}
function Links2(){
    const menu : HTMLElement = document.getElementById('dropdown2') as HTMLElement;
    menu.style.display = "block";
}
function Links3(){
    const menu : HTMLElement = document.getElementById('dropdown3') as HTMLElement;
    menu.style.display = "block";
}
function Links4(){
    const menu : HTMLElement = document.getElementById('dropdown4') as HTMLElement;
    menu.style.display = "block";
}
function Links5(){
    const menu : HTMLElement = document.getElementById('dropdown5') as HTMLElement;
    menu.style.display = "block";
}
function Links6(){
    const menu : HTMLElement = document.getElementById('dropdown6') as HTMLElement;
    menu.style.display = "block";
}

function Delink(){
    const menu1 : HTMLElement = document.getElementById('dropdown1') as HTMLElement;
    menu1.style.display = "none";
    const menu2 : HTMLElement = document.getElementById('dropdown2') as HTMLElement;
    menu2.style.display = "none";
    const menu3 : HTMLElement = document.getElementById('dropdown3') as HTMLElement;
    menu3.style.display = "none";
    const menu4 : HTMLElement = document.getElementById('dropdown4') as HTMLElement;
    menu4.style.display = "none";
    const menu5 : HTMLElement = document.getElementById('dropdown5') as HTMLElement;
    menu5.style.display = "none";
    const menu6 : HTMLElement = document.getElementById('dropdown6') as HTMLElement;
    menu6.style.display = "none";
}

const Opportunities = () =>{
    return(
        <div className="m-10 mt-16 bg-gradient-to-br from-blue-600 via-blue-300 to-blue-500 p-8">
            <div>
                <h1 className="text-white font-bold text-[40px]">Availabe Oppurtunities</h1>
            </div>
            <div className="flex flex-row mt-10 gap-x-8">
                <div className="flex flex-col gap-y-8 w-[50%]">
                    <div className="bg-white p-8 flex flex-row h-[90%] ">
                        <div className="border-r border-r-gray-400 px-8">
                            <h2 className="font-semibold text-[28px] text-blue-500">Marketing</h2>
                            <p className="text-[15px] pt-4 text-gray-400">Id tincidunt facilisis facilisis nulla tristique convallis at.</p>
                        </div>
                        <div onMouseOver={Links1} onMouseOut = {Delink}  className = "mt-[5%] ml-[6%]">
                            <ArrowDownIcon className = "w-8 h-8 text-gray-400 hover:text-blue-600"/>
                            <div id = "dropdown1" className="hidden w-40">
                                <div className=" shadow-2xl bg-blue-100 text-center justify-center">
                                    <h1 className="text-[15px] hover:bg-blue-600 hover:text-white">Link 1</h1>
                                    <h1 className="text-[15px] hover:bg-blue-600 hover:text-white">Link 2</h1>
                                    <h1 className="text-[15px] hover:bg-blue-600 hover:text-white">Link 3</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white p-8 flex flex-row h-[90%]">
                        <div className="border-r border-r-gray-400 px-8">
                            <h2 className="font-semibold text-[28px] text-blue-500">Marketing</h2>
                            <p className="text-[15px] pt-4 text-gray-400">Id tincidunt facilisis facilisis nulla tristique convallis at.</p>
                        </div>
                        <div onMouseOver={Links2}  onMouseOut = {Delink} className = "mt-[5%] ml-[6%]">
                            <ArrowDownIcon   className = "w-8 h-8 text-gray-400 hover:text-blue-600"/>
                            <div id = "dropdown2" className="hidden w-40">
                                <div className=" shadow-2xl bg-blue-100 text-center justify-center">
                                    <h1 className="text-[15px] hover:bg-blue-600 hover:text-white">Link 1</h1>
                                    <h1 className="text-[15px] hover:bg-blue-600 hover:text-white">Link 2</h1>
                                    <h1 className="text-[15px] hover:bg-blue-600 hover:text-white">Link 3</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white p-8 flex flex-row h-[90%]">
                        <div className="border-r border-r-gray-400 px-8">
                            <h2 className="font-semibold text-[28px] text-blue-500">Marketing</h2>
                            <p className="text-[15px] pt-4 text-gray-400">Id tincidunt facilisis facilisis nulla tristique convallis at.</p>
                        </div>
                        <div onMouseOver={Links3}  onMouseOut = {Delink} className = "mt-[5%] ml-[6%]">
                            <ArrowDownIcon   className = "w-8 h-8 text-gray-400 hover:text-blue-600"/>
                            <div id = "dropdown3" className="hidden w-40">
                                <div className=" shadow-2xl bg-blue-100 text-center justify-center">
                                    <h1 className="text-[15px] hover:bg-blue-600 hover:text-white">Link 1</h1>
                                    <h1 className="text-[15px] hover:bg-blue-600 hover:text-white">Link 2</h1>
                                    <h1 className="text-[15px] hover:bg-blue-600 hover:text-white">Link 3</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-y-8 w-[50%]">
                    <div className="bg-white p-8 flex flex-row h-[90%]">
                        <div className="border-r border-r-gray-400 px-8">
                            <h2 className="font-semibold text-[28px] text-blue-500">Pitching</h2>
                            <p className="text-[15px] pt-4 text-gray-400">Id tincidunt facilisis facilisis nulla tristique convallis at.</p>
                        </div>
                        <div onMouseOver={Links4}  onMouseOut = {Delink} className = "mt-[5%] ml-[6%]">
                            <ArrowDownIcon   className = "w-8 h-8 text-gray-400 hover:text-blue-600"/>
                            <div id = "dropdown4" className="hidden w-40">
                                <div className=" shadow-2xl bg-blue-100 text-center justify-center">
                                    <h1 className="text-[15px] hover:bg-blue-600 hover:text-white">Link 1</h1>
                                    <h1 className="text-[15px] hover:bg-blue-600 hover:text-white">Link 2</h1>
                                    <h1 className="text-[15px] hover:bg-blue-600 hover:text-white">Link 3</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white p-8 flex flex-row h-[90%]">
                        <div className="border-r border-r-gray-400 px-8">
                            <h2 className="font-semibold text-[28px] text-blue-500">Pitching</h2>
                            <p className="text-[15px] pt-4 text-gray-400">Id tincidunt facilisis facilisis nulla tristique convallis at.</p>
                        </div>
                        <div onMouseOver={Links5}  onMouseOut = {Delink} className = "mt-[5%] ml-[6%]">
                            <ArrowDownIcon   className = "w-8 h-8 text-gray-400 hover:text-blue-600"/>
                            <div id = "dropdown5" className="hidden w-40">
                                <div className=" shadow-2xl bg-blue-100 text-center justify-center">
                                    <h1 className="text-[15px] hover:bg-blue-600 hover:text-white">Link 1</h1>
                                    <h1 className="text-[15px] hover:bg-blue-600 hover:text-white">Link 2</h1>
                                    <h1 className="text-[15px] hover:bg-blue-600 hover:text-white">Link 3</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white p-8 flex flex-row h-[90%]">
                        <div className="border-r border-r-gray-400 px-8">
                            <h2 className="font-semibold text-[28px] text-blue-500">Pitching</h2>
                            <p className="text-[15px] pt-4 text-gray-400">Id tincidunt facilisis facilisis nulla tristique convallis at.</p>
                        </div>
                        <div onMouseOver={Links6}  onMouseOut = {Delink} className = "mt-[5%] ml-[6%]">
                            <ArrowDownIcon   className = "w-8 h-8 text-gray-400 hover:text-blue-600"/>
                            <div id = "dropdown6" className="hidden w-40">
                                <div className=" shadow-2xl bg-blue-100 text-center justify-center">
                                    <h1 className="text-[15px] hover:bg-blue-600 hover:text-white">Link 1</h1>
                                    <h1 className="text-[15px] hover:bg-blue-600 hover:text-white">Link 2</h1>
                                    <h1 className="text-[15px] hover:bg-blue-600 hover:text-white">Link 3</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Opportunities;