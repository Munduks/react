/* eslint-disable no-const-assign */
const textButton ={
    color:"skyblue",
    border:"none",
    backgroundColor:"white",
    padding:"10px 30px",
    margin:"10px"
}
const containerButton ={
    color:"white",
    border:"none",
    borderRadius:"7%",
    backgroundColor:"skyblue",
    padding:"10px 30px",
    margin:"10px"
}
const outlinedButton ={
    color:"skyblue",
    border:"1px solid skyblue",
    borderRadius:"7%",
    backgroundColor:"white",
    padding:"10px 30px",
    margin:"10px"
}

const Button=({title, variant})=>{
    return <button style={textButton} > Text</button>
    // let buttonClassName = "button";

    // if (variant === "text") {
    //   buttonClassName += " button-text";
    // } else if (variant === "contained") {
    //   buttonClassName += " button-contained";
    // } else if (variant === "outlined") {
    //   buttonClassName += " button-outlined";
    // }
  
    return (
        <div>
        <button style={textButton} > Text</button>
        <button style={containerButton} >Container</button>
        {/* <button style={outlinedButton} className={buttonClassName}>Outlined</button> */}

        </div>
      
      
    );

}
export default Button