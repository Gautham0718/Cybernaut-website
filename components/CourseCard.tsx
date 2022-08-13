import React from "react";
import ViewCourseButton from "./ViewCourseButton";

interface Props {
  Flipped?: boolean;
  Title: string;
  Image: string;
  className: string;
}

const CourseCard: React.FC<Props> = ({ Flipped, Image, Title, className }) => {
  return (
    <div className={className}>
      {Flipped ? (
        <>
          <div className="w-full h-[80%] bg-gray-200"></div>
          <div className="flex flex-col w-full items-start mt-3">
            <p className="text-lg font-medium text-black">{Title}</p>
            <ViewCourseButton />
          </div>
        </>
      ) : (
        <>
          <div className="flex flex-col w-full items-start mb-3">
            <p className="text-lg font-medium text-black">{Title}</p>
            <ViewCourseButton />
          </div>
          <div className="w-full h-[80%] bg-gray-200"></div>
        </>
      )}
    </div>
  );
};

export default CourseCard;
