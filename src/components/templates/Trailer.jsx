import React from "react";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import NotFound from "../NotFound";

const Trailer = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const category = pathname.includes("movie") ? "movie" : "tv";
  const ytVideo = useSelector((state) => state[category].info.videos);
  //   console.log(category);

  return (
    <div className="p-5 absolute bg-[rgba(0,0,0,.9)] top-0 left-0 z-10 w-screen h-screen flex items-center justify-center">
      <Link
        onClick={() => navigate(-1)}
        className="absolute ri-close-fill mr-2 text-zinc-400 hover:text-[#ffffff] text-3xl top-[5%] right-[2%]"
      ></Link>
      {ytVideo ? (
        <ReactPlayer
          height={500}
          width={1200}
          url={`https://www.youtube.com/watch?v=${ytVideo.key}`}
        />
      ) : (
        <NotFound />
      )}
    </div>
  );
};

export default Trailer;
