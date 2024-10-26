import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ayncloadtv, removetv } from "../store/actions/tvActions";
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { tvSlice } from "../store/reducers/tvSlice";
import Loading from "../components/Loading";
import HorizontalCards from "../components/templates/HorizontalCard";

const TvDetails = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();

  const { info } = useSelector((state) => state.tv);
  console.log(info);

  useEffect(() => {
    dispatch(ayncloadtv(id));
    return () => {
      dispatch(removetv());
    };
  }, [id]);

  return info ? (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.5),rgba(0,0,0,.7)), url(https://image.tmdb.org/t/p/original/${info.detail.backdrop_path})`,
        backgroundPosition: "top 10%",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="relative w-full h-[200vh] px-[4%] overflow-x-hidden"
    >
      {/* Part-1 Navigation */}
      <nav className="w-full h-[10vh] text-zinc-100 flex gap-6 items-center text-xl">
        <Link
          onClick={() => navigate(-1)}
          className="ri-arrow-left-line mr-2 text-zinc-400 hover:text-[#ffffff]"
        ></Link>
        <a target="_blank" href={info.detail.homepage}>
          <i className="hover:text-[#0f0404] ri-external-link-fill"></i>
        </a>
        <a
          target="_blank"
          href={`https://www.wikidata.org/wiki/${info.externalId.wikidata_id}`}
        >
          <i className="ri-earth-fill"></i>
        </a>
        <a
          target="_blank"
          href={`https://www.imdb.com/title/${info.externalId.imdb_id}`}
        >
          imdb
        </a>
      </nav>

      {/* Part-2 Poster and Details */}
      <div className="w-full flex relative">
        <img
          className="object-cover h-[60vh] shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)]"
          src={`https://image.tmdb.org/t/p/original/${
            info.detail.poster_path || info.detail.backdrop_path
          }`}
        />

        <div className="content ml-10 text-white">
          <h1 className="font-black text-5xl">
            {info.detail.name ||
              info.detail.original_name ||
              info.detail.title ||
              info.detail.original_title}

            <small className="text-xl font-bold text-zinc-300 ml-2">
              ({info.detail.first_air_date.split("-")[0]})
            </small>
          </h1>

          <div className="flex items-center gap-x-3 mt-3 mb-3">
            <span className="w-[8vh] h-[8vh] bg-yellow-600 rounded-full flex justify-center items-center text-lg font-semibold p-2 text-white">
              {(info.detail.vote_average * 10).toFixed()}{" "}
              <sup className="text-xs">%</sup>
            </span>
            <h1 className="font-semibold text-xl leading-4 w-[8%]">
              User Score
            </h1>
            <h1> {info.detail.first_air_date}</h1>
            <h1>{info.detail.genres.map((g) => g.name).join(",")}</h1>
            <h1>{info.detail.runtime}min</h1>
          </div>

          <h1 className="text-2xl font-semibold italic text-zinc-200">
            {info.detail.tagline}
          </h1>

          <h1 className="text-xl mt-3">Overview</h1>
          <p className="text-[13px]">{info.detail.overview}</p>
          <h1 className="text-[18px]  mt-3">Tv Translated</h1>
          <p className="text-[10px] mb-5">{info.translations.join(", ")}</p>

          <Link
            to={`${pathname}/trailer`}
            className="bg-[#6556CD] px-5 py-2 rounded-lg hover:bg-[#4c3eac] absolute left-[45%]"
          >
            <i className="mr-2 ri-play-circle-fill"></i>
            Watch Trailer
          </Link>
        </div>
      </div>

      {/* Part-3 Available on Platfoms */}
      <div className="w-[30%] flex flex-col gap-y-5 mt-5 mb-5">
        {info.watchProvider && info.watchProvider.flatrate && (
          <div className="flex gap-x-5 text-white items-center">
            <h1>Available on Platforms</h1>
            {info.watchProvider.flatrate.map((e, i) => (
              <img
                title={e.provider_name}
                key={i}
                className="w-[5vh] h-[5vh] rounded-md object-cover"
                src={`https://image.tmdb.org/t/p/original/${e.logo_path}`}
                alt=""
              />
            ))}
          </div>
        )}

        {info.watchProvider && info.watchProvider.rent && (
          <div className="flex gap-x-5 text-white items-center">
            <h1>Available on Rent</h1>
            {info.watchProvider.rent.map((e, i) => (
              <img
                title={e.provider_name}
                key={i}
                className="w-[5vh] h-[5vh] rounded-md object-cover "
                src={`https://image.tmdb.org/t/p/original/${e.logo_path}`}
                alt=""
              />
            ))}
          </div>
        )}

        {info.watchProvider && info.watchProvider.buy && (
          <div className="flex gap-5 text-white items-center">
            <h1>Availabe to Buy </h1>
            {info.watchProvider.buy.map((e, i) => (
              <img
                title={e.provider_name}
                key={i}
                className="w-[5vh] h-[5vh] rounded-md object-cover"
                src={`https://image.tmdb.org/t/p/original/${e.logo_path}`}
                alt=""
              />
            ))}
          </div>
        )}
      </div>

      {/* Part-4 All Seasons */}
      <hr className="border-none h-[1px] bg-zinc-500" />
      <h1 className="font-bold text-white text-2xl mt-5 mb-5">Seasons</h1>
      <div className="w-[100%] flex overflow-y-hidden mb-5 p-5">
        {info.detail.seasons.length > 0 ? (
          info.detail.seasons.map((s, i) => (
            <div className="w-[15vh] mr-[8%]">
              <img
                className="object-cover h-[40vh] shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] min-w-[12vw] rounded-md"
                src={`https://image.tmdb.org/t/p/original/${s.poster_path}`}
                alt=""
              />
              <h1 className="text-zinc-200 font-semibold text-l mt-2">
                {s.name}
              </h1>
            </div>
          ))
        ) : (
          <h1 className="font-black text-white">Nothing to show</h1>
        )}
      </div>

      {/* Part-5 recommendation and similarities */}
      <hr className="border-none h-[1px] bg-zinc-500" />
      <h1 className="font-bold text-white text-2xl mt-5 mb-5">
        Recommendations & Similar stuff
      </h1>
      <HorizontalCards
        data={
          info.recommendations.length > 0 ? info.recommendations : info.similar
        }
      />
      <Outlet />
    </div>
  ) : (
    <Loading />
  );
};

export default TvDetails;
