import { Container, Row, Col, Card, Button, Nav, Navbar } from "react-bootstrap"



const OfferingsSection = () => {

  // Sample offerings data

  const offerings = [

    {

      id: 1,

      title: "Business Consulting",

      description:

        "Expert guidance to help your business grow and overcome challenges. Our consultants bring years of industry experience to help you navigate complex business landscapes.",

      image: "/placeholder.svg?height=300&width=400",

    },

    {

      id: 2,

      title: "Digital Marketing",

      description:

        "Comprehensive digital marketing strategies to increase your online presence and drive customer engagement through multiple channels.",

      image: "/placeholder.svg?height=300&width=400",

    },

    {

      id: 3,

      title: "Web Development",

      description:

        "Custom website development services tailored to your specific business needs, with responsive design and user-friendly interfaces.",

      image: "/placeholder.svg?height=300&width=400",

    },

    {

      id: 4,

      title: "Brand Strategy",

      description:

        "Develop a strong brand identity that resonates with your target audience and sets you apart from competitors in the marketplace.",

      image: "/placeholder.svg?height=300&width=400",

    },

    {

      id: 5,

      title: "Financial Planning",

      description:

        "Strategic financial planning services to optimize your resources, manage cash flow, and plan for sustainable growth.",

      image: "/placeholder.svg?height=300&width=400",

    },

  ]



  // Sample merchandise data

  const merchandise = [

    {

      id: 1,

      title: "Premium Package",

      description: "Our comprehensive solution for businesses looking to scale quickly",

      price: "$299",

    },

    {

      id: 2,

      title: "Standard Package",

      description: "Perfect for small businesses and startups beginning their journey",

      price: "$199",

    },

    {

      id: 3,

      title: "Basic Package",

      description: "Essential services to establish your business foundation",

      price: "$99",

    },

  ]



  return (

    <div className="d-flex flex-column min-vh-100">

      {/* Navigation Bar */}

      <Navbar bg="light" expand="lg" className="border-bottom">

        <Container>

          <Navbar.Brand href="#home">Logo</Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">

            <Nav className="ms-auto">

              <Nav.Link href="#home">Home</Nav.Link>

              <Nav.Link href="#experience">Experience</Nav.Link>

              <Nav.Link href="#about">About Us</Nav.Link>

              <Nav.Link href="#contact">Contact</Nav.Link>

            </Nav>

            <Button variant="outline-secondary" className="ms-2">

              Login

            </Button>

          </Navbar.Collapse>

        </Container>

      </Navbar>



      {/* Main Content */}

      <Container className="py-5 flex-grow-1">

        {/* Offerings Header */}

        <Row className="mb-5">

          <Col className="text-center">

          <h1 className="display-4 mb-3" style={{ color: "#344D5A", fontWeight: "bold" }}>
  What We <span style={{ color: "#5A3BC5", fontWeight: "bold" }}>Offer</span>
</h1>


            <div

              className="mx-auto"

              style={{ height: "4px", width: "50px", background: "#6c757d", marginTop: "15px" }}

            ></div>

          </Col>

        </Row>



        {/* Offerings Items */}

        {offerings.map((offering) => (

          <Row key={offering.id} className="mb-5 align-items-center">

            <Col md={5} className="mb-4 mb-md-0">

              <img

                src={offering.image || "/placeholder.svg"}

                alt={offering.title}

                className="img-fluid rounded shadow-sm"

              />

            </Col>

            <Col md={7}>

              <div className="bg-light p-4 rounded shadow-sm h-100">

                <h3 className="mb-3">{offering.title}</h3>

                <p className="text-muted">{offering.description}</p>

                <Button variant="outline-secondary" className="mt-2">

                  Learn More

                </Button>

              </div>

            </Col>

          </Row>

        ))}

      </Container>



      {/* Footer */}

      <footer className="bg-light py-4 mt-5">

      </footer>

    </div>

  )

}



export default OfferingsSection