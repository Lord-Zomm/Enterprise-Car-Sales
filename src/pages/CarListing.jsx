import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import CarItem from "../components/UI/CarItem";
import carData from "../assets/data/carData";
import FindCarForm from "../components/UI/FindCarForm";  // Importing FindCarForm

const CarListing = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1280);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1280);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

 // Styles based on mobile or desktop view
const formStyles = {
  marginTop: isMobile ? "-40px" : "-60px",
  marginLeft: isMobile ? "40px" : "120px",
  marginBottom: isMobile ? "30px" : "-30px",
  justifyContent: "center",
  alignItems: "center",
  transform: isMobile ? 'scale(1.4)' : 'scale(1)',
  transform: isMobile ? 'scaleY(.9)' : 'scale(1)',
  whiteSpace: "nowrap", // Prevents text wrapping
  padding: isMobile ? '0px' : '30px'

};

  return (
    <Helmet title="Cars">
      <CommonSection title="Used Cars for Sale" />

      {/* Section for FindCarForm */}
      <section>
        <Container>
          <Row>
            <Col lg="10" md="10" sm="10" style={formStyles}> {/* Conditional styles */}
              <FindCarForm /> {/* FindCarForm placed at the top */}
            </Col>
          </Row>
        </Container>
      </section>

      {/* Car List Section */}
      <section>
        <Container>
          <Row>
            {carData.map((item) => (
              <CarItem item={item} key={item.id} />
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default CarListing;
