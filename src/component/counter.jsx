import React, { useState } from "react";
import MyButton from "./UI/button/MyButton";

const Counter = () =>{
    const [count, setCount] = useState(0)
    function increment(){
        setCount(count + 1)
      }
      function decrement(){
        setCount(count - 1)
      }
    return(
    <>
        <h1>{count}</h1>
        <MyButton onClick={increment}>Increment</MyButton>
        <MyButton onClick={decrement}> Decrement</MyButton>
    </>
    )
}
export default Counter;