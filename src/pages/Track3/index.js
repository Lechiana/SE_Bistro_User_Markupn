import React from 'react';
import StepThree from './StepThree';
import Step from '../../components/Step/Step';

const index = () => {

    return (

        <div className="container mx-auto pt-36">
      <h1 className="text-center mx-auto">ติดตาม</h1>
            
            <Step step={3} />

            <div className="bg-base-200 p-8 mt-12 my-5 md:mt-12 max-w-4xl mx-auto rounded-box">
                <h5 className="text-base-content color:gray">วันนี้, 09:30 - 09:50 น.</h5>
                <h4 className="mt-4">จัดส่ง</h4>
                <h4 className="mt-2">กำลังจัดส่ง</h4>
                <h4 className="my-8">แผนที่</h4>
                <div className="mt-3">
                    <h4 className="">ที่อยู่</h4>
                    <h4 className="mt-2">123 หมู่4 ซอย5 ถนนอารมณ์ดี</h4>
                    <h4 className="">ตำบล ยิ้มแฉ่ง</h4>
                    <h4 className="">อำเภอ เมืองยิ้ม</h4>
                    <h4 className="">จังหวัด ยิ้มหวาน</h4>
                    <h4 className="">รหัสไปรษณีย์ 74120</h4>
                </div>
                <div className="mt-6">
                    <h4 className="">ชำระเงิน คุณชำระเงินเรียบร้อยแล้ว ยอด
                        <span className="text-error ml-2">฿ 600</span>
                    </h4>
                </div>

            </div>
        </div>

    );
};

export default index;
