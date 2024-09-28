import React from "react";
import HeroSlider from "../components/UI/HeroSlider";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import FindCarForm from "../components/UI/FindCarForm";
import carData from "../assets/data/carData";
import CarItem from "../components/UI/CarItem";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Helmet title="Home">
      {/* ============= Hero section with form overlay =========== */}
      <section className="p-0 hero__slider-section">
        <HeroSlider />

        {/* Overlay form */}
        <div className="hero__form">
          <Container>
            <Row className="form__row">
              <Col lg="8" md="8" sm="12" className="mx-auto">
                <FindCarForm />
              </Col>
            </Row>
          </Container>
        </div>
      </section>

      {/* =========== Car offer section ============= */}
      <section className="car__offer-section">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h6 className="section__subtitle">Browse Selection</h6>
              <h2 className="section__title">Shop 2023 Vehicles</h2>
            </Col>

            {carData.slice(0, 6).map((item) => (
              <CarItem item={item} key={item.id} />
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
