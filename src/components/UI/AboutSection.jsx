import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/about-section.css";
import aboutImg from "../../assets/all-images/cars-img/lamborghini_2.png";

const AboutSection = ({ aboutClass }) => {
  const greenStyle = { color: '#169658', fontSize: '20px' }; // Define the green color style

  // State to track if the screen is mobile
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    // Function to handle window resizing
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Add event listener for window resizing
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component is unmounted
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      className="about__section"
      style={
        aboutClass === "aboutPage"
          ? { marginTop: "0px" }
          : { marginTop: "280px" }
      }
    >
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__section-content">
              <h4 className="section__subtitle" style={greenStyle}>Why Buy A Car From Enterprise</h4>
              <h2 className="section__title" style={{color: '#169658', marginBottom: '50px', marginTop:'-20px'}}>Quality Selection. Transparent Process.</h2>
              <p className="section__description" style={greenStyle}>
              We put people first. You’ll be able to choose from thousands of cars,
              SUVS, trucks and vans in a variety of makes and models. Everything is
              clearly marked with transparent pricing. When you’re ready, we have a
              hassle-free process for selling or trading your current vehicle and
              turnkey financing options for a seamless purchase experience.
              </p>

              {/* Conditionally render this section only if not mobile */}
              {!isMobile && (
                <>
                  <div className="about__section-item d-flex align-items-center">
                    <p className="section__description d-flex align-items-center gap-2" style={greenStyle}>
                      <i className="ri-checkbox-circle-line"></i> Enterprise Certified®
                    </p>

                    <p className="section__description d-flex align-items-center gap-2" style={greenStyle}>
                      <i className="ri-checkbox-circle-line" style={{marginLeft: '150px'}}></i> CARFAX® Report
                    </p>
                  </div>

                  <div className="about__section-item d-flex align-items-center">
                    <p className="section__description d-flex align-items-center gap-2" style={greenStyle}>
                      <i className="ri-checkbox-circle-line"></i> Powertrain Warranty
                    </p>

                    <p className="section__description d-flex align-items-center gap-2" style={greenStyle}>
                      <i className="ri-checkbox-circle-line" style={{marginLeft: '150px'}}></i> Roadside Assistance
                    </p>
                  </div>
                </>
              )}
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__img">
              <img src={aboutImg} alt="" className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
