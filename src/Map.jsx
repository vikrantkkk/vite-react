//List and Key
//vertual DOM in react //vey important
import React from "react";
const Map = () => {
  // const array = ["ragini","prashant","muskan","neha","nidhi","anjali",];
  //  0 , 1 , 2 ,3 ,4, 5, 6  //using index as a key;
  const array = [
    { name: "ragini", email: "ragini@gamil.com", phone: 9090909090 },
  ];

  //task

  // const myArray = [
  //   {
  //     name: "ragini",
  //     email: "ragini@gmail.com",
  //     phone: 8989898989,
  //     address: [
  //       {
  //         state: "bihar",
  //         district: "smastipue"
  //       }
  //     ]
  //   }
  // ];
  
  
  return (
    <div>
      {array.map((item, i) => {
        return (
          <div key={i}>
            <h1>{item.name}</h1>
            <h1>{item.email}</h1>
            <h1>{item.phone}</h1>
          </div>
        );
      })}
    </div>
  );
};
export default Map;
