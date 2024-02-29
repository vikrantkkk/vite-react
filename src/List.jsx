// List and Key

// task
//code step by step;

// spread oprator,rest oprator, shaloow Copy, deep copy  

const myArray = [
    {
      name: "ragini",
      email: "ragini@gmail.com",
      phone: 8989898989,
      address: [
        {
          state: "bihar",
          district: "smastipue"
        }
      ]
    }
  ];

import React, { useState } from "react";


const List = () => {
  const [data,setData] = useState(["ragini", "neha", "prashant", "muskan"]);
  

  

  const handleClick = () => {
    const data1 = [...data];
    data1.pop();
    setData(data1);
  };

  return (
    <div>
      {data.map((item, index) => {
        return <h1 key={index}>{item}</h1>;
      })}
      <button onClick={handleClick}>click</button>
    </div>
  );
};

export default List;
