import React from 'react'
import { MdOutlineMailOutline } from "react-icons/md";

const RightSide = () => {
    return (
      <div className="w-full h-full flex flex-col items-center justify-end gap-6 text-textLight">
        {/* email Container */}
        <div className="flex flex-col items-center gap-2">
          {/* email text */}
          <p className="text-sm rotate-90 w-72 tracking-wide text-textGreen">
            joellorenzogarcia0@
          </p>
          {/* email Icon */}
          <a
            href="mailto:joellorenzogarcia0@gmail.com"
            className="w-10 h-10 text-lg bg-hoverColor rounded-full flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300"
          >
            <MdOutlineMailOutline />
          </a>
        </div>
  
        {/* line after icon */}
        <span className="w-[2px] h-32 bg-textDark inline-flex"></span>
      </div>
    );
  };

export default RightSide