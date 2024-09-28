import React, { useRef } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link, NavLink } from "react-router-dom";
import "../../styles/header.css";
import enterpriseLogo from './enterprise_image.png'; // Import the logo image

const navLinks = [
  {
    path: "/home",
    display: "HOME",
  },
  {
    path: "/cars",
    display: "BUY A CAR",
  },
  {
    path: "/trade",
    display: "TRADE A CAR",
  },
  {
    path: "/financing",
    display: "FINANCING",
  },
  {
    path: "/locations",
    display: "LOCATIONS",
  },
  {
    path: "/offers",
    display: "OFFERS",
  },
  {
    path: "/about",
    display: "ABOUT",
  },
  {
    path: "/blogs",
    display: "ARTICLES",
  },
  {
    path: "/business",
    display: "FOR BUSINESS",
  },
];

const Header = () => {
  const menuRef = useRef(null);

  const toggleMenu = () => menuRef.current.classList.toggle("menu__active");

  return (
    <header className="header">
      {/* ============ header top ============ */}
      <div className="header__top" style={{ height: '24px', display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-end', padding: '0 100px' }}>
        <div style={{ color: 'white', fontSize: '0.8rem', display: 'flex', alignItems: 'center' }}>
          <i className="ri-earth-line" style={{ color: 'white', fontSize: '1rem' }}></i>
          <span style={{ marginLeft: '5px', color: 'white' }}>Enterprise Car Sales St. Louis</span>
        </div>
      </div>

      {/* =============== header middle =========== */}
      <div className="header__middle" style={{ height: '70px', display: 'flex', alignItems: 'center' }}> {/* Remove background color */}
        <Container>
          <Row className="align-items-center">
            <Col lg="4" md="3" sm="4">
              <div className="logo">
                <h1 style={{ color: 'white', fontSize: '2rem', marginTop: '8px'}}>
                  <Link to="/home" className="d-flex align-items-center gap-2" style={{ color: 'white' }}>
                    <img src={enterpriseLogo} alt="Enterprise Logo" style={{ width: '200px', height: 'auto'}} /> {/* Image for logo */}
                    <span style={{ fontSize: '2.2rem', marginLeft: '40px', transform: 'scaleX(1.5)' }}>Car Sales</span> {/* Increase fontSize here */}
                  </Link>
                </h1>
              </div>
            </Col>

            <Col lg="5" md="5" sm="4"></Col> {/* Empty column for spacing */}

            <Col lg="3" md="4" sm="4" className="d-flex align-items-center justify-content-end">
            <span style={{ color: 'white', fontSize: '1.5rem', padding: '0px 15px', display: 'flex', alignItems: 'flex-start' }}>
              <i className="ri-phone-fill" style={{ color: 'white', fontWeight: 'bold', fontSize: '2.0rem', marginTop: '2.5px', marginRight: '2px' }}></i> {/* Increased font-size for the icon */}
              <span style={{ marginLeft: '5px', color: 'white', marginTop: '0px', fontSize: '2.2rem'}}>888-227-7253</span>
            </span>
            </Col>
          </Row>
        </Container>
      </div>

      {/* ========== main navigation =========== */}
      <div className="main__navbar">
        <Container>
          <div className="navigation__wrapper d-flex align-items-center justify-content-between" style={{ color: 'white' }}>
            <span className="mobile__menu">
              <i className="ri-menu-line" onClick={toggleMenu} style={{ color: 'white' }}></i>
            </span>

            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <div className="menu">
                {navLinks.map((item, index) => (
                  <NavLink
                    to={item.path}
                    className={(navClass) =>
                      navClass.isActive ? "nav__active nav__item" : "nav__item"
                    }
                    key={index}
                    style={{ color: 'white' }} // Ensure nav links are white as well
                  >
                    {item.display}
                  </NavLink>
                ))}
              </div>
            </div>

            <div className="nav__right">
              <div className="search__box">
                <input type="text" placeholder="Search" style={{ color: 'black' }} /> {/* Keep input text black for visibility */}
                <span>
                  <i className="ri-search-line" style={{ color: 'white' }}></i>
                </span>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Header;
