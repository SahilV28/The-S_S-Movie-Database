import React from "react";
import { Link } from "react-router-dom";

const HorizontalCard = ({ data}) => {
  // console.log(data)
    return (
     
      <div className="w-[100%] flex overflow-y-hidden mb-3 px-3">
        {data.length > 0 ? data.map((d, i) => (
          <Link to={`/${d.media_type}/details/${d.id}}`}
            key={i}
            className="min-w-[18%] h-[40vh] bg-zinc-900 mr-3 mb-5 rounded-lg overflow-hidden"
          >
            <img
              className="w-full  object-cover h-[55%]"
              src={`https://image.tmdb.org/t/p/original/${
                d.backdrop_path || d.profile_path || d.poster_path
              })`}
              alt=""
            />
            <div className="text-white p-2 h-[50%] overflow-y-auto">
              <h1 className="text-xl font-semibold">
                {d.name || d.original_name || d.title || d.original_title}
              </h1>
              <p className="text-[10px]">
                {d.overview.slice(0, 50)} ...
                <span className="text-zinc-500"> more</span>
              </p>
            </div>
          </Link>
        )) : <h1 className="font-black text-white">Nothing to show</h1>}
    </div>
  );
};

export default HorizontalCard;