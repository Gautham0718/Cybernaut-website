import React from "react";

interface Props {
  current: number;
  onPress?: (val: number) => void;
}

const StatusBar: React.FC<Props> = ({ current, onPress }) => {
  return (
    <>
      <div className="w-6 h-[400px] lg:h-[70%] flex flex-col items-center justify-between bg-transparent mr-2 md:mr-6">
        <div
          onClick={() => {
            onPress && onPress(0);
          }}
          className={
            current === 0
              ? "w-4 h-8 cursor-pointer ease-linear duration-200 rounded-full border-2 border-cyan-400 bg-cyan-400"
              : "w-4 h-8 cursor-pointer ease-linear duration-200 rounded-full border-2 border-cyan-400"
          }
        ></div>
        <div className="flex w-1 h-[90%] bg-gradient-to-r from-cyan-400 via-cyan-500 to-blue-300"></div>
        <div
          onClick={() => {
            onPress && onPress(1);
          }}
          className={
            current === 1
              ? "w-4 h-8 cursor-pointer ease-linear duration-200 rounded-full border-2 border-blue-400 bg-blue-400"
              : "w-4 h-8 cursor-pointer ease-linear duration-200 rounded-full border-2 border-blue-400"
          }
        ></div>
        <div className="flex w-1 h-[90%] bg-gradient-to-r from-blue-300 to-blue-500"></div>
        <div
          onClick={() => {
            onPress && onPress(2);
          }}
          className={
            current === 2
              ? "w-4 h-8 cursor-pointer ease-linear duration-200 rounded-full border-2 border-blue-400 bg-blue-400"
              : "w-4 h-8 cursor-pointer ease-linear duration-200 rounded-full border-2 border-blue-400"
          }
        ></div>
      </div>
    </>
  );
};

export default StatusBar;
