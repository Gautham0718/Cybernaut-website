import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.css";
import { CarouselProps } from "../../data/CarouselProps";

const Inaugration = () =>{
    const [selectedSlide, setSelectedSlide] = React.useState<number>(0);
    return(
        <div className="h-[70%] m-8">
            <Carousel
          onChange={(e) => {
            setSelectedSlide(e);
          }}
          {...(CarouselProps as any)}
        >
            <div className="flex bg-gray-300 h-[70%] w-full">
                <h1 className="text-[50px]">Banner 1 </h1>
            </div>
            <div className="flex bg-gray-300 h-[70%] w-full">
                <h1 className="text-[50px]">Banner 2 </h1>
            </div>

        </Carousel>
        </div>
    )
}

export default Inaugration;