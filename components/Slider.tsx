import React, { useEffect, useState } from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/outline";

// TODO ADD IMAGES AND GIVE IT AS CHILDREN TO THE SLIDE TAG
const SliderComponent = () => {
  const [dimensions, setDimensions] = useState<{
    height: number;
    width: number;
  }>({ height: 0, width: 0 });

  useEffect(() => {
    setDimensions({
      height: window.screen.height,
      width: window.screen.width,
    });
    if (window.screen.height < window.screen.width) {
      setDimensions({
        height: window.screen.width,
        width: window.screen.height,
      });
    }
  }, []);

  return (
    <CarouselProvider
      naturalSlideWidth={dimensions.width}
      naturalSlideHeight={dimensions.height / 1.9}
      totalSlides={3}
    >
      <div className="flex w-full items-center justify-between px-4 sticky top-[45%] z-20">
        <ButtonBack>
          <ArrowLeftIcon className="w-10 h-10 text-gray-500" />
        </ButtonBack>
        <ButtonNext>
          <ArrowRightIcon className="w-10 h-10 text-gray-500" />
        </ButtonNext>
      </div>
      <Slider>
        <Slide index={0}>
          <img
            className="object-contain"
            src="https://wallpapercave.com/wp/wp4291575.jpg"
          />
        </Slide>
        <Slide index={1}>
          <img src="https://coolwallpapers.me/picsup/2636454-landscape-4k-free-downloads-hd-wallpaper.jpg" />
        </Slide>
        <Slide index={2}>
          <img src="https://wallpaperaccess.com/full/959294.jpg" />
        </Slide>
      </Slider>
    </CarouselProvider>
  );
};

export default SliderComponent;
