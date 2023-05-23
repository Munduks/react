import { useState } from "react"

const divStyle ={
    display:'flex',
    flexDirection: "row",
    flexWrap: "wrap",
    margin: '10px',
}
const Counter =()=>{
const [count, setCount ] =useState(0);

const increment =()=>{
    setCount ((previousCount) => previousCount + 1);
};
const decrement =()=> {
    setCount ((previousCount) => previousCount - 1);
}

const reset =()=>{
setCount(0);
}
return (
<div style={divStyle}>
    <button  onClick={increment}>+1</button>
    <h2>{count}</h2>
    <button onClick={decrement}>-1</button>
    <button onClick={reset}>Reset count</button>
</div>
);
}





export default Counter