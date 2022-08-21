import React, { useState } from "react";
import { aboutPageChildren } from "../constants/AboutData";
import StatusBar from "./StatusBar";
import HomeLogo from "../public/HomeLogo.jpeg";

const AboutComponent = () => {
  const [currTopic, setCurrTopic] = useState(0);
  return (
    <div
      id="about"
      className="mt-16 w-full h-fit lg:h-[600px] md:w-4/5 flex mb-10"
    >
      <div className=" hidden lg:flex lg:w-1/3 h-full  p-16"> 
        <img className="flex float-left absolute justify-center object-center align-middle" src = {HomeLogo.src}/>
      </div>
      <div className="w-full sm:w-full lg:w-2/3 h-full flex items-center justify-start p-6 py-2">
        <StatusBar
          onPress={(val: number) => {
            setCurrTopic(val);
          }}
          current={currTopic}
        />
        <div className="w-full h-full flex items-center justify-center">
          {aboutPageChildren[currTopic]}
        </div>
      </div>
    </div>
  );
};

export default AboutComponent;
