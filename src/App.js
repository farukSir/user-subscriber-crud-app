import React from "react";
import HomeLayout from "./components/HomeLayout";
import Add from "./components/Add";
import Edit from "./components/Edit";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomeLayout />} />
          <Route path="/create" element={<Add />} />
          <Route path="/edit" element={<Edit />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
