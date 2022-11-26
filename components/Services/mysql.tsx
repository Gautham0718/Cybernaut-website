import React from "react";
import SB from "../../public/ServiceBanner.png";
import ServiceSideTag from "./SideTag";
import SD from "./servicedetails";


const Mysql = () =>{
    return(
        <div className="m-10 flex flex-col gap-y-10">
        <ServiceSideTag/>
            <div className="flex">
                <img src = {SB.src}/>
            </div>
            <div className="flex flex-col gap-y-8 w-[85%]">
                <div className="flex flex-col">
                    <h1 className="font-bold text-[32px]">Mysql</h1>
                    <div className="flex flex-row text-gray-400 text-[15px]">
                         <p>By Team Cybernaut</p>
                        <div className="w-14 h-1 mt-2 ml-2 bg-gray-500"></div>
                     </div>
                </div>
                <div className="flex font-semibold text-[24px]">Description</div>
                <div className="flex text-gray-400 text-[15px] w-[90%]">
                The famous websites that we see such as Facebook, Twitter, Airbnb, Booking.com, Uber, GitHub, YouTube, etc. all use an open-source database. MySQL is the second-most-popular database used and has numerous features. So there is a high chance that your favorite application is supported by MySQL database. It is preferred by many as it is reliable, compatible, cost-effective, and easy to manage. To find out more about how it supports these applications and how you can do the same, learn MySQL.
                </div>
                <SD/>
            </div>
        </div>
    )
}

export default Mysql;