import React from "react";
import Navbaradmin from "../../components/์Navbaradmin/Navbaradmin";
import Sidebar from "../../components/Sidebar/Sidebar";
import History from "./History";

const Historys = () => {
  let count = 1;
  const renderUsers = () => {
    return [...new Array(10)].map((el, index) => (
      <History
        key={index}
        number={count++}
        nameFood="ยำแซลมอน มะยม"
        nameBuy="รัชโรจน์ อ่างทอง"
        nameSender="จิรายุส สหพรอุดมการ"
        totalPrice="390"
        sentStatus="สำเร็จ"
      />
    ));
  };
  return (
    <div>
      <Navbaradmin />
      <div className="grid grid-cols-10 my-20">
        <div className="row-span-5">
          <Sidebar />
        </div>
        <div className="col-start-3 col-span-2 mt-6">
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
                <a>ใบเสร็จและ การสั่ง ซื้ออาหาร</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-start-3 mt-6">
          <h2>ใบเสร็จ และการสั่ง</h2>
        </div>
        <div className="col-start-4 mt-6">
          <h2>ซื้ออาหาร</h2>
        </div>
        <div className="col-start-3 col-span-8 mt-5 overflow-x-auto mt-10">
          <table className="table table-compact table-zebra w-11/12 container mx-auto">
            <thead>
              <tr>
                <th>ลำดับ</th>
                <th>ชื่ออาหาร</th>
                <th>ชื่อผู้ซื้อ</th>
                <th>ชื่อพนังงานส่ง</th>
                <th>ราคารวม</th>
                <th>สถานะส่ง</th>
                <th />
              </tr>
            </thead>
            <tbody>{renderUsers()}</tbody>
          </table>
        </div>
        <div className="btn-group col-start-6 mt-8">
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

export default Historys;
