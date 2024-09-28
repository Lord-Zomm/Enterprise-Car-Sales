import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, FormGroup, Input } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";

import "../styles/contact.css";

const socialLinks = [
  {
    url: "#",
    icon: "ri-facebook-line",
  },
  {
    url: "#",
    icon: "ri-instagram-line",
  },
  {
    url: "#",
    icon: "ri-linkedin-line",
  },
  {
    url: "#",
    icon: "ri-twitter-line",
  },
];

const Contact = () => {
  const greenStyle = { color: '#169658' }; // Define the green color style

  return (
    <Helmet title="Contact">
      <CommonSection title="Contact" />
      <section>
        <Container>
          <Row>
            <Col lg="7" md="7">
              <h6 className="fw-bold mb-4" style={greenStyle}>Get In Touch</h6>

              <Form>
                <FormGroup className="contact__form">
                  <Input placeholder="Your Name" type="text" style={greenStyle} />
                </FormGroup>
                <FormGroup className="contact__form">
                  <Input placeholder="Email" type="email" style={greenStyle} />
                </FormGroup>
                <FormGroup className="contact__form">
                  <textarea
                    rows="5"
                    placeholder="Message"
                    className="textarea"
                    style={greenStyle}
                  ></textarea>
                </FormGroup>

                <button className="contact__btn" type="submit" style={greenStyle}>
                  Send Message
                </button>
              </Form>
            </Col>

            <Col lg="5" md="5">
              <div className="contact__info">
                <h6 className="fw-bold" style={greenStyle}>Contact Information</h6>
                <p className="section__description mb-0" style={greenStyle}>
                  St. Louis, Missouri
                </p>
                <div className="d-flex align-items-center gap-2">
                  <h6 className="fs-6 mb-0" style={greenStyle}>Phone:</h6>
                  <p className="section__description mb-0" style={greenStyle}>888-227-7253</p>
                </div>

                <div className="d-flex align-items-center gap-2">
                  <h6 className="mb-0 fs-6" style={greenStyle}>Email:</h6>
                  <p className="section__description mb-0" style={greenStyle}>example@gmail.com</p>
                </div>

                <h6 className="fw-bold mt-4" style={greenStyle}>Follow Us</h6>

                <div className="d-flex align-items-center gap-4 mt-3">
                  {socialLinks.map((item, index) => (
                    <Link
                      to={item.url}
                      key={index}
                      className="social__link-icon"
                    >
                      <i className={item.icon} style={greenStyle}></i>
                    </Link>
                  ))}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Contact;
