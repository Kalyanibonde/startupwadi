import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Offerings from "./pages/Offerings";
import GetInvolved from "./pages/GetInvolved";
import AboutUs from "./pages/AboutUs";
import Merchandise from "./pages/Merchandise";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import LoginPage from "./pages/Login"; // Replace with actual login page component
import SignInPage from "./pages/Signin";
import ForgotPassword from "./pages/ForgotPassword";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Offerings" element={<Offerings />} />
        <Route path="/get-involved" element={<GetInvolved />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/Merchandise" element={<Merchandise />} />
        <Route path="/Login" element={<LoginPage />} />
          <Route path="/Signin" element={<SignInPage />} />
          <Route path="/ForgotPassword" element={<ForgotPassword />} />

        <Route path="/NavBar" element={<NavBar />} />
        <Route path="/Footer" element={<Footer />} />
      </Routes>
    </Router>
  );
}

export default App;

