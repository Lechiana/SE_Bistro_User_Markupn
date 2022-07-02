import React from "react";
import Navbaradmin from "../../components/์Navbaradmin/Navbaradmin";
import Sidebar from "../../components/Sidebar/Sidebar";
import Manageuserss from "./Manageuserss";

const Manageusers = () => {
  let count = 1;
  const renderUsers = () => {
    return [...new Array(12)].map((el, index) => (
      <Manageuserss
        key={index}
        number={count++}
        name="จิรายุส สหพรอุดมการ"
        role="ผู้ใช้"
        phone="094-9627105"
        email="624259007@webail.npru.ac.th"
        password="*********"
        buildtime="18-1-2565"
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
        <div className="col-start-2 col-span-2 mt-6 ml-36">
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
                <a>การจัดการผู้ใช้</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-start-2 col-span-2 mt-6 ml-36">
          <h2>ผู้ใช้ทั้งหมด</h2>
        </div>
        <div className="col-start-2 col-span-3 mt-6 ml-36">
          <div className="grid grid-cols-4">
            <h4 className="mt-3">เรียงตาม : </h4>
            <select class="select w-36 max-w-xs select-bordered -5">
              <option disabled selected>
                เลือก
              </option>
              <option>ใหม่ล่าสุด</option>
              <option>ยอดฮิต</option>
              <option>ราคาสุงสุด</option>
              <option>ราคาต่ำสุด</option>
            </select>
          </div>
        </div>
        <div className="col-start-5 col-span-3 mt-6">
          <div className="form-control">
            <div className="input-group">
              <input
                type="text"
                placeholder="ค้นหา"
                className="input input-bordered w-4/6"
              />
              <button className="btn btn-square">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="col-start-9 col-span-2 mt-8">
          <div className="grid grid-cols-3">
            <div className="col-start-1 flex">
              <a className="link link-hover mx-auto text-lg">ผู้ใช้</a>
            </div>
            <div className="col-start-2 flex">
              <a className="link link-hover mx-auto text-lg">พนักงาน</a>
            </div>
            <div className="col-start-3 flex">
              <a className="link link-hover mx-auto text-lg">หัวหน้า</a>
            </div>
          </div>
        </div>

        <div className="col-start-3 col-span-8 mt-5 overflow-x-auto">
          <table className="table table-compact table-zebra w-full">
            <thead>
              <tr>
                <th>ลำดับ</th>
                <th>ชื่อ-นามสกุล</th>
                <th>บทบาท</th>
                <th>เบอร์โทร</th>
                <th>อีเมล</th>
                <th>รหัสผ่าน</th>
                <th>เวลาสร้าง</th>
                <th />
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

export default Manageusers;
