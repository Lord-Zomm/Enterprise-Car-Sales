import React from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import { Container, Row, Col } from "reactstrap";
import "../styles/offers.css";

import offerImg from "../assets/all-images/blog-img/blog-2.jpg"; // Update this path to the actual image you want to use

const Offers = () => {
  return (
    <Helmet title="Special Offers">
      {/* Banner Section */}
      <CommonSection title="Offers" />

      <section className="offers__section">
        <Container>
          <Row>
            <Col lg="12">
              <p className="section__subtitle">
                At your local Override Car Sales, you’ll find quality vehicles at competitive prices.
                Our inventory consists of Override Certified® used cars, trucks, vans, and SUVs,
                backed by our <span className="green-text">7-Day Buyback</span> promise and
                <span className="green-text"> 12-month/12,000-mile limited powertrain warranty</span>.
                Select any of the following to learn more.
              </p>
            </Col>
          </Row>

          <Row>
            <Col lg="6" md="6">
              <div className="offer__img">
                <img src={offerImg} alt="Offers" className="w-100 rounded-3" />
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="offer__details">
                <Row>
                  <Col md="4" sm="6">
                    <div className="offer__box">
                      <div className="icon__wrapper">
                        <i className="ri-user-line offer__icon"></i>
                      </div>
                      <h4>First-Time Car Buyer</h4>
                      <p>Override makes it easy to buy your first car, even with less-than-perfect credit.</p>
                      <a href="#" className="learn__link">Learn How &gt;</a>
                    </div>
                  </Col>
                  <Col md="4" sm="6">
                    <div className="offer__box">
                      <div className="icon__wrapper">
                        <i className="ri-award-line offer__icon"></i>
                      </div>
                      <h4>College Graduate Program</h4>
                      <p>Recent college graduates may be eligible to receive special financing options.</p>
                      <a href="#" className="learn__link">Learn More &gt;</a>
                    </div>
                  </Col>
                  <Col md="4" sm="6">
                    <div className="offer__box">
                      <div className="icon__wrapper">
                        <i className="ri-mail-line offer__icon"></i>
                      </div>
                      <h4>Sign Up for Email Offers</h4>
                      <p>Be the first to know about Override Car Sales offers, rental car savings, and more.</p>
                      <a href="#" className="learn__link">Sign Up Now &gt;</a>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Offers;
