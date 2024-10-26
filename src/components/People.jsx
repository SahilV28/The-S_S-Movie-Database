import axios from "../utils/Axios";
import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";
import Topnav from "./templates/Topnav";
import Dropdown from "./templates/Dropdown";
import Cards from "./templates/Cards";

const People = () => {
  document.title = "S&SDB | Peoples";
  const navigate = useNavigate();
  const [category, setcategory] = useState("popular");
  const [people, setpeople] = useState([]);
  const [page, setpage] = useState(1);
  const [hasMore, sethasMore] = useState(true);
 
  const getPeople = async () => {
    try {
      const { data } = await axios.get(`person/popular?page=${page}`);
      // console.log(data)
      if (data.results.length > 0) {
        setpeople((prev) => [...prev, ...data.results]);
        setpage(page + 1);
      } else {
        sethasMore(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const refreshHandler = () => {
    if (people.length === 0) {
      getPeople();
    } else {
      setpage(1);
      setpeople([]);
      getPeople()
    }
  };

  useEffect(() => {
    refreshHandler();
  }, [category]);

  return people.length > 0 ? (
    <div className="w-screen h-screen">
      <div className="w-full flex items-center justify-between px-5">
        <h1 className="text-2xl font-semibold text-[#6556CD]">
          <i
            onClick={() => navigate(-1)}
            className="ri-arrow-left-line mr-2 text-zinc-400 hover:text-[#6556CD]"
          ></i>
          Peoples
        </h1>
        <div className="flex items-center w-[80%]">
          <Topnav />
          {/* <Dropdown
            title="Category"
            options={["on_the_air", "popular", "top_rated", "airing_today"]}
            func={(e) => setcategory(e.target.value)}
          /> */}
          {/* <div className="w-[2%]"></div> */}
        </div>
      </div>

      <InfiniteScroll
        dataLength={people.length}
        next={getPeople}
        hasMore={hasMore}
        loader={<h1 className="text-white">loading... </h1>}
      >
        <Cards data={people} title="person" />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
};

export default People;
