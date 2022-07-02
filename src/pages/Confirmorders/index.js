import React from "react";
import Confirmorder from "./Confirmorder";
import Navbaradmin from "../../components/์Navbaradmin/Navbaradmin";
import Sidebar from "../../components/Sidebar/Sidebar";

const index = () => {
  const Order = () => {
    return [...new Array(3)].map((el, index) => (
      <Confirmorder
        key={index}
        image={"/images/menu-img-1.png"}
        name={"สลัดผักรวมมิตร"}
        type={"ปกติ"}
        price={100}
        amount={4}
      />
    ));
  };

  return (
    <div>
      <Navbaradmin />
      <div className="grid grid-cols-10 my-16">
        <div className="row-span-5">
          <Sidebar />
        </div>
      </div>

      <div class="text-center">
        <h1>ยืนยันการสั่งซื้อ</h1>
      </div>

      <div className="bg-base-200 p-8 mt-5 my-5 max-w-4xl mx-auto rounded-box">
        <div className="grid grid-cols-4 gap-4">
          <h5>รหัสออเดอร์ 123456789</h5>
          <div className="col-start-4 hidden flex md:inline-flex">
            <h5>วันที่ 30/03/2565</h5>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-4">
          <div className="col-start-2 hidden flex md:inline-flex">
            <h2 className="my-6">สินค้า</h2>
          </div>
          <div className="col-start-3 hidden flex md:inline-flex">
            <h2 className="my-6">จำนวน</h2>
          </div>
          <div className="col-start-4 hidden flex md:inline-flex">
            <h2 className="my-6">ราคา</h2>
          </div>
        </div>

        {Order()}

        <div className="grid grid-cols-4 mt-5">
          <div className="col-start-3 ml-2">
            <h5>ราคารวม</h5>
          </div>
          <div className="col-start-4 text-error ml-3">
            <h3>฿ 1200</h3>
          </div>
        </div>

        <div>
          <hr className="mt-6"></hr>
          <h2 className="my-10 text-center">ที่อยู่</h2>
          <div className="grid grid-cols-4 mt-5">
            <div className="col-start-2">
              <h5>โชติกา ปริตตะพงศาชัย</h5>
              <h5 className="mt-6">บ้านเลขที่ 190 หมู่ 2 </h5>
              <h5 className="mt-6">อำเภอ/แขวง บ้านแพ้ว</h5>
              <h5 className="mt-6">ถนน ต้นรัก</h5>
            </div>
            <div className="col-start-3 mx-auto">
              <h5>โทร 082-7237585</h5>
              <h5 className="mt-6">ตำบล/เขต หนองสองห้อง</h5>
              <h5 className="mt-6">จังหวัด สมุทรสาคร</h5>
              <h5 className="mt-6">74120</h5>
            </div>
            <div className="col-start-2 col-span-2">
              <img src="/images/map.png" alt="" className="mx-auto mt-6" />
            </div>
          </div>
          <div className="grid grid-cols-4 mt-5">
            <div className="col-start-2">
              <h5>ยอดรวม</h5>
              <h5 className="mt-6">ส่วนลด</h5>
              <h5 className="mt-6">ค่าธรรมเนียม</h5>
              <h5 className="mt-6">ยอดสุทธิ </h5>
              <h5 className="mt-6">ชำระเงิน</h5>
            </div>
            <div className="col-start-3 mx-auto">
              <h5>฿ 549</h5>
              <h5 className="mt-6">- ฿ 10</h5>
              <h5 className="mt-6">฿ 0</h5>
              <h3 className="mt-6 text-error">฿ 539</h3>
              <h5 className="mt-6 text-secondary">เงินสด</h5>
            </div>
          </div>
        </div>
        <div>
          <hr className="mt-6"></hr>
          <div className="grid md:grid-cols-4 gap-2 mt-5 grid-cols-2">
            <button className="btn btn-base-300 hover:bg-base-300 md:col-start-3 col-span-1">
              ยกเลิกการสั่งซื้อ
            </button>
            <button className="btn btn-primary md:col-start-4 col-span-1">
              ยืนยันการสั่งซื้อ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
