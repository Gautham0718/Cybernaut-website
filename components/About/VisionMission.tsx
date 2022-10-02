import React from "react";
import { CheckCircleIcon , KeyIcon} from "@heroicons/react/outline";
import bg1 from "../../public/bg1.png";
import bg2 from "../../public/bg2.png";
import bg3 from "../../public/bg3.png";

function Vision()
{
  const data : HTMLElement = document.getElementById('VMcontent') as HTMLElement;
  data.innerHTML = "Vision data here";
  const pic : HTMLImageElement = document.getElementById('bgimg') as HTMLImageElement;
  pic.src = `${bg2.src}`;

}

function Mission()
{
  const data : HTMLElement = document.getElementById('VMcontent') as HTMLElement;
  data.innerHTML = "Mission data here";
  const pic : HTMLImageElement = document.getElementById('bgimg') as HTMLImageElement;
  pic.src = `${bg3.src}`;
}

const VisionMission = () => {
    return(
        <div className="m-8 flex" >
          <div>
            <img id = "bgimg" src={bg1.src} className= "h-[70%] w-full"  />
            </div>
            <div className=" absolute items-center content-center align-middle justify-center origin-center  object-center px-[30%]">
            <div className=" border-solid border-2 bg-gradient-to-r  from-blue-600 via-blue-400 to-blue-200  h-[500px] w-[500px] rounded-[100%] origin-top-left mt-20">
                <CheckCircleIcon onClick={Vision}  className="absolute shadow-blue-200 shadow-sm ease-linear duration-200 hover:bg-blue-400 hover:text-white cursor-pointer py-0 w-12 h-12 border border-solid border-blue-400 rounded-full bg-white text-blue-400 translate-y-60 -translate-x-5"/>
                <KeyIcon onClick={Mission} className="absolute shadow-blue-200  hover:bg-blue-400 hover:text-white cursor-pointer w-12 h-12 border border-solid border-blue-400 rounded-full bg-white text-blue-400 translate-x-[460px] translate-y-60"/>
              <div className="m-1 h-[490px] w-[490px] rounded-full bg-white ">
                <div className=" absolute m-12 origin-center shadow-2xl  shadow-gray-400  bg-gray-100 ease-linear duration-200 justify-center align-middle items-center border border-solid border-gray-100 w-96 h-96 rounded-full">
                  <p id = "VMcontent" className=" justify-center ease-linear duration-200 pt-[25%] align-middle items-center text-center text-2x1">Data Here</p>
                </div>
                </div>
                </div>
            </div>
        </div>
    )
};

export default VisionMission;