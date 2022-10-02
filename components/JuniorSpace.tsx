import React from "react";
import IMG from "../public/JuniorSpace.png";

const JuniorSpace = () => {
  return (
    <div
      id="career"
      className=" flex w-full h-full flex-col items-center justify-center mt-14"
    >
      <div className="w-full lg:w-[90%] h-full flex items-center justify-evenly">
        <div className="flex flex-col w-[90%] md:w-[50%] gap-y-4">
          <div className="flex items-center justify-start gap-x-4">
            <p className="text-black font-bold text-2xl">Junior Space</p>
            <div className="w-16 h-1 bg-gradient-to-r from-orange-300 via-orange-500 to-red-600"></div>
          </div>
          <p className="text-md">
            ChildHood is the dreaming phase for everyone. Some dreams come true
            and some don't. Encouraging the child not only to dream but to help
            him to work towards it is necessary.
          </p>
          <div className="bg-red-400 flex items-center justify-center sm:py-2 py-7 mt-2">
            <p className="font-bold text-white  text-md sm:text-2xl text-center">
              That is where Junior Space comes into play
            </p>
          </div>
        </div>
        <img className="hidden lg:flex" src={IMG.src} />
      </div>
      <div className="flex flex-row flex-wrap items-center justify-evenly w-[90%] gap-4 mt-14 mb-10">
        <div className="bg-red-400 flex flex-row items-center justify-center p-2 mt-2 gap-x-4 w-[45%]">
          <div className="h-14 w-16 bg-slate-100 rounded-full hidden lg:flex"></div>
          <div>
            <p className="font-bold text-white text-md">Excel At Academics</p>
            <p className="text-white text-md">
              The child can flourish in academics as Junior Space centralizes
              knowledge,
            </p>
          </div>
        </div>
        <div className="bg-red-400 flex flex-row items-center justify-center p-2 mt-2 gap-x-4 w-[45%]">
          <div className="h-14 w-16 bg-slate-100 rounded-full hidden lg:flex"></div>
          <div>
            <p className="font-bold text-white text-md">Excel At Academics</p>
            <p className="text-white text-md">
              The child can flourish in academics as Junior Space centralizes
              knowledge,
            </p>
          </div>
        </div>
        <div className="bg-red-400 flex flex-row items-center justify-center p-2 mt-2 gap-x-4 w-[45%]">
          <div className="h-14 w-16 bg-slate-100 rounded-full hidden lg:flex"></div>
          <div>
            <p className="font-bold text-white text-md">Excel At Academics</p>
            <p className="text-white text-md">
              The child can flourish in academics as Junior Space centralizes
              knowledge,
            </p>
          </div>
        </div>
        <div className="bg-red-400 flex flex-row items-center justify-center p-2 mt-2 gap-x-4 w-[45%]">
          <div className="h-14 w-16 bg-slate-100 rounded-full hidden lg:flex"></div>
          <div>
            <p className="font-bold text-white text-md">Excel At Academics</p>
            <p className="text-white text-md">
              The child can flourish in academics as Junior Space centralizes
              knowledge,
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JuniorSpace;
