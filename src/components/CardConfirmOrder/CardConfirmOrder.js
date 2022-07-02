import React from "react";
import DataFood from "../../pages/ConfirmOrder/DataFood";

const CardConfirmOrder = ({ image, createData, firstName, totalPrice }) => {
  return (
    <div className="card w-full h-80 bg-base-300 grid grid-cols-10 my-10 shadow-xl">
      <div className="col-start-1 col-span-3 mt-5 ml-5">
        <div className="avatar ml-5">
          <div className="w-60 rounded-full">
            <img src={image} />
          </div>
        </div>
      </div>
      <div className="absolute top-8 w-64 col-start-4 col-span-3 ml-5">
        <div className="grid grid-cols-8 mt-5">
          <p className="col-span-4">รหัสเมนูอาหาร </p>
          <p className="col-span-4 col-start-5">24365001</p>
        </div>
        <div className="grid grid-cols-8 my-10">
          <p className="col-span-2">วันที่สั่ง </p>
          <p className="col-span-6 col-start-5">{createData}</p>
        </div>
        <div className="grid grid-cols-8">
          <p className="col-span-3">ช่วงเวลา </p>
          <p className="col-span-5 col-start-5">12:31:59 &nbsp;น.</p>
        </div>
      </div>
      <div className="absolute top-10 ml-9 col-start-4 col-span-1">
        <div className="border-r-2 border-base-100 ml-60 ">
          <p className="invisible">0</p>
          <p className="invisible">0</p>
          <p className="invisible">0</p>
          <p className="invisible">0</p>
          <p className="invisible">0</p>
          <p className="invisible">0</p>
          <p className="invisible">0</p>
          <p className="invisible">0</p>
          <p className="invisible">0</p>
          <p className="invisible">0</p>
        </div>
      </div>
      <div className="absolute top-8 ml-10 col-start-7 col-span-4">
        <DataFood />
        <div className="grid grid-cols-5 my-6">
          <p className="col-span-2 text-orange-600">รายการอาหาร (3) </p>
        </div>
        <div className="grid grid-cols-10 my-2">
          <p className="text-lg col-span-2">ยอดรวม </p>
          <p className="text-lg col-span-3 col-start-9 text-secondary">
            ฿ {totalPrice}
          </p>
        </div>
      </div>
      <div className="col-start-2 col-span-3 mb-4">
        <h3>{firstName}</h3>
      </div>
      <div className="absolute right-2 top-2 text-lg text-slate-400">
        <i className="fa-solid fa-arrow-up-right-from-square" />
      </div>
    </div>
  );
};

export default CardConfirmOrder;
