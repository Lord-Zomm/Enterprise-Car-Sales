import React, { useState } from "react";
import "../../styles/find-car-form.css"; // Importing CSS

const FindCarForm = () => {
  const [filters, setFilters] = useState({
    price: "",
    type: "",
    make: "",
    mpg: "",
  });

  // Update filter state based on user selection
  const handleFilterChange = (filterType, value) => {
    setFilters({
      ...filters,
      [filterType]: value,
    });
  };

  return (
    <div className="find-car-form">
      {/* Search Input Section */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search vehicles by model, feature..."
          className="search-input"
        />
        <button className="view-vehicles-btn">View Vehicles</button>
      </div>

      {/* Filter Options */}
      <div className="filter-sections">
        {/* Shop Price Section */}
        <div className="filter-group">
          <h4 className="filter-title">Shop Price</h4>
          <select
            className="filter-dropdown"
            value={filters.price}
            onChange={(e) => handleFilterChange("price", e.target.value)}
          >
            <option value="">Any Price</option>
            <option value="under20k">Under $20K</option>
            <option value="under25k">Under $25K</option>
            <option value="under30k">Under $30K</option>
            <option value="under40k">Under $40K</option>
            <option value="over50k">Over $50K</option>
          </select>
        </div>

        {/* Shop Type Section */}
        <div className="filter-group">
          <h4 className="filter-title">Shop Type</h4>
          <select
            className="filter-dropdown"
            value={filters.type}
            onChange={(e) => handleFilterChange("type", e.target.value)}
          >
            <option value="">Any Type</option>
            <option value="sedan">Sedan</option>
            <option value="suv">SUV</option>
            <option value="truck">Truck</option>
            <option value="coupe">Coupe</option>
          </select>
        </div>

        {/* Shop Make Section */}
        <div className="filter-group">
          <h4 className="filter-title">Shop Make</h4>
          <select
            className="filter-dropdown"
            value={filters.make}
            onChange={(e) => handleFilterChange("make", e.target.value)}
          >
            <option value="">Any Make</option>
            <option value="toyota">Toyota</option>
            <option value="honda">Honda</option>
            <option value="ford">Ford</option>
            <option value="chevrolet">Chevrolet</option>
          </select>
        </div>

        {/* Shop MPG Section */}
        <div className="filter-group">
          <h4 className="filter-title">Shop MPG</h4>
          <select
            className="filter-dropdown"
            value={filters.mpg}
            onChange={(e) => handleFilterChange("mpg", e.target.value)}
          >
            <option value="">Any MPG</option>
            <option value="under15">Under 15 MPG</option>
            <option value="15-20">15-20 MPG</option>
            <option value="20-30">20-30 MPG</option>
            <option value="over30">Over 30 MPG</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default FindCarForm;
