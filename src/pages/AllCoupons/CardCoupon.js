import React from "react";
import AdminCoupons from "../../components/AdminCoupons/AdminCoupons";

const CardCoupon = () => {
  const renderCard = () => {
    return [...new Array(6)].map((el, index) => (
      <AdminCoupons
        key={index}
        name="สาด“ โค๊ด” รับสงกรานต์"
        code="LSBD1001"
        discount={300}
        minimumPrice={500}
      />
    ));
  };

  return <div className="grid grid-cols-3">{renderCard()}</div>;
};

export default CardCoupon;
