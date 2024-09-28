import React, { useState, useEffect } from "react";
import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import AboutSection from "../components/UI/AboutSection";
import { Container, Row, Col } from "reactstrap";

import carImg from "../assets/all-images/cars-img/audi.png";
import "../styles/about.css";

const About = () => {
  // State to track if the screen is mobile
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Update the isMobile state on window resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Helmet title="About">
      <CommonSection title="About Us" />

      {/* Apply negative margin-bottom only when not mobile */}
      <div style={{ marginBottom: isMobile ? '70px' : '-100px' }}>
        <AboutSection aboutClass="aboutPage" />
      </div>

      <section className="about__page-section">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12">
              <div className="about__page-img">
                <img
                  src={carImg}
                  alt=""
                  className="w-100 rounded-3"
                  style={{ transform: 'scaleX(-1)', marginTop: '70px' }}
                />
              </div>
            </Col>

            <Col lg="6" md="6" sm="12">
              <div className="about__page-content">
                <h2 className="section__title green-text">
                  Experience a Seamless Car Buying Journey
                </h2>

                <p
                  className="section__description green-text"
                  style={{
                    marginTop: '30px',
                    fontWeight: 'normal',
                    fontSize: '20px',
                  }}
                >
                  At Enterprise Car Sales, we offer a seamless car buying experience that begins from home. Shop our online inventory, estimate trade-in values, schedule test drives, and apply for financing with ease. With transparent pricing, the price you see is the price you pay—no hidden fees. Every vehicle undergoes rigorous inspections by ASE-certified technicians and includes a 12-month/12,000-mile powertrain warranty and a free CARFAX® Vehicle History Report™. Enjoy 12 months of roadside assistance and peace of mind with our seven-day or 1,000-mile buyback guarantee. With a 4.7/5 customer satisfaction rating, we’re committed to putting you first.
                </p>

                <p
                  className="section__description green-text"
                  style={{
                    fontWeight: 'bold',
                  }}
                >
                  We're always focused on you. Our customer service rating has an average of 4.7/5 stars.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default About;
