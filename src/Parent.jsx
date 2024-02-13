import React, { useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [data, setData] = useState("Prashant");

  function getData(name) {
    // console.log(name);
    setData(name);
  }


  //Task
  
//      <h1>Count increasing by one </h1>


  return (
    <>
      <h1>MY name is {data} !</h1>
      <Child getData={getData} />
    </>
  );
};

export default Parent;
