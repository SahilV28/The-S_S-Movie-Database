import axios from "../utils/Axios";
import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";
import Topnav from "./templates/Topnav";
import Dropdown from "./templates/Dropdown";
import Cards from "./templates/Cards";

const TvShows = () => {
  document.title = "S&SDB | Tv Shows";
  const navigate = useNavigate();
  const [category, setcategory] = useState("airing_today");
  const [tvShows, settvShows] = useState([]);
  const [page, setpage] = useState(1);
  const [hasMore, sethasMore] = useState(true);

  const getTvShows = async () => {
    try {
      const { data } = await axios.get(`tv/${category}?page=${page}`);

      if (data.results.length > 0) {
        settvShows((prev) => [...prev, ...data.results]);
        setpage(page + 1);
      } else {
        sethasMore(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const refreshHandler = () => {
    if (tvShows.length === 0) {
      getTvShows();
    } else {
      setpage(1);
      settvShows([]);
      getTvShows();
    }
  };

  useEffect(() => {
    refreshHandler();
  }, [category]);

  return tvShows.length > 0 ? (
    <div className="w-screen h-screen">
      <div className="w-full flex items-center justify-between px-5">
        <h1 className="text-2xl font-semibold text-[#6556CD]">
          <i
            onClick={() => navigate(-1)}
            className="ri-arrow-left-line mr-2 text-zinc-400 hover:text-[#6556CD]"
          ></i>
          Tv Shows <small className="text-zinc-500 text-sm ml-1">({category})</small>
        </h1>
        <div className="flex items-center w-[80%]">
          <Topnav />
          <Dropdown
            title="Category"
            options={["on_the_air", "popular", "top_rated", "airing_today"]}
            func={(e) => setcategory(e.target.value)}
          />
          <div className="w-[2%]"></div>
        </div>
      </div>

      <InfiniteScroll
        dataLength={tvShows.length}
        next={getTvShows}
        hasMore={hasMore}
        loader={<h1 className="text-white">loading... </h1>}
      >
        <Cards data={tvShows} title="tv" />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
};

export default TvShows;
