import React from "react";
import Router from "next/router";

function delay(ms: number) {
  return new Promise( resolve => setTimeout(resolve, ms) );
}

async function zoom () {
  const z : HTMLElement =  document.getElementById('logo') as HTMLElement;
  let lvl = 1;
  for(let i = 0; i < 20; i++) {
    z.style.transform = `scale(${(lvl -= 0.05)})`;
    await delay(20);
  }
  Router.push("/Home");
}

const Start = () =>{
  return(
    <div id = "logo" className=" px-[5%] py-10 text-center justify-center">
        <div className=" bg-no-repeat bg-cover bg-center  bg-LogoVideo w-[screen-10%] h-[80vh]  ">
          
        </div>
        <button onClick = {zoom} className=" font-semibold text-[20px] text-blue-500 hover:bg-blue-300 hover:rounded-xl hover:text-black ease-linear duration-500 delay-200 p-2">  GO TO HOME   </button>
    </div>
  )
}

export default Start;