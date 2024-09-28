import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import "../styles/financing.css"; // Make sure to create this CSS for the specific styles

const Financing = () => {
  return (
    <Helmet title="Financing">
      <CommonSection title="Financing" />
      <section className="financing__section">
        <Container>
          <p className="section__description">
            At Enterprise Car Sales, we make buying and financing a car easy. Visit one of our dealerships, and we’ll walk you through the financing process. Or if you prefer, browse this section for tips.
          </p>
          <Row className="financing__tiles">
            <Col lg="4" md="6" sm="12">
              <div className="financing__tile">
                <h5>Apply For Financing</h5>
                <p>Fill out an online form, and we will contact you. It’s that easy.</p>
                <Button color="success" className="tile__btn">Apply Now</Button>
              </div>
            </Col>

            <Col lg="4" md="6" sm="12">
              <div className="financing__tile">
                <h5>Financing FAQs</h5>
                <p>Get the answers you need to commonly asked questions about used car financing.</p>
                <Button color="success" className="tile__btn">See Financing FAQs</Button>
              </div>
            </Col>

            <Col lg="4" md="6" sm="12">
              <div className="financing__tile">
                <h5>College Graduate Program</h5>
                <p>Recent college graduates may be eligible to receive special financing options.</p>
                <Button color="success" className="tile__btn">See If You Qualify</Button>
              </div>
            </Col>

            <Col lg="4" md="6" sm="12">
              <div className="financing__tile">
                <h5>First-Time Car Buyer</h5>
                <p>Enterprise makes it easy to buy your first car, even with less-than-perfect credit.</p>
                <Button color="success" className="tile__btn">Learn How</Button>
              </div>
            </Col>

            <Col lg="4" md="6" sm="12">
              <div className="financing__tile">
                <h5>Financing 101</h5>
                <p>We explain the many factors that could impact your financing terms.</p>
                <Button color="success" className="tile__btn">Learn More</Button>
              </div>
            </Col>

            <Col lg="4" md="6" sm="12">
              <div className="financing__tile">
                <h5>Car Payment Calculator</h5>
                <p>Estimate your monthly payments and set a realistic budget.</p>
                <Button color="success" className="tile__btn">See What You Can Afford</Button>
              </div>
            </Col>
          </Row>
        </Container>

        <Container className="mt-5">
          <p className="section__description">
            <strong>Estimate your monthly payments:</strong> Payment or price based on amount financed for Term (Months) and Finance Rate (APR) estimated on average for the credit score input by customer using the site calculator.
          </p>
        </Container>
      </section>
    </Helmet>
  );
};

export default Financing;
