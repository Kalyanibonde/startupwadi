import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaSearch, FaShoppingCart, FaChevronLeft, FaChevronRight, FaUserCircle, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

import logo from "../assets/logo.png";

const NavBar = ({ isScrolled }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  // Toggle menu on small screens
  const toggleMenu = () => setIsOpen(!isOpen);
  
  // Pages for Routing
  const pages = [
    { name: "Home", path: "/" },
    { name: "What We Offer", path: "/offerings" },
    { name: "Get Involved", path: "/get-involved" },
    { name: "About Us", path: "/about-us" },
    { name: "Merchandise", path: "/merchandise" },
  ];
  
  return (
    <nav className={`fixed top-0 left-0 w-full ${isScrolled ? 'bg-[#02162d] shadow-lg' : 'bg-[#02162d]/90 backdrop-blur-sm'} text-white py-3 px-6 flex justify-between items-center z-50 transition-all duration-300`}>
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
          <p className="text-sm text-teal-500 italic">Empowering Entrepreneurs</p>
        </div>
      </Link>
      
      {/* Desktop Navigation */}
      <div className="hidden md:flex space-x-8 text-lg">
        {pages.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className="cursor-pointer relative group py-2 text-green-400 hover:text-white transition"
          >
            {item.name}
            <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-green-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        ))}
      </div>
      
      {/* Mobile Menu Button */}
      <button 
        className="md:hidden text-2xl p-2 rounded-lg text-green-400 hover:bg-[#0e2d4e] transition-colors duration-300" 
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
        {pages.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className="cursor-pointer text-lg w-full text-center py-2 text-green-400 hover:bg-[#0e2d4e] hover:text-white transition"
            onClick={toggleMenu}
          >
            {item.name}
          </Link>
        ))}
        
        {/* Mobile Login Button */}
        <button className="bg-gradient-to-r from-green-500 to-green-400 text-white py-2 px-5 rounded-lg text-lg font-medium shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-[0px_8px_15px_rgba(74,222,128,0.4)] active:scale-95 w-3/4 flex items-center justify-center space-x-2">
          <FaUserCircle />
          <span>Login</span>
        </button>
      </div>
      
      {/* Login Button (Desktop) */}
      <button className="hidden md:flex items-center space-x-2 bg-gradient-to-r from-green-500 to-green-400 text-white py-2 px-5 rounded-lg text-lg font-medium shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-[0px_8px_15px_rgba(74,222,128,0.4)] active:scale-95">
        <FaUserCircle />
        <span>Login</span>
      </button>
    </nav>
  );
};

const Merchandise = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");
  const [scrolled, setScrolled] = useState(false);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setIsVisible(true);
    
    // Handle scroll event to change navbar appearance
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

  // Add to cart functionality
  const addToCart = (item) => {
    setCart([...cart, item]);
    // Show add to cart animation or notification here
  };

  // Sample merchandise data
  const merchandiseItems = [
    { id: 1, name: "Startup T-Shirt", price: 24.99, category: "Apparel", image: "/api/placeholder/300/300" },
    { id: 2, name: "Tech Hoodie", price: 49.99, category: "Apparel", image: "/api/placeholder/300/300" },
    { id: 3, name: "Founder Mug", price: 12.99, category: "Accessories", image: "/api/placeholder/300/300" },
    { id: 4, name: "Notebook Set", price: 18.99, category: "Stationery", image: "/api/placeholder/300/300" },
    { id: 5, name: "Startup Stickers", price: 5.99, category: "Accessories", image: "/api/placeholder/300/300" },
    { id: 6, name: "Water Bottle", price: 15.99, category: "Accessories", image: "/api/placeholder/300/300" },
    { id: 7, name: "Laptop Sleeve", price: 29.99, category: "Accessories", image: "/api/placeholder/300/300" },
    { id: 8, name: "Startup Cap", price: 19.99, category: "Apparel", image: "/api/placeholder/300/300" },
    { id: 9, name: "Desk Plant", price: 22.99, category: "Accessories", image: "/api/placeholder/300/300" },
    { id: 10, name: "Smart Notebook", price: 32.99, category: "Stationery", image: "/api/placeholder/300/300" },
    { id: 11, name: "Wireless Charger", price: 34.99, category: "Accessories", image: "/api/placeholder/300/300" },
    { id: 12, name: "Conference Badge", price: 9.99, category: "Accessories", image: "/api/placeholder/300/300" },
  ];

  const categories = ["All", "Apparel", "Accessories", "Stationery"];

  const filteredItems = merchandiseItems.filter(item => 
    (category === "All" || item.category === category) && 
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Items per page - increased for full screen
  const itemsPerPage = 12; // Increased from 8 to show more items on laptop screens
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const currentItems = filteredItems.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#02162d] text-teal-500 font-sans w-full">
      {/* Navbar */}
      <NavBar isScrolled={scrolled} />
      
      {/* Animated Background - Full Screen */}
      <div className="fixed inset-0 z-0 opacity-10">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url("https://i.pinimg.com/originals/55/01/60/5501609ee45d514d1f2c4a63502045e2.gif")`,
            backgroundSize: "cover"
          }}
        />
      </div>

      {/* Full Screen Content */}
      <div className="relative z-10 pt-20 min-h-screen flex flex-col w-full">
        {/* Search and Filters - Top Fixed Bar */}
        <div className="sticky top-20 z-20 bg-[#02162d] border-b border-teal-900/30 shadow-lg w-full">
          <div className="w-full px-2 sm:px-4 md:px-6 lg:px-8 py-4">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
              <div className="w-full md:w-auto flex items-center">
                <label htmlFor="category" className="mr-2 text-teal-500 whitespace-nowrap">Category:</label>
                <select 
                  id="category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="bg-[#041b35] text-teal-500 border border-teal-700 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 w-full"
                >
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              <div className="relative w-full md:w-96">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="bg-[#041b35] text-teal-500 border border-teal-700 pl-3 pr-10 py-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-green-400"
                />
                <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-teal-500" />
              </div>

              <div className="flex items-center w-full md:w-auto">
                <button className="flex items-center justify-center space-x-2 bg-[#041b35] text-green-400 border border-green-400 px-4 py-2 rounded-lg hover:bg-green-400 hover:text-[#02162d] transition-colors w-full md:w-auto">
                  <FaShoppingCart />
                  <span>Cart ({cart.length})</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Area - Full Screen */}
        <div className="flex-grow w-full px-2 sm:px-4 md:px-6 lg:px-8 py-8">
          {/* Title */}
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-green-400 mb-8 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            StartupWadi Merchandise
          </motion.h1>

          {/* Product Grid */}
          {filteredItems.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-teal-500">No products found. Try adjusting your filters.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 md:gap-6">
              {currentItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  className="bg-[#041b35] rounded-xl overflow-hidden shadow-lg border border-teal-900/30 h-full flex flex-col"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                  transition={{ duration: 0.5, delay: 0.1 * (index % 4) }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <div className="p-4 flex-grow flex flex-col">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold text-lg text-green-400">{item.name}</h3>
                      <span className="bg-[#02162d] px-2 py-1 rounded text-xs text-teal-500">{item.category}</span>
                    </div>
                    <p className="text-xl font-bold text-teal-500 mb-4">${item.price.toFixed(2)}</p>
                    <button 
                      onClick={() => addToCart(item)}
                      className="mt-auto w-full bg-gradient-to-r from-green-500 to-green-400 text-white py-2 rounded-lg font-medium shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-[0px_8px_15px_rgba(74,222,128,0.2)] active:scale-95 flex items-center justify-center space-x-2"
                    >
                      <FaShoppingCart />
                      <span>Add to Cart</span>
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-12">
              <div className="flex items-center bg-[#041b35] rounded-lg overflow-hidden border border-teal-900/30">
                <button 
                  onClick={prevPage} 
                  disabled={currentPage === 1}
                  className={`px-4 py-3 flex items-center ${currentPage === 1 ? 'text-teal-700' : 'text-teal-500 hover:bg-[#082544]'}`}
                >
                  <FaChevronLeft className="mr-1" />
                  Previous
                </button>
                <div className="px-4 py-3 bg-[#082544] text-green-400 font-medium">
                  Page {currentPage} of {totalPages}
                </div>
                <button 
                  onClick={nextPage} 
                  disabled={currentPage === totalPages}
                  className={`px-4 py-3 flex items-center ${currentPage === totalPages ? 'text-teal-700' : 'text-teal-500 hover:bg-[#082544]'}`}
                >
                  Next
                  <FaChevronRight className="ml-1" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Merchandise;