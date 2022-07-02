import React from "react";

const Receipt = ({
  number,
  nameFood,
  foodSize,
  numFood,
  price,
  totalPrice,
}) => {
  return (
    <tr>
      <td>{number}</td>
      <td>{nameFood}</td>
      <td>{foodSize}</td>
      <td>{numFood}</td>
      <td>฿{price}</td>
      <td>฿{totalPrice}</td>
    </tr>
  );
};

export default Receipt;
