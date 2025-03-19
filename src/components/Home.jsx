import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, MapPin, Plus, User, ArrowDown, Menu, X } from 'lucide-react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Separator } from '../components/ui/separator';
import { Sheet, SheetContent, SheetTrigger } from '../components/ui/sheet';
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
import { Badge } from '../components/ui/badge';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const sectionRefs = useRef({});

  // Modern color palette with deep blues and purples
  const colors = {
    primary: '#3A36E0',
    secondary: '#6C63FF',
    accent: '#FC5A5A',
    background: '#F8FAFC',
    darkBg: '#1A1A2E',
    text: '#1E293B',
    lightText: '#94A3B8',
    white: '#FFFFFF',
    card: '#FFFFFF',
    border: '#E2E8F0',
    muted: '#F1F5F9',
    gradient: 'linear-gradient(135deg, #3A36E0 0%, #6C63FF 100%)',
  };

  const slides = [
    '/api/placeholder/1920/1080',
    '/api/placeholder/1920/1080',
    '/api/placeholder/1920/1080',
  ];

  const offerings = [
    { id: 1, img: '/api/placeholder/600/400', title: 'Team Building', desc: 'Strengthen team bonds through collaborative challenges' },
    { id: 2, img: '/api/placeholder/600/400', title: 'Outdoor Activities', desc: 'Experience nature while developing leadership skills' },
    { id: 3, img: '/api/placeholder/600/400', title: 'Group Events', desc: 'Customized events for teams of all sizes' },
  ];

  const events = [
    { id: 1, img: '/api/placeholder/400/300', title: 'Corporate Retreat', date: 'March 10, 2025' },
    { id: 2, img: '/api/placeholder/400/300', title: 'Team Challenge', date: 'April 5, 2025' },
    { id: 3, img: '/api/placeholder/400/300', title: 'Leadership Summit', date: 'May 12, 2025' },
    { id: 4, img: '/api/placeholder/400/300', title: 'Outdoor Workshop', date: 'June 20, 2025' },
  ];

  const testimonials = [
    { 
      id: 1, 
      text: 'The team building event exceeded our expectations. Our employees are still talking about it months later!', 
      author: 'Sarah Johnson', 
      position: 'HR Director, TechCorp',
      avatar: '/api/placeholder/100/100'
    },
    { 
      id: 2, 
      text: 'The attention to detail and personalization made our retreat truly special. Highly recommend!', 
      author: 'Michael Chen', 
      position: 'CEO, Innovate Inc',
      avatar: '/api/placeholder/100/100'
    },
    { 
      id: 3, 
      text: 'Professional, engaging, and transformative. Our team dynamics improved dramatically after our event.', 
      author: 'Jessica Miller', 
      position: 'Team Lead, CreativeSolutions',
      avatar: '/api/placeholder/100/100'
    },
  ];

  const partners = {
    corporate: Array(4).fill(null).map((_, i) => ({ id: i, logo: '/api/placeholder/150/150', name: `Partner ${i+1}` })),
    institutional: Array(4).fill(null).map((_, i) => ({ id: i, logo: '/api/placeholder/150/150', name: `Institution ${i+1}` })),
  };

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About Us' },
    { href: '#offerings', label: 'Services' },
    { href: '#events', label: 'Events' },
    { href: '#partners', label: 'Partners' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      let current = 'home';
      Object.entries(sectionRefs.current).forEach(([section, ref]) => {
        if (ref && ref.offsetTop <= scrollPosition) {
          current = section;
        }
      });
      
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    
    const slideInterval = setInterval(() => {
      setCurrentSlide(current => (current + 1) % slides.length);
    }, 5000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(slideInterval);
    };
  }, [slides.length]);

  const setSectionRef = (section, ref) => {
    sectionRefs.current[section] = ref;
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
  };

  return (
    <div className="font-sans text-base antialiased" style={{ color: colors.text, background: colors.background }}>
      {/* Navigation */}
      <header className="fixed top-0 w-full z-50 transition-all duration-300 bg-white/90 backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="font-bold text-xl" style={{ color: colors.primary }}>LOGO</div>
              <div className="ml-2 text-sm text-gray-500">Tagline</div>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href.slice(1));
                  }}
                  className={`text-sm font-medium transition-colors hover:text-primary relative ${
                    activeSection === link.href.slice(1) ? 'text-primary' : 'text-gray-600'
                  }`}
                  style={{
                    color: activeSection === link.href.slice(1) ? colors.primary : undefined,
                  }}
                >
                  {link.label}
                  {activeSection === link.href.slice(1) && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute -bottom-1 left-0 w-full h-0.5 rounded-full bg-primary"
                      style={{ backgroundColor: colors.primary }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </a>
              ))}
              <Button 
                variant="outline" 
                className="flex items-center gap-2"
                style={{ borderColor: colors.primary, color: colors.primary }}
              >
                <User size={16} />
                Login
              </Button>
            </nav>
            
            {/* Mobile Navigation */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-64">
                <div className="flex flex-col space-y-6 py-6">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(link.href.slice(1));
                      }}
                      className={`text-base font-medium transition-colors ${
                        activeSection === link.href.slice(1) ? 'text-primary' : 'text-gray-700'
                      }`}
                      style={{
                        color: activeSection === link.href.slice(1) ? colors.primary : undefined,
                      }}
                    >
                      {link.label}
                    </a>
                  ))}
                  <Separator />
                  <Button className="w-full" style={{ backgroundColor: colors.primary }}>
                    <User size={16} className="mr-2" />
                    Login
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section 
        id="home" 
        ref={(ref) => setSectionRef('home', ref)} 
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          
           
              <img 
                src={slides[currentSlide]} 
                alt={`Slide ${currentSlide + 1}`} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/20" />
            
          
         
          
          <div className="absolute bottom-8 left-1/2  flex space-x-2 z-10">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full  ${
                  currentSlide === index ? 'bg-white' : 'bg-white/40'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="max-w-4xl mx-auto text-center text-white"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Transform Your Team</h1>
            <p className="text-xl md:text-2xl mb-8">Discover exceptional team building experiences tailored to your organization's needs</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="text-lg" 
                style={{ backgroundColor: colors.primary }}
              >
                Explore Services
              </Button>
              <Button size="lg" variant="outline" className="text-lg border-white text-white">
                Contact Us
              </Button>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 animate-bounce"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: 2 }}
        >
          <a 
            href="#about" 
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('about');
            }}
          >
            <ArrowDown className="text-white" />
          </a>
        </motion.div>
      </section>

      {/* About Section */}
      <section 
        id="about" 
        ref={(ref) => setSectionRef('about', ref)} 
        className="min-h-screen flex items-center py-24 bg-white"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-1"
            >
              <Card className="h-full shadow-md">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold" style={{ color: colors.primary }}>About Us</CardTitle>
                  <CardDescription>Learn our story</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>Our team of experienced facilitators is dedicated to creating memorable events that transform teams and organizations.</p>
                  <p>With over 10 years in the industry, we've helped hundreds of companies achieve their team-building goals.</p>
                  <Button variant="outline" className="mt-4" style={{ color: colors.primary, borderColor: colors.primary }}>
                    Read More
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-1"
            >
              <Card className="h-full shadow-md">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold" style={{ color: colors.primary }}>Recent Events</CardTitle>
                  <CardDescription>What we've been up to</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2">
                    {events.slice(0, 4).map((event) => (
                      <div key={event.id} className="relative overflow-hidden rounded-md group">
                        <img 
                          src={event.img} 
                          alt={event.title} 
                          className="w-full h-24 object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-2">
                          <span className="text-xs text-white font-medium">{event.title}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-center mt-4 gap-1">
                    <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                      <span className="sr-only">Previous events</span>
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                      <span className="sr-only">Next events</span>
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="lg:col-span-1"
            >
              <Card className="h-full shadow-md">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold" style={{ color: colors.primary }}>Overview</CardTitle>
                  <CardDescription>Why choose us</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-2">
                    <Badge style={{ backgroundColor: colors.secondary }} className="mt-1">01</Badge>
                    <div>
                      <h4 className="font-semibold">Customized Programs</h4>
                      <p className="text-sm text-gray-600">Tailored to your specific team needs and objectives</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <Badge style={{ backgroundColor: colors.secondary }} className="mt-1">02</Badge>
                    <div>
                      <h4 className="font-semibold">Expert Facilitators</h4>
                      <p className="text-sm text-gray-600">Professional guides with years of experience</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <Badge style={{ backgroundColor: colors.secondary }} className="mt-1">03</Badge>
                    <div>
                      <h4 className="font-semibold">Beautiful Locations</h4>
                      <p className="text-sm text-gray-600">Scenic venues that inspire creativity and connection</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Offerings Section */}
      <section 
        id="offerings" 
        ref={(ref) => setSectionRef('offerings', ref)} 
        className="min-h-screen flex items-center py-24"
        style={{ backgroundColor: colors.muted }}
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4" style={{ color: colors.primary }}>What We Offer</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Comprehensive programs designed to strengthen teams and develop leadership skills</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offerings.map((offer, index) => (
              <motion.div
                key={offer.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden h-full transition-all duration-300 hover:shadow-xl">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={offer.img} 
                      alt={offer.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>{offer.title}</CardTitle>
                    <CardDescription>{offer.desc}</CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Button style={{ backgroundColor: colors.primary }} className="w-full">Learn More</Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center mt-16"
          >
            <Button 
              size="lg" 
              className="text-lg"
              style={{ 
                background: colors.gradient,
                boxShadow: '0 4px 14px rgba(106, 99, 255, 0.39)'
              }}
            >
              Explore All Offerings
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Events Section */}
      <section 
        id="events" 
        ref={(ref) => setSectionRef('events', ref)} 
        className="min-h-screen flex items-center py-24"
        style={{ background: colors.gradient }}
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-white">Upcoming Events</h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">Join us for these transformative experiences</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {events.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden h-full bg-white/10 backdrop-blur-lg border-0 text-white">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={event.img} 
                      alt={event.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-3 left-3">
                      <Badge className="bg-white/20 backdrop-blur-sm text-white hover:bg-white/30">
                        {event.date}
                      </Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-white">{event.title}</CardTitle>
                  </CardHeader>
                  <CardFooter>
                    <Button variant="secondary" className="w-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30">
                      Register
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section 
        id="partners" 
        ref={(ref) => setSectionRef('partners', ref)} 
        className="min-h-screen flex items-center py-24 bg-white"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4" style={{ color: colors.primary }}>Our Partners</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Trusted by leading organizations</p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-2xl font-bold mb-8 text-center"
                style={{ color: colors.secondary }}
              >
                Corporate
              </motion.h3>
              <div className="grid grid-cols-2 gap-8">
                {partners.corporate.map((partner, index) => (
                  <motion.div 
                    key={partner.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex flex-col items-center"
                  >
                    <div className="relative">
                      <div className="w-32 h-32 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden border-4 border-gray-50 shadow-md">
                        <img src={partner.logo} alt={partner.name} className="w-full h-full object-cover" />
                      </div>
                      {index === 1 && (
                        <Button 
                          size="icon" 
                          className="absolute -bottom-2 -right-2 rounded-full" 
                          style={{ backgroundColor: colors.primary }}
                        >
                          <Plus size={16} />
                        </Button>
                      )}
                    </div>
                    <p className="mt-3 font-medium text-gray-700">{partner.name}</p>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div>
              <motion.h3
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-2xl font-bold mb-8 text-center"
                style={{ color: colors.secondary }}
              >
                Institutional
              </motion.h3>
              <div className="grid grid-cols-2 gap-8">
                {partners.institutional.map((partner, index) => (
                  <motion.div 
                    key={partner.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                    className="flex flex-col items-center"
                  >
                    <div className="relative">
                      <div className="w-32 h-32 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden border-4 border-gray-50 shadow-md">
                        <img src={partner.logo} alt={partner.name} className="w-full h-full object-cover" />
                      </div>
                      {index === 3 && (
                        <Button 
                          size="icon" 
                          className="absolute -bottom-2 -right-2 rounded-full" 
                          style={{ backgroundColor: colors.primary }}
                        >
                          <Plus size={16} />
                        </Button>
                      )}
                    </div>
                    <p className="mt-3 font-medium text-gray-700">{partner.name}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section 
        id="testimonials" 
        ref={(ref) => setSectionRef('testimonials', ref)} 
        className="min-h-screen flex items-center py-24"
        style={{ backgroundColor: colors.muted }}
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4" style={{ color: colors.primary }}>Testimonials</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">What our clients say about us</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full shadow-md relative pt-10">
                  <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
                   
                      <Avatar className="w-20 h-20 border-4 border-white shadow-lg">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                      <AvatarFallback>{testimonial.author.charAt(0)}</AvatarFallback>
                    </Avatar>
                  </div>
                  <CardHeader className="text-center pt-10">
                    <CardTitle className="text-lg font-semibold">{testimonial.author}</CardTitle>
                    <CardDescription>{testimonial.position}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 italic">{testimonial.text}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section 
        id="contact" 
        ref={(ref) => setSectionRef('contact', ref)} 
        className="min-h-screen flex items-center py-24"
        style={{ background: colors.gradient }}
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-white">Contact Us</h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">Get in touch to plan your next event</p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="h-full shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold" style={{ color: colors.primary }}>
                    Send us a message
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Name</label>
                        <input 
                          type="text" 
                          className="w-full px-3 py-2 border rounded-md" 
                          placeholder="Your name" 
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Email</label>
                        <input 
                          type="email" 
                          className="w-full px-3 py-2 border rounded-md" 
                          placeholder="Your email" 
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Subject</label>
                      <input 
                        type="text" 
                        className="w-full px-3 py-2 border rounded-md" 
                        placeholder="Subject" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Message</label>
                      <textarea 
                        className="w-full px-3 py-2 border rounded-md h-32" 
                        placeholder="Your message" 
                      />
                    </div>
                    <Button 
                      className="w-full"
                      style={{ backgroundColor: colors.primary }}
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="h-full shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold" style={{ color: colors.primary }}>
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin size={24} style={{ color: colors.primary }} />
                    <div>
                      <h4 className="font-semibold">Address</h4>
                      <p className="text-gray-600">123 Team Building Road, Adventure City, AC 12345</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: colors.primary }}>
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold">Phone</h4>
                      <p className="text-gray-600">(123) 456-7890</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: colors.primary }}>
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                    <div>
                      <h4 className="font-semibold">Email</h4>
                      <p className="text-gray-600">info@teambuilding.example</p>
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <h4 className="font-semibold mb-2">Office Hours</h4>
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between">
                        <span>Monday - Friday</span>
                        <span>9:00 AM - 5:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Saturday</span>
                        <span>10:00 AM - 2:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sunday</span>
                        <span>Closed</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <h4 className="font-semibold mb-2">Follow Us</h4>
                    <div className="flex gap-4">
                      <Button variant="outline" size="icon" className="rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                        </svg>
                      </Button>
                      <Button variant="outline" size="icon" className="rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                        </svg>
                      </Button>
                      <Button variant="outline" size="icon" className="rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                        </svg>
                      </Button>
                      <Button variant="outline" size="icon" className="rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                          <rect x="2" y="9" width="4" height="12" />
                          <circle cx="4" cy="4" r="2" />
                        </svg>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">LOGO</h3>
              <p className="text-gray-400">Transforming teams through exceptional experiences since 2010.</p>
              <div className="mt-4 flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Instagram</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772 4.902 4.902 0 011.772-1.153c.636-.247 1.363-.416 2.427-.465C9.531 2.013 9.886 2 12.315 2z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a 
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(link.href.slice(1));
                      }}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                {offerings.map((offer) => (
                  <li key={offer.id}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      {offer.title}
                    </a>
                  </li>
                ))}
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Custom Events
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Virtual Teams
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
              <p className="text-gray-400 mb-4">Subscribe to get the latest updates</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="px-3 py-2 bg-gray-800 text-white rounded-l-md focus:outline-none focus:ring-1 focus:ring-primary"
                  style={{ borderColor: colors.primary }}
                />
                <Button 
                  className="rounded-l-none"
                  style={{ backgroundColor: colors.primary }}
                >
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} Company Name. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-sm text-gray-400 hover:text-white">Privacy Policy</a>
                <a href="#" className="text-sm text-gray-400 hover:text-white">Terms of Service</a>
                <a href="#" className="text-sm text-gray-400 hover:text-white">Cookies Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;