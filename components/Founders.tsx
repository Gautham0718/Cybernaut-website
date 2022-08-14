import React from "react";
import IMG from "../public/CEO.png";
import ViewCourseButton from "./ViewCourseButton";

const Founders = () => {
  return (
    <div
      id="community"
      className="w-full md:w-[90%] mt-12 flex flex-col md:flex-row flex-wrap items-center justify-center mb-16"
    >
      <div className="flex flex-col items-center justify-center gap-y-4 w-[90%] md:w-[40%]">
        <img className="" src={IMG.src} />
        <div className="bg-gray-200 p-4 flex flex-col w-full items-center justify-between">
          <p className="font-semibold text-xl">Jayasurya. G</p>
          <p>Chief Executive Officer</p>
        </div>
      </div>
      <div className=" h-full px-4 pb-4 w-full md:w-[60%]  mt-14 md:mt-0">
        <div className="">
          <div className="flex items-center gap-x-4">
            <p className="text-2xl font-bold">The Founders</p>
            <div className="w-14 h-1 bg-gradient-to-r from-cyan-400 via-cyan-500 to-blue-400"></div>
          </div>
          <p className="p-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit tempore, ullam illum nam maxime porro sapiente
            assumenda harum tempora eos repellendus vitae provident a molestiae
            nisi enim, quam pariatur tenetur! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Reprehenderit tempore, ullam illum nam
            maxime porro sapiente assumenda harum tempora eos repellendus vitae
            provident a molestiae nisi enim, quam pariatur tenetur!
          </p>
        </div>
        <div className="mt-2">
          <div className="flex items-center gap-x-4">
            <p className="text-2xl font-bold">Our Environment</p>
            <div className="w-14 h-1 bg-gradient-to-r from-cyan-400 via-cyan-500 to-blue-400"></div>
          </div>
          <p className="p-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit tempore, ullam illum nam maxime porro sapiente
            assumenda harum tempora eos repellendus vitae provident a molestiae
            <br />
            <br />
            nisi enim, quam pariatur tenetur! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Reprehenderit tempore, ullam illum nam
            maxime porro sapiente assumenda harum tempora eos repellendus vitae
            provident a molestiae nisi enim, quam pariatur tenetur!
          </p>
        </div>
        <div className="mx-6">
          <ViewCourseButton text="Learn More" />
        </div>
      </div>
    </div>
  );
};

export default Founders;
