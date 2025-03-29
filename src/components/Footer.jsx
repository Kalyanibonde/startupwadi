import React from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  PinMap, 
  Phone, 
  Envelope 
} from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white text-dark py-4">
      <Container fluid className="px-4 px-sm-5">
        <Row className="g-4">
          {/* Left Side Content (Company Info, Quick Links, Contact Info) */}
          <Col lg={8}>
            <Row className="g-4">
              {/* Company Info */}
              <Col md={4}>
                <div className="d-flex align-items-center mb-3">
                  <img 
                    src="/logo.png" 
                    alt="StartupWadi Logo" 
                    className="rounded-circle me-3" 
                    style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                  />
                  <h3 className="mb-0" style={{ color: '#344D5A' }}>
                    Startup<span style={{ color: '#5A3BC5' }}>Wadi</span>
                  </h3>
                </div>
                <p className="text-muted">
                  Crafting unforgettable entrepreneurial journeys since 2010. Our mission is to create authentic experiences that connect innovators with opportunities.
                </p>
                
                {/* Social Links */}
                <div className="d-flex gap-3">
                  <Link to="#" className="text-muted" 
                    style={{ transition: 'color 0.2s ease' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#5A3BC5'}
                    onMouseLeave={(e) => e.currentTarget.style.color = ''}
                  >
                    <Facebook size={24} />
                  </Link>
                  <Link to="#" className="text-muted"
                    style={{ transition: 'color 0.2s ease' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#5A3BC5'}
                    onMouseLeave={(e) => e.currentTarget.style.color = ''}
                  >
                    <Twitter size={24} />
                  </Link>
                  <Link to="#" className="text-muted"
                    style={{ transition: 'color 0.2s ease' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#5A3BC5'}
                    onMouseLeave={(e) => e.currentTarget.style.color = ''}
                  >
                    <Instagram size={24} />
                  </Link>
                </div>
              </Col>
              
              {/* Quick Links */}
              <Col md={4}>
                <h5 className="mb-3" style={{ color: '#344D5A' }}>Quick Links</h5>
                <ul className="list-unstyled">
                  <li className="mb-2">
                    <Link to="/" className="text-muted text-decoration-none"
                      style={{ transition: 'color 0.2s ease' }}
                      onMouseEnter={(e) => e.currentTarget.style.color = '#5A3BC5'}
                      onMouseLeave={(e) => e.currentTarget.style.color = ''}
                    >
                      Home
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link to="/about-us" className="text-muted text-decoration-none"
                      style={{ transition: 'color 0.2s ease' }}
                      onMouseEnter={(e) => e.currentTarget.style.color = '#5A3BC5'}
                      onMouseLeave={(e) => e.currentTarget.style.color = ''}
                    >
                      About
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link to="/offerings" className="text-muted text-decoration-none"
                      style={{ transition: 'color 0.2s ease' }}
                      onMouseEnter={(e) => e.currentTarget.style.color = '#5A3BC5'}
                      onMouseLeave={(e) => e.currentTarget.style.color = ''}
                    >
                      Partners
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link to="/get-involved" className="text-muted text-decoration-none"
                      style={{ transition: 'color 0.2s ease' }}
                      onMouseEnter={(e) => e.currentTarget.style.color = '#5A3BC5'}
                      onMouseLeave={(e) => e.currentTarget.style.color = ''}
                    >
                      Testimonials
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link to="/contact" className="text-muted text-decoration-none"
                      style={{ transition: 'color 0.2s ease' }}
                      onMouseEnter={(e) => e.currentTarget.style.color = '#5A3BC5'}
                      onMouseLeave={(e) => e.currentTarget.style.color = ''}
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </Col>
              
              {/* Contact Information */}
              <Col md={4}>
                <h5 className="mb-3" style={{ color: '#344D5A' }}>Contact Us</h5>
                <div className="mb-3">
                  <div className="d-flex align-items-center mb-2">
                    <PinMap className="me-2" style={{ color: '#5A3BC5' }} size={20} />
                    <span className="text-muted">StartupWadi, Pune, India</span>
                  </div>
                  <div className="d-flex align-items-center mb-2">
                    <Phone className="me-2" style={{ color: '#5A3BC5' }} size={20} />
                    <span className="text-muted">+91 (555) 123-4567</span>
                  </div>
                  <div className="d-flex align-items-center">
                    <Envelope className="me-2" style={{ color: '#5A3BC5' }} size={20} />
                    <span className="text-muted">support@startupwadi.com</span>
                  </div>
                </div>
                
                {/* Contact Form - For smaller screens */}
                <div className="d-block d-lg-none mt-4">
                  <h5 className="mb-3" style={{ color: '#344D5A' }}>Get In Touch</h5>
                  <Form>
                    <div className="d-flex gap-2 mb-3">
                      <Form.Control 
                        type="text" 
                        placeholder="Your name" 
                        className="bg-light text-dark border-0" 
                        style={{ boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.1)' }}
                      />
                      <Form.Control 
                        type="email" 
                        placeholder="Your email" 
                        className="bg-light text-dark border-0" 
                        style={{ boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.1)' }}
                      />
                    </div>
                    
                    <Form.Group className="mb-3">
                      <Form.Control 
                        as="textarea" 
                        rows={2} 
                        placeholder="Your message" 
                        className="bg-light text-dark border-0" 
                        style={{ boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.1)' }}
                      />
                    </Form.Group>
                    
                    <Button 
                      variant="primary" 
                      type="submit" 
                      className="w-100 py-2"
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
                      Send
                    </Button>
                  </Form>
                </div>
              </Col>
            </Row>
          </Col>
          
          {/* Right Side Content (Map and Form) */}
          <Col lg={4}>
            <Row className="h-100">
              {/* Map */}
              <Col lg={12}>
                <Card className="bg-white border-0 h-100" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                  <Card.Body className="p-0">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3787.86370772478!2d73.96803507518652!3d18.30783998274493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTjCsDE4JzI4LjIiTiA3M8KwNTgnMTQuMiJF!5e0!3m2!1sen!2sin!4v1742465209254!5m2!1sen!2sin"
                      width="100%"
                      height="200"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="StartupWadi Location"
                    ></iframe>
                  </Card.Body>
                </Card>
              </Col>
              
              {/* Contact Form - For larger screens */}
              <Col lg={12} className="d-none d-lg-block mt-3">
                <h5 className="mb-3" style={{ color: '#344D5A' }}>Get In Touch</h5>
                <Form>
                  <Form.Group className="mb-3">
                    <Form.Control 
                      type="text" 
                      placeholder="Your name" 
                      className="bg-light text-dark border-0" 
                      style={{ boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.1)' }}
                    />
                  </Form.Group>
                  
                  <Form.Group className="mb-3">
                    <Form.Control 
                      type="email" 
                      placeholder="Your email" 
                      className="bg-light text-dark border-0" 
                      style={{ boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.1)' }}
                    />
                  </Form.Group>
                  
                  <Form.Group className="mb-3">
                    <Form.Control 
                      as="textarea" 
                      rows={2} 
                      placeholder="Your message" 
                      className="bg-light text-dark border-0" 
                      style={{ boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.1)' }}
                    />
                  </Form.Group>
                  
                  <Button 
                    variant="primary" 
                    type="submit" 
                    className="w-100 py-2"
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
                    Send Message
                  </Button>
                </Form>
              </Col>
            </Row>
          </Col>
        </Row>
        
        {/* Copyright */}
        <Row className="mt-4 pt-3 border-top">
          <Col>
            <p className="text-muted mb-0 text-center">
              © {new Date().getFullYear()} StartupWadi. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;