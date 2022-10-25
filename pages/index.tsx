import React from "react";
import Router from "next/router";
import Logo from "../public/HomeLogo.jpeg";

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
    <div className="px-[40%] py-[10%]">
      <div id = "logo" className="text-center justify-center">
        <img src = {Logo.src}/>  
        <button onClick = {zoom} className=" font-semibold text-[20px] text-blue-500 hover:bg-blue-300 hover:rounded-xl hover:text-black ease-linear duration-500 delay-200 p-2">  GO TO HOME   </button>
        </div>
    </div>
  )
}

export default Start;