  import { AcademicCapIcon, AtSymbolIcon, BellIcon, BookmarkIcon, BriefcaseIcon, LogoutIcon } from "@heroicons/react/outline";
  import React, {Component} from "react";
  import { Carousel } from "react-responsive-carousel";
  import "react-responsive-carousel/lib/styles/carousel.css";
  import { CarouselProps yfkuyhvjbnm} from "../data/CarouselProps";
  import Logo from "../public/Logo.jpeg";

  class newslide extends Component {
    state = {msg: "Tech courses"}
  }

  function figma(){
    const title_elem : HTMLElement = document.getElementById('tech-title-id') as HTMLElement;
    title_elem.innerHTML = "FIGMA";
    const content_elem : HTMLElement = document.getElementById('tech-content-id') as HTMLElement;
    content_elem.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Libero dis sagittis nibh lectus mauris. Eget diam convallis venenatis diam. Nunc aliquet faucibus in scelerisque";

  }

  function cpp(){
    const title_elem : HTMLElement = document.getElementById('tech-title-id') as HTMLElement;
    title_elem.innerHTML = "C++";
    const content_elem : HTMLElement = document.getElementById('tech-content-id') as HTMLElement;
    content_elem.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Libero dis sagittis nibh lectus mauris. Eget diam convallis venenatis diam. Nunc aliquet faucibus in scelerisque";

  }

  function python(){
    const title_elem : HTMLElement = document.getElementById('tech-title-id') as HTMLElement;
    title_elem.innerHTML = "PYTHON";
    const content_elem : HTMLElement = document.getElementById('tech-content-id') as HTMLElement;
    content_elem.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Libero dis sagittis nibh lectus mauris. Eget diam convallis venenatis diam. Nunc aliquet faucibus in scelerisque";

  }

  function mysql(){
    const title_elem : HTMLElement = document.getElementById('tech-title-id') as HTMLElement;
    title_elem.innerHTML = "MYSQL";
    const content_elem : HTMLElement = document.getElementById('tech-content-id') as HTMLElement;
    content_elem.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Libero dis sagittis nibh lectus mauris. Eget diam convallis venenatis diam. Nunc aliquet faucibus in scelerisque";

  }

  function java(){
    const title_elem : HTMLElement = document.getElementById('tech-title-id') as HTMLElement;
    title_elem.innerHTML = "JAVA";
    const content_elem : HTMLElement = document.getElementById('tech-content-id') as HTMLElement;
    content_elem.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Libero dis sagittis nibh lectus mauris. Eget diam convallis venenatis diam. Nunc aliquet faucibus in scelerisque";

  }

  function html(){
    const title_elem : HTMLElement = document.getElementById('tech-title-id') as HTMLElement;
    title_elem.innerHTML = "HTML";
    const content_elem : HTMLElement = document.getElementById('tech-content-id') as HTMLElement;
    content_elem.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Libero dis sagittis nibh lectus mauris. Eget diam convallis venenatis diam. Nunc aliquet faucibus in scelerisque";

  }

  function nt1(){
    const title_elem : HTMLElement = document.getElementById('non-tech-title-id') as HTMLElement;
    title_elem.innerHTML = "NT1";
    const content_elem : HTMLElement = document.getElementById('non-tech-content-id') as HTMLElement;
    content_elem.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Libero dis sagittis nibh lectus mauris. Eget diam convallis venenatis diam. Nunc aliquet faucibus in scelerisque";

  }

  function nt2(){
    const title_elem : HTMLElement = document.getElementById('non-tech-title-id') as HTMLElement;
    title_elem.innerHTML = "NT2";
    const content_elem : HTMLElement = document.getElementById('non-tech-content-id') as HTMLElement;
    content_elem.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Libero dis sagittis nibh lectus mauris. Eget diam convallis venenatis diam. Nunc aliquet faucibus in scelerisque";

  }

  function nt3(){
    const title_elem : HTMLElement = document.getElementById('non-tech-title-id') as HTMLElement;
    title_elem.innerHTML = "NT3";
    const content_elem : HTMLElement = document.getElementById('non-tech-content-id') as HTMLElement;
    content_elem.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Libero dis sagittis nibh lectus mauris. Eget diam convallis venenatis diam. Nunc aliquet faucibus in scelerisque";

  }

  function nt4(){
    const title_elem : HTMLElement = document.getElementById('non-tech-title-id') as HTMLElement;
    title_elem.innerHTML = "NT4";
    const content_elem : HTMLElement = document.getElementById('non-tech-content-id') as HTMLElement;
    content_elem.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Libero dis sagittis nibh lectus mauris. Eget diam convallis venenatis diam. Nunc aliquet faucibus in scelerisque";

  }

  function nt5(){
    const title_elem : HTMLElement = document.getElementById('non-tech-title-id') as HTMLElement;
    title_elem.innerHTML = "NT5";
    const content_elem : HTMLElement = document.getElementById('non-tech-content-id') as HTMLElement;
    content_elem.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Libero dis sagittis nibh lectus mauris. Eget diam convallis venenatis diam. Nunc aliquet faucibus in scelerisque";

  }

  function nt6(){
    const title_elem : HTMLElement = document.getElementById('non-tech-title-id') as HTMLElement;
    title_elem.innerHTML = "NT6";
    const content_elem : HTMLElement = document.getElementById('non-tech-content-id') as HTMLElement;
    content_elem.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Libero dis sagittis nibh lectus mauris. Eget diam convallis venenatis diam. Nunc aliquet faucibus in scelerisque";

  }

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
          <div className="h-full w-auto m-10">
            <img
              className="h-full"
              src={Logo.src}
            />
          </div>
          <div className="h-full bg-gray-200 absolute w-[95%] pr-10 m-10">
            <div className="flex flex-row align-middle items-center ml-20">

              
              <div className="absolute border-solid border border-gray-400  h-96 w-96 rounded-[500px] origin-top-left mt-20">
                <AcademicCapIcon onClick={figma} className="absolute shadow-blue-200 shadow-sm ease-linear duration-200 hover:bg-blue-400 hover:text-white cursor-pointer py-0 w-12 h-12 border border-solid border-gray-400 rounded-full bg-white text-blue-400 translate-y-20"/>
                <AtSymbolIcon onClick={cpp} className="absolute shadow-blue-200  hover:bg-blue-400 hover:text-white cursor-pointer w-12 h-12 border border-solid border-gray-400 rounded-full bg-white text-blue-400 translate-x-44 -translate-y-4"/>
                <BellIcon onClick={python} className="absolute shadow-blue-200  hover:bg-blue-400 hover:text-white cursor-pointer w-12 h-12 border border-solid border-gray-400 rounded-full bg-white text-blue-400 translate-x-[340px] translate-y-20"/>
                <BookmarkIcon onClick={mysql} className="w-12 h-12 absolute shadow-blue-200  hover:bg-blue-400 hover:text-white cursor-pointer border border-solid border-gray-400 rounded-full bg-white text-blue-400 translate-x-[340px] translate-y-64"/>
                <BriefcaseIcon onClick={java} className="absolute shadow-blue-200  hover:bg-blue-400 hover:text-white cursor-pointer w-12 h-12 border border-solid border-gray-400 rounded-full bg-white text-blue-400 translate-x-44 translate-y-[360px] "/>
                <LogoutIcon onClick={html} className="absolute shadow-blue-200  hover:bg-blue-400 hover:text-white cursor-pointer w-12 h-12 border border-solid border-gray-400 rounded-full bg-white text-blue-400 translate-y-64"/>
              <div className=" absolute m-16 origin-center ease-linear duration-200 justify-center align-middle items-center border border-solid border-white bg-white w-64 h-64 rounded-full">
              <p id = "tech-title-id" className=" justify-center ease-linear duration-200 pt-[25%] font-bold align-middle items-center text-2x1">CYBERNAUT</p>
                <p id = "tech-content-id" className=" justify-center ease-linear duration-200 pt-[25%] align-middle items-center text-2x1">WELCOME TO CYBERNAUT</p>
              </div>
                </div>
              <div className=" pl-[500px] w-full pr-20">
              <div className="text-justify gap-y-4 mt-12">
            <div className="flex items-center gap-x-4">
              <p className=" text-4xl font-bold">TECH COURSES</p>
              <div className="w-14 h-1 bg-gradient-to-r from-cyan-400 via-cyan-500 to-blue-400"></div>
            </div>
            <p className="py-1">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
            </p>
            <div className="flex flex-row py-4 gap-x-4">
              <p className="border w-28 h-9 text-center border-solid border-gray-400 rounded-2xl font-semibold ">30+ Hours</p>
              <p className="border w-48 h-9 text-center border-solid border-gray-400 rounded-2xl font-semibold ">Access to study materials</p>
            </div>
            <div className="py-1">
            <p className="border w-64 h-9 text-center border-solid border-gray-400 rounded-2xl font-semibold ">Basic to intermediate coaching</p>
            </div>
            <div className="py-1">
            <p className="border w-24 h-9 border-solid text-center border-gray-400 rounded-2xl font-semibold">Certificate</p>
            </div>
          </div>
              </div>
            </div>
          </div>
          <div className="h-full bg-gray-200  m-10">
          <div className=" flex flex-row align-middle items-center ml-10">
          <div className=" pl-10 w-[50%] pr-20">
              <div className="text-justify gap-y-4 mt-12">
            <div className="flex items-center gap-x-4">
              <p className=" text-4xl font-bold">NON TECH COURSES</p>
              <div className="w-14 h-1 bg-gradient-to-r from-cyan-400 via-cyan-500 to-blue-400"></div>
            </div>
            <p className="py-1">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
            </p>
            <div className="flex flex-row py-4 gap-x-4">
              <p className="border w-28 h-9 text-center border-solid border-gray-400 rounded-2xl font-semibold ">30+ Hours</p>
              <p className="border w-48 h-9 text-center border-solid border-gray-400 rounded-2xl font-semibold ">Access to study materials</p>
            </div>
            <div className="py-1">
            <p className="border w-64 h-9 text-center border-solid border-gray-400 rounded-2xl font-semibold ">Basic to intermediate coaching</p>
            </div>
            <div className="py-1">
            <p className="border w-24 h-9 border-solid text-center border-gray-400 rounded-2xl font-semibold">Certificate</p>
            </div>
          </div>
              </div>
                <div className="absolute ml-[50%] border-solid border border-gray-400  h-96 w-96 rounded-[500px] mt-20">
                <AcademicCapIcon onClick={nt1} className="absolute shadow-blue-200 shadow-sm ease-linear duration-200 hover:bg-blue-400 hover:text-white cursor-pointer py-0 w-12 h-12 border border-solid border-gray-400 rounded-full bg-white text-blue-400 translate-y-20"/>
                <AtSymbolIcon onClick={nt2} className="absolute shadow-blue-200  hover:bg-blue-400 hover:text-white cursor-pointer w-12 h-12 border border-solid border-gray-400 rounded-full bg-white text-blue-400 translate-x-44 -translate-y-4"/>
                <BellIcon onClick={nt3} className="absolute shadow-blue-200  hover:bg-blue-400 hover:text-white cursor-pointer w-12 h-12 border border-solid border-gray-400 rounded-full bg-white text-blue-400 translate-x-[340px] translate-y-20"/>
                <BookmarkIcon onClick={nt4} className="w-12 h-12 absolute shadow-blue-200  hover:bg-blue-400 hover:text-white cursor-pointer border border-solid border-gray-400 rounded-full bg-white text-blue-400 translate-x-[340px] translate-y-64"/>
                <BriefcaseIcon onClick={nt5} className="absolute shadow-blue-200  hover:bg-blue-400 hover:text-white cursor-pointer w-12 h-12 border border-solid border-gray-400 rounded-full bg-white text-blue-400 translate-x-44 translate-y-[360px] "/>
                <LogoutIcon onClick={nt6} className="absolute shadow-blue-200  hover:bg-blue-400 hover:text-white cursor-pointer w-12 h-12 border border-solid border-gray-400 rounded-full bg-white text-blue-400 translate-y-64"/>
              <div className=" absolute m-16 origin-center ease-linear duration-200 justify-center align-middle items-center border border-solid border-white bg-white w-64 h-64 rounded-full">
              <p id = "non-tech-title-id" className=" justify-center ease-linear duration-200 pt-[25%] align-middle items-center text-2x1 font-bold">CYBERNAUT</p>
                <p id = "non-tech-content-id" className=" justify-center ease-linear duration-200 pt-[25%] align-middle items-center text-2x1">WELCOME TO CYBERNAUT</p>
              </div>
                </div>
              </div>
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



