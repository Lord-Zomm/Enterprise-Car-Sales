import React, { useRef, useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link, NavLink } from "react-router-dom";
import "../../styles/header.css";
import enterpriseLogo from './enterprise_image.png'; // Import the logo image

const navLinks = [
  { path: "/home", display: "HOME" },
  { path: "/cars", display: "BUY A CAR" },
  { path: "/trade", display: "TRADE A CAR" },
  { path: "/financing", display: "FINANCING" },
  { path: "/locations", display: "LOCATIONS" },
  { path: "/offers", display: "OFFERS" },
  { path: "/about", display: "ABOUT" },
  { path: "/blogs", display: "ARTICLES" },
  { path: "/business", display: "FOR BUSINESS" },
];

const Header = () => {
  const menuRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  // Update isMobile when the window resizes
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1024);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handle click outside the menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target) && !event.target.classList.contains('ri-menu-line')) {
        closeMenu(); // Close the menu if clicked outside
      }
    };

    // Add event listener when the menu is open
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    // Clean up the event listener on unmount
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

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
      <div className="header__middle" style={{ height: '70px', display: 'flex', alignItems: 'center' }}>
        <Container>
          <Row className="align-items-center">
            <Col lg="4" md="3" sm="4">
              <div className="logo">
                <h1 style={{ color: 'white', fontSize: '2rem', marginTop: '8px'}}>
                  <Link to="/home" className="d-flex align-items-center gap-2" style={{ color: 'white', whiteSpace: 'nowrap' }}>
                    <img src={enterpriseLogo} alt="Enterprise Logo" style={{ width: '200px', height: 'auto'}} />
                    <span
                      style={{
                        fontSize: '2.2rem',
                        marginLeft: '40px',
                        transform: 'scaleX(1.5)',
                        whiteSpace: 'nowrap'  /* Prevents wrapping */
                      }}>
                      Car Sales
                    </span>
                  </Link>
                </h1>
              </div>
            </Col>

            <Col lg="5" md="5" sm="4"></Col>

            {/* Conditionally render the phone icon and number only if not on mobile */}
            {!isMobile && (
              <Col lg="3" md="4" sm="4" className="d-flex align-items-center justify-content-end phone-info">
                <span style={{ color: 'white', fontSize: '1.5rem', padding: '0px 15px', display: 'flex', alignItems: 'flex-start' }}>
                  <i className="ri-phone-fill" style={{ color: 'white', fontWeight: 'bold', fontSize: '2.0rem', marginTop: '2.5px', marginRight: '2px' }}></i>
                  <span style={{ marginLeft: '5px', color: 'white', marginTop: '0px', fontSize: '2.2rem' }}>888-227-7253</span>
                </span>
              </Col>
            )}
          </Row>
        </Container>
      </div>

      {/* ========== main navigation =========== */}
      <div className="main__navbar">
        <Container>
          <div className="navigation__wrapper d-flex align-items-center justify-content-between" style={{ color: 'white' }}>
            {/* Hamburger menu visible only on mobile */}
            <span className="mobile__menu">
              <i className="ri-menu-line" onClick={toggleMenu} style={{ color: 'white' }}></i>
            </span>

            {/* Search box visible beside hamburger menu on mobile */}
            {isMobile && (
              <div className="mobile__search">
                <div className="search__box">
                  <input type="text" placeholder="Search" style={{ color: 'black' }} />
                  <span>
                    <i className="ri-search-line" style={{ color: 'white' }}></i>
                  </span>
                </div>
              </div>
            )}

            {/* Sidebar navigation, only active on mobile */}
            <div className={`navigation ${menuOpen ? "menu__active" : ""}`} ref={menuRef}>
              <span className="menu__close" onClick={toggleMenu}>&times;</span>
              <div className="menu">
                {navLinks.map((item, index) => (
                  <NavLink
                    to={item.path}
                    className={(navClass) =>
                      navClass.isActive ? "nav__active nav__item" : "nav__item"
                    }
                    key={index}
                    style={{ color: 'white' }}
                    onClick={toggleMenu} // Close the menu when a link is clicked
                  >
                    {item.display}
                  </NavLink>
                ))}
              </div>
            </div>

            {/* Normal navigation visible only on desktop */}
            {!isMobile && (
              <div className="nav__right">
                <div className="search__box">
                  <input type="text" placeholder="Search" style={{ color: 'black' }} />
                  <span>
                    <i className="ri-search-line" style={{ color: 'white' }}></i>
                  </span>
                </div>
              </div>
            )}
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Header;
