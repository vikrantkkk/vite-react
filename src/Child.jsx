//State Lifting Up  (the way to pass data from child to parent)

import React from "react";

const Child = ({getData}) => {
console.log(getData);

  const name = "vikrant";

  return (
    <div>
      <button onClick={()=> getData(name)}>Click me</button>
    </div>
  );
};

export default Child;
