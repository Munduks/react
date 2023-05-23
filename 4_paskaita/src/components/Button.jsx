import React from "react";
import PropTypes from "prop-types";

const Button=(props)=>{
 return <button>{props.title}</button>;
};
      
Button.propTypes = {
 title:PropTypes.string.isRequired,
}



export default Button 