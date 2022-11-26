import React from "react";
import cdsc from "../../public/CDSC.png";
import ViewCourseButton from "../ViewCourseButton";

const AboutCDSC = () => {
    return(
        <div className="m-8">
            <div className="flex flex-row pt-10">
            <div className="flex items-center">
                <img className="relative ml-10 flex justify-center object-center align-middle md:w-[800px]" src = {cdsc.src}/>
            </div>
            <div className="flex flex-col w-fit pl-20">
            <h2 className="font-bold justify-left text-[36px]">
                 About Us
            </h2>
            <div className=" pt-6 gap-y-1">
                <div className="justify-between mr-36">Cybernaut Developers Students Club is the place that connects developers. This is the community for those who are inquisitive when it comes to technology and developing it. </div>
                <div className="justify-between mr-36">Cybernaut Developers Club encourages the phrase “ Create leaders and not Employees”</div>
                <div className="justify-between mr-36">Our motive is to ensure all-round development not only concentrating on their hard skills. They get an opportunity to upgrade their skills and come up with solutions for their universities.</div>
                <div className="justify-between mr-36">The mission with which we go ahead is by taking smaller steps that will lead us to bigger success.</div>
                <div className="justify-between mr-36">The services provided include :
	Event management - they are the backbone and will handle all the events being conducted from supervising all the work for the event and overall ensuring the event goes smoothly.
	Activities - a number of activities are conducted for the enhancement of skills in the students.
	Skills - the club leaders will instigate various technical and non-technical events for skill development
</div>
            </div>
            <div className="mt-10 text-blue-500">
                <ViewCourseButton/>
            </div>    
            </div>
        </div>
        </div>
    )
}

export default AboutCDSC;