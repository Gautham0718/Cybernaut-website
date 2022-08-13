import React from "react";
import { useEffect } from "react";
import CourseCard from "./CourseCard";

const Courses = () => {
  const [screenHeight, setScreenHeight] = React.useState(0);
  const [screenWidth, setScreenWidth] = React.useState(0);
  useEffect(() => {
    setScreenHeight(window.screen.height);
    setScreenWidth(window.screen.width);
  }, []);
  return (
    <>
      <div
        id="services"
        className="mt-10 w-[90%] mb-6 flex flex-row items-center justify-start gap-x-4"
      >
        <p className="text-lg sm:text-2xl">What We Offer</p>
        <div className="w-14 h-1 bg-gradient-to-r from-cyan-400 via-cyan-500 to-blue-400"></div>
      </div>
      <div className="flex h-fit w-[90%] items-center justify-around flex-wrap px-6 pb-6 md:pb-10 md:px-10 gap-4">
        <CourseCard
          Flipped={screenWidth > screenHeight ? true : false}
          Image=""
          Title="Tech Pack"
          className="border-red-400 text-red-500 h-[350px] w-[250px] sm:h-[450px] sm:w-[300px] hover:border-4 ${Color} rounded-md flex items-center justify-center flex-col p-4 ease-in duration-200"
        />
        <CourseCard
          className="border-cyan-400 text-cyan-500 h-[350px] w-[250px] sm:h-[450px] sm:w-[300px] hover:border-4 ${Color} rounded-md flex items-center justify-center flex-col p-4 ease-in duration-200"
          Image=""
          Title="Soft Skill Pack"
        />
        <CourseCard
          className="border-yellow-200 text-yellow-300 h-[350px] w-[250px] sm:h-[450px] sm:w-[300px] hover:border-4 ${Color} rounded-md flex items-center justify-center flex-col p-4 ease-in duration-200"
          Flipped={screenWidth > screenHeight ? true : false}
          Image=""
          Title="Junior Pack"
        />
        <CourseCard
          className="border-green-300 text-green-400 h-[350px] w-[250px] sm:h-[450px] sm:w-[300px] hover:border-4 ${Color} rounded-md flex items-center justify-center flex-col p-4 ease-in duration-200"
          Image=""
          Title="Designing Pack"
        />
      </div>
    </>
  );
};

export default Courses;
