import React from "react";
import Navbaradmin from "../../components/์Navbaradmin/Navbaradmin";
import Sidebar from "../../components/Sidebar/Sidebar";
import Receipt from "./Receipt";

const Receipts = () => {
  let count = 1;
  const renderUsers = () => {
    return [...new Array(5)].map((el, index) => (
      <Receipt
        key={index}
        number={count++}
        nameFood="ยำแซลมอน มะยม"
        foodSize="ปกติ"
        numFood="3"
        price="50"
        totalPrice="150"
      />
    ));
  };
  return (
    <div className="mt-20 mx-auto">
      <Navbaradmin />
      <Sidebar />
      <div className="py-24">
        <div className="card w-9/12 bg-base-300 shadow-xl ml-96">
          <div className="card-body">
            <div className="grid justify-items-center mb-10">
              <h2>Bistro </h2>
              <h2>รายละเอียดเพิ่มเติม </h2>
            </div>

            <div className="grid grid-cols-3 px-28">
              <div className="">
                <div className="grid grid-cols-10">
                  <p className="col-span-3">ใบสั่งซื้อเลขที่ </p>
                  <p className="col-span-7">000001</p>
                </div>
                <div className="grid grid-cols-10 my-2">
                  <p className="col-span-3">วันที่ใบกำกับ </p>
                  <p className="col-span-7">07/04/22</p>
                </div>
                <div className="grid grid-cols-10 ">
                  <p className="col-span-3">ชื่อพนักงานส่ง </p>
                  <p className="col-span-7">จิรายุส สหพรอุดมการ</p>
                </div>
                <div className="grid grid-cols-10 my-2">
                  <p className="col-span-3">รหัสพนักงาน </p>
                  <p className="col-span-7">0123456</p>
                </div>
                <div className="grid grid-cols-10">
                  <p className="col-span-3">เบอร์ติดต่อ </p>
                  <p className="col-span-7">091000000</p>
                </div>
                <div className="grid grid-cols-10 my-2">
                  <p className="col-span-3">ชำระผ่านทาง </p>
                  <p className="col-span-7">บัตรเครดิต</p>
                </div>
              </div>
              <div className="col-start-3">
                <div className="grid grid-cols-10">
                  <p className="col-span-3">ชื่อผู้ซื้อ </p>
                  <p className="col-span-7">รัชโรจน์ อ่างทอง</p>
                </div>
                <div className="grid grid-cols-10 my-2">
                  <p className="col-span-3">เบอร์ติดต่อ </p>
                  <p className="col-span-7">091000000</p>
                </div>
                <div className="grid grid-cols-10 ">
                  <p className="col-span-3">สถานที่จัดส่ง </p>
                  <p className="col-span-7">
                    85 ถ. มาลัยแมน หนองปากโลง อำเภอเมืองนครปฐม นครปฐม 73000
                  </p>
                </div>
                <div className="grid grid-cols-10 my-2">
                  <p className="col-span-3">ชื่อบัตรเครดิต </p>
                  <p className="col-span-7">RATCHAROTE</p>
                </div>
                <div className="grid grid-cols-10">
                  <p className="col-span-3">เลขบัตรเครดิต </p>
                  <p className="col-span-7">4242 4242 4242 4242</p>
                </div>
                <div className="grid grid-cols-10 my-2">
                  <p className="col-span-3">เครือข่ายบัตร </p>
                  <p className="col-span-7">Mastercard</p>
                </div>
              </div>
            </div>

            <div className="overflow-x-auto my-10">
              <table className="table table-zebra bg-base-100 table w-10/12 container mx-auto text-lg ">
                <thead>
                  <tr>
                    <th className="text-lg">ลำดับ</th>
                    <th className="text-lg">ชื่ออาหาร</th>
                    <th className="text-lg">ขนาดอาหาร</th>
                    <th className="text-lg">จำนวน</th>
                    <th className="text-lg">ราคา</th>
                    <th className="text-lg">ราคารวม</th>
                  </tr>
                </thead>
                <tbody>{renderUsers()}</tbody>
              </table>
            </div>

            <div className="grid grid-cols-5 px-28 mb-10">
              <div className="col-start-5">
                <div className="grid grid-cols-5">
                  <p className="col-span-2">ยอดรวม </p>
                  <p className="col-span-3 ml-auto">฿ 400 </p>
                </div>
                <div className="grid grid-cols-5 my-3">
                  <p className="col-span-2">ส่วนลด </p>
                  <p className="col-span-3 ml-auto">- ฿ 10</p>
                </div>
                <div className="grid grid-cols-5 ">
                  <p className="col-span-3">ค่าธรรมเนียม </p>
                  <p className="col-span-2 ml-auto">฿ 0</p>
                </div>
                <div className="grid grid-cols-5 my-3">
                  <p className="col-span-2">ยอดสุทธิ </p>
                  <h3 className="col-span-3 ml-auto text-orange-600">฿ 390</h3>
                </div>
                <div className="grid grid-cols-5">
                  <p className="col-span-2">ชำระเงิน </p>
                  <p className="col-span-3 ml-auto text-secondary">เงินสด</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Receipts;
