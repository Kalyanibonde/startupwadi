import React, { useState, useEffect,useRef } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "tailwindcss/tailwind.css";
import logo from "../assets/logo.png";
import first from "../assets/1.jpg";
import second from "../assets/2.jpg";
import third from "../assets/3.jpg";
import { Link as RouterLink } from "react-router-dom";
import fourth from "../assets/4.jpg";
import { FaArrowLeft, FaArrowRight,FaBars, FaTimes, FaUserCircle , FaCalendarAlt, FaMapMarkerAlt, FaBuilding, FaLink, FaExternalLinkAlt } from "react-icons/fa";
import { motion , AnimatePresence ,useInView} from "framer-motion";

import { Menu, X ,ArrowRight } from 'lucide-react';
import { Link as ScrollLink } from "react-scroll";

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
  
  // Sections for Smooth Scroll
  const scrollSections = [
    { name: "Home", id: "home" }
  ];
  
  // Pages for Routing
  const pages = [
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
        {/* Scroll Sections */}
        {scrollSections.map((item, index) => (
          <ScrollLink
            key={index}
            to={item.id}
            smooth={true}
            duration={600}
            className="cursor-pointer relative group py-2 hover:text-green-400 transition"
          >
            {item.name}
            <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-green-300 transition-all duration-300 group-hover:w-full"></span>
          </ScrollLink>
        ))}
        
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
        {/* Scroll Sections */}
        {scrollSections.map((item, index) => (
          <ScrollLink
            key={index}
            to={item.id}
            smooth={true}
            duration={600}
            className="cursor-pointer text-lg w-full text-center py-2 hover:bg-[#0e2d4e] hover:text-[#2cbad1] transition"
            onClick={toggleMenu}
          >
            {item.name}
          </ScrollLink>
        ))}
        
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

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { image: fourth, title: "🌱 From Idea to Impact" },
    { image: first, title: "🎯 Turning Visions into Reality" },
    { image: second, title: "💡 Fueling Innovation & Creativity" },
    { image: third, title: "🏆 Dream. Build. Disrupt." }
  ];

  // Auto-rotate slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div id="home" className="relative h-[750px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-all duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100 transform scale-100" : "opacity-0 transform scale-105"
          }`}
        >
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-8 md:px-16">
            <h1
                className="text-3xl md:text-5xl font-bold mb-4 text-center transition-all duration-700 transform translate-y-0 opacity-100" 
              >
                {slide.title}
              </h1>

             
            </div>
          </div>
        </div>
      ))}
      
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full shadow-lg transition-all duration-300 focus:outline-none"
        aria-label="Previous slide"
      >
        <FaArrowLeft className="text-xl" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full shadow-lg transition-all duration-300 focus:outline-none"
        aria-label="Next slide"
      >
        <FaArrowRight className="text-xl" />
      </button>
      
      <div className="absolute bottom-8 w-full flex justify-center">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-3 w-3 mx-2 rounded-full transition-all duration-300 focus:outline-none ${
              index === currentSlide ? "bg-white w-10" : "bg-white bg-opacity-50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

const AboutSection = () => {
  const [index, setIndex] = useState(0);
  const [eventIndex, setEventIndex] = useState(0);
  const [hovered, setHovered] = useState(false);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  
  // Updated color palette with green (not teal)
  const colors = {
    primary: "from-green-800 to-green-900",
    secondary: "from-green-500 to-green-700",
    accent: "from-green-700 to-green-800",
    text: "text-white",
    textSecondary: "text-green-400",
    backgroundPrimary: "bg-[#02162d]-900",
    backgroundSecondary: "bg-[#02162d]-800",
    highlight: "text-green-400"
  };
  
  const aboutContent = [
    {
      title: "India's Premier Startup Ecosystem",
      description:
        "StartupWadi is a vibrant innovation hub dedicated to nurturing India's most promising startups. Our state-of-the-art facilities and mentor network empower entrepreneurs to transform their ideas into scalable ventures.",
      icon: "🚀",
      color: "from-green-500 to-green-700"
    },
    {
      title: "Comprehensive Incubation Programs",
      description: "Our sector-agnostic incubation programs provide end-to-end support including funding, mentorship, legal guidance, and market access. We've helped launch over 200+ startups with a combined valuation exceeding $500M.",
      icon: "💡",
      color: "from-green-500 to-green-700"
    },
    {
      title: "Part of the EvolvingX Ecosystem",
      description: "StartupWadi is proudly backed by EvolvingX, a leading innovation conglomerate building the future of technology across various sectors. Together, we're creating an integrated platform for next-generation entrepreneurs.",
      icon: "🔄",
      color: "from-green-500 to-green-700"
    },
  ];

  const evolvingXInfo = {
    description: "EvolvingX is the parent company of StartupWadi, focused on building a comprehensive innovation ecosystem. With ventures spanning education, healthcare, fintech, and enterprise solutions, EvolvingX is committed to advancing India's technology landscape through strategic investments and partnerships.",
    founder:"Mr. Amol Nitave",
    Location: "Pune, India",
    website: "https://www.evolvingx.org/"
  };

  const eventImages = [
    {
      url: "https://images.unsplash.com/photo-1504609773096-104ff2c73ba4",
      title: "Founder's Pitch Day 2024",
      date: "November 15, 2024",
      location: "StartupWadi Innovation Campus"
    },
    {
      url: "https://images.unsplash.com/photo-1530789253388-582c481c54b0",
      title: "Venture Capital Summit",
      date: "October 3-7, 2024",
      location: "StartupWadi Conference Center"
    },
    {
      url: "https://images.unsplash.com/photo-1517760444937-f6397edcbbcd",
      title: "National Innovation Hackathon",
      date: "September 22, 2024",
      location: "StartupWadi Technology Hub"
    },
    {
      url: "https://images.unsplash.com/photo-1519055548599-6d4d129508c4",
      title: "StartupWadi Demo Day",
      date: "August 30, 2024",
      location: "StartupWadi Auditorium"
    },
  ];
  
  const nextContent = () => setIndex((prev) => (prev + 1) % aboutContent.length);
  const prevContent = () => setIndex((prev) => (prev - 1 + aboutContent.length) % aboutContent.length);
  const nextEvent = () => setEventIndex((prev) => (prev + 1) % eventImages.length);
  const prevEvent = () => setEventIndex((prev) => (prev - 1 + eventImages.length) % eventImages.length);
  
  // Auto-rotate about content
  useEffect(() => {
    if (!hovered) {
      const interval = setInterval(() => {
        setIndex((prev) => (prev + 1) % aboutContent.length);
      }, 7000);
      return () => clearInterval(interval);
    }
  }, [aboutContent.length, hovered]);
  
  // Staggered animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };
  
  return (
    <div id="about-us" ref={sectionRef} className={`${colors.backgroundPrimary} py-16 px-6 ${colors.text}`}>
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-6xl mx-auto mb-12"
      >
        <div className="flex flex-col items-center">
          <motion.h2 
            variants={itemVariants}
            className="text-5xl font-bold text-center mb-4 text-white"
          >
            About StartupWadi
          </motion.h2>
          <motion.div 
            variants={itemVariants}
            className={`h-1 w-24 bg-gradient-to-r ${colors.secondary} rounded-full mb-6`}
          ></motion.div>
          <motion.p 
            variants={itemVariants}
            className="text-center text-lg max-w-3xl mx-auto text-gray-400"
          >
            India's premier innovation hub for tomorrow's breakthrough startups
          </motion.p>
        </div>
      </motion.div>
      
      {/* Swapping sections with welcome animations */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-7xl mx-auto">
        
        {/* About Us Section - Now spans 7 columns */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="lg:col-span-7 p-8 bg-gray-800 rounded-xl shadow-xl border border-gray-700 transition-all duration-500 hover:shadow-2xl hover:border-green-900 relative overflow-hidden"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${colors.secondary}`}></div>
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="min-h-56 flex flex-col justify-center"
            >
              <div className="flex justify-center mb-6">
                <div className={`text-5xl p-4 rounded-full bg-gradient-to-r ${aboutContent[index].color} text-white shadow-lg`}>
                  {aboutContent[index].icon}
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center text-white">{aboutContent[index].title}</h3>
              <p className="text-gray-300 text-lg leading-relaxed text-center mb-6">{aboutContent[index].description}</p>
            </motion.div>
          </AnimatePresence>
          
          <div className="flex justify-center mt-6 gap-4">
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={prevContent} 
              className={`p-2 bg-gradient-to-r ${colors.secondary} rounded-full transition-colors duration-300 shadow-lg text-white`}
              aria-label="Previous content"
            >
              <FaArrowLeft className="text-sm" />
            </motion.button>
            <div className="flex space-x-2 items-center">
              {aboutContent.map((_, i) => (
                <button 
                  key={i}
                  onClick={() => setIndex(i)} 
                  className={`h-2 rounded-full transition-all duration-300 ${index === i ? `bg-gradient-to-r ${colors.secondary} w-8` : 'bg-gray-600 w-2 hover:bg-gray-500'}`}
                  aria-label={`Go to content ${i + 1}`}
                />
              ))}
            </div>
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={nextContent} 
              className={`p-2 bg-gradient-to-r ${colors.secondary} rounded-full transition-colors duration-300 shadow-lg text-white`}
              aria-label="Next content"
            >
              <FaArrowRight className="text-sm" />
            </motion.button>
          </div>
          
          {/* Parent Company Link */}
          <motion.div
            variants={itemVariants}
            className="mt-8 pt-6 border-t border-gray-700"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center text-white">
                <FaBuilding className="mr-2" />
                <span className="font-semibold">Parent Company:</span>
              </div>
              <a 
                href={evolvingXInfo.website} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-green-400 hover:text-white hover:bg-gradient-to-r hover:from-green-600 hover:to-green-800 transition-colors duration-300 px-2 py-1 rounded"
              >
                <span className="mr-2">EvolvingX</span>
                <FaExternalLinkAlt size={12} />
              </a>
            </div>
          </motion.div>
        </motion.div>
        
        {/* EvolvingX Info Section - Now spans 5 columns */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="lg:col-span-5 p-8 bg-gray-800 rounded-xl shadow-xl border border-gray-700 transition-all duration-500 hover:shadow-2xl hover:border-green-900 relative overflow-hidden"
        >
          <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${colors.secondary}`}></div>
          <motion.h3 
            variants={itemVariants} 
            className="text-2xl font-bold mb-6 text-center text-white"
          >
            About EvolvingX
          </motion.h3>
          
          <motion.p 
            variants={itemVariants}
            className="text-gray-300 mb-6 leading-relaxed"
          >
            {evolvingXInfo.description}
          </motion.p>
          
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Founder</span>
              <span className="text-green-400">
                {evolvingXInfo.founder}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Location:</span>
              <span className="text-green-400">
                {evolvingXInfo.Location}
              </span>
            </div>
           
          </motion.div>
          
          <motion.a
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href={evolvingXInfo.website}
            target="_blank" 
            rel="noopener noreferrer"
            className={`mt-8 flex items-center justify-center w-full py-3 bg-gradient-to-r ${colors.secondary} text-white font-semibold rounded-md transition-all duration-300 hover:text-white `}
          >
            <FaLink className="mr-2" />
            Visit EvolvingX Website
          </motion.a>
        </motion.div>
        
        {/* Recent Events Section - Full width */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="lg:col-span-12 p-8 bg-gray-800 rounded-xl shadow-xl border border-gray-700 transition-all duration-500 hover:shadow-2xl hover:border-green-900 relative overflow-hidden"
        >
          <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${colors.secondary}`}></div>
          <motion.h3 
            variants={itemVariants}
            className="text-2xl font-bold mb-8 text-center text-white"
          >
            Recent Events at StartupWadi
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative flex items-center justify-center">
              <motion.button 
                variants={itemVariants}
                whileHover={{ scale: 1.1, x: -5 }}
                whileTap={{ scale: 0.95 }}
                onClick={prevEvent} 
                className={`absolute -left-4 z-10 p-2 bg-gradient-to-r ${colors.secondary} rounded-full transition-colors duration-300 shadow-lg text-white`}
                aria-label="Previous event"
              >
                <FaArrowLeft className="text-sm" />
              </motion.button>
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={eventIndex}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-full"
                >
                  <div className="relative rounded-lg overflow-hidden group">
                    <motion.img
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.5 }}
                      src={eventImages[eventIndex].url}
                      alt={eventImages[eventIndex].title}
                      className="w-full h-64 object-cover shadow-lg transition-all duration-500"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/70 to-transparent p-6 transform transition-transform duration-500 group-hover:translate-y-0">
                      <h4 className="text-xl font-bold text-white mb-2">{eventImages[eventIndex].title}</h4>
                      <div className="flex items-center text-gray-200 mb-2">
                        <FaCalendarAlt className="mr-2" />
                        <p>{eventImages[eventIndex].date}</p>
                      </div>
                      <div className="flex items-center text-gray-200">
                        <FaMapMarkerAlt className="mr-2" />
                        <p>{eventImages[eventIndex].location}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
              
              <motion.button 
                variants={itemVariants}
                whileHover={{ scale: 1.1, x: 5 }}
                whileTap={{ scale: 0.95 }}
                onClick={nextEvent} 
                className={`absolute -right-4 z-10 p-2 bg-gradient-to-r ${colors.secondary} rounded-full transition-colors duration-300 shadow-lg text-white`}
                aria-label="Next event"
              >
                <FaArrowRight className="text-sm" />
              </motion.button>
            </div>
            
            <motion.div variants={itemVariants} className="flex flex-col justify-between">
              <div>
                <h4 className="text-xl font-bold text-white mb-4">Why Join Our Events?</h4>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">•</span>
                    <span className="group-hover:text-white">Connect with India's top investors and venture capitalists</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">•</span>
                    <span className="group-hover:text-white">Learn from successful founders who built multi-million dollar companies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">•</span>
                    <span className="group-hover:text-white">Participate in hands-on workshops led by industry experts</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">•</span>
                    <span className="group-hover:text-white">Showcase your startup to potential customers and partners</span>
                  </li>
                </ul>
              </div>
              
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`mt-6 py-3 bg-gradient-to-r ${colors.secondary} text-white font-semibold rounded-md transition-all duration-300 shadow-md hover:shadow-green-700/30`}
              >
                View All Events
              </motion.button>
            </motion.div>
          </div>
          
          <div className="flex justify-center mt-6 gap-3">
            {eventImages.map((_, i) => (
              <button 
                key={i}
                onClick={() => setEventIndex(i)} 
                className={`h-2 rounded-full transition-all duration-300 ${eventIndex === i ? `bg-gradient-to-r ${colors.secondary} w-8` : 'bg-gray-600 w-2 hover:bg-gray-500'}`}
                aria-label={`Go to event ${i + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const OfferingsSection = () => {
  const offerings = [
    {
      title: "Group Adventures",
      description: "Join like-minded travelers for unforgettable group experiences.",
      image: "/api/placeholder/600/400",
      alt: "Group of travelers hiking on a mountain trail"
    },
    {
      title: "Custom Itineraries",
      description: "Personalized travel plans designed for your specific interests.",
      image: "/api/placeholder/600/400",
      alt: "Person looking at a custom travel map and itinerary"
    },
    {
      title: "Local Workshops",
      description: "Authentic cultural experiences led by local experts.",
      image: "/api/placeholder/600/400",
      alt: "Local cooking workshop with participants learning from chef"
    }
  ];

  return (
    <section className="relative bg-gray-800 py-16 overflow-hidden">
      {/* Wave Animation Background */}
      <div className="absolute inset-0 z-0">
        <div className="wave-container">
          <div className="wave wave1"></div>
          <div className="wave wave2"></div>
          <div className="wave wave3"></div>
          <div className="wave wave4"></div>
        </div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-white text-3xl font-bold mb-4">Explore Our Offerings</h2>
          <div className="w-24 h-1 bg-green-500 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offerings.map((offering, index) => (
            <div key={index} className="group bg-gray-700 bg-opacity-80 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl transform transition duration-300 hover:-translate-y-2">
              <div className="relative overflow-hidden h-56">
                <img 
                  src={offering.image}
                  alt={offering.alt}
                  className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition duration-300"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-white text-xl font-semibold mb-3">{offering.title}</h3>
                <p className="text-gray-300 mb-4">{offering.description}</p>
                <a href={`/offerings/${offering.title.toLowerCase().replace(/ /g, '-')}`} className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="/offerings" 
            className="inline-flex items-center px-8 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            Explore all offerings
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>

      {/* CSS for wave animation */}
      <style jsx global>{`
        .wave-container {
          position: absolute;
          width: 100%;
          height: 100%;
          bottom: 0;
          left: 0;
          background: #1a202c; /* Dark background matching your theme */
        }

        .wave {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 100px;
          background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 88.7'%3E%3Cpath d='M800 56.9c-155.5 0-204.9-50-405.5-49.9-200 0-250 49.9-394.5 49.9v31.8h800v-31.8z' fill='%23203240'/%3E%3C/svg%3E");
          background-size: 1600px 100px;
        }

        .wave1 {
          animation: wave 30s -3s linear infinite;
          opacity: 0.3;
          animation-delay: -2s;
          bottom: 0;
        }

        .wave2 {
          animation: wave 18s linear reverse infinite;
          opacity: 0.4;
          animation-delay: -5s;
          bottom: 10px;
        }

        .wave3 {
          animation: wave 20s -1s linear infinite;
          opacity: 0.25;
          animation-delay: -10s;
          bottom: 15px;
        }

        .wave4 {
          animation: wave 15s -5s linear infinite;
          opacity: 0.3;
          animation-delay: -7s;
          bottom: 5px;
        }

        @keyframes wave {
          0% {
            background-position-x: 0;
          }
          100% {
            background-position-x: 1600px;
          }
        }
      `}</style>
    </section>
  );
};

// Partners Section Component
const PartnersSection = () => {
  const partners = [
    { name: "Adventure Airlines", logo: "/api/placeholder/100/100" },
    { name: "Luxury Hotels", logo: "/api/placeholder/100/100" },
    { name: "Explore Tours", logo: "/api/placeholder/100/100" },
    { name: "Travel Insurance", logo: "/api/placeholder/100/100" },
    { name: "Global Transport", logo: "/api/placeholder/100/100" },
    { name: "Mountain Expeditions", logo: "/api/placeholder/100/100" }
  ];

  const institutions = [
    { name: "Tourism Board", logo: "/api/placeholder/100/100" },
    { name: "Travel Association", logo: "/api/placeholder/100/100" },
    { name: "Adventure Academy", logo: "/api/placeholder/100/100" },
    { name: "Wilderness Institute", logo: "/api/placeholder/100/100" },
    { name: "Conservation Trust", logo: "/api/placeholder/100/100" },
    { name: "Guide Certification", logo: "/api/placeholder/100/100" }
  ];

  return (
    <div className="bg-gradient-to-b from-gray-800 to-gray-900 py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-2">Our Partners</h2>
          <div className="w-20 h-1 bg-green-500 mx-auto"></div>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            We collaborate with industry-leading companies to bring you exceptional travel experiences
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {partners.map((partner, index) => (
            <div key={index} className="transform transition-transform duration-300 hover:scale-105">
              <div className="bg-gray-700 rounded-lg p-4 h-24 flex items-center justify-center shadow-lg">
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  className="max-h-16"
                />
              </div>
              <p className="text-center text-gray-300 mt-2 text-sm">{partner.name}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 mb-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-2">Trusted By</h2>
          <div className="w-20 h-1 bg-green-500 mx-auto"></div>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            Endorsed by prestigious institutions worldwide
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {institutions.map((institution, index) => (
            <div key={index} className="transform transition-transform duration-300 hover:scale-105">
              <div className="bg-gray-700 rounded-lg p-4 h-24 flex items-center justify-center shadow-lg">
                <img 
                  src={institution.logo} 
                  alt={institution.name} 
                  className="max-h-16"
                />
              </div>
              <p className="text-center text-gray-300 mt-2 text-sm">{institution.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Testimonials Section Component
const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Adventure Enthusiast",
      image: "/api/placeholder/100/100",
      quote: "TravelAdventures transformed our family vacation into an unforgettable journey. The attention to detail and personalized service exceeded all expectations!"
    },
    {
      name: "Michael Chen",
      role: "Solo Traveler",
      image: "/api/placeholder/100/100",
      quote: "As a frequent solo traveler, I've experienced many tour companies, but TravelAdventures stands out with their expert guides and seamless organization."
    },
    {
      name: "Emma & David Rivera",
      role: "Honeymooners",
      image: "/api/placeholder/100/100",
      quote: "Our honeymoon was pure magic! From secluded beaches to breathtaking mountain views, every moment was perfectly curated and stress-free."
    }
  ];

  return (
    <div className="bg-gradient-to-b from-gray-700 to-gray-800 py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-2">What Our Travelers Say</h2>
          <div className="w-20 h-1 bg-green-500 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-800 rounded-lg shadow-xl overflow-hidden transform transition-transform duration-300 hover:-translate-y-2">
              <div className="bg-gray-900 px-6 py-4">
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-gray-700 rounded-full overflow-hidden mr-4">
                    <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-green-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <svg className="text-green-500 w-8 h-8 mb-4 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
                </svg>
                <p className="text-gray-300 italic">{testimonial.quote}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company info */}
          <div className="md:col-span-1">
            <h3 className="text-white text-xl font-bold mb-4">TravelAdventures</h3>
            <p className="mb-4 text-gray-400">Crafting unforgettable journeys since 2010. Our mission is to create authentic travel experiences that connect people with destinations.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors">Destinations</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors">Packages</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors">Travel Blog</a></li>
            </ul>
          </div>
          
          {/* Contact Information */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Information</h4>
            <div className="space-y-3">
              <p className="flex items-start">
                <svg className="w-5 h-5 mr-2 mt-1 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <span>123 Adventure Road<br />Exploration City, EX 12345</span>
              </p>
              <p className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                <span>+1 (555) 123-4567</span>
              </p>
              <p className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <span>info@traveladventures.com</span>
              </p>
            </div>
          </div>
          
          {/* Contact Form */}
          <div>
            <h4 className="text-white font-semibold mb-4">Get In Touch</h4>
            <form className="space-y-3">
              <div>
                <input 
                  type="text" 
                  placeholder="Your name" 
                  className="w-full p-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="w-full p-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
              <div>
                <textarea 
                  placeholder="Your message" 
                  rows="3" 
                  className="w-full p-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                ></textarea>
              </div>
              <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded transition-colors duration-300 font-medium">
                Send Message
              </button>
            </form>
          </div>
        </div>
        
        {/* Map section */}
        <div className="mt-12 border-t border-gray-800 pt-8">
          <div className="mb-8">
            <div className="bg-gray-800 p-4 rounded-lg w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3787.86370772478!2d73.96803507518652!3d18.30783998274493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTjCsDE4JzI4LjIiTiA3M8KwNTgnMTQuMiJF!5e0!3m2!1sen!2sin!4v1742465209254!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="TravelAdventures Location"
                aria-label="Map showing TravelAdventures office location"
              ></iframe>
            </div>
          </div>
          
          {/* Copyright */}
          <div className="text-center">
            <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} TravelAdventures. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Main Home Component
const Home = () => (
  <div className="min-h-screen bg-gray-900">
    <NavBar />
    <Hero />
    <AboutSection />
    <OfferingsSection />
    <PartnersSection />
    <TestimonialsSection />
    <Footer />
  </div>
);
export default Home;