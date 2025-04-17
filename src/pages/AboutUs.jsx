import { useState, useEffect } from "react"
import { Container, Row, Col, Card, Nav, Tab, Button, Badge, Carousel } from "react-bootstrap"
import {
  LightbulbFill,
  PeopleFill,
  HeartFill,
  Award,
  Building,
  Diagram3Fill,
  StarFill,
  ArrowRight,
  ChevronRight,
} from "react-bootstrap-icons"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import AOS from "aos"
import "aos/dist/aos.css"
import "../styles/AboutUs.css"

// Import images
import teamPhoto from "../assets/1.jpg"
import founderPhoto from "../assets/2.jpg"
import office1 from "../assets/3.jpg"
import office2 from "../assets/2.jpg"
import office3 from "../assets/4.jpg"

const AboutUs = () => {
  // Initialize AOS animation library
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    })
    AOS.refresh()
  }, [])

  // State for active tab
  const [activeTab, setActiveTab] = useState("organization")

  // State for team members
  const [teamMembers] = useState([
    {
      name: "Amol Nitave",
      position: "Founder & CEO",
      bio: "Visionary entrepreneur with 15+ years of experience in technology and innovation.",
      image: founderPhoto,
    },
    {
      name: "Priya Sharma",
      position: "Chief Operating Officer",
      bio: "Operations expert with a background in scaling startups and optimizing business processes.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Raj Mehta",
      position: "Head of Incubation",
      bio: "Mentor and strategist who has guided over 50 startups from ideation to market success.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Ananya Patel",
      position: "Investment Director",
      bio: "Financial expert with experience in venture capital and startup funding strategies.",
      image: "/placeholder.svg?height=300&width=300",
    },
  ])

  // Startups data
  const startups = [
    { name: "TechNova", category: "AI & Machine Learning", year: 2022 },
    { name: "GreenSolutions", category: "CleanTech", year: 2021 },
    { name: "HealthPlus", category: "HealthTech", year: 2022 },
    { name: "FinEdge", category: "FinTech", year: 2020 },
    { name: "EduSpark", category: "EdTech", year: 2021 },
    { name: "AgriConnect", category: "AgriTech", year: 2023 },
  ]

  // Partners data
  const partners = {
    organizations: [
      { name: "TechHub Global", logo: "/placeholder.svg?height=100&width=200" },
      { name: "Innovation Partners", logo: "/placeholder.svg?height=100&width=200" },
      { name: "Future Fund", logo: "/placeholder.svg?height=100&width=200" },
      { name: "Digital Ventures", logo: "/placeholder.svg?height=100&width=200" },
    ],
    incubators: [
      { name: "Startup Catalyst", logo: "/placeholder.svg?height=100&width=200" },
      { name: "Growth Accelerator", logo: "/placeholder.svg?height=100&width=200" },
      { name: "Venture Labs", logo: "/placeholder.svg?height=100&width=200" },
      { name: "Founder Space", logo: "/placeholder.svg?height=100&width=200" },
    ],
    institutions: [
      { name: "National Institute of Technology", logo: "/placeholder.svg?height=100&width=200" },
      { name: "Indian Institute of Management", logo: "/placeholder.svg?height=100&width=200" },
      { name: "University of Innovation", logo: "/placeholder.svg?height=100&width=200" },
      { name: "Research Institute of Technology", logo: "/placeholder.svg?height=100&width=200" },
    ],
  }

  // Awards data
  const awards = [
    { name: "Best Incubator Award", year: 2023, organization: "National Startup Association" },
    { name: "Innovation Excellence", year: 2022, organization: "Tech Innovation Summit" },
    { name: "Ecosystem Builder of the Year", year: 2021, organization: "Startup India" },
    { name: "Impact Creator Award", year: 2020, organization: "Social Entrepreneurship Forum" },
  ]

  // Gallery images
  const galleryImages = [
    { src: office1, alt: "Startup pitch event", caption: "Annual Startup Pitch Competition" },
    { src: office2, alt: "Networking event", caption: "Networking Session with Industry Leaders" },
    { src: office3, alt: "Workshop session", caption: "Technical Workshop for Incubated Startups" },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Mentorship program",
      caption: "One-on-One Mentorship Program",
    },
    { src: "/placeholder.svg?height=400&width=600", alt: "Demo day", caption: "Demo Day Presentations" },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Investor meeting",
      caption: "Investor-Startup Matchmaking Event",
    },
  ]

  return (
    <div className="about-us-page">
      <NavBar />

      {/* Hero Section */}
      <div className="hero-section text-white text-center position-relative overflow-hidden">
        <div className="overlay "></div>
        <Container className="py-4 position-relative">
          <Row className="justify-content-center">
            <Col lg={8} className="py-5">
              <h1 className="display-3 fw-bold mb-4 text-shadow" data-aos="fade-down" data-aos-delay="100">
                About <span className="text-primary-light">StartupWadi</span>
              </h1>
              <p className="lead mb-4" data-aos="fade-up" data-aos-delay="200">
                India's premier innovation hub fostering the next generation of breakthrough startups
              </p>
             
            </Col>
          </Row>
        </Container>
        <div className="wave-bottom">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>

      {/* Main Content */}
      <Container className="py-5">
        <Row>
          {/* Sidebar */}
          <Col lg={3} md={4} className="mb-4 mb-md-0">
            <div className="sticky-top pt-3" style={{ top: "2rem" }}>
              <Card className="border-0 shadow-sm mb-4">
                <Card.Body>
                  <h5 className="border-start border-4 border-primary ps-3 mb-4">Navigation</h5>
                  <Nav className="flex-column sidebar-nav">
                    <Nav.Link href="#vision" className="d-flex align-items-center">
                      <ChevronRight className="me-2" />
                      Vision
                    </Nav.Link>
                    <Nav.Link href="#mission" className="d-flex align-items-center">
                      <ChevronRight className="me-2" />
                      Mission
                    </Nav.Link>
                    <Nav.Link href="#startups" className="d-flex align-items-center">
                      <ChevronRight className="me-2" />
                      Our Startups
                    </Nav.Link>
                    <Nav.Link href="#partners" className="d-flex align-items-center">
                      <ChevronRight className="me-2" />
                      Ecosystem Partners
                    </Nav.Link>
                    <Nav.Link href="#team" className="d-flex align-items-center">
                      <ChevronRight className="me-2" />
                      Our Team
                    </Nav.Link>
                    <Nav.Link href="#gallery" className="d-flex align-items-center">
                      <ChevronRight className="me-2" />
                      Gallery
                    </Nav.Link>
                    <Nav.Link href="#awards" className="d-flex align-items-center">
                      <ChevronRight className="me-2" />
                      Awards
                    </Nav.Link>
                    <Nav.Link href="#evolvingx" className="d-flex align-items-center">
                      <ChevronRight className="me-2" />
                      About EvolvingX
                    </Nav.Link>
                  </Nav>
                </Card.Body>
              </Card>


            </div>
          </Col>

          {/* Main Content */}
          <Col lg={9} md={8}>
            {/* Vision & Mission Section */}
            <section id="vision" className="mb-5">
              <div className="d-flex align-items-center mb-4">
                <div className="section-icon-container me-3">
                  <LightbulbFill className="section-icon" />
                </div>
                <h2 className="section-title mb-0">Our Vision</h2>
              </div>

              <Row className="align-items-center">
                <Col md={6} className="mb-4 mb-md-0">
                  <div data-aos="fade-right">
                    <p className="lead mb-4">
                      To create a vibrant ecosystem where innovative startups can thrive by gaining access to resources,
                      mentorship, and community support.
                    </p>
                    <p>
                      We envision a future where India leads the global innovation landscape, with StartupWadi serving
                      as the catalyst for transformative ideas that address real-world challenges and create sustainable
                      impact.
                    </p>
                    <div className="d-flex align-items-center mt-4">
                      <div className="vision-stat me-4 text-center">
                        <h3 className="counter-up mb-0">200+</h3>
                        <p className="small mb-0">Startups Supported</p>
                      </div>
                      <div className="vision-stat me-4 text-center">
                        <h3 className="counter-up mb-0">₹500Cr+</h3>
                        <p className="small mb-0">Funding Raised</p>
                      </div>
                      <div className="vision-stat text-center">
                        <h3 className="counter-up mb-0">85%</h3>
                        <p className="small mb-0">Success Rate</p>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="rounded-4 overflow-hidden shadow-lg" data-aos="fade-left">
                    <img
                      src={teamPhoto || "/placeholder.svg"}
                      alt="Our Vision"
                      className="img-fluid w-100 vision-image"
                    />
                  </div>
                </Col>
              </Row>
            </section>

            {/* Mission Section */}
            <section id="mission" className="mb-5">
              <div className="d-flex align-items-center mb-4">
                <div className="section-icon-container me-3">
                  <PeopleFill className="section-icon" />
                </div>
                <h2 className="section-title mb-0">Our Mission</h2>
              </div>

              <div data-aos="fade-up">
                <p className="lead mb-4">
                  Empowering startups by providing essential tools, guidance, and funding opportunities to turn ideas
                  into successful ventures.
                </p>

                <Row className="g-4 mb-4">
                  <Col md={4}>
                    <Card className="h-100 border-0 shadow-sm mission-card">
                      <Card.Body className="p-4">
                        <div className="mission-icon-container mb-3">
                          <Diagram3Fill className="mission-icon" />
                        </div>
                        <h4>Incubation</h4>
                        <p className="mb-0">
                          Providing state-of-the-art infrastructure, mentorship, and resources for early-stage startups.
                        </p>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={4}>
                    <Card className="h-100 border-0 shadow-sm mission-card">
                      <Card.Body className="p-4">
                        <div className="mission-icon-container mb-3">
                          <Building className="mission-icon" />
                        </div>
                        <h4>Acceleration</h4>
                        <p className="mb-0">
                          Helping growth-stage startups scale rapidly through strategic guidance and market access.
                        </p>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={4}>
                    <Card className="h-100 border-0 shadow-sm mission-card">
                      <Card.Body className="p-4">
                        <div className="mission-icon-container mb-3">
                          <HeartFill className="mission-icon" />
                        </div>
                        <h4>Community</h4>
                        <p className="mb-0">
                          Building a supportive network of founders, mentors, investors, and industry experts.
                        </p>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>

                <div className="bg-light p-4 rounded-4 mission-values">
                  <h4 className="mb-3">Our Core Values</h4>
                  <Row>
                    <Col md={4} className="mb-3 mb-md-0">
                      <div className="d-flex align-items-center">
                        <div className="value-icon-container me-3">
                          <StarFill className="value-icon" />
                        </div>
                        <div>
                          <h5 className="mb-1">Integrity</h5>
                          <p className="small mb-0">Maintaining the highest ethical standards in all our operations.</p>
                        </div>
                      </div>
                    </Col>
                    <Col md={4} className="mb-3 mb-md-0">
                      <div className="d-flex align-items-center">
                        <div className="value-icon-container me-3">
                          <StarFill className="value-icon" />
                        </div>
                        <div>
                          <h5 className="mb-1">Innovation</h5>
                          <p className="small mb-0">Embracing creative solutions and forward-thinking approaches.</p>
                        </div>
                      </div>
                    </Col>
                    <Col md={4}>
                      <div className="d-flex align-items-center">
                        <div className="value-icon-container me-3">
                          <StarFill className="value-icon" />
                        </div>
                        <div>
                          <h5 className="mb-1">Inclusivity</h5>
                          <p className="small mb-0">Creating opportunities for entrepreneurs from all backgrounds.</p>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </section>

            {/* Our Startups Section */}
            <section id="startups" className="mb-5">
              <div className="d-flex align-items-center mb-4">
                <div className="section-icon-container me-3">
                  <Building className="section-icon" />
                </div>
                <h2 className="section-title mb-0">Our Startups</h2>
              </div>

              <div data-aos="fade-up">
                <p className="lead mb-4">Supported or Incubated at StartupWadi</p>

                <Row className="g-4">
                  {startups.map((startup, index) => (
                    <Col md={4} key={index}>
                      <Card
                        className="h-100 border-0 shadow-sm startup-card"
                        data-aos="zoom-in"
                        data-aos-delay={index * 100}
                      >
                        <Card.Body className="p-4">
                          <Badge bg="primary" className="mb-3">
                            {startup.category}
                          </Badge>
                          <h4>{startup.name}</h4>
                          <p className="text-muted">Founded: {startup.year}</p>
                          <Button variant="link" className="p-0 startup-link">
                            Learn More <ArrowRight className="ms-1" />
                          </Button>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>

                <div className="text-center mt-4">
                  <Button variant="outline-primary" className="rounded-pill px-4">
                    View All Startups <ArrowRight className="ms-2" />
                  </Button>
                </div>
              </div>
            </section>

            {/* Ecosystem Partners Section */}
            <section id="partners" className="mb-5">
              <div className="d-flex align-items-center mb-4">
                <div className="section-icon-container me-3">
                  <Diagram3Fill className="section-icon" />
                </div>
                <h2 className="section-title mb-0">Ecosystem Partners</h2>
              </div>

              <div data-aos="fade-up">
                <p className="lead mb-4">
                  We collaborate with leading organizations to create a robust support system for startups
                </p>

                <Tab.Container id="partners-tabs" activeKey={activeTab} onSelect={(k) => setActiveTab(k)}>
                  <Nav variant="tabs" className="mb-4 partner-tabs">
                    <Nav.Item>
                      <Nav.Link eventKey="organization">Organizations</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="incubators">Incubators</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="institutions">Institutions</Nav.Link>
                    </Nav.Item>
                  </Nav>

                  <Tab.Content>
                    <Tab.Pane eventKey="organization">
                      <Row className="g-4">
                        {partners.organizations.map((partner, index) => (
                          <Col md={3} sm={6} key={index}>
                            <Card
                              className="h-100 border-0 shadow-sm partner-card"
                              data-aos="fade-up"
                              data-aos-delay={index * 100}
                            >
                              <Card.Body className="p-4 text-center">
                                <img
                                  src={partner.logo || "/placeholder.svg"}
                                  alt={partner.name}
                                  className="img-fluid mb-3 partner-logo"
                                />
                                <h5>{partner.name}</h5>
                              </Card.Body>
                            </Card>
                          </Col>
                        ))}
                      </Row>
                    </Tab.Pane>

                    <Tab.Pane eventKey="incubators">
                      <Row className="g-4">
                        {partners.incubators.map((partner, index) => (
                          <Col md={3} sm={6} key={index}>
                            <Card
                              className="h-100 border-0 shadow-sm partner-card"
                              data-aos="fade-up"
                              data-aos-delay={index * 100}
                            >
                              <Card.Body className="p-4 text-center">
                                <img
                                  src={partner.logo || "/placeholder.svg"}
                                  alt={partner.name}
                                  className="img-fluid mb-3 partner-logo"
                                />
                                <h5>{partner.name}</h5>
                              </Card.Body>
                            </Card>
                          </Col>
                        ))}
                      </Row>
                    </Tab.Pane>

                    <Tab.Pane eventKey="institutions">
                      <Row className="g-4">
                        {partners.institutions.map((partner, index) => (
                          <Col md={3} sm={6} key={index}>
                            <Card
                              className="h-100 border-0 shadow-sm partner-card"
                              data-aos="fade-up"
                              data-aos-delay={index * 100}
                            >
                              <Card.Body className="p-4 text-center">
                                <img
                                  src={partner.logo || "/placeholder.svg"}
                                  alt={partner.name}
                                  className="img-fluid mb-3 partner-logo"
                                />
                                <h5>{partner.name}</h5>
                              </Card.Body>
                            </Card>
                          </Col>
                        ))}
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>
            </section>

            {/* Team Section */}
            <section id="team" className="mb-5">
              <div className="d-flex align-items-center mb-4">
                <div className="section-icon-container me-3">
                  <PeopleFill className="section-icon" />
                </div>
                <h2 className="section-title mb-0">Our Team</h2>
              </div>

              <div data-aos="fade-up">
                <p className="lead mb-4">Meet the passionate individuals driving StartupWadi's mission</p>

                <Row className="g-4">
                  {teamMembers.map((member, index) => (
                    <Col lg={3} md={6} key={index}>
                      <Card className="border-0 shadow-sm team-card" data-aos="fade-up" data-aos-delay={index * 100}>
                        <div className="team-image-container">
                          <img src={member.image || "/placeholder.svg"} alt={member.name} className="team-image" />
                          <div className="team-social">
                            <a href="#" className="team-social-icon">
                              <i className="bi bi-linkedin"></i>
                            </a>
                            <a href="#" className="team-social-icon">
                              <i className="bi bi-twitter"></i>
                            </a>
                          </div>
                        </div>
                        <Card.Body className="text-center p-4">
                          <h5 className="mb-1">{member.name}</h5>
                          <p className="text-primary mb-2">{member.position}</p>
                          <p className="small mb-0">{member.bio}</p>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>

                <div className="text-center mt-4">
                  <Button variant="outline-primary" className="rounded-pill px-4">
                    Meet the Full Team <ArrowRight className="ms-2" />
                  </Button>
                </div>
              </div>
            </section>

            {/* Gallery Section */}
            <section id="gallery" className="mb-5">
              <div className="d-flex align-items-center mb-4">
                <div className="section-icon-container me-3">
                  <i className="bi bi-images section-icon"></i>
                </div>
                <h2 className="section-title mb-0">Gallery</h2>
              </div>

              <div data-aos="fade-up">
                <p className="lead mb-4">Glimpses of our events, workshops, and community activities</p>

                <Carousel className="gallery-carousel mb-4" indicators={true} controls={true}>
                  {galleryImages.slice(0, 3).map((image, index) => (
                    <Carousel.Item key={index}>
                      <img
                        className="d-block w-100 gallery-carousel-image"
                        src={image.src || "/placeholder.svg"}
                        alt={image.alt}
                      />
                      <Carousel.Caption>
                        <h5>{image.caption}</h5>
                      </Carousel.Caption>
                    </Carousel.Item>
                  ))}
                </Carousel>

                <Row className="g-4">
                  {galleryImages.slice(3).map((image, index) => (
                    <Col md={4} key={index}>
                      <div className="gallery-item" data-aos="zoom-in" data-aos-delay={index * 100}>
                        <img
                          src={image.src || "/placeholder.svg"}
                          alt={image.alt}
                          className="img-fluid w-100 rounded-3"
                        />
                        <div className="gallery-caption">
                          <h6 className="mb-0">{image.caption}</h6>
                        </div>
                      </div>
                    </Col>
                  ))}
                </Row>
              </div>
            </section>

            {/* Awards Section */}
            <section id="awards" className="mb-5">
              <div className="d-flex align-items-center mb-4">
                <div className="section-icon-container me-3">
                  <Award className="section-icon" />
                </div>
                <h2 className="section-title mb-0">Awards & Achievements</h2>
              </div>

              <div className="awards-container p-4 rounded-4" data-aos="fade-up">
                <Row className="g-4">
                  {awards.map((award, index) => (
                    <Col md={6} key={index}>
                      <div className="award-item d-flex" data-aos="fade-right" data-aos-delay={index * 100}>
                        <div className="award-year me-3">
                          <span>{award.year}</span>
                        </div>
                        <div>
                          <h5 className="mb-1">{award.name}</h5>
                          <p className="mb-0 text-muted">{award.organization}</p>
                        </div>
                      </div>
                    </Col>
                  ))}
                </Row>
              </div>
            </section>

            {/* About EvolvingX Section */}
            <section id="evolvingx" className="mb-5">
              <div className="d-flex align-items-center mb-4">
                <div className="section-icon-container me-3">
                  <Building className="section-icon" />
                </div>
                <h2 className="section-title mb-0">About EvolvingX</h2>
              </div>

              <Card className="border-0 shadow-sm overflow-hidden" data-aos="fade-up">
                <Row className="g-0">
                  <Col md={5}>
                    <div className="h-100">
                      <img
                        src="/placeholder.svg?height=400&width=400"
                        alt="EvolvingX"
                        className="img-fluid h-100 w-100 object-cover"
                      />
                    </div>
                  </Col>
                  <Col md={7}>
                    <Card.Body className="p-4">
                      <h4 className="mb-3">Our Parent Organization</h4>
                      <p className="mb-3">
                        StartupWadi is proudly backed by EvolvingX, a leading innovation conglomerate building the
                        future of technology across various sectors. Together, we're creating an integrated platform for
                        next-generation entrepreneurs.
                      </p>
                      <p className="mb-4">
                        EvolvingX brings decades of industry expertise, global connections, and strategic vision to
                        support StartupWadi's mission of nurturing India's most promising startups.
                      </p>
                      <div className="d-flex align-items-center">
                        <Button variant="primary" className="me-3">
                          Visit EvolvingX <ArrowRight className="ms-2" />
                        </Button>
                        <Button variant="outline-primary">Partnership Opportunities</Button>
                      </div>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            </section>

            
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default AboutUs

