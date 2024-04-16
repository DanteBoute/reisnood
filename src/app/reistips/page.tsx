import React from "react";
import "./reistips.css";
import Navbar from "../components/Navbar";
import ReistipsCards from "../components/ReistipsCards";
import Inspiration from "../components/Inspirition";

const Reistips = () => {
  return (
    <>
      <Navbar />
      <ReistipsCards />
      <Inspiration />
    </>
  );
};

export default Reistips;
