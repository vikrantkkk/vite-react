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
  const colorStyle = {
    color: "green",
  };

  return (
    <>
      <div>ParentComponent</div>
      <ChildComponent  style = {colorStyle} />
    </>
  );
};

export default ParentComponent;
