import React from "react";
import "./style.css";

const Analytics = () => {
  return (
    <div className="flex">
      <div className="">
        <div className="card card-compact w-96 h-48 bg-neutral-focus shadow-xl">
          <div className="card-body text-center">
            <div>
              <p className="mt-10 text-5xl font-medium text-green-500">80</p>
              <p className="mt-2 text-base text-green-500">จำนวนอาหารทั้งหมด</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-5">
        <div className="card card-compact w-96 h-48 bg-neutral-focus shadow-xl">
          <div className="card-body text-center">
            <div>
              <p className="mt-10 text-5xl font-medium text-sky-600">45</p>
              <p className="mt-2 text-base text-sky-600">จำนวนผู้ใช้ทั้งหมด</p>
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <div className="card card-compact w-96 h-48 bg-neutral-focus shadow-xl">
          <div className="card-body text-center">
            <div>
              <p className="mt-10 text-5xl font-medium text-rose-600">23</p>
              <p className="mt-2 text-base text-rose-600">ผู้ใช้ถูแบน</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-5">
        <div className="card card-compact w-96 h-48 bg-neutral-focus shadow-xl">
          <div className="card-body text-center">
            <div>
              <p className="mt-10 text-5xl font-medium text-warning">55</p>
              <p className="mt-2 text-base text-warning">ไม่รู้ใส่ไปก่อน</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
