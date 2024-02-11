import React, { useState } from "react";

const Example = () => {

  const [count, setCount] = useState(0);
  
  //  const [show, setShow] = useState(false);

  const increase = () => {
    setCount(count + 1);
  };

  // const increase = () => {
  //   setCount((previous)=> previous + 1);
  // };


  const decrease = () => {
    setCount(count - 1);
  };
  // const decrease = () => {
  //   setCount((previous) => previous -1);
  // };

  // const turnon = () => {
  //   setShow(true);
  // };
  
  // const turnon = () => {
  //   setShow((pre)=> !pre);
  // };


  return (
    <>
      <h1>{count}</h1>
      {/* <h1>the light is {show ? "on" : "off"}</h1> */}
      <button onClick={increase}>inc</button>
      <button onClick={decrease}>dec</button>
      {/* <button onClick={turnon}>turnon</button> */}
    </>
  );
};

export default Example;
