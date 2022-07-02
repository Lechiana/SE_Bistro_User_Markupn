import React from "react";
import "./CardNewFoodd.css";

const CardPopularFoods = ({ name, typefood, image, price }) => {
  return (
    <div className="container mt-5">
      <div className="card">
        <div className="box">
          <div className="content">
            <img src={image} alt={name} />
            <h3 className="mt-8">{name}</h3>
            <p className="my-3">ประเภทอาหาร : {typefood}</p>
            <div className="text-orange-600 my-3">
              <h2>฿ {price}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPopularFoods;
