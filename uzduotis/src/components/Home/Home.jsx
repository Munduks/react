import { useState } from "react";
import PropTypes from "prop-types";
import Button from "../Button/Button";
import NightsCount from "./NightsCount";
import "./Home.css";

const Home=({
    image,
    title,
    price,
    description,
    availability,
}) => {
    const [count, setCount] = useState(0);
  
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
            </div>
            <p className="price">{price.toFixed(2)}€</p>
            <div className="description">{description}</div>
            <p className="availability">
              <b>Availability:</b> <span>{availability} nights minimum</span>
            </p>
            <div className="counter">
              <NightsCount count={count} increase={increase} decrease={decrease} />
              <Button>
                REZERVUOTI
              </Button>
            </div>
          </div>
        </div>
      );
}  
Home.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.element.isRequired,
    availability: PropTypes.number.isRequired,
  };
  
  export default Home;
