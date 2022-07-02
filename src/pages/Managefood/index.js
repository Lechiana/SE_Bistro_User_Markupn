import React from "react";
import Navbaradmin from "../../components/์Navbaradmin/Navbaradmin";
import Sidebar from "../../components/Sidebar/Sidebar";
import Cardfood from "./Cardfood";

const Managefood = () => {
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
                <a>การจัดการอาหาร</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-start-10 col-span-2 mt-5 mx-auto">
          <button className="btn btn-secondary col-start-2 col-span-1">
            <svg
              width="22"
              height="22"
              viewBox="0 0 14 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_995_3354)">
                <path
                  d="M7.03625 0.860291V10.4603"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M1.1745 5.63074H12.898"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_995_3354">
                  <rect
                    width="12.6254"
                    height="10.3385"
                    fill="white"
                    transform="translate(0.723572 0.461548)"
                  />
                </clipPath>
              </defs>
            </svg>
            เพิ่มอาหาร
          </button>
        </div>
        <div className="col-start-2 col-span-2 mt-6 ml-36">
          <h2>อาหารทั้งหมด</h2>
        </div>
        <div className="col-start-9 col-span-2 mt-6">
          <div className="grid grid-cols-3">
            <div className="col-start-1">
              <a className="link link-hover">
                <h4>อาหาร</h4>
              </a>
            </div>
            <div className="col-start-2">
              <a className="link link-hover">
                <h4>เครื่องดื่ม</h4>
              </a>
            </div>
            <div className="col-start-3">
              <a className="link link-hover">
                <h4>ขนมหวาน</h4>
              </a>
            </div>
          </div>
        </div>
        <div className="col-start-2 col-span-2 mt-6 ml-36">
          <div className="grid grid-cols-4">
            <h4 className="mt-3 col-span-2">เรียงตาม : </h4>
            <select class="select w-36 max-w-xs select-bordered -5">
              <option disabled selected>
                เลือก
              </option>
              <option>ราคา</option>
              <option>ตามอังษร</option>
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
        <div className="col-start-8 mt-8">
          <div>
            <h4>หมวดหมู่อาหาร :</h4>
          </div>
        </div>
        <div className="col-start-9 col-span-2 mt-8">
          <div className="grid grid-cols-3">
            <div className="col-start-1 flex">
              <input
                type="radio"
                name="radio-3"
                className="radio radio-secondary"
                defaultChecked=""
              />
              <h4 className="ml-2">เส้น</h4>
            </div>
            <div className="col-start-2 flex">
              <input
                type="radio"
                name="radio-3"
                className="radio radio-secondary"
                defaultChecked=""
              />
              <h4 className="ml-2">จานเดี่ยว</h4>
            </div>
            <div className="col-start-3 flex">
              <input
                type="radio"
                name="radio-3"
                className="radio radio-secondary"
                defaultChecked=""
              />
              <h4 className="ml-2">พิซซ่า</h4>
            </div>
          </div>
        </div>
        <div className="col-start-2 col-span-9 ml-36">
          <Cardfood />
        </div>
      </div>
      <div className="grid grid-cols-6 mt-10 my-10">
        <div className="btn-group col-start-4">
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

export default Managefood;
