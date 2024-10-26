import axios from "../../utils/Axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import noimage from "/no-image.jpg";

const Topnav = () => {
  const [query, setquery] = useState("");

  const [queryData, setqueryData] = useState([]);

  const getData = async () => {
    try {
      const { data } = await axios.get(`search/multi?query=${query}`);
      // console.log(data);
      setqueryData(data.results);
    } catch (error) {
      console.log("Error ", error);
    }
  };

  useEffect(() => {
    getData();
  }, [query]);

  return (
    <div className="relative w-[80%] h-[10vh]  flex gap-2 justify-start items-center mx-[10%]">
      <i className="text-2xl text-zinc-200 ri-search-2-line"></i>
      <input
        onChange={(e) => setquery(e.target.value)}
        value={query}
        className="w-[50%] text-zinc-200 text-s p-3 border-none bg-transparent outline-none mx-10"
        type="text"
        placeholder="Search anything"
      />
      {query.length > 0 && (
        <i
          onClick={() => setquery("")}
          className="text-zinc-200 text-2xl ri-close-line"
        ></i>
      )}

      <div className="z-[10] absolute w-[55%] max-h-[50vh] top-[100%] left-[10%] bg-zinc-200 overflow-auto rounded">
        {queryData.map((s, i) => {
          return (
            <Link to={`${s.media_type}/details/${s.id}`}
              key={i}
              className="hover:text-black hover:bg-zinc-300 duration-300 font-semibold text-zinc-500 w-[100%] p-4 flex justify-start items-center border-b-2 border-zinc-100"
            >
              <img
                className="w-[5vh] h-[5vh] object-cover rounded mr-8 shadow-lg"
                src={
                  s.backdrop_path || s.profile_path
                    ? `https://image.tmdb.org/t/p/original/${
                        s.backdrop_path || s.profile_path
                      }`
                    : noimage
                }
                alt=""
              />
              <span>
                {s.name || s.original_name || s.title || s.original_title}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Topnav;
