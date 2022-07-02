import React from "react";
import Cardadmin from "../../components/Cardadmin/Cardadmin";

const Cardfood = () => {
  const renderCard = () => {
    return [...new Array(12)].map((el, index) => (
      <Cardadmin
        key={index}
        name="ข้าวผัด"
        avgRating={4.3}
        typefood="อาหารจานเดียว"
        foodcategory="เส้น จานเดี่ยว"
        image="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        dayaddfood="18-1-2565 22:12"
        price={50}
      />
    ));
  };

  return <div className="grid grid-cols-4">{renderCard()}</div>;
};

export default Cardfood;
