import React, { useState } from "react";

const Todo = () => {
  const [data, setData] = useState("");
  const [item, setItem] = useState([]);
  // console.log("🚀 ~ Todo ~ item:", item);
  // console.log("🚀 ~ Todo ~ data:", data)
  const handleChange = (event) => {
    // console.log("🚀 ~ handleChange ~ event:", event)
    setData(event.target.value);
  };
  const handleClick = () => {
    setItem([...item, data]);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "500px",
        }}
      >
        <input value={data} onChange={handleChange} type="text" />
        <button onClick={handleClick}>add</button>
        {item.map((alldata, index) => {
          return (
            <div key={index}>
              <h1>{alldata}</h1>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Todo;
