import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import Trending from "../components/Trending";
import Popular from "../components/Popular";
import Movie from "../components/Movie";
import TvShows from "../components/TvShows";
import People from "../components/People";
import MovieDetails from "../components/MovieDetails";
import TvshowDetails from "../components/TvDetails";
import PersonDetails from "../components/PersonDetails";
import NotFound from "../components/NotFound";
import Owner from "../components/Owner";
import Contact from "../components/Contact";
import Trailer from "../components/templates/Trailer";

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/movie/details/:id" element={<MovieDetails />}>
          <Route path="/movie/details/:id/trailer" element={<Trailer />} />
        </Route>
        <Route path="/tv" element={<TvShows />} />
        <Route path="/tv/details/:id" element={<TvshowDetails />}>
          <Route path="/tv/details/:id/trailer" element={<Trailer />} />
        </Route>
        <Route path="/person" element={<People />} />
        <Route path="/person/details/:id" element={<PersonDetails />} />
        <Route path="/owner_details" element={<Owner />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default Routing;
