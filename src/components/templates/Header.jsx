import React from "react";
import { Link } from "react-router-dom";

const Header = ({ data }) => {
  return (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.5),rgba(0,0,0,.7)), url(https://image.tmdb.org/t/p/original/${
          data.backdrop_path || data.profile_path
        })`,
        backgroundPosition: "top 10%",
        backgroundSize: "cover",
        backgroundRepeat:"no-repeat"
      }}
      className="w-full h-[70%] flex flex-col justify-end items-start p-[3%] text-white rounded-lg ml-3 overflow-hidden"
    >
      <h1 className="w-[70%] text-5xl font-black ">
        {data.name || data.original_name || data.title || data.original_title}
      </h1>
      <p className="w-[70%] mt-2">
        {data.overview.slice(0, 200)}...
        <Link to={`/${data.media_type}/details/${data.id}`} className="text-sky-400"> more</Link>
      </p>
      <p className="text-white flex gap-x-1 mt-2 text-sm">
        <i className="text-yellow-500 ri-megaphone-fill"></i>{" "}
        {data.release_date || data.first_air_date}
        <i className="ml-10 text-yellow-500 ri-album-fill"></i>{" "}
        {data.media_type.toUpperCase()}
      </p>
      <Link className="bg-[#6556CD] hover:bg-[#6300CD] py-2 px-4 rounded-lg mt-4">
        <i className="mr-2 ri-play-circle-fill"></i>
        Watch Trailer
      </Link>
    </div>
  );
};

export default Header;
