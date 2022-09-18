import { LogoutIcon } from "@heroicons/react/outline";
import React from "react";
import HomeLogo from "../../public/HomeLogo.jpeg";

const about = () => {
    return(
        <div>
        <div className=" m-4 bg-gray-300">
            <blockquote>
                "Education is the most powerful weapon which you can use to change the world" - <span className="font-semibold">Nelson Mandela</span>
            </blockquote>
        </div>
        <div className="flex flex-row">
            <div>
                <img className="absolute flex float-left py-10 justify-center object-center align-middle" src = {HomeLogo.src}/>
            </div>
            <div className="flex items-center justify-center w-fit gap-x-4">
            <h4 className="font-bold justify-center">
                 So, why not provide that weapon to everyone?
            </h4>
            <div className="gap-y-4">
                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.</p>
                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.</p>
                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.</p>
            </div>
            </div>
        </div>
        </div>
    )
};

export default about;
