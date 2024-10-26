import React from "react";
import { Link } from "react-router-dom";

const Cards = ({ data, title }) => {
  // console.log(title)
  return (
    <div className="flex flex-wrap w-full mt-2 px-[2%] bg-[#1D1C22]">
      {data.map((c, i) => (
        <Link to={`/${c.media_type || title}/details/${c.id}`} className="relative w-[30vh] mr-[3%] mb-[2%]" key={i}>
          <img
            className="object-cover h-[40vh] shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)]"
            src={`https://image.tmdb.org/t/p/original/${
              c.poster_path || c.backdrop_path || c.profile_path
            }`}
            alt=""
          />
          <h1 className="text-zinc-200 font-semibold text-l mt-2">
            {c.name || c.original_name || c.title || c.original_title}
          </h1>
          {c.vote_average && (
            <div className="absolute right-[0%] bottom-[25%] w-[8vh] h-[8vh] bg-green-500 rounded-full flex justify-center items-center text-lg font-semibold p-2 text-white">
              {(c.vote_average * 10).toFixed()} <sup className="text-xs">%</sup>
            </div>
          )}
        </Link>
      ))}
    </div>
  );
};

export default Cards;
