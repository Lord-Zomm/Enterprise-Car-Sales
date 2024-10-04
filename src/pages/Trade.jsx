import React from "react";
import { Container, Row, Col, Form, FormGroup, Input, Button, Label } from "reactstrap";
import "../styles/contact.css"; // assuming you have a CSS file for styling

const Trade = () => {
  return (
    <Container>
      <h3 style={{ marginTop: '30px', fontWeight:'bold' }}>Start an Appraisal</h3>
      <p>
        To start your appraisal, tell us a little about your vehicle and we’ll contact you to set up an appointment to determine your trade-in value.
        Not looking to trade? <a href="#">Browse our inventory</a> of quality used vehicles.
      </p>

      <Form>
        {/* Trade-in Information */}
        <Row>
          <Col md="3">
            <FormGroup>
              <Label for="year">Year</Label>
              <Input type="text" id="year" placeholder="Year" />
            </FormGroup>
          </Col>
          <Col md="3">
            <FormGroup>
              <Label for="make">Make</Label>
              <Input type="text" id="make" placeholder="Make" />
            </FormGroup>
          </Col>
          <Col md="3">
            <FormGroup>
              <Label for="model">Model</Label>
              <Input type="text" id="model" placeholder="Model" />
            </FormGroup>
          </Col>
          <Col md="3">
            <FormGroup>
              <Label for="mileage">Mileage</Label>
              <Input type="text" id="mileage" placeholder="Mileage" />
            </FormGroup>
          </Col>
        </Row>

        <FormGroup>
          <Label for="comments">Comments/Questions</Label>
          <Input
            type="textarea"
            id="comments"
            rows="4"
            placeholder="Enter your comments or questions here"
          />
        </FormGroup>

        {/* Contact Information */}
        <h4 style={{fontWeight:'bold'}}>Contact Information</h4>
        <Row>
          <Col md="6">
            <FormGroup>
              <Label for="firstName">First Name</Label>
              <Input type="text" id="firstName" placeholder="First Name" />
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <Label for="lastName">Last Name</Label>
              <Input type="text" id="lastName" placeholder="Last Name" />
            </FormGroup>
          </Col>
        </Row>

        <Row>
          <Col md="6">
            <FormGroup>
              <Label for="email">E-Mail Address</Label>
              <Input type="email" id="email" placeholder="Email Address" />
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <Label for="zip">ZIP</Label>
              <Input type="text" id="zip" placeholder="ZIP Code" />
            </FormGroup>
          </Col>
        </Row>

        <FormGroup>
          <Label for="phone">Phone Number</Label>
          <Input type="text" id="phone" placeholder="Phone Number" />
        </FormGroup>

        <FormGroup>
          <Label for="contactType">Contact Type</Label>
          <Input type="select" id="contactType">
            <option value="">Select</option>
            <option value="phone">Phone</option>
            <option value="email">Email</option>
            <option value="text">Text</option>
          </Input>
        </FormGroup>

        <FormGroup check>
          <Label check>
            <Input type="checkbox" /> Please email me about upcoming offers from Override.
          </Label>
        </FormGroup>

        <Button type="submit" color="success" className="mt-3">
          Submit
        </Button>
      </Form>

      <p className="mt-4">
        By providing my phone number and email address, I agree that Override Car Sales or its representatives may contact me by phone, email, or text (including via auto-dialer) to respond to my inquiry or regarding my interest in a vehicle purchase.
      </p>

      <p style={{ marginBottom: '30px' }}>
        This site is protected by reCAPTCHA and the Google <a href="#">Privacy Policy</a> and <a href="#">Terms of Service</a> apply.
      </p>
    </Container>
  );
};

export default Trade;
