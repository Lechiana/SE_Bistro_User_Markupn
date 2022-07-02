import React from "react";

const History = ({
  number,
  nameFood,
  nameBuy,
  nameSender,
  totalPrice,
  sentStatus,
}) => {
  return (
    <tr className="hover">
      <td>{number}</td>
      <td>{nameFood}</td>
      <td>{nameBuy}</td>
      <td>{nameSender}</td>
      <td>฿{totalPrice}</td>
      <td>{sentStatus}</td>
      <td>
        <button className="btn btn-primary text-white">ดูเพิ่มเติม</button>
      </td>
    </tr>
  );
};

export default History;
