import React from 'react';

const StepOne = ({ name, price, amount, total }) => {
  return (
        <div className="mx-auto grid md:grid-cols-4 grid-cols-2 container mx-auto md:grid">
          <h4 className="mb-0 md:mb-5">- {name}</h4>
          <h4 className="mb-0 md:mb-5">ราคา ฿ {price}</h4>
          <h4 className="mb-5">จำนวน {amount}</h4>
          <h4 className="mb-5">
            ราคารวม
            <span className="text-secondary ml-2">฿ {total}</span>
          </h4>
        </div>
  );
};

export default StepOne;
