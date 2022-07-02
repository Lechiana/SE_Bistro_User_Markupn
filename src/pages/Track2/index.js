import React from 'react';
import StepTwo from './StepTwo';
import Step from '../../components/Step/Step';

const index = () => {
  const renderList = () => {
    return [...new Array(3)].map((el, index) => (
      <StepTwo
        key={index}
        name={'สลัดผักรวมมิตร'}
        price={100}
        amount={2}
        total={200}
      />
    ));
  };

  return (

    <div className="container mx-auto pt-36">
      <h1 className="text-center mx-auto">ติดตาม</h1>

     <Step step={2} />

      <div className="bg-base-200 p-8 mt-12 my-5 md:mt-12 max-w-4xl mx-auto rounded-box">
        <h5 className="text-base-content color:gray">วันนี้, 09:10 - 09:25 น.</h5>
        <h4 className="mt-4">กำลังทำอาหาร</h4>
        <h4 className="mt-2 mb-4">รายการอาหาร</h4>

        {renderList()}

        <div className="mt-3">
          <h4 className="">ราคาทั้งหมด
            <span className="text-secondary ml-2">฿ 600</span>
          </h4>
        </div>
        <div className="mt-3">
          <h4 className="">ชำระเงิน คุณชำระเงินเรียบร้อยแล้ว ยอด
            <span className="text-error ml-2">฿ 600</span>
          </h4>
        </div>

      </div>
    </div>

  );
};

export default index;
