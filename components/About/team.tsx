import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.css";
import { CarouselProps } from "../../data/CarouselProps";
import TeamBg from "../../public/TeamBG.png";
import TeamBg1 from "../../public/TeamBG2.png";
import member1 from "../../public/TeamMember1.png";



const Team: React.FC = () =>{
    const [selectedSlide, setSelectedSlide] = React.useState<number>(0);
    return(
        <div className="m-8">
             <Carousel
          onChange={(e) => {
            setSelectedSlide(e);
          }}
          {...(CarouselProps as any)}
        >
            <div className="flex">
                <div className="flex flex-row">
                <img src = {TeamBg.src}/>
                </div>
                <div className="absolute flex flex-row gap-x-10">
                    <div className="flex flex-col">
                        <img src = {member1.src} />
                        <h2>NIKITHA</h2>
                        <div className="text-gray-400 ">Secretary</div>
                        <div className="w-16 h-1 bg-gradient-to-r from-blue-600 via-blue-400 to-blue-200"></div>
                    </div>
                    <div className="flex flex-col">
                        <img src = {member1.src} />
                        <h2>NIKITHA</h2>
                        <div className="text-gray-400 ">Secretary</div>
                        <div className="w-16 h-1 bg-gradient-to-r from-blue-600 via-blue-400 to-blue-200"></div>
                    </div>
                    <div className="flex flex-col">
                        <img src = {member1.src} />
                        <h2>NIKITHA</h2>
                        <div className="text-gray-400 ">Secretary</div>
                        <div className="w-16 h-1 bg-gradient-to-r from-blue-600 via-blue-400 to-blue-200"></div>
                    </div>
                    <div className="flex flex-col">
                        <img src = {member1.src} />
                        <h2>NIKITHA</h2>
                        <div className="text-gray-400 ">Secretary</div>
                        <div className="w-16 h-1 bg-gradient-to-r from-blue-600 via-blue-400 to-blue-200"></div>
                    </div>
                </div>
            </div>
            <div className="flex">
                <div className="flex flex-row">
                <img src = {TeamBg1.src}/>
                </div>
                <div className="absolute flex flex-row gap-x-10">
                    <div className="flex flex-col">
                        <img src = {member1.src} />
                        <h2>NIKITHA</h2>
                        <div className="text-gray-400 ">Secretary</div>
                        <div className="w-16 h-1 bg-gradient-to-r from-blue-600 via-blue-400 to-blue-200"></div>
                    </div>
                    <div className="flex flex-col">
                        <img src = {member1.src} />
                        <h2>NIKITHA</h2>
                        <div className="text-gray-400 ">Secretary</div>
                        <div className="w-16 h-1 bg-gradient-to-r from-blue-600 via-blue-400 to-blue-200"></div>
                    </div>
                    <div className="flex flex-col">
                        <img src = {member1.src} />
                        <h2>NIKITHA</h2>
                        <div className="text-gray-400 ">Secretary</div>
                        <div className="w-16 h-1 bg-gradient-to-r from-blue-600 via-blue-400 to-blue-200"></div>
                    </div>
                    <div className="flex flex-col">
                        <img src = {member1.src} />
                        <h2>NIKITHA</h2>
                        <div className="text-gray-400 ">Secretary</div>
                        <div className="w-16 h-1 bg-gradient-to-r from-blue-600 via-blue-400 to-blue-200"></div>
                    </div>
                </div>
            </div>

        </Carousel>
        </div>
    )
};

export default Team;