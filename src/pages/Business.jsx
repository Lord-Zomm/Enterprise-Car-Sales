import React, { useState } from "react";
import { Container, Row, Col, Form, FormGroup, Input, Button } from "reactstrap";
import "../styles/business.css";

const Business = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    zip: "",
    phone: "",
    companyName: "",
    vehicleNeed: "",
    vehicleType: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Process form data (e.g., send it to the server)
  };

  return (
    <section className="business-section">
      <Container>
        <Row>
          <Col lg="12">
            <h2 className="section-title" style={{fontWeight: 'bold'}}>We’re Here to Help</h2>
            <p className="section-subtitle">
              Tell us about your business needs, and a Sales Consultant will contact you within 24 hours.
            </p>
          </Col>
        </Row>
        <Row>
          <Col lg="8" md="10" className="mx-auto">
            <Form className="business-form" onSubmit={handleSubmit}>
              <Row>
                <Col md="6">
                  <FormGroup>
                    <Input
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </FormGroup>
                </Col>
                <Col md="6">
                  <FormGroup>
                    <Input
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md="6">
                  <FormGroup>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </FormGroup>
                </Col>
                <Col md="6">
                  <FormGroup>
                    <Input
                      type="text"
                      name="zip"
                      placeholder="ZIP"
                      value={formData.zip}
                      onChange={handleChange}
                      required
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md="6">
                  <FormGroup>
                    <Input
                      type="text"
                      name="phone"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </FormGroup>
                </Col>
                <Col md="6">
                  <FormGroup>
                    <Input
                      type="text"
                      name="companyName"
                      placeholder="Company Name"
                      value={formData.companyName}
                      onChange={handleChange}
                      required
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md="6">
                  <FormGroup>
                    <Input
                      type="select"
                      name="vehicleNeed"
                      value={formData.vehicleNeed}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Vehicle Need</option>
                      <option value="Lease">Lease</option>
                      <option value="Purchase">Purchase</option>
                    </Input>
                  </FormGroup>
                </Col>
                <Col md="6">
                  <FormGroup>
                    <Input
                      type="select"
                      name="vehicleType"
                      value={formData.vehicleType}
                      onChange={handleChange}
                    >
                      <option value="">Type of Vehicles</option>
                      <option value="Cars">Cars</option>
                      <option value="Trucks">Trucks</option>
                      <option value="SUVs">SUVs</option>
                    </Input>
                  </FormGroup>
                </Col>
              </Row>
              <Row>
              </Row>
              <Button className="submit-btn" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Business;
