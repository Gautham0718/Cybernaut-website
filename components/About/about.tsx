import { LogoutIcon } from "@heroicons/react/outline";
import React from "react";
import HomeLogo from "../../public/HomeLogo.jpeg";

const about = () => {
    return(
        <div className="m-8">
        <div className=" bg-gray-300 h-20 justify-center content-center align-middle items-center">
            <div className=" text-2xl align-middle justify-center items-center">
                "Education is the most powerful weapon which you can use to change the world" - <span className="font-semibold">Nelson Mandela</span>
            </div>
        </div>
        <div className="flex flex-row pt-10">
            <div className="flex items-center">
                <img className=" relative flex float-left  justify-center object-center align-middle" src = {HomeLogo.src}/>
            </div>
            <div className="flex flex-col w-fit pl-40">
            <h3 className="font-bold justify-left font-2xl">
                 So, why not provide that weapon to everyone?
            </h3>
            <div className=" pt-6">
                <div className=" pt-6 justify-between">This is the basic idea behind Cybernaut. Cybernaut is a registered startup company under MSME that has its vision of providing equal educational opportunities to everyone. </div>
                <div className=" pt-6 justify-between">Knowledge is something that can be shared with someone, unlike money without any hesitation. Money is something fundamental for a living. Even though money is important, knowledge is the one that is the basic source for money. And so, education is very important. As an Ed-tech platform, we have our motto as 'Share your knowledge to expand others' knowledge.'</div>
                <div className=" pt-6 justify-between">Cybernaut is a group of like-minded people who work towards the betterment of educational opportunities for everyone. In that manner, we conduct workshops and internships to impart knowledge to young minds.</div>
            </div>
            </div>
        </div>
        </div>
    )
};

export default about;
