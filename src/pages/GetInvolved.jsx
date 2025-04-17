import { useState } from "react"
import { Container, Row, Col, Card, Button, Form, Table, Alert, ProgressBar } from "react-bootstrap"
import { ArrowLeft, ArrowRight, InfoCircle, CheckCircleFill } from "react-bootstrap-icons"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
// At the top of GetInvolved.jsx
import '../styles/GetInvolved.css';
const GetInvolved = () => {
  // State for tracking the current step
  const [currentStep, setCurrentStep] = useState(1)
  const totalSteps = 8

  // Form data state
  const [formData, setFormData] = useState({
    // Availability
    startDate: "",
    endDate: "",

    // Accommodation
    totalPeople: 0,
    maleCount: 0,
    femaleCount: 0,
    childrenCount: 0,
    tentCount: 0,
    roomCount: 0,

    // Food
    foodItems: [{ id: 1, date: "", item: "", quantity: 0, calories: 0, cost: 0 }],

    // Facilities
    facilities: [
      { id: 1, name: "Hall", startDateTime: "", endDateTime: "", cost: 0, selected: false },
      { id: 2, name: "Projector", startDateTime: "", endDateTime: "", cost: 0, selected: false },
      { id: 3, name: "A/V", startDateTime: "", endDateTime: "", cost: 0, selected: false },
      { id: 4, name: "Stationary", startDateTime: "", endDateTime: "", cost: 0, selected: false },
    ],

    // Services
    services: [
      { id: 1, name: "Yoga", startDateTime: "", endDateTime: "", cost: 0, selected: false },
      { id: 2, name: "Visit", startDateTime: "", endDateTime: "", cost: 0, selected: false },
      { id: 3, name: "Trek", startDateTime: "", endDateTime: "", cost: 0, selected: false },
    ],

    // Merchandise
    merchandise: [
      { id: 1, name: "Item 1", quantity: 0, size: "", price: 0 },
      { id: 2, name: "Item 2", quantity: 0, size: "", price: 0 },
      { id: 3, name: "Item 3", quantity: 0, size: "", price: 0 },
      { id: 4, name: "Item 4", quantity: 0, size: "", price: 0 },
    ],

    // Terms acceptance
    termsAccepted: false,
  })

  // Handle form data changes
  const handleInputChange = (e, section, index, field) => {
    const { name, value, type, checked } = e.target

    if (section) {
      // Handle nested array updates
      const updatedItems = [...formData[section]]
      if (field) {
        updatedItems[index][field] = type === "checkbox" ? checked : value
      } else {
        updatedItems[index] = { ...updatedItems[index], [name]: value }
      }

      setFormData({
        ...formData,
        [section]: updatedItems,
      })
    } else {
      // Handle direct field updates
      setFormData({
        ...formData,
        [name]: type === "checkbox" ? checked : value,
      })
    }
  }

  // Add new item to arrays
  const addItem = (section) => {
    const lastItem = formData[section][formData[section].length - 1]
    const newItem = { ...lastItem, id: lastItem.id + 1 }

    // Reset values except id
    Object.keys(newItem).forEach((key) => {
      if (key !== "id" && key !== "name") {
        if (typeof newItem[key] === "number") {
          newItem[key] = 0
        } else if (typeof newItem[key] === "string") {
          newItem[key] = ""
        } else if (typeof newItem[key] === "boolean") {
          newItem[key] = false
        }
      }
    })

    setFormData({
      ...formData,
      [section]: [...formData[section], newItem],
    })
  }

  // Remove item from arrays
  const removeItem = (section, id) => {
    if (formData[section].length <= 1) return // Keep at least one item

    setFormData({
      ...formData,
      [section]: formData[section].filter((item) => item.id !== id),
    })
  }

  // Calculate totals
  const calculateTotal = (section, field = "cost") => {
    return formData[section].reduce((total, item) => {
      // For facilities and services, only count if selected
      if ((section === "facilities" || section === "services") && !item.selected) {
        return total
      }

      // For merchandise, multiply quantity by price
      if (section === "merchandise") {
        return total + item.quantity * item.price
      }

      return total + (Number.parseFloat(item[field]) || 0)
    }, 0)
  }

  // Calculate grand total
  const calculateGrandTotal = () => {
    const accommodationTotal = 0 // You would calculate this based on your pricing model
    const foodTotal = calculateTotal("foodItems")
    const facilitiesTotal = calculateTotal("facilities")
    const servicesTotal = calculateTotal("services")
    const merchandiseTotal = calculateTotal("merchandise")

    return accommodationTotal + foodTotal + facilitiesTotal + servicesTotal + merchandiseTotal
  }

  // Navigation functions
  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
      window.scrollTo(0, 0)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
      window.scrollTo(0, 0)
    }
  }

  // Step titles for progress indicator
  const stepTitles = [
    "Check Availability",
    "Accommodation",
    "Food",
    "Facilities",
    "Services",
    "Merchandise",
    "Summary",
    "Guidelines",
  ]

  // Render the current step content
  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return <AvailabilityStep formData={formData} handleInputChange={handleInputChange} />
      case 2:
        return <AccommodationStep formData={formData} handleInputChange={handleInputChange} />
      case 3:
        return (
          <FoodStep
            formData={formData}
            handleInputChange={handleInputChange}
            addItem={() => addItem("foodItems")}
            removeItem={(id) => removeItem("foodItems", id)}
            calculateTotal={() => calculateTotal("foodItems")}
          />
        )
      case 4:
        return (
          <FacilitiesStep
            formData={formData}
            handleInputChange={handleInputChange}
            calculateTotal={() => calculateTotal("facilities")}
          />
        )
      case 5:
        return (
          <ServicesStep
            formData={formData}
            handleInputChange={handleInputChange}
            calculateTotal={() => calculateTotal("services")}
          />
        )
      case 6:
        return (
          <MerchandiseStep
            formData={formData}
            handleInputChange={handleInputChange}
            addItem={() => addItem("merchandise")}
            removeItem={(id) => removeItem("merchandise", id)}
            calculateTotal={() => calculateTotal("merchandise")}
          />
        )
      case 7:
        return (
          <SummaryStep formData={formData} calculateTotal={calculateTotal} calculateGrandTotal={calculateGrandTotal} />
        )
      case 8:
        return <GuidelinesStep formData={formData} handleInputChange={handleInputChange} />
      default:
        return <AvailabilityStep formData={formData} handleInputChange={handleInputChange} />
    }
  }

  return (
    <div className="d-flex flex-column min-vh-100">
      <NavBar />
      <main className="flex-grow-1 py-5" style={{ backgroundColor: "#f8f9fa" }}>
        <Container className="mt-5">
          <Row className="mb-5 text-center">
            <Col>
            <h1 className="display-4 mb-3" style={{ color: "#344D5A", fontWeight: "bold" }}>
  Get <span style={{ color: "#5A3BC5", fontWeight: "bold" }}>Involved</span>
</h1>

              <p className="lead text-muted">
                Join us for an immersive experience. Complete the booking process below.
              </p>
              <div
                className="mx-auto mt-3"
                style={{
                  height: "4px",
                  width: "80px",
                  background: "#5A3BC5",
                  borderRadius: "2px",
                }}
              ></div>
            </Col>
          </Row>

          {/* Progress Bar */}
          <Row className="mb-4">
            <Col>
              <Card className="border-0 shadow-sm">
                <Card.Body className="p-4">
                  <div className="d-flex justify-content-between mb-2">
                    {stepTitles.map((title, index) => (
                      <div
                        key={index}
                        className={`position-relative d-none d-md-block ${index + 1 === currentStep ? "fw-bold" : "text-muted"}`}
                        style={{ width: `${100 / stepTitles.length}%`, fontSize: "0.8rem", textAlign: "center" }}
                      >
                        {title}
                      </div>
                    ))}
                  </div>
                  <ProgressBar
                    now={(currentStep / totalSteps) * 100}
                    variant="primary"
                    style={{ height: "8px", backgroundColor: "#e9ecef" }}
                    className="mb-2"
                  />
                  <div className="d-flex justify-content-between">
                    {stepTitles.map((_, index) => (
                      <div
                        key={index}
                        className={`rounded-circle d-flex align-items-center justify-content-center ${
                          index + 1 < currentStep
                            ? "bg-success text-white"
                            : index + 1 === currentStep
                              ? "bg-primary text-white"
                              : "bg-light"
                        }`}
                        style={{
                          width: "30px",
                          height: "30px",
                          fontSize: "0.8rem",
                          border: index + 1 > currentStep ? "1px solid #dee2e6" : "none",
                        }}
                      >
                        {index + 1 < currentStep ? <CheckCircleFill size={16} /> : index + 1}
                      </div>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Step Content */}
          <Row>
            <Col>
              <Card className="border-0 shadow-sm mb-4">
                <Card.Header className="bg-white border-bottom-0 pt-4 pb-0 px-4">
                  <h3 className="mb-0" style={{ color: "#344D5A" }}>
                    {stepTitles[currentStep - 1]}
                  </h3>
                </Card.Header>
                <Card.Body className="p-4">{renderStepContent()}</Card.Body>
                <Card.Footer className="bg-white border-top-0 p-4">
                  <div className="d-flex justify-content-between">
                    <Button
                      variant="outline-secondary"
                      onClick={prevStep}
                      disabled={currentStep === 1}
                      className="d-flex align-items-center"
                    >
                      <ArrowLeft className="me-2" /> Previous
                    </Button>

                    {currentStep < totalSteps ? (
                      <Button
                        variant="primary"
                        onClick={nextStep}
                        className="d-flex align-items-center"
                        style={{
                          backgroundColor: "#5A3BC5",
                          borderColor: "#5A3BC5",
                          boxShadow: "0 4px 10px rgba(90, 59, 197, 0.25)",
                        }}
                      >
                        Next <ArrowRight className="ms-2" />
                      </Button>
                    ) : (
                      <Button
                        variant="success"
                        onClick={() => alert("Booking submitted successfully!")}
                        className="d-flex align-items-center"
                        disabled={!formData.termsAccepted}
                      >
                        Submit Booking <CheckCircleFill className="ms-2" />
                      </Button>
                    )}
                  </div>
                </Card.Footer>
              </Card>
            </Col>
          </Row>
        </Container>
      </main>
      <Footer />
    </div>
  )
}

// Step 1: Availability
const AvailabilityStep = ({ formData, handleInputChange }) => {
  return (
    <Row>
      <Col md={6} className="mb-4 mb-md-0">
        <h5 className="mb-3">Select Your Dates</h5>
        <Form.Group className="mb-3">
          <Form.Label>From</Form.Label>
          <Form.Control type="date" name="startDate" value={formData.startDate} onChange={handleInputChange} required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>To</Form.Label>
          <Form.Control type="date" name="endDate" value={formData.endDate} onChange={handleInputChange} required />
        </Form.Group>
        <Alert variant="info" className="d-flex align-items-start">
          <InfoCircle className="me-2 mt-1 flex-shrink-0" />
          <div>
            <strong>Booking Notice:</strong> Please select dates at least 7 days in advance for proper arrangements.
          </div>
        </Alert>
      </Col>
      <Col md={6}>
        <h5 className="mb-3">What are you booking?</h5>
        <Form.Group className="mb-3">
          <Form.Label>Accommodation</Form.Label>
          <Form.Select name="accommodationType" onChange={handleInputChange}>
            <option value="">Select accommodation type</option>
            <option value="dorm">Dormitory</option>
            <option value="tent">Tent</option>
            <option value="room">Private Room</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Hall & Breakout Area</Form.Label>
          <Form.Select name="hallType" onChange={handleInputChange}>
            <option value="">Select hall type</option>
            <option value="small">Small (up to 20 people)</option>
            <option value="medium">Medium (up to 50 people)</option>
            <option value="large">Large (up to 100 people)</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Food Option</Form.Label>
          <Form.Select name="foodOption" onChange={handleInputChange}>
            <option value="">Select food option</option>
            <option value="veg">Vegetarian</option>
            <option value="nonveg">Non-Vegetarian</option>
            <option value="vegan">Vegan</option>
          </Form.Select>
        </Form.Group>
      </Col>
    </Row>
  )
}

// Step 2: Accommodation
const AccommodationStep = ({ formData, handleInputChange }) => {
  return (
    <Row>
      <Col>
        <h5 className="mb-4">Number of People</h5>
        <Row className="mb-4">
          <Col md={4}>
            <Form.Group className="mb-3">
              <Form.Label>Male</Form.Label>
              <Form.Control
                type="number"
                min="0"
                name="maleCount"
                value={formData.maleCount}
                onChange={handleInputChange}
              />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group className="mb-3">
              <Form.Label>Female</Form.Label>
              <Form.Control
                type="number"
                min="0"
                name="femaleCount"
                value={formData.femaleCount}
                onChange={handleInputChange}
              />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group className="mb-3">
              <Form.Label>Children (Below 10 years)</Form.Label>
              <Form.Control
                type="number"
                min="0"
                name="childrenCount"
                value={formData.childrenCount}
                onChange={handleInputChange}
              />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Number of Tents</Form.Label>
              <Form.Select name="tentCount" value={formData.tentCount} onChange={handleInputChange}>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5+</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Number of Rooms</Form.Label>
              <Form.Select name="roomCount" value={formData.roomCount} onChange={handleInputChange}>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5+</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-3">
          <Form.Label>Total People</Form.Label>
          <Form.Control
            type="number"
            min="1"
            name="totalPeople"
            value={
              Number.parseInt(formData.maleCount) +
                Number.parseInt(formData.femaleCount) +
                Number.parseInt(formData.childrenCount) || 0
            }
            readOnly
            className="bg-light"
          />
        </Form.Group>

        <Alert variant="info" className="mt-3 d-flex align-items-start">
          <InfoCircle className="me-2 mt-1 flex-shrink-0" />
          <div>
            <strong>Accommodation Details:</strong> Each tent can accommodate up to 2 people. Rooms can accommodate 2-4
            people depending on the type.
          </div>
        </Alert>
      </Col>
    </Row>
  )
}

// Step 3: Food
const FoodStep = ({ formData, handleInputChange, addItem, removeItem, calculateTotal }) => {
  return (
    <Row>
      <Col>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h5 className="mb-0">Food Requirements</h5>
          <Button
            variant="outline-primary"
            size="sm"
            onClick={addItem}
            style={{ color: "#5A3BC5", borderColor: "#5A3BC5" }}
          >
            Add Item
          </Button>
        </div>

        <div className="table-responsive">
          <Table bordered hover>
            <thead className="bg-light">
              <tr>
                <th style={{ width: "5%" }}>#</th>
                <th style={{ width: "25%" }}>Date & Time</th>
                <th style={{ width: "30%" }}>Food Item</th>
                <th style={{ width: "15%" }}>Quantity</th>
                <th style={{ width: "10%" }}>Calories</th>
                <th style={{ width: "10%" }}>Cost</th>
                <th style={{ width: "5%" }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {formData.foodItems.map((item, index) => (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>
                    <Form.Control
                      type="datetime-local"
                      name="date"
                      value={item.date}
                      onChange={(e) => handleInputChange(e, "foodItems", index)}
                      size="sm"
                    />
                  </td>
                  <td>
                    <Form.Control
                      type="text"
                      name="item"
                      value={item.item}
                      onChange={(e) => handleInputChange(e, "foodItems", index)}
                      placeholder="Enter food item"
                      size="sm"
                    />
                  </td>
                  <td>
                    <Form.Control
                      type="number"
                      name="quantity"
                      value={item.quantity}
                      onChange={(e) => handleInputChange(e, "foodItems", index)}
                      min="0"
                      size="sm"
                    />
                  </td>
                  <td>
                    <Form.Control
                      type="number"
                      name="calories"
                      value={item.calories}
                      onChange={(e) => handleInputChange(e, "foodItems", index)}
                      min="0"
                      size="sm"
                    />
                  </td>
                  <td>
                    <Form.Control
                      type="number"
                      name="cost"
                      value={item.cost}
                      onChange={(e) => handleInputChange(e, "foodItems", index)}
                      min="0"
                      size="sm"
                    />
                  </td>
                  <td>
                    <Button
                      variant="outline-danger"
                      size="sm"
                      onClick={() => removeItem(item.id)}
                      disabled={formData.foodItems.length <= 1}
                    >
                      ×
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="5" className="text-end fw-bold">
                  Total:
                </td>
                <td colSpan="2" className="fw-bold">
                  ${calculateTotal().toFixed(2)}
                </td>
              </tr>
            </tfoot>
          </Table>
        </div>

        <Alert variant="info" className="mt-3 d-flex align-items-start">
          <InfoCircle className="me-2 mt-1 flex-shrink-0" />
          <div>
            <strong>Food Options:</strong> We offer a variety of meal options including vegetarian, vegan, and
            gluten-free. Please specify any dietary restrictions in the notes.
          </div>
        </Alert>
      </Col>
    </Row>
  )
}

// Step 4: Facilities
const FacilitiesStep = ({ formData, handleInputChange, calculateTotal }) => {
  return (
    <Row>
      <Col>
        <h5 className="mb-4">Select Facilities</h5>

        <div className="table-responsive">
          <Table bordered hover>
            <thead className="bg-light">
              <tr>
                <th style={{ width: "5%" }}></th>
                <th style={{ width: "25%" }}>Facility</th>
                <th style={{ width: "30%" }}>Start Date & Time</th>
                <th style={{ width: "30%" }}>End Date & Time</th>
                <th style={{ width: "10%" }}>Cost</th>
              </tr>
            </thead>
            <tbody>
              {formData.facilities.map((facility, index) => (
                <tr key={facility.id}>
                  <td>
                    <Form.Check
                      type="checkbox"
                      checked={facility.selected}
                      onChange={(e) => handleInputChange(e, "facilities", index, "selected")}
                    />
                  </td>
                  <td>{facility.name}</td>
                  <td>
                    <Form.Control
                      type="datetime-local"
                      name="startDateTime"
                      value={facility.startDateTime}
                      onChange={(e) => handleInputChange(e, "facilities", index)}
                      disabled={!facility.selected}
                      size="sm"
                    />
                  </td>
                  <td>
                    <Form.Control
                      type="datetime-local"
                      name="endDateTime"
                      value={facility.endDateTime}
                      onChange={(e) => handleInputChange(e, "facilities", index)}
                      disabled={!facility.selected}
                      size="sm"
                    />
                  </td>
                  <td>
                    <Form.Control
                      type="number"
                      name="cost"
                      value={facility.cost}
                      onChange={(e) => handleInputChange(e, "facilities", index)}
                      disabled={!facility.selected}
                      min="0"
                      size="sm"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="4" className="text-end fw-bold">
                  Total:
                </td>
                <td className="fw-bold">${calculateTotal().toFixed(2)}</td>
              </tr>
            </tfoot>
          </Table>
        </div>

        <Alert variant="info" className="mt-3 d-flex align-items-start">
          <InfoCircle className="me-2 mt-1 flex-shrink-0" />
          <div>
            <strong>Facility Information:</strong> All facilities are subject to availability. The hall can accommodate
            up to 100 people and includes basic AV equipment.
          </div>
        </Alert>
      </Col>
    </Row>
  )
}

// Step 5: Services
const ServicesStep = ({ formData, handleInputChange, calculateTotal }) => {
  return (
    <Row>
      <Col>
        <h5 className="mb-4">Select Services</h5>

        <div className="table-responsive">
          <Table bordered hover>
            <thead className="bg-light">
              <tr>
                <th style={{ width: "5%" }}></th>
                <th style={{ width: "25%" }}>Service</th>
                <th style={{ width: "30%" }}>Start Date & Time</th>
                <th style={{ width: "30%" }}>End Date & Time</th>
                <th style={{ width: "10%" }}>Cost</th>
              </tr>
            </thead>
            <tbody>
              {formData.services.map((service, index) => (
                <tr key={service.id}>
                  <td>
                    <Form.Check
                      type="checkbox"
                      checked={service.selected}
                      onChange={(e) => handleInputChange(e, "services", index, "selected")}
                    />
                  </td>
                  <td>{service.name}</td>
                  <td>
                    <Form.Control
                      type="datetime-local"
                      name="startDateTime"
                      value={service.startDateTime}
                      onChange={(e) => handleInputChange(e, "services", index)}
                      disabled={!service.selected}
                      size="sm"
                    />
                  </td>
                  <td>
                    <Form.Control
                      type="datetime-local"
                      name="endDateTime"
                      value={service.endDateTime}
                      onChange={(e) => handleInputChange(e, "services", index)}
                      disabled={!service.selected}
                      size="sm"
                    />
                  </td>
                  <td>
                    <Form.Control
                      type="number"
                      name="cost"
                      value={service.cost}
                      onChange={(e) => handleInputChange(e, "services", index)}
                      disabled={!service.selected}
                      min="0"
                      size="sm"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="4" className="text-end fw-bold">
                  Total:
                </td>
                <td className="fw-bold">${calculateTotal().toFixed(2)}</td>
              </tr>
            </tfoot>
          </Table>
        </div>

        <Alert variant="info" className="mt-3 d-flex align-items-start">
          <InfoCircle className="me-2 mt-1 flex-shrink-0" />
          <div>
            <strong>Service Information:</strong> Our services are led by experienced professionals. Yoga sessions are
            suitable for all levels. Trek difficulty varies by route - please consult with our staff for details.
          </div>
        </Alert>
      </Col>
    </Row>
  )
}

// Step 6: Merchandise
const MerchandiseStep = ({ formData, handleInputChange, addItem, removeItem, calculateTotal }) => {
  return (
    <Row>
      <Col>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h5 className="mb-0">Merchandise Requirements</h5>
          <Button
            variant="outline-primary"
            size="sm"
            onClick={addItem}
            style={{ color: "#5A3BC5", borderColor: "#5A3BC5" }}
          >
            Add Item
          </Button>
        </div>

        <div className="table-responsive">
          <Table bordered hover>
            <thead className="bg-light">
              <tr>
                <th style={{ width: "5%" }}>#</th>
                <th style={{ width: "40%" }}>Item Name</th>
                <th style={{ width: "15%" }}>Quantity</th>
                <th style={{ width: "20%" }}>Size</th>
                <th style={{ width: "15%" }}>Price</th>
                <th style={{ width: "5%" }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {formData.merchandise.map((item, index) => (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>
                    <Form.Control
                      type="text"
                      name="name"
                      value={item.name}
                      onChange={(e) => handleInputChange(e, "merchandise", index)}
                      placeholder="Enter item name"
                      size="sm"
                    />
                  </td>
                  <td>
                    <Form.Control
                      type="number"
                      name="quantity"
                      value={item.quantity}
                      onChange={(e) => handleInputChange(e, "merchandise", index)}
                      min="0"
                      size="sm"
                    />
                  </td>
                  <td>
                    <Form.Select
                      name="size"
                      value={item.size}
                      onChange={(e) => handleInputChange(e, "merchandise", index)}
                      size="sm"
                    >
                      <option value="">Select size</option>
                      <option value="S">Small</option>
                      <option value="M">Medium</option>
                      <option value="L">Large</option>
                      <option value="XL">X-Large</option>
                      <option value="XXL">XX-Large</option>
                    </Form.Select>
                  </td>
                  <td>
                    <Form.Control
                      type="number"
                      name="price"
                      value={item.price}
                      onChange={(e) => handleInputChange(e, "merchandise", index)}
                      min="0"
                      size="sm"
                    />
                  </td>
                  <td>
                    <Button
                      variant="outline-danger"
                      size="sm"
                      onClick={() => removeItem(item.id)}
                      disabled={formData.merchandise.length <= 1}
                    >
                      ×
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="4" className="text-end fw-bold">
                  Total:
                </td>
                <td colSpan="2" className="fw-bold">
                  ${calculateTotal().toFixed(2)}
                </td>
              </tr>
            </tfoot>
          </Table>
        </div>

        <Alert variant="info" className="mt-3 d-flex align-items-start">
          <InfoCircle className="me-2 mt-1 flex-shrink-0" />
          <div>
            <strong>Merchandise Information:</strong> All merchandise is subject to availability. Custom orders require
            at least 2 weeks advance notice.
          </div>
        </Alert>
      </Col>
    </Row>
  )
}

// Step 7: Summary
const SummaryStep = ({ formData, calculateTotal, calculateGrandTotal }) => {
  return (
    <Row>
      <Col>
        <h5 className="mb-4">Booking Summary</h5>

        <Card className="mb-3 border-0 shadow-sm">
          <Card.Header className="bg-light">
            <h6 className="mb-0">Accommodation</h6>
          </Card.Header>
          <Card.Body>
            <Row>
              <Col md={8}>
                <p className="mb-1">
                  Total People:{" "}
                  {Number.parseInt(formData.maleCount) +
                    Number.parseInt(formData.femaleCount) +
                    Number.parseInt(formData.childrenCount) || 0}
                </p>
                <p className="mb-1">Male: {formData.maleCount || 0}</p>
                <p className="mb-1">Female: {formData.femaleCount || 0}</p>
                <p className="mb-1">Children: {formData.childrenCount || 0}</p>
                <p className="mb-1">Tents: {formData.tentCount || 0}</p>
                <p className="mb-0">Rooms: {formData.roomCount || 0}</p>
              </Col>
              <Col md={4} className="text-end">
                <p className="mb-0 fw-bold">Amount: $0.00</p>
              </Col>
            </Row>
          </Card.Body>
        </Card>

        <Card className="mb-3 border-0 shadow-sm">
          <Card.Header className="bg-light">
            <h6 className="mb-0">Food</h6>
          </Card.Header>
          <Card.Body>
            <div className="table-responsive">
              <Table size="sm" borderless>
                <thead>
                  <tr>
                    <th>Item</th>
                    <th>Quantity</th>
                    <th className="text-end">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {formData.foodItems.map((item, index) => (
                    <tr key={index}>
                      <td>{item.item || `Food Item ${index + 1}`}</td>
                      <td>{item.quantity || 0}</td>
                      <td className="text-end">${Number.parseFloat(item.cost || 0).toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <td colSpan="2" className="text-end fw-bold">
                      Total:
                    </td>
                    <td className="text-end fw-bold">${calculateTotal("foodItems").toFixed(2)}</td>
                  </tr>
                </tfoot>
              </Table>
            </div>
          </Card.Body>
        </Card>

        <Card className="mb-3 border-0 shadow-sm">
          <Card.Header className="bg-light">
            <h6 className="mb-0">Facilities</h6>
          </Card.Header>
          <Card.Body>
            <div className="table-responsive">
              <Table size="sm" borderless>
                <thead>
                  <tr>
                    <th>Facility</th>
                    <th>Duration</th>
                    <th className="text-end">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {formData.facilities
                    .filter((f) => f.selected)
                    .map((facility, index) => (
                      <tr key={index}>
                        <td>{facility.name}</td>
                        <td>
                          {facility.startDateTime && facility.endDateTime
                            ? `${facility.startDateTime} to ${facility.endDateTime}`
                            : "Not specified"}
                        </td>
                        <td className="text-end">${Number.parseFloat(facility.cost || 0).toFixed(2)}</td>
                      </tr>
                    ))}
                  {formData.facilities.filter((f) => f.selected).length === 0 && (
                    <tr>
                      <td colSpan="3" className="text-center">
                        No facilities selected
                      </td>
                    </tr>
                  )}
                </tbody>
                <tfoot>
                  <tr>
                    <td colSpan="2" className="text-end fw-bold">
                      Total:
                    </td>
                    <td className="text-end fw-bold">${calculateTotal("facilities").toFixed(2)}</td>
                  </tr>
                </tfoot>
              </Table>
            </div>
          </Card.Body>
        </Card>

        <Card className="mb-3 border-0 shadow-sm">
          <Card.Header className="bg-light">
            <h6 className="mb-0">Services</h6>
          </Card.Header>
          <Card.Body>
            <div className="table-responsive">
              <Table size="sm" borderless>
                <thead>
                  <tr>
                    <th>Service</th>
                    <th>Duration</th>
                    <th className="text-end">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {formData.services
                    .filter((s) => s.selected)
                    .map((service, index) => (
                      <tr key={index}>
                        <td>{service.name}</td>
                        <td>
                          {service.startDateTime && service.endDateTime
                            ? `${service.startDateTime} to ${service.endDateTime}`
                            : "Not specified"}
                        </td>
                        <td className="text-end">${Number.parseFloat(service.cost || 0).toFixed(2)}</td>
                      </tr>
                    ))}
                  {formData.services.filter((s) => s.selected).length === 0 && (
                    <tr>
                      <td colSpan="3" className="text-center">
                        No services selected
                      </td>
                    </tr>
                  )}
                </tbody>
                <tfoot>
                  <tr>
                    <td colSpan="2" className="text-end fw-bold">
                      Total:
                    </td>
                    <td className="text-end fw-bold">${calculateTotal("services").toFixed(2)}</td>
                  </tr>
                </tfoot>
              </Table>
            </div>
          </Card.Body>
        </Card>

        <Card className="mb-3 border-0 shadow-sm">
          <Card.Header className="bg-light">
            <h6 className="mb-0">Merchandise</h6>
          </Card.Header>
          <Card.Body>
            <div className="table-responsive">
              <Table size="sm" borderless>
                <thead>
                  <tr>
                    <th>Item</th>
                    <th>Quantity</th>
                    <th>Size</th>
                    <th className="text-end">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {formData.merchandise
                    .filter((m) => m.quantity > 0)
                    .map((item, index) => (
                      <tr key={index}>
                        <td>{item.name}</td>
                        <td>{item.quantity}</td>
                        <td>{item.size}</td>
                        <td className="text-end">
                          ${(Number.parseFloat(item.price || 0) * Number.parseInt(item.quantity || 0)).toFixed(2)}
                        </td>
                      </tr>
                    ))}
                  {formData.merchandise.filter((m) => m.quantity > 0).length === 0 && (
                    <tr>
                      <td colSpan="4" className="text-center">
                        No merchandise selected
                      </td>
                    </tr>
                  )}
                </tbody>
                <tfoot>
                  <tr>
                    <td colSpan="3" className="text-end fw-bold">
                      Total:
                    </td>
                    <td className="text-end fw-bold">${calculateTotal("merchandise").toFixed(2)}</td>
                  </tr>
                </tfoot>
              </Table>
            </div>
          </Card.Body>
        </Card>

        <Card className="mb-3 border-0 shadow-sm bg-light">
          <Card.Body>
            <Row>
              <Col md={8}>
                <h5 className="mb-0">Grand Total</h5>
              </Col>
              <Col md={4} className="text-end">
                <h5 className="mb-0">${calculateGrandTotal().toFixed(2)}</h5>
              </Col>
            </Row>
          </Card.Body>
        </Card>

        <Alert variant="warning" className="mt-4 d-flex align-items-start">
          <InfoCircle className="me-2 mt-1 flex-shrink-0" />
          <div>
            <strong>Please Note:</strong> Review all details carefully before proceeding to the next step. Changes after
            submission may incur additional charges.
          </div>
        </Alert>
      </Col>
    </Row>
  )
}

// Step 8: Guidelines
const GuidelinesStep = ({ formData, handleInputChange }) => {
  return (
    <Row>
      <Col>
        <h5 className="mb-4">Final Guidelines</h5>

        <Card className="mb-4 border-0 shadow-sm">
          <Card.Body>
            <h6 className="mb-3">Terms and Conditions</h6>
            <div className="bg-light p-3 mb-3" style={{ maxHeight: "200px", overflowY: "auto" }}>
              <p>
                1. <strong>Booking Confirmation:</strong> Your booking is confirmed only after receipt of full payment.
              </p>
              <p>
                2. <strong>Cancellation Policy:</strong> Cancellations made 30 days or more before the arrival date will
                receive a full refund minus a 10% administrative fee. Cancellations made 15-29 days before arrival will
                receive a 50% refund. No refunds for cancellations made less than 15 days before arrival.
              </p>
              <p>
                3. <strong>Check-in/Check-out:</strong> Check-in time is 2:00 PM and check-out time is 11:00 AM. Early
                check-in or late check-out may be available upon request and may incur additional charges.
              </p>
              <p>
                4. <strong>Damage Deposit:</strong> A refundable damage deposit may be required at check-in.
              </p>
              <p>
                5. <strong>Conduct:</strong> Guests are expected to conduct themselves in a manner respectful to other
                guests and staff. Excessive noise, disruptive behavior, or damage to property may result in eviction
                without refund.
              </p>
              <p>
                6. <strong>Liability:</strong> The management is not responsible for any loss, damage, or theft of
                personal belongings.
              </p>
              <p>
                7. <strong>Facilities Usage:</strong> All facilities must be used in accordance with posted guidelines
                and staff instructions.
              </p>
              <p>
                8. <strong>Modifications:</strong> Any modifications to your booking may result in price adjustments.
              </p>
              <p>
                9. <strong>Force Majeure:</strong> In the event of circumstances beyond our control (natural disasters,
                government actions, etc.), we reserve the right to cancel bookings with a full refund or offer
                alternative dates.
              </p>
              <p>
                10. <strong>Age Requirement:</strong> The primary guest must be at least 18 years of age to check in.
              </p>
            </div>

            <Form.Check
              type="checkbox"
              id="terms-acceptance"
              label="I have read and agree to the terms and conditions"
              name="termsAccepted"
              checked={formData.termsAccepted}
              onChange={handleInputChange}
              className="mb-3"
            />

            <h6 className="mb-3">Important Information</h6>
            <Alert variant="info" className="d-flex align-items-start">
              <InfoCircle className="me-2 mt-1 flex-shrink-0" />
              <div>
                <p className="mb-2">
                  <strong>Payment:</strong> Full payment is required to confirm your booking. We accept all major credit
                  cards, bank transfers, and digital payment methods.
                </p>
                <p className="mb-2">
                  <strong>Contact:</strong> For any questions or special requests, please contact our customer service
                  at support@example.com or call +1-234-567-8900.
                </p>
                <p className="mb-0">
                  <strong>Arrival Instructions:</strong> Detailed arrival instructions will be sent to your email after
                  booking confirmation.
                </p>
              </div>
            </Alert>
          </Card.Body>
        </Card>

        <div className="text-center">
          <Button
            variant="primary"
            size="lg"
            disabled={!formData.termsAccepted}
            style={{
              backgroundColor: formData.termsAccepted ? "#5A3BC5" : "#6c757d",
              borderColor: formData.termsAccepted ? "#5A3BC5" : "#6c757d",
              boxShadow: formData.termsAccepted ? "0 4px 10px rgba(90, 59, 197, 0.25)" : "none",
            }}
          >
            Accept & Continue
          </Button>
          {!formData.termsAccepted && (
            <p className="text-muted mt-2">Please accept the terms and conditions to continue</p>
          )}
        </div>
      </Col>
    </Row>
  )
}

export default GetInvolved

