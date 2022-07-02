import React from "react";
import Navbaradmin from "../../components/์Navbaradmin/Navbaradmin";
import Sidebar from "../../components/Sidebar/Sidebar";
import ConfirmOrder from "./ConfirmOrder";

const ConfirmOrders = () => {
  return (
    <div>
      <div className="mt-20 grid grid-cols-11">
        <Navbaradmin />
        <Sidebar />
        <div className="col-start-3 col-span-3 mt-10">
          <div className="text-sm breadcrumbs">
            <ul>
              <li>
                <a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="w-4 h-4 mr-2 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                    />
                  </svg>
                  หน้าแรก
                </a>
              </li>
              <li>
                <a>รายการสั่งซื้อ</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-start-3 col-span-3 mt-6 ">
          <h2>รายการสั่งซื้อ</h2>
        </div>
        <div className="w-9/12 bg-base-100 ml-16 col-start-4 col-span-9">
          <ConfirmOrder />
        </div>
      </div>

      <div className="grid grid-cols-11 my-14">
        <div className="btn-group col-start-7 col-span-3">
          <input
            type="radio"
            name="options"
            data-title={1}
            defaultChecked="checked"
            className="btn"
          />
          <input type="radio" name="options" data-title={2} className="btn" />
          <input type="radio" name="options" data-title={3} className="btn" />
          <input type="radio" name="options" data-title={4} className="btn" />
        </div>
      </div>
    </div>
  );
};

export default ConfirmOrders;
