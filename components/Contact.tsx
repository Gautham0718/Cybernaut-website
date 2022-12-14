import { CameraIcon } from "@heroicons/react/outline";
import React from "react";
import { MessageDataType } from "../types";
import ViewCourseButton from "./ViewCourseButton";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.css";
import { CarouselProps } from "../data/CarouselProps";


interface Props {
  submitDataFN: (data: MessageDataType) => void;
}

const Contacts: React.FC<Props> = ({ submitDataFN }) => {
  const [MessageData, setMessageData] = React.useState<MessageDataType>({
    email: "",
    name: "",
    phone: "",
    message: "",
  });
    const [selectedSlide, setSelectedSlide] = React.useState<number>(0);
  return (
    <div className=" flex flex-col items-center gap-y-4 h-screen w-screen ">
    <Carousel 
      onChange={(e) => {
        setSelectedSlide(e);
      }}
      {...(CarouselProps as any)}
    >
      <div className="h-full m-10 ">
        <h1 className="justify-center text-6xl font-bold items-center mt-32">LET'S GET IN TOUCH</h1>
        <div className="ml-[40%]">
                    <div className=" h-10 w-48 border-blue-500 border-2 translate-x-8 translate-y-12 bg-none bg-transparent "></div>
                    <div className=" absolute h-10 w-48 text-[24px] font-semibold bg-gradient-to-br from-blue-600 to to-blue-400 text-white text-center justify-center">Join Us</div>
        </div>
      </div>
      <div className="h-full m-6">
      <div className="flex flex-col items-center justify-center ">
          
          <div className="bg-gray-200  flex flex-col w-full items-center justify-between">
          <p className="text-4xl font-bold justify-start">SAY HELLO TO OUR TEAM</p>
      <div className="flex flex-col md:flex-row items-center justify-center">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            submitDataFN(MessageData);
            setMessageData({
              email: "",
              name: "",
              phone: "",
              message: "",
            });
          }}
          className="w-full md:w-2/3 h-full flex flex-col items-center justify-center md:items-start gap-y-10 mt-6"
        >
          <input
            onChange={(e) => {
              setMessageData({ ...MessageData, name: e.target.value });
            }}
            className="w-[80%] bg-gray-100 h-10 p-4"
            placeholder="Name*"
            value={MessageData.name}
            required
            type={"text"}
          />
          <input
            onChange={(e) => {
              setMessageData({ ...MessageData, phone: e.target.value });
            }}
            className="w-[80%] bg-gray-100 h-10 p-4"
            placeholder="Phone*"
            value={MessageData.phone}
            required
            type={"number"}
          />
          <input
            onChange={(e) => {
              setMessageData({ ...MessageData, email: e.target.value });
            }}
            className="w-[80%] bg-gray-100 h-10 p-4"
            placeholder="E Mail*"
            value={MessageData.email}
            required
            type={"email"}
          />
          <input
            onChange={(e) => {
              setMessageData({ ...MessageData, message: e.target.value });
            }}
            className="w-[80%] bg-gray-100 h-20 p-4"
            placeholder="Message"
            value={MessageData.message}
            type={"text"}
          />
          <button
            className="font-bold"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <ViewCourseButton text="Send" />
          </button>
        </form>
        <div className="w-full md:w-1/3 h-full flex flex-col items-center md:items-start gap-y-10 mt-6 md:mt-0">
          <div className="flex flex-col gap-2 items-center text-center md:text-left md:items-start">
            <p className="text-xl font-medium">CYBERNAUT</p>
            <p className="text-sm w-full">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione
              natus, quibusdam voluptate earum, officia similique deserunt quae
              veniam voluptatem non, molestiae nulla
            </p>
            <p className="text-sm w-full">+91 943258342 / +91 943234853</p>
            <p className="text-sm w-full">admin@cybernautofficial.com</p>
          </div>
          <div className="flex flex-col gap-2 items-center text-center md:text-left md:items-start">
            <p className="text-xl font-medium">CYBERNAUT</p>
            <p className="text-sm w-full">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione
              natus, quibusdam voluptate earum, officia similique deserunt quae
              veniam voluptatem non, molestiae nulla
            </p>
            <p className="text-sm w-full">+91 943258342 / +91 943234853</p>
            <p className="text-sm w-full">admin@cybernautofficial.com</p>
          </div>
          <div className="flex gap-x-4">
            <CameraIcon className="w-6 h-6 bg-gradient-to-r from-cyan-400 via-cyan-500 to-blue-400" />
            <CameraIcon className="w-6 h-6 bg-gradient-to-r from-cyan-400 via-cyan-500 to-blue-400" />
            <CameraIcon className="w-6 h-6 bg-gradient-to-r from-cyan-400 via-cyan-500 to-blue-400" />
            <CameraIcon className="w-6 h-6 bg-gradient-to-r from-cyan-400 via-cyan-500 to-blue-400" />
          </div>
        </div>
      </div>
          </div>
        </div>
      </div>
    </Carousel>
    <div className="w-[20%] h-6 flex items-center justify-between bg-white mt-4 mb-10">
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
          
        </div>
    
  </div>
  );
};

export default Contacts;
