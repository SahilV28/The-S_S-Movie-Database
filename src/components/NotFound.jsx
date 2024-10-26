import React from "react";
import Not_found from '/notfound.gif'

const NotFound = () => {
  return (
    <div className="w-screen h-screen flex justify-center bg-black items-center font-black">
      <img className="h-[70%] object-cover" src={Not_found} alt="" />
    </div>
  );
};

export default NotFound;
