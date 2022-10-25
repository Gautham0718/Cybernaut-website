import { BookmarkAltIcon } from "@heroicons/react/outline";
import React from "react";

const PrgCoordinator = () => {
    return(
        <div className="m-10 mt-16 flex flex-col gap-y-8">
            <div className=" flex font-bold text-[40px]">
                Program Coordinator
            </div>
            <div className="flex flex-col">
                <p>Domain head name</p>
                <p>Cybernaut</p>
            </div>
            <div className="bg-gray-300 flex flex-col p-8">
                <p className="font-semibold text-[30px] pb-5">Job Details</p>
                <div className="flex flex-row gap-x-24">
                    <div>
                        <p>Full Time / Part Time</p>
                        <p>Duration</p>
                    </div>
                    <div>
                        <p>Work Schedule</p>
                        <p>3 Hours per day</p>
                    </div>
                    <div>
                        <p>Requirements</p>
                        <p>Exposure on Lorem Ipsum</p>
                    </div>
                </div>
            </div>
            <div className="font-semibold flex flex-col text-[30px]">
                Full Job Description
            </div>
            <div className="flex flex-col">
                <div className="flex flex-row text-gray-500">
                    <BookmarkAltIcon className="w-8 h-8 pr-2 text-blue-400"/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida ridiculus porttitor et scelerisque. Donec sed vitae turpis sed odio mattis. Ultricies</p>
                </div>
                <div className="flex flex-row text-gray-500">
                    <BookmarkAltIcon className="w-8 h-8 pr-2 text-blue-400"/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida ridiculus porttitor et scelerisque. Donec sed vitae turpis sed odio mattis. Ultricies</p>
                </div>
                <div className="flex flex-row text-gray-500">
                    <BookmarkAltIcon className="w-8 h-8 pr-2 text-blue-400"/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida ridiculus porttitor et scelerisque. Donec sed vitae turpis sed odio mattis. Ultricies</p>
                </div>
            </div>
            <div className="font-semibold flex flex-col text-[30px]">
                Job Responsibilities
            </div>
            <div className="flex flex-col">
                <div className="flex flex-row text-gray-500">
                    <BookmarkAltIcon className="w-8 h-8 pr-2 text-blue-400"/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida ridiculus porttitor et scelerisque. Donec sed vitae turpis sed odio mattis. Ultricies</p>
                </div>
                <div className="flex flex-row text-gray-500">
                    <BookmarkAltIcon className="w-8 h-8 pr-2 text-blue-400"/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida ridiculus porttitor et scelerisque. Donec sed vitae turpis sed odio mattis. Ultricies</p>
                </div>
            </div>
            <div className="font-semibold flex text-blue-400 text-[24px] w-48 rounded-xl bg-gray-200 justify-center text-center">
                Apply Now !
            </div>
        </div>
    )
}

export default PrgCoordinator;