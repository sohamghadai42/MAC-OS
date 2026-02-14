import React from "react";
import { Rnd } from "react-rnd";
import "../../index.css";

const MacWindows = ({ children, windowName, setWindowState }) => {
  const handleClose = () => {
    if (!setWindowState || !windowName) return;
    setWindowState((state) => ({ ...state, [windowName]: false }));
  };

  return (
    <Rnd 
    default={{
      width: "50vw",
      height: "63vh",
      x: 300,
      y: 200
    }}
    >
      <div className="window bg-black h-full overflow-hidden">
        <div className="nav flex gap-3 items-center border-b border-gray-500">
          <div className="dot flex gap-1 p-2 bg-black">
            <div 
            onClick={handleClose}
            className="dots cursor-default bg-red-600 h-4 w-4 rounded-full"></div>
            <div className="dots bg-yellow-300 h-4 w-4 rounded-full"></div>
            <div className="dots bg-lime-500 h-4 w-4 rounded-full"></div>
          </div>
          <div className="title"><p className="text-white font-sans text-md">sohamghadai - zch</p></div>
        </div>
        <div className="main p-3 h-[92.5%] overflow-auto">
            {children}
        </div>
      </div>
    </Rnd>
  );
};

export default MacWindows;
