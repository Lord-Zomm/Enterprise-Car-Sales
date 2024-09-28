import React from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import CarItem from "../components/UI/CarItem";
import carData from "../assets/data/carData";
import FindCarForm from "../components/UI/FindCarForm";  // Importing FindCarForm

const CarListing = () => {
  return (
    <Helmet title="Cars">
      <CommonSection title="Used Cars for Sale" />

      {/* Section for FindCarForm */}
      <section>
        <Container>
          <Row>
            <Col lg="10" md="10" sm="10" style={{ marginTop: '-60px', marginLeft: '120px', justifyContent: 'center', alignItems: 'center',  }}> {/* Adjust marginTop */}
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
