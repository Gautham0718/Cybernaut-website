import { AcademicCapIcon, AtSymbolIcon, BellIcon, BookmarkIcon, BriefcaseIcon, LogoutIcon } from "@heroicons/react/outline";
import React, {Component} from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.css";
import { CarouselProps } from "../data/CarouselProps";
import Logo from "../public/Logo.jpeg";
import {TechData } from "../constants/TechCourses";


var ind: number = 0;
class newslide extends Component {
  state = {msg: "Tech courses"}
}

function figma(){
  ind = 1;
}

function cpp(this: any){
  ind = 2;
}

function python(this: any){
  ind = 3;
}

function mysql(this: any){
  ind = 4;
}

function java(this: any){
  ind = 5;
}

function html(this: any){
  ind = 6;
}

val : String;
const NewSlider: React.FC = () => {
  const [selectedSlide, setSelectedSlide] = React.useState<number>(0);

  return (
    <div className="flex flex-col items-center gap-y-2">
      <Carousel
        onChange={(e) => {
          setSelectedSlide(e);
        }}
        {...(CarouselProps as any)}
      >
        <div className="lg:h-[70%]">
          <img
            className="h-full"
            src={Logo.src}
          />
        </div>
        <div className="lg:h-[70%] bg-gray-200  m-10">
          <div className="flex flex-row align-middle items-center ml-20">

            
            <div className="absolute border-solid border border-gray-400  h-96 w-96 rounded-[500px] origin-top-left mt-[10%]">
              <AcademicCapIcon href="#" onClick={figma} className="absolute ease-linear duration-200 hover:bg-blue-400 hover:text-white cursor-pointer py-0 w-12 h-12 border border-solid border-gray-400 rounded-full bg-white text-blue-400 translate-y-20"/>
              <AtSymbolIcon onClick={cpp} className="absolute  hover:bg-blue-400 hover:text-white cursor-pointer w-12 h-12 border border-solid border-gray-400 rounded-full bg-white text-blue-400 translate-x-44 -translate-y-4"/>
              <BellIcon onClick={python} className="absolute  hover:bg-blue-400 hover:text-white cursor-pointer w-12 h-12 border border-solid border-gray-400 rounded-full bg-white text-blue-400 translate-x-[340px] translate-y-20"/>
              <BookmarkIcon onClick={mysql} className="w-12 h-12 absolute  hover:bg-blue-400 hover:text-white cursor-pointer border border-solid border-gray-400 rounded-full bg-white text-blue-400 translate-x-[340px] translate-y-64"/>
              <BriefcaseIcon onClick={java} className="absolute  hover:bg-blue-400 hover:text-white cursor-pointer w-12 h-12 border border-solid border-gray-400 rounded-full bg-white text-blue-400 translate-x-44 translate-y-[360px] "/>
              <LogoutIcon onClick={html} className="absolute  hover:bg-blue-400 hover:text-white cursor-pointer w-12 h-12 border border-solid border-gray-400 rounded-full bg-white text-blue-400 translate-y-64"/>
            <div className=" absolute m-16 origin-center justify-center align-middle items-center border border-solid border-white bg-white w-64 h-64 rounded-full">
              <p className=" justify-center pt-[25%] align-middle items-center text-2x1">{TechData[ind]}</p>
            </div>
              </div>
            <div className=" pl-[500px] pr-20">
            <div className="text-justify gap-y-4 mt-12">
          <div className="flex items-center gap-x-4">
            <p className=" text-4xl font-bold">TECH COURSES</p>
            <div className="w-14 h-1 bg-gradient-to-r from-cyan-400 via-cyan-500 to-blue-400"></div>
          </div>
          <p className="py-1">
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
          </p>
          <div className="flex flex-row py-4 gap-x-4">
            <p className="border w-28 h-9 text-center border-solid border-gray-400 rounded-2xl font-semibold ">30+ Hours</p>
            <p className="border w-48 h-9 text-center border-solid border-gray-400 rounded-2xl font-semibold ">Access to study materials</p>
          </div>
          <div className="py-1">
          <p className="border w-64 h-9 text-center border-solid border-gray-400 rounded-2xl font-semibold ">Basic to intermediate coaching</p>
          </div>
          <div className="py-1">
          <p className="border w-24 h-9 border-solid text-center border-gray-400 rounded-2xl font-semibold">Certificate</p>
          </div>
        </div>
            </div>
          </div>
        </div>
        <div className="lg:h-[70%]">
          <img
            className="h-full"
            src="https://www.cybernautofficial.com/static/media/cybernautPoster.f537893d.jpeg"
          />
        </div>
      </Carousel>
      <div className="w-[20%] h-6 flex items-center justify-between bg-white">
        <div
          className={
            selectedSlide === 0
              ? "w-7 h-4 rounded-full border-2 border-cyan-400 bg-blue-500  ease-linear duration-500"
              : "w-7 h-4 rounded-full border-2 border-cyan-400"
          }
        ></div>
        <div className="flex w-[90%] h-1 bg-gradient-to-r from-cyan-400 via-cyan-500 to-blue-300"></div>
        <div
          className={
            selectedSlide === 1
              ? "w-7 h-4 rounded-full border-2 border-blue-300 bg-blue-500  ease-linear duration-500"
              : "w-7 h-4 rounded-full border-2 border-blue-300"
          }
        ></div>
        <div className="flex w-[90%] h-1 bg-gradient-to-r from-blue-300 to-blue-500"></div>
        <div
          className={
            selectedSlide === 2
              ? "w-7 h-4 rounded-full border-2 border-blue-500 bg-blue-500  ease-linear duration-500"
              : "w-7 h-4 rounded-full border-2 border-blue-500"
          }
        ></div>
      </div>
    </div>
  );
};

export default NewSlider;



