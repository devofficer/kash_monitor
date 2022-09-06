import React from "react";
// import logo from './logo.svg';
import "./App.css";
import Landing from "./pages/landing";
import Authorized from "./pages/authorized";
import Dashboard from "./pages/dashboard";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/success" element={<Authorized />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
