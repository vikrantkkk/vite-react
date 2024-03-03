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
    setData("");
  };
  //task delete item from listing

  const handleDelete = (index) => {
    const todo = item.filter((_, i) => i !== index);
    setItem(todo);
  };

// filter working
// 0,1,2,3,4,5,6,7 !== 3;
// 0,1,2,4,5,6,7

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

        {/* to pass the control to react(input value) */}
        {/* task
        control component
        uncontrol component */}

        <button onClick={handleClick}>add</button>

        {/* {    console.log("🚀 ~ {item.map ~ item:", item)} */}
        {item.map((alldata, index) => {
          // console.log("🚀 ~ {item.map ~ alldata:", alldata)
          return (
            <div key={index}>
              <h1>{alldata}</h1>
              <button onClick={() => handleDelete(index)}>delete</button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Todo;
