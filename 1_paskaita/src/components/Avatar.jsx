import PropTypes from "prop-types";

const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
    Math.random() * 256
  )}, ${Math.floor(Math.random() * 256)})`;

  const divStyle={
    fontSize: "1.2rem",
    borderRadius: "50%",
    background: randomColor,
    padding: "10px",
    margin: "10px",
    display:"inline-block",
    textAlign: "center",
    width: 40,
    height: 40,
  }


  const Avatar =(props) =>{
const name=props.name
    .split(" ") // ["Rokas", "Andreikenas"]
    .map((word) => word[0]) // ["R", "A"]
    .join("") // "RA"
    .toUpperCase(); // RA => RA
  return (
  <div style={divStyle}>
    {name}
    </div>
  );
  }
  
  Avatar.propTypes = {
    name: PropTypes.string,
  };
  
  export default Avatar;