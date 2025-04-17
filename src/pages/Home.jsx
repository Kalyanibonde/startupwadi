import { Container, Row, Col, Card, Button, Carousel ,Badge} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// Import Navbar and Footer components
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowLeft, 
  ArrowRight, 
  Building, 
  BoxArrowUpRight, 
  Link, 
  Calendar, 
  GeoAlt ,
  StarFill, 
  ChevronLeft, 
  ChevronRight, 
  Quote 
} from 'react-bootstrap-icons';
// Images (ensure these are imported correctly)
import first from "../assets/1.jpg";
import second from "../assets/2.jpg";
import third from "../assets/3.jpg";
import fourth from "../assets/4.jpg";

// Hero Section
const Hero = () => {
  const slides = [
    { image: fourth, title: "🌱 From Idea to Impact" },
    { image: first, title: "🎯 Turning Visions into Reality" },
    { image: second, title: "💡 Fueling Innovation & Creativity" },
    { image: third, title: "🏆 Dream. Build. Disrupt." },
  ];

  return (
    <Carousel controls={false} indicators={false} className="w-100">
      {slides.map((slide, index) => (
        <Carousel.Item key={index} className="w-100">
          <div
            className="d-flex align-items-center justify-content-center text-white text-center position-relative"
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "100vw", // Ensure full width
              height: "100vh", // Full height of viewport
              marginTop: "0", 
              overflow: "hidden",
            }}
          >
            {/* Overlay for readability */}
            <div
              className="position-absolute top-0 start-0 end-0 bottom-0"
              style={{
                backgroundColor: "rgba(134, 130, 130, 0.5)",
              }}
            />
            <Container className="position-relative">
              <h1 className="display mb-3 text-responsive">{slide.title}</h1>
            
            </Container>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

const AboutSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const aboutItems = [
    {
      icon: "🚀",
      title: "India's Premier Startup Ecosystem",
      description: "StartupWadi is a vibrant innovation hub dedicated to nurturing India's most promising startups. Our state-of-the-art facilities and mentor network empower entrepreneurs to transform their ideas into scalable ventures."
    },
    {
      icon: "💡",
      title: "Comprehensive Incubation Programs",
      description: "Our sector-agnostic incubation programs provide end-to-end support including funding, mentorship, legal guidance, and market access. We've helped launch over 200+ startups with a combined valuation exceeding $500M."
    },
    {
      icon: "🔄",
      title: "Part of the EvolvingX Ecosystem",
      description: "StartupWadi is proudly backed by EvolvingX, a leading innovation conglomerate building the future of technology across various sectors. Together, we're creating an integrated platform for next-generation entrepreneurs."
    }
  ];
  
  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % aboutItems.length);
  };
  
  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + aboutItems.length) % aboutItems.length);
  };
  
  return (
    <section className="py-5" style={{ backgroundColor: "#f8f9fa" }}>
      <Container fluid className="px-4">
        <Row className="text-center mb-5">
          <Col>
            <h2 className="mb-3">
              About <span style={{ color: '#5A3BC5' }}>StartupWadi</span>
            </h2>
            <p className="text-muted mx-auto" style={{ maxWidth: '700px' }}>
              India's premier innovation hub for tomorrow's breakthrough startups
            </p>
            <div className="mx-auto mt-3" style={{ 
              height: '4px', 
              width: '80px', 
              background: '#5A3BC5', 
              borderRadius: '2px'
            }}></div>
          </Col>
        </Row>
        
        <Row className="mb-5 justify-content-center">
          <Col md={6} className="mb-4 mb-md-0">
            <Card 
              className="border-0 shadow-sm overflow-hidden h-100"
              style={{ 
                transition: 'all 0.3s ease',
                transform: 'translateY(0)',
                borderRadius: '12px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-10px)";
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(90, 59, 197, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = '';
              }}
            >
              <Card.Body className="p-4">
                <div className="text-center mb-4">
                  <div className="d-inline-block rounded-circle p-3 mb-3" style={{
                    background: '#5A3BC5',
                    color: 'white',
                    fontSize: '2.5rem',
                    boxShadow: '0 4px 10px rgba(90, 59, 197, 0.25)'
                  }}>
                    {aboutItems[activeIndex].icon}
                  </div>
                  <h3 className="mb-3" style={{ color: '#344D5A' }}>{aboutItems[activeIndex].title}</h3>
                  <p className="text-muted mb-4 mx-auto">
                    {aboutItems[activeIndex].description}
                  </p>
                  
                  <div className="d-flex justify-content-center align-items-center gap-3 mb-2">
                    <Button 
                      variant="outline-secondary" 
                      className="rounded-circle d-flex align-items-center justify-content-center"
                      onClick={handlePrev}
                      style={{ 
                        width: '45px', 
                        height: '45px',
                        border: '2px solid rgba(90, 59, 197, 0.2)',
                        color: '#5A3BC5'
                      }}
                    >
                      <span aria-hidden="true">&lsaquo;</span>
                      <span className="visually-hidden">Previous</span>
                    </Button>
                    
                    <div className="d-flex align-items-center gap-2">
                      {aboutItems.map((_, i) => (
                        <Button 
                          key={i} 
                          variant={activeIndex === i ? "primary" : "light"}
                          className="rounded-pill p-0 border-0 mx-1"
                          onClick={() => setActiveIndex(i)}
                          style={{ 
                            width: activeIndex === i ? '2.5rem' : '0.75rem', 
                            height: '0.75rem',
                            backgroundColor: activeIndex === i ? '#5A3BC5' : '#dee2e6',
                            transition: 'all 0.3s ease'
                          }}
                          aria-label={`Go to content ${i + 1}`}
                        ></Button>
                      ))}
                    </div>
                    
                    <Button 
                      variant="outline-secondary" 
                      className="rounded-circle d-flex align-items-center justify-content-center"
                      onClick={handleNext}
                      style={{ 
                        width: '45px', 
                        height: '45px',
                        border: '2px solid rgba(90, 59, 197, 0.2)',
                        color: '#5A3BC5'
                      }}
                    >
                      <span aria-hidden="true">&rsaquo;</span>
                      <span className="visually-hidden">Next</span>
                    </Button>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6}>
            <Card 
              className="border-0 h-100 shadow-sm"
              style={{ 
                transition: 'all 0.3s ease',
                transform: 'translateY(0)',
                borderRadius: '12px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-10px)";
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(90, 59, 197, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = '';
              }}
            >
              <Card.Body className="p-4">
                <div className="d-inline-flex align-items-center justify-content-center rounded-circle mb-4" style={{
                  width: '60px',
                  height: '60px',
                  background: 'rgba(90, 59, 197, 0.1)',
                  color: '#5A3BC5'
                }}>
                  <span style={{ fontSize: '1.75rem' }}>✧</span>
                </div>
                
                <h4 className="mb-3" style={{ color: '#344D5A' }}>Why Join StartupWadi?</h4>
                <div style={{ 
                  height: '3px', 
                  width: '60px', 
                  background: '#5A3BC5', 
                  borderRadius: '2px',
                  marginBottom: '1.5rem'
                }}></div>
                <Row>
                  <Col xs={12}>
                    <ul className="list-unstyled">
                      {[
                        "Connect with India's top investors and venture capitalists",
                        "Learn from successful founders who built multi-million dollar companies",
                        "Participate in hands-on workshops led by industry experts",
                        "Showcase your startup to potential customers and partners"
                      ].map((item, index) => (
                        <li key={index} className="mb-4 d-flex align-items-start">
                          <div className="me-3 rounded-circle d-flex align-items-center justify-content-center" style={{
                            width: '28px',
                            height: '28px',
                            backgroundColor: 'rgba(90, 59, 197, 0.15)',
                            color: '#5A3BC5',
                            flexShrink: 0,
                            marginTop: '2px'
                          }}>
                            <span>✓</span>
                          </div>
                          <span className="text-muted">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer className="bg-white border-0 p-4 pt-0">
                <button 
                  className="btn w-100"
                  style={{ 
                    backgroundColor: '#5A3BC5', 
                    color: 'white',
                    boxShadow: '0 4px 10px rgba(90, 59, 197, 0.25)',
                    transition: 'all 0.2s ease',
                    padding: '12px',
                    borderRadius: '8px',
                    fontWeight: '500'
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
                  View Upcoming Events
                </button>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};


const OfferingsSection = () => {
  const offerings = [
    {
      title: "Group Adventures",
      description: "Join like-minded travelers for unforgettable group experiences.",
      image: fourth,
    },
    {
      title: "Custom Itineraries",
      description: "Personalized travel plans designed for your specific interests.",
      image: first,
    },
    {
      title: "Local Workshops",
      description: "Authentic cultural experiences led by local experts.",
      image: second,
    },
  ];

  return (
    <section className="py-5 bg-white">
      <Container fluid className="px-4 px-sm-5">
        <Row className="mb-4 text-center">
          <Col>
            <h2 className="mb-3" style={{ color: '#344D5A' }}>Explore Our <span style={{ color: '#5A3BC5' }}>Offerings</span></h2>
            <p className="text-muted mb-0 mx-auto" style={{ maxWidth: '700px' }}>
              Crafting unforgettable entrepreneurial journeys since 2010. Choose the experience that matches your vision.
            </p>
          </Col>
        </Row>
        
        <Row className="g-4">
          {offerings.map((offering, index) => (
            <Col md={4} key={index}>
              <Card 
                className="border-0 h-100" 
                style={{ 
                  boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                  transition: 'all 0.3s ease',
                  transform: 'translateY(0)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-10px)";
                  e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.05)';
                }}
              >
                <Card.Img 
                  variant="top" 
                  src={offering.image} 
                  alt={offering.title}
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <Card.Body>
                  <h4 style={{ color: '#344D5A' }}>{offering.title}</h4>
                  <p className="text-muted">{offering.description}</p>
                  <Link 
                    to="/offering-details" 
                    className="text-decoration-none d-inline-flex align-items-center"
                    style={{ 
                      color: '#5A3BC5',
                      transition: 'color 0.2s ease',
                      fontWeight: '500'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#4a30a3'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#5A3BC5'}
                  >
                    Learn More
                    <ArrowRight size={18} className="ms-2" />
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <Row className="mt-5 text-center">
          <Col>
            <Button 
              variant="primary" 
              className="px-4 py-2"
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
              View All Offerings
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

const PartnerSection = () => {
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
    <section 
      className="py-16"
      style={{ 
        background: 'linear-gradient(to bottom, #f8f9fa, #e9ecef)',
      }}
    >
      <Container>
        {/* Partners Section Header */}
        <div className="mb-12 text-center">
          <h2 
            className="text-3xl font-bold mb-2"
            style={{ color: '#344D5A' }}
          >
            Our Partners
          </h2>
          <div 
            className="w-20 h-1 mx-auto"
            style={{ backgroundColor: '#5A3BC5' }}
          ></div>
          <p 
            className="mt-4 max-w-2xl mx-auto"
            style={{ color: '#6c757d' }}
          >
            We collaborate with industry-leading companies to bring you exceptional travel experiences
          </p>
        </div>
        
        {/* Partners Grid */}
        <Row className="g-4">
          {partners.map((partner, index) => (
            <Col key={index} xs={6} md={4} lg={2} className="mb-4">
              <div 
                className="transform transition-duration-300"
                style={{
                  transition: 'transform 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                <div 
                  className="rounded-lg p-4 h-24 d-flex align-items-center justify-content-center"
                  style={{ 
                    backgroundColor: 'white',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)'
                  }}
                >
                  <img 
                    src={partner.logo} 
                    alt={partner.name} 
                    className="max-h-16"
                    style={{ maxHeight: '4rem' }}
                  />
                </div>
                <p 
                  className="text-center mt-2 text-sm"
                  style={{ color: '#5A3BC5', fontWeight: '500', fontSize: '0.875rem' }}
                >
                  {partner.name}
                </p>
              </div>
            </Col>
          ))}
        </Row>
        
        {/* Institutions Section Header */}
        <div className="mt-16 mb-8 text-center">
          <h2 
            className="text-3xl font-bold mb-2"
            style={{ color: '#344D5A' }}
          >
            Trusted By
          </h2>
          <div 
            className="w-20 h-1 mx-auto"
            style={{ backgroundColor: '#5A3BC5' }}
          ></div>
          <p 
            className="mt-4 max-w-2xl mx-auto"
            style={{ color: '#6c757d' }}
          >
            Endorsed by prestigious institutions worldwide
          </p>
        </div>
        
        {/* Institutions Grid */}
        <Row className="g-4">
          {institutions.map((institution, index) => (
            <Col key={index} xs={6} md={4} lg={2} className="mb-4">
              <div 
                className="transform transition-duration-300"
                style={{
                  transition: 'transform 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                <div 
                  className="rounded-lg p-4 h-24 d-flex align-items-center justify-content-center"
                  style={{ 
                    backgroundColor: 'white',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
                    border: '1px solid rgba(90, 59, 197, 0.08)'
                  }}
                >
                  <img 
                    src={institution.logo} 
                    alt={institution.name} 
                    className="max-h-16"
                    style={{ maxHeight: '4rem' }}
                  />
                </div>
                <p 
                  className="text-center mt-2 text-sm"
                  style={{ color: '#5A3BC5', fontWeight: '500', fontSize: '0.875rem' }}
                >
                  {institution.name}
                </p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};


// Testimonials Section Component
const TestimonialSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Sample testimonial data
  const testimonials = [
    {
      id: 1,
      name: "Amol Nitave",
      position: "Founder & CEO, EvolingX",
      image: "/testimonials/sarah.jpg",
      quote: "StartupWadi transformed our early-stage idea into a viable business. The mentorship and networking opportunities were invaluable to our growth and funding success.",
      rating: 5
    },
    {
      id: 2,
      name: "XYZ",
      position: "CTO, FinanceFlow",
      image: "/testimonials/ahmed.jpg",
      quote: "The technical resources and industry connections provided by StartupWadi helped us refine our product and reach our target market much faster than we could have on our own.",
      rating: 5
    },
    {
      id: 3,
      name: "ABC",
      position: "Co-founder, HealthTech Innovations",
      image: "/testimonials/priya.jpg",
      quote: "StartupWadi's structured approach to startup development and their extensive network of healthcare experts were game-changers for our business trajectory.",
      rating: 5
    }
  ];

  const handlePrev = () => {
    setActiveIndex(prev => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex(prev => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-5 my-5">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-5">
          <h6 
            className="text-uppercase fw-bold mb-2"
            style={{ color: '#5A3BC5', letterSpacing: '1.5px', fontSize: '0.85rem' }}
          >
            Success Stories
          </h6>
          <h2 
            className="fw-bold mb-3"
            style={{ color: '#344D5A' }}
          >
            What Our Founders Say
          </h2>
          <div className="mx-auto" style={{ maxWidth: '650px' }}>
            <p className="text-muted">
              Hear directly from the entrepreneurs who have successfully launched and grown their startups with our support.
            </p>
          </div>
        </div>

        {/* Testimonial Cards */}
        <Row className="justify-content-center">
          <Col lg={8} xl={7}>
            <Card 
              className="border-0 p-4 p-md-5 position-relative"
              style={{ 
                borderRadius: '16px',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
                transition: 'all 0.3s ease'
              }}
            >
              {/* Quote Icon */}
              <div 
                className="position-absolute d-none d-md-flex align-items-center justify-content-center"
                style={{ 
                  top: '30px', 
                  left: '30px',
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(90, 59, 197, 0.1)'
                }}
              >
                <Quote size={22} style={{ color: '#5A3BC5' }} />
              </div>

              <Row className="g-4 align-items-center">
                {/* Testimonial Image */}
                <Col md={4} className="text-center">
                  <div 
                    className="mb-3 mb-md-0 mx-auto"
                    style={{ 
                      width: '120px',
                      height: '120px',
                      borderRadius: '50%',
                      overflow: 'hidden',
                      border: '3px solid white',
                      boxShadow: '0 8px 20px rgba(90, 59, 197, 0.2)'
                    }}
                  >
                    <img 
                      src={testimonials[activeIndex].image} 
                      alt={testimonials[activeIndex].name}
                      style={{ 
                        width: '100%', 
                        height: '100%', 
                        objectFit: 'cover' 
                      }}
                    />
                  </div>
                </Col>

                {/* Testimonial Content */}
                <Col md={8}>
                  {/* Rating Stars */}
                  <div className="d-flex justify-content-md-start justify-content-center mb-3">
                    {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                      <StarFill key={i} size={18} style={{ color: '#FFD700', marginRight: '3px' }} />
                    ))}
                  </div>

                  {/* Quote */}
                  <p 
                    className="fst-italic mb-4 text-center text-md-start"
                    style={{ color: '#555', lineHeight: '1.8' }}
                  >
                    "{testimonials[activeIndex].quote}"
                  </p>

                  {/* Name and Position */}
                  <div className="text-center text-md-start">
                    <h5 
                      className="fw-bold mb-1"
                      style={{ color: '#344D5A' }}
                    >
                      {testimonials[activeIndex].name}
                    </h5>
                    <p 
                      className="mb-0"
                      style={{ color: '#5A3BC5', fontWeight: '500' }}
                    >
                      {testimonials[activeIndex].position}
                    </p>
                  </div>
                </Col>
              </Row>
            </Card>

            {/* Navigation Controls */}
            <div className="d-flex justify-content-center mt-4">
              <button 
                className="btn rounded-circle me-2 d-flex align-items-center justify-content-center"
                onClick={handlePrev}
                style={{ 
                  width: '44px', 
                  height: '44px', 
                  backgroundColor: 'white',
                  border: '1px solid rgba(90, 59, 197, 0.2)',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.05)',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#5A3BC5';
                  e.currentTarget.style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'white';
                  e.currentTarget.style.color = 'black';
                }}
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                className="btn rounded-circle ms-2 d-flex align-items-center justify-content-center"
                onClick={handleNext}
                style={{ 
                  width: '44px', 
                  height: '44px', 
                  backgroundColor: 'white',
                  border: '1px solid rgba(90, 59, 197, 0.2)',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.05)',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#5A3BC5';
                  e.currentTarget.style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'white';
                  e.currentTarget.style.color = 'black';
                }}
              >
                <ChevronRight size={20} />
              </button>
            </div>

            {/* Indicators */}
            <div className="d-flex justify-content-center mt-3">
              {testimonials.map((_, index) => (
                <button 
                  key={index} 
                  className="btn p-0 mx-1"
                  onClick={() => setActiveIndex(index)}
                  style={{ 
                    width: index === activeIndex ? '24px' : '8px',
                    height: '8px',
                    borderRadius: '4px',
                    backgroundColor: index === activeIndex ? '#5A3BC5' : '#D1D1D1',
                    transition: 'all 0.3s ease',
                    border: 'none'
                  }}
                />
              ))}
            </div>
          </Col>
        </Row>

        {/* CTA Button */}
        <div className="text-center mt-5">
          <button 
            className="btn px-4 py-2 rounded-pill fw-medium"
            style={{ 
              backgroundColor: '#5A3BC5', 
              color: 'white',
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
            Read More Success Stories
          </button>
        </div>
      </Container>
    </section>
  );
};



// Home Component
const Home = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <NavBar />
      <main className="flex-grow-1">
        <Hero />
        <AboutSection />
        <OfferingsSection />
        <PartnerSection />
        <TestimonialSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;