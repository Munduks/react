import { useState } from "react";

const Color = () => {
  const [text, setText] = useState("");
  // const [background, setBackground] = useState(null);

  const handleTextChange = (e) => {
    const newText = e.target.value;
    setText(newText);

    const  getBackground =(textLength)=>{
    if (textLength <3) {
      return "white";
    } else if (textLength > 3) {
      return"yellow";
    } else if (textLength > 6) {
      return"green";
    }else{
      return "red";
    }  
  };
  const backgroundColor = getBackground(text.length);
  return (
    <div style={{ backgroundColor: backgroundColor padding: "20px" }}>
      <input type="text" value={text} onChange={handleTextChange} />
    </div>
  );
}
};
export default Color;