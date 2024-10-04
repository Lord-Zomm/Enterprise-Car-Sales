import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import enterpriseLogo from './enterprise_image.png'; // Import the logo image
import "../../styles/footer.css";

const quickLinks = [
  {
    path: "/cars",
    display: "Buy a Car", // Updated label
  },
  {
    path: "/trade",
    display: "Trade a Car", // Updated label, leads to existing link
  },
  {
    path: "/financing",
    display: "Apply for Financing", // Placeholder link with updated label
  },
  {
    path: "/locations",
    display: "Find a Location", // Updated label
  },
  {
    path: "/blogs",
    display: "Articles", // Updated label
  },
];

const businessLinks = [
  {
    path: "#",
    display: "Business Rental Program", // Placeholder link
  },
  {
    path: "#",
    display: "Fleet Management", // Placeholder link
  },
  {
    path: "/business",
    display: "Buying for Business", // Placeholder link
  },
  {
    path: "/business",
    display: "Contact Us", // Updated label
  },
];

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="footer">
      <Container>
        <Row>
          {/* Company Description Section */}
          <Col lg="4" md="4" sm="12">
            <div className="logo footer__logo">
              <h1>
                <Link to="/home" className=" d-flex align-items-center gap-2">
                  <i class="ri-car-line" style={{ color: 'white', whiteSpace: 'nowrap', fontSize: '2.2rem'}}></i>
                  <span style={{ fontSize: '1.5rem', marginLeft: '30px', transform: 'scaleX(1.5)', fontWeight: 'bold' }}>Car Sales</span> {/* Increase fontSize here */}
                </Link>
              </h1>
            </div>
            <p className="footer__logo-content" style={{ maxWidth: '350px', fontWeight: '10px', color: 'whitesmoke' }}>
              Used vehicles were previously part of the Company's
              rental fleet and/or an affiliated company’s lease fleet
              or purchased by the Company from sources including auto
              auctions, customer trade-ins, or other sources, with a
              possible previous use including rental, lease, transportation
               network company, or other use.
            </p>
          </Col>

          {/* Quick Links Section */}
          <Col lg="2" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title">Quick Links</h5>
              <ListGroup>
                {quickLinks.map((item, index) => (
                  <ListGroupItem key={index} className="p-0 mt-3 quick__link">
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </div>
          </Col>

          {/* Office Information (Placeholder) */}
          <Col lg="3" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title mb-4">Transportation Solutions</h5>
              <p className="office__info">Car Rental</p>
              <p className="office__info">Truck Rental</p>
              <p className="office__info">Exotic Car Rental</p>
              <p className="office__info">CarShare</p>
              <p className="office__info">Commute</p>
            </div>
          </Col>

          {/* Business Links Section */}
          <Col lg="3" md="4" sm="12">
            <div className="mb-4">
              <h5 className="footer__link-title">For Business</h5>
              <ListGroup>
                {businessLinks.map((item, index) => (
                  <ListGroupItem key={index} className="p-0 mt-3 quick__link">
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </div>
          </Col>

          {/* Footer Bottom */}
          <Col lg="12">
            <div className="footer__bottom">
              <p className="section__description d-flex align-items-center justify-content-center gap-1 pt-4" style={{fontSize:'16px', marginTop:'10px'}}>
                <i class="ri-copyright-line"></i>This site is for demo purposes only.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
