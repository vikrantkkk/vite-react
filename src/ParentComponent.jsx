// import React from "react";
// import ChildComponent from "./ChildComponent";

// const ParentComponent = ({color}) => {
//     const name = "ragini"
//   return <>
//   <div>
//     {color}
//   </div>
//   <ChildComponent firstName = {name}/>
//   </>;
// };

// export default ParentComponent;

//passing color through props
import React from "react";
import { ChildComponent } from "./ChildComponent";

const ParentComponent = () => {
  const obj = {
    name: "green",
    age: 20,
  };

  return (
    <>
      <div>ParentComponent</div>
      <ChildComponent obj={obj} />
    </>
  );
};

export default ParentComponent;
