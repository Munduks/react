import PropTypes from "prop-types";
import "./Button.scss";

const Button = ({ className, children, variant, color, ...props }) => {
  return (
    <button
      className={`styled-button ${variant} ${color} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(["contained", "outlined"]),
  color: PropTypes.oneOf(["", "error", "success"]),
};

Button.defaultProps = {
  className: "",
  variant: "contained",
  color: "",
};

export default Button;
// import PropTypes from "prop-types";
// import "./Button.scss";

// const Button = ({ className, children, variant, ...props }) => {
//   // styled-button outlined
//   return (
//     <button className={`styled-button ${variant} ${className}`} {...props}>
//       {children}
//     </button>
//   );
// };

// Button.propTypes = {
//   className: PropTypes.string,
//   children: PropTypes.node.isRequired,
//   variant: PropTypes.oneOf(["contained", "outlined"]),
// };

// Button.defaultProps = {
//   className: "",
//   variant: "contained",
// };

// export default Button;
