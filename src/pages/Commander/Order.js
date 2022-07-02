import React from "react";

const Order = ({
    
  name,
  price,

}) => {
  return (
   
        <div className="grid grid-cols-2 mt-2">
          <h5>{name} </h5>
          <h5 className="justify-self-end font-bold">฿ {price}</h5>
        </div>
       
   
  );
};

export default Order;
