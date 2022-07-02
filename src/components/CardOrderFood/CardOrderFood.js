import React from "react";

const CardConfirmOrder = ({ food, price, amount, size }) => {
  return (
    <div className="grid grid-cols-10 mt-5">
      <p className="text-lg col-span-4">{food} </p>
      <p className="text-lg col-span-2 col-start-5">{size}</p>
      <p className="text-lg col-span-1 col-start-7 ml-3">{amount}</p>
      <p className="text-lg col-span-2 col-start-9 text-secondary">$ {price}</p>
    </div>
  );
};

export default CardConfirmOrder;
