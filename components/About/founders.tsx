import React from "react";
import CEO from "../../public/CEO.png";
import { CameraIcon } from "@heroicons/react/outline";

const Founder = () =>{
    return(
        <div>
            <div className="flex flex-row">
            <h1>The Founders</h1>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 via-blue-400 to-blue-200"></div>
            </div>
            <div className="flex flex-row gap-x-10">
                <div className="flex flex-col">
                    <img src={CEO.src}/>
                    <h2>JAYASURYA G</h2>
                    <div className=" text-gray-400 font-semibold">Chief Executive Officer</div>
                    <div className="w-16 h-1 bg-gradient-to-r from-blue-600 via-blue-400 to-blue-200"></div>
                    <div className="py-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt accumsan suspendisse massa tincidunt.</div>
                    <div className="flex flex-row pr-4">
                        <CameraIcon/>
                        <CameraIcon/>
                        <CameraIcon/>
                    </div>
                </div>
                <div className="flex flex-col">
                    <img src={CEO.src}/>
                    <h2>B. MANISH KUMAR</h2>
                    <div className=" text-gray-400 font-semibold">President</div>
                    <div className="w-16 h-1 bg-gradient-to-r from-blue-600 via-blue-400 to-blue-200"></div>
                    <div className="py-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt accumsan suspendisse massa tincidunt.</div>
                    <div className="flex flex-row pr-4">
                        <CameraIcon/>
                        <CameraIcon/>
                        <CameraIcon/>
                    </div>
                </div>
                <div className="flex flex-col">
                    <img src={CEO.src}/>
                    <h2>KEERTHANA R</h2>
                    <div className=" text-gray-400 font-semibold">Vice-President</div>
                    <div className="w-16 h-1 bg-gradient-to-r from-blue-600 via-blue-400 to-blue-200"></div>
                    <div className="py-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt accumsan suspendisse massa tincidunt.</div>
                    <div className="flex flex-row pr-4">
                        <CameraIcon/>
                        <CameraIcon/>
                        <CameraIcon/>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Founder;