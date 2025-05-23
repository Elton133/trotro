import React from "react";
import "./index.css";

import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import MissionPage from "./components/mission";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/mission" element={<MissionPage />}></Route>
    </Routes>
  );
};

export default App;
