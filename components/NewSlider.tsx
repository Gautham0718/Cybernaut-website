import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { CarouselProps } from "../data/CarouselProps";

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
            src="../public/opening.mp4"
          />
        </div>
        <div className="lg:h-[70%]">
          <img
            className="h-full"
            src="https://www.cybernautofficial.com/static/media/cybernautPoster.f537893d.jpeg"
          />
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
