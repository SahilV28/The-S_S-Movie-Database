import React from "react";
import { Link } from "react-router-dom";
import instagram from "../../public/Instagram.png.webp";
import gmail from "../../public/gmail.png";
import linkedin from "../../public/linkedin.png";

const Contact = () => {
  return (
    <div className="bg-black w-full h-full">
      <h1 className="text-[#6556CD] font-semibold text-center text-2xl mt-10 font-">
        Sahil Vishwakarma
      </h1>
      <div className="bg-black flex gap-6 text-white text-3xl w-[100%] text-center absolute top-[45%] items-center justify-between px-[30%]">
        <Link className="hover:scale-125" to="https://www.github.com/SahilV28">
          <div className="elem">
            <i className="ri-github-fill"></i>
          </div>
        </Link>
        <Link
          className="hover:scale-125"
          to="https://www.linkedin.com/in/sahil-vishwakarma-3a85b9256"
        >
          <div className="elem">
            <img src={linkedin} alt="" className="w-[5vh] h-[5vh]" />
          </div>
        </Link>
        <Link
          className="hover:scale-125"
          to="https://mail.google.com/mail/u/0/#inbox?compose=new"
        >
          <div className="elem">
            <img src={gmail} alt="" className="w-[5vh] h-[5vh]" />
          </div>
        </Link>
        <Link
          className="hover:scale-110"
          to="https://www.instagram.com/sahil_vishwakarma_28/"
        >
          <div className="elem">
            <img src={instagram} alt="" className="w-[5vh] h-[5vh]" />
          </div>
        </Link>
      </div>
      <h1 className="text-zinc-600 bottom-[10%] text-center">
        Created with ❤️ by me.
      </h1>
    </div>
  );
};

export default Contact;
