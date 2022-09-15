import { CameraIcon } from "@heroicons/react/outline";
import React from "react";
import { MessageDataType } from "../types";
import ViewCourseButton from "./ViewCourseButton";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.css";
import { CarouselProps } from "../data/CarouselProps";
import temp from "../public/temp.jpeg";


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
    <div className="flex flex-col items-center gap-y-4 top-1 px-4">
    <Carousel 
      onChange={(e) => {
        setSelectedSlide(e);
      }}
      {...(CarouselProps as any)}
    >
      <div className="h-full m-6">
        <h1 className="justify-center text-6xl font-bold items-center mt-24">LET'S GET IN TOUCH</h1>
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
      <div className="h-full m-6">
        <div className="flex flex-row">
          <h4 className="text-6x1 flex-row">Instagram @cybernaut_official</h4>
          <div className="flex flex-row mt-3 w-[50%] align-middle h-1 bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-300"></div>
        </div>
        <div className="flex flex-row gap-x-3">
            <div className="absolute"><img src={temp.src}/></div>
            <div>hello</div>
            <div>hello</div>
            <div>hello</div>
        </div>
        <div className="flex flex-row ">
          <h4 className="text-6x1 flex-row">Instagram @cybernaut_official</h4>
          <div className="flex flex-row pl-3 mt-3 w-[50%] align-middle h-1 bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-300"></div>
        </div>
      </div>
      <div className="h-full m-6 ">
        hello2
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

export default Contacts;
