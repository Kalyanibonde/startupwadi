import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import Home from "./pages/Home";
import Offerings from "./pages/Offerings";
import GetInvolved from "./pages/GetInvolved";
import AboutUs from "./pages/AboutUs";
import Merchandise from "./pages/Merchandise";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import LoginPage from "./pages/Login";
import SignInPage from "./pages/Signin";
import ForgotPassword from "./pages/ForgotPassword";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in ms
      once: true, // Ensures animation occurs only once
    });
  }, []);

  return (
    <Router>
      <NavBar /> {/* Keep Navbar outside Routes so it's always visible */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Offerings" element={<Offerings />} />
        <Route path="/get-involved" element={<GetInvolved />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/Merchandise" element={<Merchandise />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/Signin" element={<SignInPage />} />
        <Route path="/ForgotPassword" element={<ForgotPassword />} />
      </Routes>
       {/* Keep Footer outside Routes so it's always visible */}
       <Footer/>
    </Router>
  );
}

export default App;
