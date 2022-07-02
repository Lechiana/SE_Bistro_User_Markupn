import React from "react";
import DatePicker from "../../components/DatePicker/DatePicker";

const AdminCoupons = ({ name, code, discount, minimumPrice }) => {
  return (
    <div>
      <div className="card w-11/12 bg-base-300 shadow-xl mt-8 border-2 border-black ">
        <div className="dropdown dropdown-end absolute right-0 top-0">
          <label tabIndex={0} className="btn bg-base-300 m-1 border-base-300">
            <i className="fa-solid fa-bars text-2xl" />
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu border-2 border-gray-600 shadow-xl bg-neutral rounded-box w-44 text-lg"
          >
            <li>
              <>
                <label htmlFor="my-modal-3" className="btn modal-button">
                  <i className="fa-solid fa-pen-to-square" />
                  แก้ไขคูปอง
                </label>
              </>
            </li>
            <li>
              <>
                <label
                  htmlFor="my-modal-6"
                  className="btn modal-button font-medium mr-4"
                >
                  <i className="fa-solid fa-trash-can" />
                  ลบคูปอง
                </label>
              </>
            </li>
          </ul>
        </div>
        <input type="checkbox" id="my-modal-6" className="modal-toggle" />
        <div className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <h3 className="font-normal text-xl">ต้องการที่จะลบคูปอง?</h3>
            <div className="modal-action">
              <label
                htmlFor="my-modal-6"
                className="btn bg-primary font-normal text-lg"
              >
                ตกลง
              </label>
              <label
                htmlFor="my-modal-6"
                className="btn bg-base-100 font-normal text-lg"
              >
                ยกเลิก
              </label>
            </div>
          </div>
        </div>

        <input type="checkbox" id="my-modal-3" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box w-11/12 max-w-5xl grid grid-cols-6  bg-neutral">
            <label
              htmlFor="my-modal-3"
              className="btn btn-sm btn-circle bg-base-200 absolute right-3 top-3"
            >
              ✕
            </label>
            <h3 className="text-2xl font-medium text-center col-span-6 my-5">
              แก้ไขคูปอง
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
                htmlFor="my-modal-3"
                className="btn bg-primary mx-1 col-start-3 mt-5"
              >
                บันทึก
              </label>
              <label
                htmlFor="my-modal-3"
                className="btn bg-error mx-1 col-start-4 mt-5"
              >
                ยกเลิก
              </label>
            </div>
          </div>
        </div>

        <div className="card-body">
          <h3 className="text-center">{name}</h3>
          <div className="grid grid-cols-5">
            <div className="col-span-3">
              <p className="text-center my-4">
                9 วันเท่านั้น
                <br /> 12 - 20 เม.ย. 65
              </p>
              <div className="grid grid-cols-4">
                <h2 className="pt-1">รหัส</h2>
                <p className="underline decoration-solid text-teal-500 text-3xl font-medium">
                  {code}
                </p>
              </div>
            </div>
            <div className="col-span-2">
              <h2 className="text-center mt-2">รับส่วนลด </h2>
              <p className="text-center text-6xl badge-secondary badge-outline font-bold mt-5">
                {discount}.-
              </p>
            </div>
            <div className="col-span-5 mt-5">
              <div className="grid grid-cols-9">
                <p className="col-start-3 col-span-3 text-xl mt-0.5">
                  เมื่อสั่งซื้อขั้นต่ำ
                </p>
                <p className="col-start-6 col-span-1 text-red-500 text-2xl font-normal">
                  {minimumPrice}
                </p>
                <p className="col-start-7 col-span-1 text-xl ml-2 mt-0.5">
                  บาท
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminCoupons;
