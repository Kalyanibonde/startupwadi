import React, { useState, useEffect } from 'react';
import { 
  Container, 
  Row, 
  Col, 
  Card, 
  Form, 
  InputGroup, 
  Button, 
  Badge, 
  Pagination,
  Offcanvas,
  ListGroup,
  Image,
  Alert
} from 'react-bootstrap';
import { 
  Search, 
  Cart, 
  ChevronLeft, 
  ChevronRight,
  XCircle,
  Dash,
  Plus,
  Trash,
  Heart,
  HeartFill,
  StarFill,
  Filter,
  SortDown
} from 'react-bootstrap-icons';
import NavBar from '../components/NavBar';

const Merchandise = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");
  const [cart, setCart] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [notification, setNotification] = useState({ show: false, message: '', type: 'success' });
  const [wishlist, setWishlist] = useState([]);
  const [sortBy, setSortBy] = useState("featured");
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [hoveredItem, setHoveredItem] = useState(null);

  useEffect(() => {
    // Fade in animation on page load
    setIsVisible(true);
    
    // Check for saved cart and wishlist in localStorage
    const savedCart = localStorage.getItem('merchandise_cart');
    const savedWishlist = localStorage.getItem('merchandise_wishlist');
    
    if (savedCart) setCart(JSON.parse(savedCart));
    if (savedWishlist) setWishlist(JSON.parse(savedWishlist));
    
    // Add scroll event listener for parallax effects
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // Save cart and wishlist to localStorage when they change
  useEffect(() => {
    localStorage.setItem('merchandise_cart', JSON.stringify(cart));
  }, [cart]);
  
  useEffect(() => {
    localStorage.setItem('merchandise_wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  const handleScroll = () => {
    // Parallax effect could be implemented here
    const scrollPosition = window.scrollY;
    const header = document.querySelector('.merchandise-header');
    if (header) {
      header.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
    }
  };

  // Add to cart functionality with quantity
  const addToCart = (item) => {
    const existingItem = cart.find(cartItem => cartItem.id === item.id);
    
    if (existingItem) {
      setCart(cart.map(cartItem => 
        cartItem.id === item.id 
          ? { ...cartItem, quantity: cartItem.quantity + 1 } 
          : cartItem
      ));
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
    
    // Show notification
    setNotification({
      show: true,
      message: `${item.name} added to cart!`,
      type: 'success'
    });
    
    // Hide notification after 3 seconds
    setTimeout(() => {
      setNotification({ ...notification, show: false });
    }, 3000);
  };
  
  // Remove from cart
  const removeFromCart = (itemId) => {
    setCart(cart.filter(item => item.id !== itemId));
  };
  
  // Update quantity
  const updateQuantity = (itemId, newQuantity) => {
    if (newQuantity < 1) return;
    
    setCart(cart.map(item => 
      item.id === itemId 
        ? { ...item, quantity: newQuantity } 
        : item
    ));
  };
  
  // Toggle wishlist
  const toggleWishlist = (itemId) => {
    if (wishlist.includes(itemId)) {
      setWishlist(wishlist.filter(id => id !== itemId));
    } else {
      setWishlist([...wishlist, itemId]);
      
      // Show notification
      const item = merchandiseItems.find(item => item.id === itemId);
      setNotification({
        show: true,
        message: `${item.name} added to wishlist!`,
        type: 'info'
      });
      
      // Hide notification after 3 seconds
      setTimeout(() => {
        setNotification({ ...notification, show: false });
      }, 3000);
    }
  };
  
  // Calculate cart total
  const cartTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

  // Sample merchandise data with better images and more details
  const merchandiseItems = [
    { 
      id: 1, 
      name: "Startup T-Shirt", 
      price: 24.99, 
      category: "Apparel", 
      rating: 4.5,
      image: "https://png.pngtree.com/png-vector/20220807/ourmid/pngtree-creative-brainstorming-and-ideas-innovative-solutions-business-startup-concept-png-image_6102566.png",
      description: "Premium cotton t-shirt with our signature startup logo. Comfortable for all-day wear.",
      colors: ["Black", "White", "Navy"],
      sizes: ["S", "M", "L", "XL"]
    },
    { 
      id: 2, 
      name: "Tech Hoodie", 
      price: 49.99, 
      category: "Apparel", 
      rating: 5,
      image: "https://png.pngtree.com/png-vector/20220807/ourmid/pngtree-creative-brainstorming-and-ideas-innovative-solutions-business-startup-concept-png-image_6102566.png",
      description: "Stay warm while coding with our premium tech hoodie. Features a kangaroo pocket and adjustable hood.",
      colors: ["Black", "Gray", "Blue"],
      sizes: ["S", "M", "L", "XL", "XXL"]
    },
    { 
      id: 3, 
      name: "Founder Mug", 
      price: 12.99, 
      category: "Accessories", 
      rating: 4.2,
      image: "https://png.pngtree.com/png-vector/20220807/ourmid/pngtree-creative-brainstorming-and-ideas-innovative-solutions-business-startup-concept-png-image_6102566.png",
      description: "Ceramic mug with inspirational founder quotes. Microwave and dishwasher safe.",
      colors: ["White", "Black"],
      capacity: "12oz"
    },
    { 
      id: 4, 
      name: "Notebook Set", 
      price: 18.99, 
      category: "Stationery", 
      rating: 4.7,
      image: "https://png.pngtree.com/png-vector/20220807/ourmid/pngtree-creative-brainstorming-and-ideas-innovative-solutions-business-startup-concept-png-image_6102566.png",
      description: "Set of 3 premium notebooks with dotted, lined, and blank pages. Perfect for brainstorming sessions.",
      pages: "120 per notebook",
      dimensions: "5.8\" x 8.3\""
    },
    { 
      id: 5, 
      name: "Startup Stickers", 
      price: 5.99, 
      category: "Accessories", 
      rating: 4.8,
      image: "https://png.pngtree.com/png-vector/20220807/ourmid/pngtree-creative-brainstorming-and-ideas-innovative-solutions-business-startup-concept-png-image_6102566.png",
      description: "Pack of 10 vinyl stickers featuring our logo and startup-themed designs. Waterproof and durable.",
      dimensions: "Various sizes",
      material: "Vinyl"
    },
    { 
      id: 6, 
      name: "Water Bottle", 
      price: 15.99, 
      category: "Accessories", 
      rating: 4.3,
      image: "https://png.pngtree.com/png-vector/20220807/ourmid/pngtree-creative-brainstorming-and-ideas-innovative-solutions-business-startup-concept-png-image_6102566.png",
      description: "Stainless steel water bottle with our logo. Keeps drinks cold for 24 hours or hot for 12 hours.",
      capacity: "20oz",
      material: "Stainless Steel"
    },
    { 
      id: 7, 
      name: "Laptop Sleeve", 
      price: 29.99, 
      category: "Accessories", 
      rating: 4.6,
      image: "https://png.pngtree.com/png-vector/20220807/ourmid/pngtree-creative-brainstorming-and-ideas-innovative-solutions-business-startup-concept-png-image_6102566.png",
      description: "Padded laptop sleeve with water-resistant exterior. Fits most 13\" and 15\" laptops.",
      sizes: ["13\"", "15\""],
      material: "Neoprene"
    },
    { 
      id: 8, 
      name: "Startup Cap", 
      price: 19.99, 
      category: "Apparel", 
      rating: 4.1,
      image: "https://png.pngtree.com/png-vector/20220807/ourmid/pngtree-creative-brainstorming-and-ideas-innovative-solutions-business-startup-concept-png-image_6102566.png",
      description: "Adjustable cap with embroidered logo. One size fits most.",
      colors: ["Black", "Navy", "Gray"],
      material: "Cotton"
    },
    { 
      id: 9, 
      name: "Desk Plant", 
      price: 22.99, 
      category: "Accessories", 
      rating: 4.4,
      image: "https://png.pngtree.com/png-vector/20220807/ourmid/pngtree-creative-brainstorming-and-ideas-innovative-solutions-business-startup-concept-png-image_6102566.png",
      description: "Small succulent in a branded pot. Low maintenance and perfect for your desk.",
      dimensions: "4\" x 4\" x 6\"",
      care: "Water once a week"
    },
    { 
      id: 10, 
      name: "Smart Notebook", 
      price: 32.99, 
      category: "Stationery", 
      rating: 4.9,
      image: "https://png.pngtree.com/png-vector/20220807/ourmid/pngtree-creative-brainstorming-and-ideas-innovative-solutions-business-startup-concept-png-image_6102566.png",
      description: "Reusable smart notebook with app integration. Wipe clean and reuse indefinitely.",
      pages: "36",
      dimensions: "8.5\" x 11\""
    },
    { 
      id: 11, 
      name: "Wireless Charger", 
      price: 34.99, 
      category: "Accessories", 
      rating: 4.5,
      image: "https://png.pngtree.com/png-vector/20220807/ourmid/pngtree-creative-brainstorming-and-ideas-innovative-solutions-business-startup-concept-png-image_6102566.png",
      description: "Fast wireless charger with our logo. Compatible with all Qi-enabled devices.",
      output: "10W",
      dimensions: "4\" diameter"
    },
    { 
      id: 12, 
      name: "Conference Badge", 
      price: 9.99, 
      category: "Accessories", 
      rating: 4.0,
      image: "https://png.pngtree.com/png-vector/20220807/ourmid/pngtree-creative-brainstorming-and-ideas-innovative-solutions-business-startup-concept-png-image_6102566.png",
      description: "Premium badge holder with lanyard. Perfect for conferences and events.",
      dimensions: "4\" x 3\"",
      material: "Recycled PET"
    },
  ];
  

  const categories = ["All", "Apparel", "Accessories", "Stationery"];

  // Apply filters and sorting
  let filteredItems = merchandiseItems.filter(item => 
    (category === "All" || item.category === category) && 
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    item.price >= priceRange[0] && item.price <= priceRange[1]
  );
  
  // Sort items
  switch(sortBy) {
    case "price-low":
      filteredItems = filteredItems.sort((a, b) => a.price - b.price);
      break;
    case "price-high":
      filteredItems = filteredItems.sort((a, b) => b.price - a.price);
      break;
    case "rating":
      filteredItems = filteredItems.sort((a, b) => b.rating - a.rating);
      break;
    default: // "featured" - keep original order
      break;
  }

  // Items per page
  const itemsPerPage = 8;
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
  
  // Generate star ratings
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <StarFill 
          key={i} 
          className={`${i <= rating ? 'text-warning' : 'text-muted opacity-25'}`}
          style={{ width: '14px', height: '14px' }}
        />
      );
    }
    return stars;
  };

  return (
    <div className="min-vh-100 d-flex flex-column overflow-x-hidden">
      {/* Navbar */}
      <NavBar />
      
      {/* Notification */}
      <Alert 
        variant={notification.type}
        show={notification.show}
        className="position-fixed top-0 start-50 translate-middle-x mt-4 z-3 shadow-lg"
        style={{ 
          maxWidth: '90%', 
          width: '400px',
          animation: 'fadeInDown 0.5s ease-out',
          zIndex: 1060
        }}
      >
        {notification.message}
      </Alert>
      
      {/* Hero Header */}
      <div 
        className="merchandise-header position-relative py-5 d-flex align-items-center justify-content-center text-white"
        style={{
          backgroundImage: 'linear-gradient(135deg, #5A3BC5 0%, #7B68EE 100%)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '300px',
          marginTop: '56px'
        }}
      >
        <div 
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Crect width=\'100%\' height=\'100%\' fill=\'%23ffffff\' fill-opacity=\'0.05\'/%3E%3C/svg%3E")',

            opacity: 0.7
          }}
        />
        <Container className="position-relative text-center" style={{ zIndex: 1 }}>
          <h1 
            className="display-3 fw-bold mb-3"
            style={{ 
              opacity: isVisible ? 1 : 0, 
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.8s ease',
              textShadow: '0 2px 10px rgba(0,0,0,0.2)'
            }}
          >
            StartupWadi Merchandise
          </h1>
          <p 
            className="lead fs-4 mb-4 mx-auto"
            style={{ 
              maxWidth: '700px',
              opacity: isVisible ? 1 : 0, 
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.8s ease 0.2s',
            }}
          >
            Support our community with premium branded items designed for innovators and creators
          </p>
          <div
            style={{ 
              opacity: isVisible ? 1 : 0, 
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.8s ease 0.4s',
            }}
          >
            <Button 
              variant="light" 
              size="lg" 
              className="px-4 py-2 me-2 shadow-sm"
              onClick={() => window.scrollTo({ top: document.querySelector('.product-grid').offsetTop - 100, behavior: 'smooth' })}
            >
              Shop Now
            </Button>
            <Button 
              variant="outline-light" 
              size="lg" 
              className="px-4 py-2 shadow-sm"
              onClick={() => setShowCart(true)}
            >
              <Cart className="me-2" />
              View Cart ({cart.reduce((total, item) => total + item.quantity, 0)})
            </Button>
          </div>
        </Container>
        
        {/* Wave separator */}
        <div className="position-absolute bottom-0 start-0 w-100 overflow-hidden" style={{ height: '40px' }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style={{ position: 'absolute', bottom: 0 }}>
            <path fill="#f8f9fa" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </div>
      
      {/* Main Content Area */}
      <div className="flex-grow-1 py-5" style={{ backgroundColor: '#f8f9fa' }}>
        <Container fluid className="px-3 px-sm-4 px-md-5">
          {/* Search and Filters */}
          <Row className="mb-4 gy-3">
            <Col lg={8}>
              <div className="d-flex flex-wrap gap-2">
                <Button 
                  variant="outline-secondary" 
                  className="d-lg-none"
                  onClick={() => setShowFilters(true)}
                >
                  <Filter className="me-2" />
                  Filters
                </Button>
                
                <InputGroup className="flex-grow-1" style={{ maxWidth: '500px' }}>
                  <Form.Control
                    type="text"
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="shadow-sm border-end-0"
                  />
                  <Button variant="outline-secondary" className="border-start-0 bg-white">
                    <Search />
                  </Button>
                </InputGroup>
                
                <Form.Select 
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="shadow-sm"
                  style={{ width: 'auto' }}
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                </Form.Select>
              </div>
            </Col>
            
            <Col lg={4} className="d-flex justify-content-lg-end">
              <Button 
                variant="primary" 
                className="d-flex align-items-center justify-content-center shadow-sm ms-auto"
                style={{ 
                  backgroundColor: '#5A3BC5', 
                  border: 'none',
                  boxShadow: '0 4px 10px rgba(90, 59, 197, 0.25)'
                }}
                onClick={() => setShowCart(true)}
              >
                <Cart className="me-2" />
                <span>Cart ({cart.reduce((total, item) => total + item.quantity, 0)})</span>
              </Button>
            </Col>
          </Row>
          
          <Row>
            {/* Filters - Desktop */}
            <Col lg={3} className="d-none d-lg-block">
              <Card className="shadow-sm border-0 mb-4">
                <Card.Header className="bg-white border-bottom-0 pt-4">
                  <h5 className="mb-0">Filters</h5>
                </Card.Header>
                <Card.Body>
                  <Form>
                    <Form.Group className="mb-4">
                      <Form.Label className="fw-bold">Category</Form.Label>
                      {categories.map((cat) => (
                        <Form.Check 
                          key={cat}
                          type="radio"
                          id={`category-${cat.toLowerCase()}`}
                          label={cat}
                          name="category"
                          checked={category === cat}
                          onChange={() => setCategory(cat)}
                          className="mb-2"
                        />
                      ))}
                    </Form.Group>
                    
                    <Form.Group className="mb-4">
                      <Form.Label className="fw-bold">Price Range</Form.Label>
                      <div className="d-flex align-items-center mb-2">
                        <span className="me-2">${priceRange[0]}</span>
                        <Form.Range 
                          min={0}
                          max={100}
                          value={priceRange[0]}
                          onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                          className="flex-grow-1"
                        />
                        <span className="ms-2">${priceRange[1]}</span>
                      </div>
                      <div className="d-flex align-items-center">
                        <span className="me-2">${priceRange[0]}</span>
                        <Form.Range 
                          min={0}
                          max={100}
                          value={priceRange[1]}
                          onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                          className="flex-grow-1"
                        />
                        <span className="ms-2">${priceRange[1]}</span>
                      </div>
                    </Form.Group>
                    
                    <Button 
                      variant="outline-secondary" 
                      size="sm" 
                      className="w-100"
                      onClick={() => {
                        setCategory("All");
                        setPriceRange([0, 100]);
                      }}
                    >
                      Reset Filters
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
              
              
            </Col>
            
            {/* Product Grid */}
            <Col lg={9}>
            <div className="product-grid" style={{ minHeight: filteredItems.length ? '800px' : '200px' }}>
                {filteredItems.length === 0 ? (
                  <Card className="text-center py-5 border-0 shadow-sm">
                    <Card.Body>
                      <XCircle size={48} className="text-muted mb-3" />
                      <p className="fs-5 text-muted">No products found. Try adjusting your filters.</p>
                      <Button 
                        variant="outline-primary" 
                        onClick={() => {
                          setCategory("All");
                          setSearchTerm("");
                          setPriceRange([0, 100]);
                        }}
                      >
                        Reset Filters
                      </Button>
                    </Card.Body>
                  </Card>
                ) : (
                  <Row className="g-4">
                    {currentItems.map((item, index) => (
                      <Col key={item.id} sm={6} lg={4} xl={3} className="d-flex align-items-stretch">
                        <Card 
                          className="w-100 h-100 shadow-sm border-0 overflow-hidden product-card"
                          style={{ 
                            opacity: isVisible ? 1 : 0, 
                            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                            transition: `all 0.5s ease ${index * 0.1}s`,
                          }}
                          onMouseEnter={() => setHoveredItem(item.id)}
                          onMouseLeave={() => setHoveredItem(null)}
                        >
                          <div 
                            className="position-relative"
                            style={{ height: '200px', overflow: 'hidden' }}
                          >
                            <Card.Img 
                              variant="top" 
                              src={item.image}
                              alt={item.name}
                              className="h-100 w-100"
                              style={{ 
                                objectFit: 'cover', 
                                transition: 'transform 0.5s ease',
                                transform: hoveredItem === item.id ? 'scale(1.1)' : 'scale(1)'
                              }}
                            />
                            <Button
                              variant="light"
                              size="sm"
                              className="position-absolute top-0 end-0 m-2 rounded-circle p-1"
                              onClick={(e) => {
                                e.stopPropagation();
                                toggleWishlist(item.id);
                              }}
                              style={{
                                width: '32px',
                                height: '32px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                              }}
                            >
                              {wishlist.includes(item.id) ? (
                                <HeartFill className="text-danger" />
                              ) : (
                                <Heart />
                              )}
                            </Button>
                            {item.rating >= 4.5 && (
                              <Badge 
                                bg="warning" 
                                text="dark"
                                className="position-absolute top-0 start-0 m-2"
                              >
                                Top Rated
                              </Badge>
                            )}
                          </div>
                          <Card.Body className="d-flex flex-column">
                            <div className="d-flex justify-content-between align-items-start mb-1">
                              <Card.Title 
                                style={{ 
                                  color: '#344D5A', 
                                  fontWeight: '600',
                                  fontSize: '1.1rem'
                                }}
                              >
                                {item.name}
                              </Card.Title>
                              <Badge 
                                bg="light" 
                                text="dark" 
                                className="rounded-pill"
                                style={{ 
                                  color: '#5A3BC5', 
                                  backgroundColor: 'rgba(90, 59, 197, 0.1)' 
                                }}
                              >
                                {item.category}
                              </Badge>
                            </div>
                            <div className="mb-2 d-flex">
                              {renderStars(item.rating)}
                              <small className="ms-1 text-muted">({item.rating})</small>
                            </div>
                            <Card.Text className="small text-muted mb-3 flex-grow-1">
                              {item.description.length > 70 
                                ? `${item.description.substring(0, 70)}...` 
                                : item.description}
                            </Card.Text>
                            <Card.Text className="fs-5 fw-bold mb-3" style={{ color: '#5A3BC5' }}>
                              ${item.price.toFixed(2)}
                            </Card.Text>
                            <Button 
                              onClick={() => addToCart(item)}
                              variant="primary" 
                              className="mt-auto d-flex align-items-center justify-content-center"
                              style={{ 
                                backgroundColor: '#5A3BC5', 
                                border: 'none',
                                boxShadow: '0 4px 10px rgba(90, 59, 197, 0.25)',
                                transition: 'all 0.2s ease'
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = '#4a30a3';
                                e.currentTarget.style.boxShadow = '0 4px 12px rgba(90, 59, 197, 0.35)';
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = '#5A3BC5';
                                e.currentTarget.style.boxShadow = '0 4px 10px rgba(90, 59, 197, 0.25)';
                              }}
                            >
                              <Cart className="me-2" />
                              Add to Cart
                            </Button>
                          </Card.Body>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                )}
              </div>
              
              {/* Pagination */}
              {totalPages > 1 && (
                <Row className="mt-5 mb-4">
                  <Col className="d-flex justify-content-center">
                    <Pagination className="shadow-sm">
                      <Pagination.Item 
                        onClick={prevPage} 
                        disabled={currentPage === 1}
                        className="px-3"
                      >
                        <ChevronLeft className="me-1" /> Previous
                      </Pagination.Item>
                      
                      {/* Show page numbers */}
                      {Array.from({ length: totalPages }, (_, i) => i + 1)
                        .filter(page => 
                          page === 1 || 
                          page === totalPages || 
                          (page >= currentPage - 1 && page <= currentPage + 1)
                        )
                        .map((page, index, array) => {
                          // Add ellipsis
                          if (index > 0 && array[index - 1] !== page - 1) {
                            return (
                              <React.Fragment key={`ellipsis-${page}`}>
                                <Pagination.Ellipsis disabled />
                                <Pagination.Item
                                  active={page === currentPage}
                                  onClick={() => {
                                    setCurrentPage(page);
                                    window.scrollTo({ top: 0, behavior: 'smooth' });
                                  }}
                                >
                                  {page}
                                </Pagination.Item>
                              </React.Fragment>
                            );
                          }
                          
                          return (
                            <Pagination.Item
                              key={page}
                              active={page === currentPage}
                              onClick={() => {
                                setCurrentPage(page);
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                              }}
                            >
                              {page}
                            </Pagination.Item>
                          );
                        })}
                      
                      <Pagination.Item 
                        onClick={nextPage} 
                        disabled={currentPage === totalPages}
                        className="px-3"
                      >
                        Next <ChevronRight className="ms-1" />
                      </Pagination.Item>
                    </Pagination>
                  </Col>
                </Row>
              )}
            </Col>
          </Row>
        </Container>
      </div>
      
      {/* Cart Offcanvas */}
      <Offcanvas 
  show={showCart} 
  onHide={() => setShowCart(false)} 
  placement="end" 
  className="cart-offcanvas"
  style={{ width: '350px', maxWidth: '100vw' }}
  backdropClassName="offcanvas-backdrop"
>
        <Offcanvas.Header closeButton className="border-bottom">
          <Offcanvas.Title className="fw-bold">Your Cart ({cart.reduce((total, item) => total + item.quantity, 0)} items)</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="d-flex flex-column">
          {cart.length === 0 ? (
            <div className="text-center py-5 my-auto">
              <Cart size={48} className="text-muted mb-3" />
              <p className="fs-5 text-muted">Your cart is empty</p>
              <Button 
                variant="primary" 
                onClick={() => setShowCart(false)}
                style={{ backgroundColor: '#5A3BC5', border: 'none' }}
              >
                Continue Shopping
              </Button>
            </div>
          ) : (
            <>
              <div className="flex-grow-1 overflow-auto">
                <ListGroup variant="flush">
                  {cart.map(item => (
                    <ListGroup.Item key={item.id} className="py-3 px-0 border-bottom">
                      <div className="d-flex">
                        <div className="flex-shrink-0" style={{ width: '80px', height: '80px' }}>
                          <Image 
                            src={item.image || "/placeholder.svg"} 
                            alt={item.name} 
                            className="w-100 h-100 object-fit-cover rounded"
                          />
                        </div>
                        <div className="ms-3 flex-grow-1">
                          <div className="d-flex justify-content-between align-items-start">
                            <h6 className="mb-0">{item.name}</h6>
                            <Button 
                              variant="link" 
                              className="p-0 text-danger" 
                              onClick={() => removeFromCart(item.id)}
                            >
                              <Trash size={16} />
                            </Button>
                          </div>
                          <p className="text-muted small mb-2">${item.price.toFixed(2)}</p>
                          <div className="d-flex align-items-center">
                            <Button 
                              variant="outline-secondary" 
                              size="sm" 
                              className="p-0 d-flex align-items-center justify-content-center"
                              style={{ width: '24px', height: '24px' }}
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              disabled={item.quantity <= 1}
                            >
                              <Dash size={16} />
                            </Button>
                            <span className="mx-2">{item.quantity}</span>
                            <Button 
                              variant="outline-secondary" 
                              size="sm" 
                              className="p-0 d-flex align-items-center justify-content-center"
                              style={{ width: '24px', height: '24px' }}
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            >
                              <Plus size={16} />
                            </Button>
                            <span className="ms-auto fw-bold">
                              ${(item.price * item.quantity).toFixed(2)}
                            </span>
                          </div>
                        </div>
                      </div>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </div>
              
              <div className="mt-4 pt-3 border-top">
                <div className="d-flex justify-content-between mb-2">
                  <span>Subtotal:</span>
                  <span className="fw-bold">${cartTotal.toFixed(2)}</span>
                </div>
                <div className="d-flex justify-content-between mb-2 text-muted">
                  <span>Shipping:</span>
                  <span>Calculated at checkout</span>
                </div>
                <div className="d-flex justify-content-between mb-4">
                  <span className="fw-bold">Estimated Total:</span>
                  <span className="fw-bold">${cartTotal.toFixed(2)}</span>
                </div>
                <Button 
                  variant="primary" 
                  className="w-100 mb-2"
                  style={{ 
                    backgroundColor: '#5A3BC5', 
                    border: 'none',
                    boxShadow: '0 4px 10px rgba(90, 59, 197, 0.25)'
                  }}
                >
                  Proceed to Checkout
                </Button>
                <Button 
                  variant="outline-secondary" 
                  className="w-100"
                  onClick={() => setShowCart(false)}
                >
                  Continue Shopping
                </Button>
              </div>
            </>
          )}
        </Offcanvas.Body>
      </Offcanvas>
      
      {/* Filters Offcanvas - Mobile */}
      <Offcanvas 
  show={showFilters} 
  onHide={() => setShowFilters(false)} 
  placement="start"
  style={{ width: '300px', maxWidth: '100vw' }}
  backdropClassName="offcanvas-backdrop"
>
        <Offcanvas.Header closeButton className="border-bottom">
          <Offcanvas.Title className="fw-bold">Filters</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Form>
            <Form.Group className="mb-4">
              <Form.Label className="fw-bold">Category</Form.Label>
              {categories.map((cat) => (
                <Form.Check 
                  key={cat}
                  type="radio"
                  id={`mobile-category-${cat.toLowerCase()}`}
                  label={cat}
                  name="mobile-category"
                  checked={category === cat}
                  onChange={() => {
                    setCategory(cat);
                    setShowFilters(false);
                  }}
                  className="mb-2"
                />
              ))}
            </Form.Group>
            
            <Form.Group className="mb-4">
              <Form.Label className="fw-bold">Price Range</Form.Label>
              <div className="d-flex align-items-center mb-2">
                <span className="me-2">${priceRange[0]}</span>
                <Form.Range 
                  min={0}
                  max={100}
                  value={priceRange[0]}
                  onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                  className="flex-grow-1"
                />
                <span className="ms-2">${priceRange[1]}</span>
              </div>
              <div className="d-flex align-items-center">
                <span className="me-2">${priceRange[0]}</span>
                <Form.Range 
                  min={0}
                  max={100}
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="flex-grow-1"
                />
                <span className="ms-2">${priceRange[1]}</span>
              </div>
            </Form.Group>
            
            <Form.Group className="mb-4">
              <Form.Label className="fw-bold">Sort By</Form.Label>
              <Form.Select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="mb-3"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </Form.Select>
            </Form.Group>
            
            <div className="d-flex gap-2">
              <Button 
                variant="primary" 
                className="flex-grow-1"
                style={{ backgroundColor: '#5A3BC5', border: 'none' }}
                onClick={() => setShowFilters(false)}
              >
                Apply Filters
              </Button>
              <Button 
                variant="outline-secondary" 
                className="flex-grow-1"
                onClick={() => {
                  setCategory("All");
                  setPriceRange([0, 100]);
                  setSortBy("featured");
                  setShowFilters(false);
                }}
              >
                Reset
              </Button>
            </div>
          </Form>
        </Offcanvas.Body>
      </Offcanvas>
      
  
      {/* Custom CSS */}
      <style jsx>{`
  @keyframes fadeInDown {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .product-card {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .product-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.1) !important;
  }
  
  /* Add these new styles */
  body {
    overflow-x: hidden;
    width: 100%;
    position: relative;
  }
  
  /* Prevent width changes when scrollbar appears/disappears */
  html {
    scrollbar-width: thin;
    overflow-y: scroll;
  }
  
  /* Fix for Bootstrap offcanvas */
  .offcanvas-backdrop {
    width: 100vw !important;
  }
  
  /* Ensure container doesn't change width */
  .container, .container-fluid {
    max-width: 100%;
    width: 100%;
    padding-right: var(--bs-gutter-x, 0.75rem);
    padding-left: var(--bs-gutter-x, 0.75rem);
  }
`}</style>

    </div>
  );
};

export default Merchandise;