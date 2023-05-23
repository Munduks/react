import PropTypes from "prop-types";

const cardStyle = {
    width: '350px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    
    margin: '10px',
    fontSize: '1rem',
    color:"grey"
  };

  const imageStyle = {
    borderRadius: '5px',
    width: '350px',
    objectFit:"cover",
    height: 'auto',
  }
  const titleStyle={
    padding: '0px 10px',
    margin:"7px",
    fontWeight:'normal',
    color:"black"
  }
  const subtitileStyle={
    padding: '0px 10px',
  }
function Card (props){
    return(
        <div style={cardStyle}>
            <img style={imageStyle} src={props.imageUrl} alt={props.title} />
                <h2 style={titleStyle}>{props.title}</h2>   
                <p style={subtitileStyle}>{props.subtitle}</p>
        </div>   
    );
};
Card.propTypes ={
    imageUrl:PropTypes.string,
    title:PropTypes.string.isRequired,
    subtitle:PropTypes.string.isRequired,
}

export default Card;
