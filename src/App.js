import React from "react";
// import logo from './logo.svg';
import "./App.css";
import Landing from "./pages/landing";
import Authorized from "./pages/authorized";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/success" element={<Authorized />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
