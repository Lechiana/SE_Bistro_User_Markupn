import React from "react";
import Navbaradmin from "../../components/์Navbaradmin/Navbaradmin";
import Sidebar from "../../components/Sidebar/Sidebar";

const Editfood = () => {
  return (
    <div>
      <Navbaradmin />
      <div className="grid grid-cols-10 my-20">
        <div className="row-span-5">
          <Sidebar />
        </div>
      
      <div className="container mx-auto relative col-start-3 col-span-7 mt-12">
        <div className="bg-base-200 p-8 max-w-4xl mx-auto rounded-box">
          <div className="text-center">
            <h2 className="mt-4">แก้ไขอาหาร</h2>
            <hr className="mt-6"></hr>
          </div>
          <div className="form-control px-24 mt-5">
            <label className="label">
              <h3>ชื่ออาหาร</h3>
            </label>
            <input
              type="namefood"
              placeholder="ชื่ออาหาร"
              className="input input-bordered flex justify-center"
            />
          </div>
          <div className="form-control px-24 mt-5">
            <label className="label">
              <h3>ประเภทอาหาร</h3>
            </label>
            <select className="select select-bordered">
              <option disabled="" selected="">
                Who shot first?
              </option>
              <option>Han Solo</option>
              <option>Greedo</option>
            </select>
          </div>
          <div className="form-control mt-8 px-24">
            <h3>หมวดหมู่อาหาร</h3>
            <div className="grid grid-cols-4 grid justify-items-start">
              <div className="form-control">
                <label className="label cursor-pointe">
                  <input
                    type="checkbox"
                    defaultChecked="checked"
                    className="checkbox"
                  />
                  <span className="label-text ml-3">เส้น</span>
                </label>
              </div>
              <div className="form-control">
                <label className="label cursor-pointe">
                  <input
                    type="checkbox"
                    defaultChecked="checked"
                    className="checkbox"
                  />
                  <span className="label-text ml-3">จานเดี่ยว</span>
                </label>
              </div>
              <div className="form-control">
                <label className="label cursor-pointe">
                  <input
                    type="checkbox"
                    defaultChecked="checked"
                    className="checkbox"
                  />
                  <span className="label-text ml-3">พิซซ่า</span>
                </label>
              </div>
              <div className="form-control">
                <label className="label cursor-pointe">
                  <input
                    type="checkbox"
                    defaultChecked="checked"
                    className="checkbox"
                  />
                  <span className="label-text ml-3">พิซซ่า</span>
                </label>
              </div>
            </div>
          </div>
          <div className="form-control px-24 mt-8 grid justify-items-start">
            <h3>สถานะอาหาร</h3>
            <div className="form-control">
              <label className="label cursor-pointer">
                <input
                  type="radio"
                  name="radio-6"
                  className="radio radio-secondary"
                  defaultChecked=""
                />
                <span className="label-text ml-3">มีอาหาร</span>
              </label>
            </div>
          </div>
          <div className="form-control px-24 mt-8">
            <h3>ราคาอาหาร</h3>
            <div>
              <span className="label-text">ราคาขนาดปกติ และ ราคาส่วนลด</span>
              <div className="grid grid-cols-2 gap-2">
                <div className="form-control w-11/12 mx-auto">
                  <input
                    type="namefood"
                    placeholder="ราคาปกติ"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control w-11/12 mx-auto">
                  <input
                    type="namefood"
                    placeholder="ราคาส่วนลด"
                    className="input input-bordered"
                  />
                </div>
              </div>
            </div>
            <div>
              <span className="label-text">ราคาขนาดกลาง และ ราคาส่วนลด</span>
              <div className="grid grid-cols-2 gap-2">
                <div className="form-control w-11/12 mx-auto">
                  <input
                    type="namefood"
                    placeholder="ราคาปกติ"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control w-11/12 mx-auto">
                  <input
                    type="namefood"
                    placeholder="ราคาส่วนลด"
                    className="input input-bordered"
                  />
                </div>
              </div>
            </div>
            <div>
              <span className="label-text">ราคาขนาดใหญ่ และ ราคาส่วนลด</span>
              <div className="grid grid-cols-2 gap-2">
                <div className="form-control w-11/12 mx-auto">
                  <input
                    type="namefood"
                    placeholder="ราคาปกติ"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control w-11/12 mx-auto">
                  <input
                    type="namefood"
                    placeholder="ราคาส่วนลด"
                    className="input input-bordered"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-5 mt-7 mx-auto">
            <div className="col-start-2">
              <button className="btn btn-error w-48">ยกเลิก</button>
            </div>
            <div className="col-start-3">
              <button className="btn btn-primary w-48">บันทึก</button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Editfood;
