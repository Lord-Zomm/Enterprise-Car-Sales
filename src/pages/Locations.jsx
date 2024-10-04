import React, { useState } from "react";
import { Container, Row, Col, Input, Button } from "reactstrap";
import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import map from "../assets/map.png"; // Map image import
import "../styles/locations.css"; // Custom styles

const Locations = () => {
  const [zipCode, setZipCode] = useState("");
  const [state, setState] = useState("");

  const locations = [
    {
      name: "Override Car Sales St. Charles",
      address: "3717 Veterans Memorial Pkwy, Saint Charles, MO 63303",
      phone: "636-203-7066",
      financingLink: "#",
      detailsLink: "#",
    },
    {
      name: "Override Car Sales West County",
      address: "13750 Manchester Rd, Manchester, MO 63011",
      phone: "314-376-3972",
      financingLink: "#",
      detailsLink: "#",
    },
    {
      name: "Override Car Sales Hazelwood",
      address: "623 Dunn Rd, Hazelwood, MO 63042",
      phone: "314-203-3278",
      financingLink: "#",
      detailsLink: "#",
    },
    {
      name: "Override Car Sales Clayton",
      address: "8844 Ladue Rd, Clayton, MO 63124",
      phone: "314-376-3272",
      financingLink: "#",
      detailsLink: "#",
    },
    {
      name: "Override Car Sales S. Lindbergh",
      address: "5181 S Lindbergh Blvd, St. Louis, MO 63123",
      phone: "314-269-8087",
      financingLink: "#",
      detailsLink: "#",
    },
  ];

  return (
    <>
      {/* Helmet for preloading map image */}
      <Helmet>
        <title>Locations</title>
        {/* Preload the map image */}
        <link rel="preload" as="image" href={map} />
      </Helmet>

      <CommonSection title="Locations" />

      <section className="locations__section">
        <Container>
          <Row className="mt-4" style={{ paddingLeft: '120px', marginBottom: '70px' }}>
            {/* Left side: Search section and locations list */}
            <Col lg="4" md="12">
              <div className="search__section">
                <h5>Narrow Your Search</h5>
                <p style={{ paddingLeft: '20px' }}>
                  (Enter a ZIP code, Select a State, or Use Your Location to filter results)
                </p>

                <div className="input-group mb-3">
                  <Input
                    type="text"
                    value={zipCode}
                    onChange={(e) => setZipCode(e.target.value)}
                    placeholder="Enter ZIP Code"
                  />
                  <span className="input-group-text">OR</span>
                  <Input
                    type="select"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                  >
                    <option value="">Select a State</option>
                    <option value="MO">Missouri</option>
                    <option value="IL">Illinois</option>
                    <option value="KS">Kansas</option>
                    {/* Add more states as needed */}
                  </Input>
                </div>

                <Button color="success" className="w-100">Search</Button>
              </div>

              {/* Locations list */}
              <div className="locations__list mt-4">
                {locations.map((location, index) => (
                  <div key={index} className="location__item">
                    <h6>{location.name}</h6>
                    <p>{location.address}</p>
                    <p>Phone: {location.phone}</p>
                    <a href={location.financingLink} style={{ color: '#169658', textDecoration: 'none' }}>
                      Apply For Financing
                    </a>
                    <span> • </span>
                    <a href={location.detailsLink} style={{ color: '#169658', textDecoration: 'none' }}>
                      View Store Details
                    </a>
                    <hr />
                  </div>
                ))}
              </div>
            </Col>

            {/* Right side: Map container */}
            <Col lg="8" md="12">
              <div className="map__container">
                <img
                  src={map}
                  alt="Map"
                  style={{ width: '100%', maxWidth: '650px' }}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Locations;
