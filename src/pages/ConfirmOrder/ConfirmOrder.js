import React from "react";
import CardConfirmOrder from "../../components/CardConfirmOrder/CardConfirmOrder";

const ConfirmOrder = () => {
  const renderCard = () => {
    return [...new Array(4)].map((el, index) => (
      <CardConfirmOrder
        key={index}
        image="https://api.lorem.space/image/face?hash=40361"
        createData="18-1-2565"
        firstName="โนบิตะ ชอบชิสุกะ"
        totalPrice="666"
      />
    ));
  };
  return <div>{renderCard()}</div>;
};

export default ConfirmOrder;
