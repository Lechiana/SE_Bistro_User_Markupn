import React from "react";
import CardOrderFood from "../../components/CardOrderFood/CardOrderFood";

const DataFood = () => {
  const renderCard = () => {
    return [...new Array(3)].map((el, index) => (
      <CardOrderFood
        key={index}
        food="ข้าวผัด"
        price={150}
        amount={2}
        size="ปกติ"
      />
    ));
  };
  return <div>{renderCard()}</div>;
};

export default DataFood;
