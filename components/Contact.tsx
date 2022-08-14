import { CameraIcon } from "@heroicons/react/outline";
import React from "react";
import { MessageDataType } from "../types";
import ViewCourseButton from "./ViewCourseButton";

interface Props {
  submitDataFN: (data: MessageDataType) => void;
}

const Contact: React.FC<Props> = ({ submitDataFN }) => {
  const [MessageData, setMessageData] = React.useState<MessageDataType>({
    email: "",
    name: "",
    phone: "",
    message: "",
  });
  return (
    <div className="flex flex-col items-center md:items-start justify-center w-full md:w-[90%] mb-10">
      <p className="text-2xl font-bold">SAY HELLO TO OUT TEAM</p>
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
  );
};

export default Contact;
