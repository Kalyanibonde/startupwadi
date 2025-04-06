import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Button, Offcanvas } from 'react-bootstrap';
import { 
  House, 
  Box, 
  People, 
  PersonCircle, 
  Bag 
} from 'react-bootstrap-icons';
import { Link, useNavigate } from 'react-router-dom';

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [activeLink, setActiveLink] = useState(null);
  const navigate = useNavigate();

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation links with icons
  const navLinks = [
    { 
      to: "/", 
      text: "Home", 
      icon: House 
    },
    { 
      to: "/offerings", 
      text: "What We Offer", 
      icon: Box 
    },
    { 
      to: "/get-involved", 
      text: "Get Involved", 
      icon: People 
    },
    { 
      to: "/about-us", 
      text: "About Us", 
      icon: People 
    },
    { 
      to: "/merchandise", 
      text: "Merchandise", 
      icon: Bag 
    }
  ];

  return (
    <>
      <Navbar 
        expand="md" 
        fixed="top" 
        className="bg-white py-2"
        style={{ 
          boxShadow: isScrolled ? '0 4px 12px rgba(0, 0, 0, 0.08)' : '0 1px 6px rgba(0, 0, 0, 0.05)',
          transition: 'all 0.3s ease'
        }}
      >
        <Container fluid className="px-3 px-sm-4">
          {/* Logo Section */}
          <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
            <img 
              src="/logo.png" 
              alt="StartupWadi Logo" 
              className="rounded-circle me-3" 
              style={{ width: '48px', height: '48px', objectFit: 'cover', boxShadow: '0 3px 6px rgba(0, 0, 0, 0.1)' }}
            />
            <div>
              <h1 className="h5 mb-0 fw-bold" style={{ color: '#344D5A' }}>
                Startup<span style={{ color: '#5A3BC5' }}>Wadi</span>
              </h1>
              <p className="small mb-0" style={{ color: 'Gray' }}>
                Empowering Entrepreneurs
              </p>
            </div>
          </Navbar.Brand>

          {/* Mobile Toggle */}
          <Navbar.Toggle 
            aria-controls="basic-navbar-nav" 
            onClick={() => setShowOffcanvas(true)} 
            className="border-0 shadow-none"
            style={{ color: '#344D5A' }}
          />

          {/* Desktop Navigation */}
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav className="align-items-center ms-md-5">
              {navLinks.map((link, index) => (
                <Nav.Link 
                  key={link.to} 
                  as={Link} 
                  to={link.to}
                  className={`
                    d-flex align-items-center mx-md-2 my-1 my-md-0 px-2 py-2 rounded-pill
                    ${activeLink === index ? 'active' : ''}
                  `}
                  onClick={() => setActiveLink(index)}
                  style={{ 
                    color: activeLink === index ? '#5A3BC5' : '#344D5A',
                    fontWeight: activeLink === index ? '600' : '500',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#5A3BC5';
                    e.currentTarget.style.backgroundColor = 'rgba(90, 59, 197, 0.05)';
                  }}
                  onMouseLeave={(e) => {
                    if (activeLink !== index) {
                      e.currentTarget.style.color = '#344D5A';
                      e.currentTarget.style.backgroundColor = 'transparent';
                    }
                  }}
                >
                  <link.icon className="me-2" size={18} />
                  {link.text}
                </Nav.Link>
              ))}

              {/* Login Button */}
              <Button 
                variant="primary" 
                className="d-flex align-items-center ms-2 px-4 py-2 rounded-pill fw-medium"
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
                onClick={() => navigate('/login')}
              >
                Login
              </Button>
              
              {/* Sign In Button */}
              <Button 
                variant="primary" 
                className="d-flex align-items-center ms-2 px-4 py-2 rounded-pill fw-medium"
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
                onClick={() => navigate('/signin')}
              >
                Sign In
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Mobile Offcanvas Menu */}
      <Offcanvas 
        show={showOffcanvas} 
        onHide={() => setShowOffcanvas(false)} 
        placement="end"
        style={{ maxWidth: '280px' }}
      >
        <Offcanvas.Header closeButton style={{ borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
          <Offcanvas.Title>
            <span style={{ color: '#344D5A', fontWeight: 'bold' }}>Startup</span>
            <span style={{ color: '#5A3BC5', fontWeight: 'bold' }}>Wadi</span>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="px-3">
          <Nav className="flex-column">
            {navLinks.map((link, index) => (
              <Nav.Link 
                key={link.to} 
                as={Link} 
                to={link.to}
                className={`
                  d-flex align-items-center py-3 px-3 rounded-md my-1
                  ${activeLink === index ? 'active' : ''}
                `}
                style={{ 
                  color: activeLink === index ? '#5A3BC5' : '#344D5A',
                  backgroundColor: activeLink === index ? 'rgba(90, 59, 197, 0.05)' : 'transparent',
                  fontWeight: activeLink === index ? '600' : '500',
                  transition: 'all 0.2s ease'
                }}
                onClick={() => {
                  setActiveLink(index);
                  setShowOffcanvas(false);
                }}
              >
                <link.icon className="me-3" size={20} />
                {link.text}
              </Nav.Link>
            ))}

            {/* Mobile Login Button */}
            <Button 
              variant="primary" 
              className="d-flex align-items-center justify-content-center mt-4 py-3 w-100 rounded-pill"
              style={{ 
                backgroundColor: '#5A3BC5', 
                border: 'none',
                boxShadow: '0 4px 10px rgba(90, 59, 197, 0.25)'
              }}
              onClick={() => {
                navigate('/login');
                setShowOffcanvas(false);
              }}
            >
              <PersonCircle className="me-2" size={20} />
              Login
            </Button>
            
            {/* Mobile Sign In Button */}
            <Button 
              variant="outline-primary" 
              className="d-flex align-items-center justify-content-center mt-2 py-3 w-100 rounded-pill"
              style={{ 
                color: '#5A3BC5', 
                borderColor: '#5A3BC5',
                backgroundColor: 'transparent'
              }}
              onClick={() => {
                navigate('/signin');
                setShowOffcanvas(false);
              }}
            >
              <PersonCircle className="me-2" size={20} />
              Sign In
            </Button>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default NavBar;