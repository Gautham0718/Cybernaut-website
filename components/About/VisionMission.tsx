import React from "react";
import { CheckCircleIcon , KeyIcon} from "@heroicons/react/outline";
import bg1 from "../../public/bg1.png";
import bg2 from "../../public/bg2.png";
import bg3 from "../../public/bg3.png";

function Vision()
{
  const title : HTMLElement = document.getElementById('VMTitle') as HTMLElement;
  title.innerHTML = "VISION";
  const data : HTMLElement = document.getElementById('VMcontent') as HTMLElement;
  data.innerHTML = " We aim to be the largest educational platform where the quality of education is improved so as to give a possibility of employment in the engineering sector. A fresher who joins is shaped in all domains be it technical, content writing, research, or designing. We believe that being guided at the right stage helps avoid uncertainty later, being the reason we provide the right career guidance to students and assist them in exploring all possible paths on the technical side. Along with technical, they are made well aware of skills required for their placements and future careers, with plenty of training.";
  const pic : HTMLImageElement = document.getElementById('bgimg') as HTMLImageElement;
  pic.src = `${bg2.src}`;

}

function Mission()
{
  const title : HTMLElement = document.getElementById('VMTitle') as HTMLElement;
  title.innerHTML = "MISSION";
  const data : HTMLElement = document.getElementById('VMcontent') as HTMLElement;
  data.innerHTML = "Giving the opportunity to learn and excel to the people who lack the ability and facility to get quality education. Mainly, our company focuses on government students to have a technical based learning. And, also training the youngsters for placements within their respective domains. We have done teaching and training for 2000+ students in technical domains and advanced courses. We have also done teaching and training for 500+ students in non-technical domains like communication, personal development, and soft skills. Along with these skills, you can build up your knowledge and experience too. We give an internship certificate at the end of three months after joining. You can add your experiences to your resume which will help you to impress the querier.";
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
                <CheckCircleIcon onClick={Vision}  className="absolute shadow-blue-200 shadow-sm ease-linear duration-200 hover:bg-blue-400 hover:text-white cursor-pointer py-0 w-20 h-20 border border-solid border-blue-400 rounded-full bg-white text-blue-400 translate-y-56 -translate-x-10"/>
                <KeyIcon onClick={Mission} className="absolute shadow-blue-200  hover:bg-blue-400 hover:text-white cursor-pointer w-20 h-20 border border-solid border-blue-400 rounded-full bg-white text-blue-400 translate-x-[450px] translate-y-56"/>
              <div className="m-1 h-[490px] w-[490px] rounded-full bg-white ">
                <div className=" absolute m-12 origin-center shadow-2xl  shadow-gray-400  bg-gray-100 ease-linear duration-200 justify-center align-middle items-center border border-solid border-gray-100 w-96 h-96 rounded-full">
                  <p id = "VMTitle" className="justify-center ease-linear duration-200 pt-[10%] align-middle items-center text-center text-[30px] underline font-bold">Title Here</p>
                  <p id = "VMcontent" className=" justify-center ease-linear duration-200 px-10 rounded-full align-middle items-center text-center text-[11px]">Data Here</p>
                </div>
                </div>
                </div>
            </div>
        </div>
    )
};

export default VisionMission;