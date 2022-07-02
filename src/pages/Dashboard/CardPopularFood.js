import React from "react";
import CardPopularFoods from "../../components/Dashboards/CardPopularFoods";

const CardPopularFood = () => {
  const renderCard = () => {
    return [...new Array(4)].map((el, index) => (
      <CardPopularFoods
        key={index}
        name="ข้าวผัดแกงส้ม"
        typefood="อาหารจานเดียว"
        price={65}
        image="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
      />
    ));
  };

  return <div className="grid grid-cols-4">{renderCard()}</div>;
};

export default CardPopularFood;
