import React from "react";
import IMG from "../public/CEO.png";
import ViewCourseButton from "./ViewCourseButton";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.css";
import { CarouselProps } from "../data/CarouselProps";

const Founders = () => {
  const [selectedSlide, setSelectedSlide] = React.useState<number>(0);
  return (
    <div
      id="community"
      className="w-full md:w-[90%] mt-12 flex flex-col md:flex-row flex-wrap items-center justify-center mb-16"
    >
      <div className="flex flex-col items-center justify-center gap-y-4 w-[90%] md:w-[40%]">
        
      <Carousel
        onChange={(e) => {
          setSelectedSlide(e);
        }}
        {...(CarouselProps as any)}
      >
        <div className="lg:h-[70%]">
          <img
            className="h-[50%] flex flex-col align-top"
            src={IMG.src}
          />
          
          <p className="flex flex-col h-[20%] align-bottom">HelloWorld</p>

        </div>
        <div className="lg:h-[70%]">
          <img
            className="h-full"
            src={IMG.src}
          />
        </div>
        <div className="lg:h-[70%]">
          <img
            className="h-full"
            src={IMG.src}
          />
        </div>
      </Carousel>
      <div className="p-10 inline-block items-center justify-center bg-white">
        <div
          className={
            selectedSlide === 0
              ? "bg-gray-200 flex  w-full items-center justify-center font-semibold text-xl"
              : "content-none flex-none"
          }
        >JayaSurya</div>
        <div
          className={
            selectedSlide === 1
              ?  "bg-gray-200 flex w-full items-center justify-center font-semibold text-xl"
              : "text-transparent"
          }
        >Manish Kumar</div>
        <div
          className={
            selectedSlide === 2
            ?  "bg-gray-200 flex items-center justify-center font-semibold text-xl"
            : "content-none flex-none"
          }
        >Keerthana</div>
      </div>
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
