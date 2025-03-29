import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Offerings from "./pages/Offerings";
import GetInvolved from "./pages/GetInvolved";
import AboutUs from "./pages/AboutUs";
import Merchandise from "./pages/Merchandise";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Offerings" element={<Offerings />} />
        <Route path="/get-involved" element={<GetInvolved />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/Merchandise" element={<Merchandise />} />

        <Route path="/Navbar" element={<Navbar />} />
        <Route path="/Footer" element={<Footer />} />
      </Routes>
    </Router>
  );
}

export default App;

