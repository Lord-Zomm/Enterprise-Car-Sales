import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import CarListing from "../pages/CarListing";
import CarDetails from "../pages/CarDetails";
import Blog from "../pages/Blog";
import BlogDetails from "../pages/BlogDetails";
import NotFound from "../pages/NotFound";
import Contact from "../pages/Contact";
import Trade from "../pages/Trade";
import Financing from "../pages/Financing";
import Locations from "../pages/Locations";
import Business from "../pages/Business";
import Offers from "../pages/Offers";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/cars" element={<CarListing />} />
      <Route path="/cars/:slug" element={<CarDetails />} />
      <Route path="/blogs" element={<Blog />} />
      <Route path="/blogs/:slug" element={<BlogDetails />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/trade" element={<Trade />} />
      <Route path="/financing" element={<Financing />} />
      <Route path="/locations" element={<Locations />} />
      <Route path="/business" element={<Business />} />
      <Route path="/offers" element={<Offers />} />
    </Routes>
  );
};

export default Routers;
