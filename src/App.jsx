import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Offerings from "./components/Offerings";
import GetInvolved from "./components/GetInvolved";
import AboutUs from "./components/AboutUs";
import Merchandise from "./components/Merchandise";

function App() {
  return (
    <Router>  {/* ✅ Wrap everything inside BrowserRouter */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Offerings" element={<Offerings />} />
        <Route path="/GetInvolved" element={<GetInvolved />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Merchandise" element={<Merchandise />} />
      </Routes>
    </Router>
  );
}

export default App;
