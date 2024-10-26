import React from "react";
import { Link } from "react-router-dom";

const Sidenav = () => {
  return (
    <div className="w-[20%] h-full border-r-2 border-zinc-400 p-5">
      <h1 className="text-2xl text-white font-bold">
        <i className="text-[#6556CD] ri-tv-fill mr-4"></i>
        <span>S<span className="text-sm">&</span>SDB</span>
      </h1>
      <nav className="flex flex-col gap-2 text-zinc-400 text-xl">
        <h1 className="text-white font-semibold text-xl mt-5 ">New Feeds</h1>
        <Link to="/trending" className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3">
          <i className="ri-fire-fill mr-1"></i>
          Trending
        </Link>
        <Link to="/popular" className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3">
          <i className="ri-bard-fill mr-2"></i>
          Popular
        </Link>
        <Link to="/movie" className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3">
          <i className="ri-movie-2-fill mr-2"></i>
          Movies
        </Link>
        <Link to="tv" className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3">
          <i className="ri-tv-2-fill mr-2"></i>
          Tv Shows
        </Link>
        <Link to="/person" className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3">
          <i className="ri-team-fill mr-2"></i>
          People
        </Link>
      </nav>
      
      <hr className="border-none h-[1px] bg-zinc-400 mt-2" />

      <nav className="flex flex-col gap-1 text-zinc-400 ">
        <h1 className="text-white text-[16px] mt-4 ">Website Information</h1>
        <Link to="/owner_details" className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-1 text-s">
          <i className="mr-2 ri-information-fill"></i>
          About Owner
        </Link>
        <Link to="/contact" className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-1">
          <i className="mr-2 ri-phone-fill"></i>
          Contact Us
        </Link>
      </nav>
    </div>
  );
};

export default Sidenav;
