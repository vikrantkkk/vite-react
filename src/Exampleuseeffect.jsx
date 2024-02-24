//useEffect
//promise (.the .catch)
//react router dom
import React, { useEffect, useState } from "react"

const Exampleuseeffect = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((result) => {
        // console.log(result);   // important
        setData(result);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      {data.map((item) => {
        console.log(item);  // important
       return(
        <div key={item.id}>
         <h1>{item.title}</h1>
         <p>{item.body}</p>
         <h3>{item.userId}</h3>
         <h5>{item.id}</h5>
        </div>
       )
      }
      )}
    </div>
  );
};

export default Exampleuseeffect;
