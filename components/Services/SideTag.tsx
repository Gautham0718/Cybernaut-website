import React from "react";

const ServiceSideTag = () => {
    return(
        <div>
            <div className=" mt-10 fixed border-blue-500 border-2 rounded-full w-[600px] h-[600px] ml-[77%] bg-white py-5">
                <div className="mr-[50%] relative">
                    <div className="text-right flex gap-y-2 flex-col justify-end pl-20">
                        <p className="flex text-[15px] flex-row-reverse font-semibold">Duration</p>
                        <p className=" flex flex-row-reverse text-blue-400 text-[24px] font-bold">30+ Hours</p>
                        <p className="flex flex-row-reverse">Live Interactive session with one and one doubt session</p>
                    </div>
                    <hr className="ml-12 my-2"/>
                    <div className="pl-5 text-right flex gap-y-2 flex-col justify-end">
                        <p className="flex text-[15px] flex-row-reverse font-semibold">Language</p>
                        <p className=" flex flex-row-reverse text-blue-400 text-[24px] font-bold">Tamil | English</p>
                        <p className="flex flex-row-reverse">Learn in your comfortable language</p>
                    </div>
                    <hr className="ml-1 my-2"/>
                    <div className="text-right flex gap-y-2 flex-col pl-5">
                        <p className="flex text-[15px] flex-row-reverse font-semibold">Great Reviews</p>
                        <p className=" flex flex-row-reverse text-blue-400 text-[24px] font-bold">4.5/5.0</p>
                        <p className="flex flex-row-reverse">This Course content is rated by students</p>
                    </div>
                    <hr className="ml-6 my-2"/>
                    <div className="pl-28 text-right flex gap-y-2 flex-col justify-end">
                        <p className="flex text-[15px] flex-row-reverse font-semibold">Buy the course</p>
                        <p className=" flex flex-row-reverse text-blue-400 text-[24px] font-bold">₹499</p>
                        <p className="flex flex-row-reverse">The Best price for the the best education</p>
                        <p className="flex flex-row-reverse ml-20 pr-2 rounded-xl bg-blue-400 text-white font-bold text-[20px] ">Buy Now</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceSideTag;