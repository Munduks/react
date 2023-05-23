import Button from "./Button";
import PropTypes from "prop-types";
import { useState } from "react"

const Product =({image, title, price, description, availability, category })=>{
    const [count, setCount ] =useState(0);
    const increment =()=>{
        setCount ((previousCount) => previousCount + 1);
    };
    const decrement =()=> {
        setCount ((previousCount) => previousCount - 1);
    }
    

    return(
        <div style={product}>
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{price}</p>
      <p>{description}</p>
      <p>{availability}</p>
      <Button onClick={increment}>+</Button>
      <h2>{count}</h2>
      <Button onClick={decrement}>-</Button>
      <p> {category}</p>
      <Button title="ADD TO CART"/>
    </div>
    )
}
Product.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    availability: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  };
export default Product