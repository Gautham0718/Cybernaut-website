import React from "react";
import ClubBg from "../../public/ClubBg.png";

const Club = () => {
    return (
        <div className="m-10 flex">
            <div className="flex flex-row">
                <img src = {ClubBg.src} />
            </div>
            <div  className=" flex bg-gray-100 shadow-gray-500 shadow-xl w-[50%] h-[70%] mx-auto">
                Helloworld
            </div>
        </div>
    )
}

export default Club;