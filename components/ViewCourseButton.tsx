import { ArrowRightIcon } from "@heroicons/react/outline";
import React from "react";

interface Props {
  text?: string;
}

const ViewCourseButton: React.FC<Props> = ({ text }) => {
  return (
    <div
      className={`w-fit h-fit bg-gray-200 rounded-lg p-1 px-2 flex gap-x-2 cursor-pointer items-center justify-center`}
    >
      <p className={"text-black text-xs sm:text-sm"}>
        {text ? text : "View Courses"}
      </p>
      <ArrowRightIcon
        className={
          text !== undefined ? "w-6 sm:w-8 h-6 text-cyan-400" : "w-6 sm:w-8 h-6"
        }
      />
    </div>
  );
};

export default ViewCourseButton;
