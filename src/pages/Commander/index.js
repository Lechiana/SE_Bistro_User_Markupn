import React from "react";
import Order from "./Order";

const Commander = () => {
  const renderorder = () => {
    return [...new Array(3)].map((el, index) => (
      <Order key={index} name="สลัดผักรวมมิตร" price={300} />
    ));
  };
  return (
    <div className="container mx-auto">
      <div className="bg-base-200 p-5 mt-24 max-w-sm mx-auto rounded-box">
        <div className="text-center">
          <h2 className="mt-4">กำลังจัดส่ง</h2>
          <hr className="mt-2"></hr>
        </div>
        <div className="grid grid-cols-2 mt-5">
          <h5>รหัสออเดอร์ </h5>
          <h5 className="justify-self-end">123456789</h5>
        </div>
        <div className="grid grid-cols-2 mt-2">
          <h5>ผู้สั่ง </h5>
          <h5 className="justify-self-end">โชติกา ปริตตะพงศาชัย</h5>
        </div>
        <div className="grid grid-cols-2 mt-2">
          <h5>บ้านเลขที่ </h5>
          <h5 className="justify-self-end">190 หมู่ 2</h5>
        </div>
        <div className="grid grid-cols-2 mt-2">
          <h5>ถนน </h5>
          <h5 className="justify-self-end">ต้นรัก</h5>
        </div>
        <div className="grid grid-cols-2 mt-2">
          <h5>ตำบล/เขต </h5>
          <h5 className="justify-self-end">หนองสองห้อง</h5>
        </div>
        <div className="grid grid-cols-2 mt-2">
          <h5>อำเภอ/แขวง </h5>
          <h5 className="justify-self-end">บ้านแพ้ว</h5>
        </div>
        <div className="grid grid-cols-2 mt-2">
          <h5>จังหวัด </h5>
          <h5 className="justify-self-end">สมุทรสาคร</h5>
        </div>
        <div className="grid grid-cols-2 mt-2">
          <h5>ไปรษณีย์ </h5>
          <h5 className="justify-self-end">74120</h5>
        </div>
        <div className="grid grid-cols-2 mt-2">
          <h5>โทรศัพท์ </h5>
          <h5 className="justify-self-end">082-7237585</h5>
        </div>
        <div className="bg-base-300 mt-5 mx-auto w-80 h-80"></div>
        <div className="mt-5">
          <h5>รายการ </h5>
        </div>

        {renderorder()}

        <div className="grid grid-cols-2 mt-4">
          <h5>ยอดสุทธิ </h5>
          <h5 className="justify-self-end font-bold text-error">฿ 536</h5>
        </div>
        <div className="grid grid-cols-2 mt-4">
          <h5>ชำระเงิน </h5>
          <h5 className="justify-self-end font-bold text-secondary">เงินสด</h5>
        </div>
        <div className="grid grid-cols-2 mt-4">
          <h5>สถานะ </h5>
          <h5 className="justify-self-end font-bold text-accent">
            ยังไม่ชำระเงิน
          </h5>
        </div>

        <div className="grid grid-cols-2 gap-3 mt-5">
          <button className="btn btn-neutral">ส่งไม่สำเร็จ</button>
          <button className="btn btn-primary">ส่งสำเร็จ</button>
        </div>
      </div>
    </div>
  );
};

export default Commander;
