import React from "react";
import Navbaradmin from "../../components/์Navbaradmin/Navbaradmin";
import Sidebar from "../../components/Sidebar/Sidebar";
import CardCoupon from "./CardCoupon";
import DatePicker from "../../components/DatePicker/DatePicker";

const AllCoupon = () => {
  return (
    <div>
      <Navbaradmin />
      <div className="grid grid-cols-10 my-20">
        <div className="row-span-1">
          <Sidebar />
        </div>
        <div className="col-start-2 col-span-2 mt-10 ml-36">
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
                <a>คูปองทั้งหมด</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="absolute right-12 top-28 mt-14 ml-6">
          <label
            htmlFor="my-modal-1"
            className="btn modal-button badge-secondary text-base"
          >
            <i className="fa-solid fa-plus" />
            &nbsp;เพิ่มคูปอง
          </label>

          <input type="checkbox" id="my-modal-1" className="modal-toggle" />
          <div className="modal bg-neutral-focus">
            <div className="modal-box w-11/12 max-w-5xl grid grid-cols-6  bg-neutral">
              <label
                htmlFor="my-modal-1"
                className="btn btn-sm btn-circle bg-base-200 absolute right-3 top-3"
              >
                ✕
              </label>
              <h3 className="text-2xl font-medium text-center col-span-6 my-5">
                เพิ่มคูปอง
              </h3>
              <div className="form-control w-full max-w-xs my-5 ml-10 col-span-3">
                <label className="label">
                  <span className="label-text text-lg">ชื่อคูปอง</span>
                </label>
                <input
                  type="text"
                  placeholder="ชื่อคูปอง"
                  className="input input-bordered w-96"
                />
              </div>
              <div className="form-control w-full max-w-xs my-5  ml-10 col-span-3">
                <label className="label">
                  <span className="label-text text-lg">รหัสคูปอง</span>
                </label>
                <input
                  type="text"
                  placeholder="รหัสคูปอง"
                  className="input input-bordered w-96"
                />
              </div>
              <div className="form-control w-full max-w-xs my-5 ml-10 col-span-3">
                <label className="label">
                  <span className="label-text text-lg">ราคาลด</span>
                </label>
                <input
                  type="text"
                  placeholder="ราคาลด"
                  className="input input-bordered w-96"
                />
              </div>
              <div className="form-control w-full max-w-xs my-5  ml-10 col-span-3">
                <label className="label">
                  <span className="label-text text-lg">ขั้นต่ำ</span>
                </label>
                <input
                  type="text"
                  placeholder="ขั้นต่ำ"
                  className="input input-bordered w-96"
                />
              </div>
              <div className="form-control w-full max-w-xs my-5 ml-10 col-span-3">
                <label className="label">
                  <span className="label-text text-lg">วันเริ่ม</span>
                </label>
                <DatePicker />
              </div>
              <div className="form-control w-full max-w-xs my-5  ml-10 col-span-3">
                <label className="label">
                  <span className="label-text text-lg">วันหมด</span>
                </label>
                <DatePicker />
              </div>

              <div className="grid grid-cols-6 col-span-6 my-5">
                <label
                  htmlFor="my-modal-1"
                  className="btn bg-primary mx-1 col-start-3 mt-5"
                >
                  บันทึก
                </label>
                <label
                  htmlFor="my-modal-1"
                  className="btn bg-error mx-1 col-start-4 mt-5"
                >
                  ยกเลิก
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="col-start-2 col-span-2 mt-6 ml-36">
          <h2>คูปองทั้งหมด</h2>
        </div>
        <div className="col-start-5 col-span-3 mt-3">
          <div className="form-control ml-32">
            <div className="input-group">
              <input
                type="text"
                placeholder="ค้นหา"
                className="input input-bordered w-5/6"
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
        <div className="col-start-2 col-span-9 mt-10 ml-36">
          <CardCoupon />
        </div>
      </div>
      <div className="grid grid-cols-6 my-14">
        <div className="btn-group col-start-4 ml-24">
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

export default AllCoupon;
