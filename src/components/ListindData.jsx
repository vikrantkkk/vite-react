import React from "react";
import postData from "../utils/twiterData";

const ListindData = () => {
  return (
    <div>
      {postData.map((item) => {
        return (
          <div>
            <h2 style={{fontSize:"30px"}}>{item.name}</h2>
            <h3 style={{fontSize:"20px"}}>{item.username}</h3>
            <h4 >{item.post}</h4>
            <img src={item.image} alt="" style={{width:"400px",height:"400px"}} />
            <div style={{display:"flex", gap:"10px"}}>

            <p>like</p>
            <p>comment</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ListindData;
