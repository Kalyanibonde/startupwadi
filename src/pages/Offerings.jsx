import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaUserCircle } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";

import logo from "../assets/logo.png";
// Placeholder for your logo

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Toggle menu on small screens
  const toggleMenu = () => setIsOpen(!isOpen);
  
  // Handle scroll event to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  

  
  // Pages for Routing
  const pages = [
    { name: "Home", path: "/" },
    { name: "What We Offer", path: "/offerings" },
    { name: "Get Involved", path: "/get-involved" },
    { name: "About Us", path: "/about-us" },
    { name: "Merchandise", path: "/merchandise" },
  ];
  
  return (
    <nav className={`fixed top-0 left-0 w-full ${scrolled ? 'bg-[#02162d] shadow-lg' : 'bg-[#02162d]/90 backdrop-blur-sm'} text-white py-3 px-6 flex justify-between items-center z-50 transition-all duration-300`}>
      {/* Logo */}
      <Link to="/" className="flex items-center space-x-3 group">
        <div className="relative overflow-hidden rounded-full">
          <img 
            src={logo} 
            className="h-12 w-12 object-cover transition-transform duration-500 transform group-hover:scale-110" 
            alt="StartupWadi Logo" 
          />
        </div>
        <div className="transition-opacity duration-300">
          <h1 className="text-xl font-bold text-green-400 leading-tight">
            Startup<span className="text-white">Wadi</span>
          </h1>
          <p className="text-sm text-gray-300 italic">Empowering Entrepreneurs</p>
        </div>
      </Link>
      
      {/* Desktop Navigation */}
      <div className="hidden md:flex space-x-8 text-lg">
        
        
        {/* Routed Pages */}
        {pages.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className="cursor-pointer relative group py-2 hover:text-green-400 transition"
          >
            {item.name}
            <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-green-300 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        ))}
      </div>
      
      {/* Mobile Menu Button */}
      <button 
        className="md:hidden text-2xl p-2 rounded-lg hover:bg-[#0e2d4e] transition-colors duration-300" 
        onClick={toggleMenu}
        aria-label={isOpen ? "Close Menu" : "Open Menu"}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>
      
      {/* Mobile Menu */}
      <div 
        className={`absolute top-full left-0 w-full bg-[#02162d]/95 backdrop-blur-sm py-4 flex flex-col items-center space-y-4 shadow-lg md:hidden transition-all duration-300 ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10 pointer-events-none'
        }`}
      >

        
        {/* Routed Pages */}
        {pages.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className="cursor-pointer text-lg w-full text-center py-2 hover:bg-[#0e2d4e] hover:text-[#2cbad1] transition"
            onClick={toggleMenu}
          >
            {item.name}
          </Link>
        ))}
        
        {/* Mobile Login Button */}
        <button className="bg-gradient-to-r from-green-600 to-green-500 text-white py-2 px-5 rounded-lg text-lg font-medium shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-[0px_8px_15px_rgba(44,186,209,0.4)] active:scale-95 w-3/4 flex items-center justify-center space-x-2">
          <FaUserCircle />
          <span>Login</span>
        </button>
      </div>
      
      {/* Login Button (Desktop) */}
      <button className="hidden md:flex items-center space-x-2 bg-gradient-to-r from-green-600 to-green-500 text-white py-2 px-5 rounded-lg text-lg font-medium shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-[0px_8px_15px_rgba(44,186,209,0.4)] active:scale-95">
        <FaUserCircle />
        <span>Login</span>
      </button>
    </nav>
  );
};

const offerings = [
  { 
    id: 1, 
    title: "Innovative Solutions", 
    description: "Cutting-edge technology to propel your business forward.", 
    icon: "💡"
  },
  { 
    id: 2, 
    title: "Market Strategy", 
    description: "Data-driven approaches to capture your target audience.", 
    icon: "📊"
  },
  { 
    id: 3, 
    title: "Scalable Infrastructure", 
    description: "Build systems that grow with your business needs.", 
    icon: "🚀"
  },
  { 
    id: 4, 
    title: "Funding Assistance", 
    description: "Connect with investors who believe in your vision.", 
    icon: "💰"
  }
];

const Offerings = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-[#02162d] text-teal-500 font-sans">
      {/* NavBar */}
      <NavBar />
      
      {/* Hero Section with GIF Background */}
      <div className="relative h-64 md:h-96 flex items-center justify-center overflow-hidden pt-16">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0" 
          style={{ 
            backgroundImage: `url("https://i.pinimg.com/originals/55/01/60/5501609ee45d514d1f2c4a63502045e2.gif")`, 
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"
          }}
        />
        <div className="absolute inset-0 bg-[#02162d] opacity-50 z-10"></div>
        <div className="relative z-20 text-center px-4">
          <motion.h1 
            className="text-green-400 text-4xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Elevate Your Startup
          </motion.h1>
          <motion.p 
            className="text-teal-500 text-xl md:text-2xl max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            We provide the tools and expertise you need to transform your vision into reality
          </motion.p>
        </div>
      </div>

      {/* Offerings Section */}
      <div className="container mx-auto px-4 py-16">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-green-400 text-3xl md:text-4xl font-bold mb-4">What We Offer</h2>
          <p className="text-teal-600 text-lg max-w-2xl mx-auto">
            Explore our exclusive services designed to help startups thrive in today's competitive landscape
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {offerings.map((offering, index) => (
            <motion.div
              key={offering.id}
              className="bg-[#032442] rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 0.5, delay: 0.2 * index }}
              whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
            >
              <div className="text-5xl mb-4">{offering.icon}</div>
              <h3 className="text-green-400 text-xl font-semibold mb-3">{offering.title}</h3>
              <p className="text-teal-500 mb-4">{offering.description}</p>
              <button className="mt-auto bg-green-400 hover:bg-green-500 text-[#02162d] font-bold py-2 px-4 rounded-full transition-colors duration-300">
                Learn More
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Call to Action with GIF Background */}
      <div className="relative py-16 px-4 text-center">
        <div 
          className="absolute inset-0 z-0" 
          style={{ 
            backgroundImage: `url("https://i.pinimg.com/originals/55/01/60/5501609ee45d514d1f2c4a63502045e2.gif")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            opacity: 0.3
          }}
        />
        <div className="absolute inset-0 bg-[#02162d] opacity-70 z-10"></div>
        <motion.div 
          className="container mx-auto relative z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-green-400 text-3xl font-bold mb-4">Ready to Launch Your Startup?</h2>
          <p className="text-teal-500 text-lg max-w-2xl mx-auto mb-8">
            Join hundreds of successful founders who trusted our expertise to build their dream companies
          </p>
          <button className="bg-green-400 hover:bg-green-500 text-[#02162d] font-bold py-3 px-8 rounded-full text-lg transition-colors duration-300">
            Get Started Today
          </button>
        </motion.div>
      </div>

      {/* Testimonials Preview */}
      <div className="container mx-auto px-4 py-16">
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2 className="text-green-400 text-3xl font-bold mb-4">What Founders Say</h2>
          <p className="text-teal-600 max-w-2xl mx-auto">
            Hear from entrepreneurs who have successfully scaled their startups with our help
          </p>
        </motion.div>
        
        <motion.div 
          className="bg-[#032442] p-6 rounded-lg shadow-lg mx-auto max-w-3xl"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.95 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-teal-500 italic mb-4">
            "Working with this team transformed our startup from a simple idea into a venture-backed company with real traction. Their strategic guidance was invaluable."
          </p>
          <p className="text-green-400 font-semibold">- Sarah Chen, Founder & CEO of TechNova</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Offerings;