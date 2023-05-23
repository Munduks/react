import PropTypes from "prop-types";

const heroStyle ={
    backgroundColor:"lightblue",
    padding:"10px",
    margin:"10px",
    fontFamily: "arial"
}
const titleStyle ={
    color:"white",
    margin:"0"
    
}
const subtitleStyle ={
    color:"white",
    fontSize: '1rem',
    fontWeight:'normal',
    margin:"0"
}
    const Hero =({title, subtitle})=>{
 return(
    <div style={heroStyle}>
        {title&& <h1 style={titleStyle}>Info hero</h1>}
        {subtitle && <h2 style={subtitleStyle}>Info subtitle</h2>}
    </div>
   );
};
Hero.propTypes={
    title:PropTypes.string,
    subtitle:PropTypes.string,
};
export default Hero