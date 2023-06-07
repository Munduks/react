// import { useState } from "react";
import PropTypes from "prop-types";
import Cards from "./Cards";
import "./Portfolio.css";

// sukurti heroir button componentus
const Portfolio = ({ title, text, heading, description }) => {
  return (
    <div>
      <div className="heroSection">
        <p>{text}</p>
        <button>Button</button>
      </div>
      <div className="portfolio">
        <div className="cardsArea">
          <h2>{heading}</h2>
          <p> {description} </p>
          <Cards />
        </div>
      </div>
    </div>
  );
};

Portfolio.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Portfolio;
