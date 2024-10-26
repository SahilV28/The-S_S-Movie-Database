import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Routing from "./utils/Routing";

const App = () => {
  return (
    <div className="bg-[#1F1E24] w-screen h-screen flex">
      <Routing/>
    </div>
  );
};

export default App;
