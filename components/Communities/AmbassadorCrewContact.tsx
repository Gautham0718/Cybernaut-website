import React, { useState } from "react";
import { MessageDataType } from "../../types";
import Contacts from "../Contact";
import Team from "../About/team";

const ACCF = () =>{

    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [MessageData, setMessageData] = useState<MessageDataType>({
      email: "",
      name: "",
      phone: "",
      message: "",
    });

    const SubmitHandler = async (data: MessageDataType) => {
        setMessageData(data);
        await fetch(process.env.NEXT_PUBLIC_CLIENT_URL + "api/user", {
          method: "POST",
          body: JSON.stringify(data),
        });
        setMessageData({
          email: "",
          name: "",
          phone: "",
          message: "",
        });
      };
    return(
        <div className="m-10 flex flex-col gap-y-10">
            <div className="bg-gray-300 text-center font-bold text-[40px]">Our Ambassador</div>
            <div>
                <h1 className="font-bold text-[32px] text-center justify-center">Our Official Crew</h1>
                <Team/>
            </div>
            <div>
                <Contacts submitDataFN={SubmitHandler}/>
            </div>
        </div>
    )
}

export default ACCF;