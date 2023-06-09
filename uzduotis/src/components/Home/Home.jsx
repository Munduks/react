import { useState } from "react";
import PropTypes from "prop-types";
import Button from "../Button/Button";
import NightsCount from "./NightsCount";
import "./Home.css";

const Home = ({ image, title, price, description, availability }) => {
  const [count, setCount] = useState(3);

  const increase = () => setCount(count + 1);
  const decrease = () => setCount(count - 1);

  return (
    <div className="home">
      <div className="image">
        <img src={image} alt={title} />
      </div>
      <div className="homeCard">
        <div className="title">
          <p>{title}</p>
          <p className="price">{price.toFixed(2)}€</p>
        </div>
        <div className="description">{description}</div>
        <p className="availability">
          <p>
            <b>Availability:</b> <span>{availability} nights minimum</span>
          </p>
        </p>
        <div className="counter">
          <NightsCount count={count} increase={increase} decrease={decrease} />
          <Button>BOOK NOW</Button>
        </div>
      </div>
    </div>
  );
};
Home.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.element.isRequired,
  availability: PropTypes.number.isRequired,
};

export default Home;
