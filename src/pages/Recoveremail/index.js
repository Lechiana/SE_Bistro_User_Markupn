import React from 'react'

const index = () => {
  return (
    <div className="container mx-auto p-32">
    <div className="bg-base-200 p-8 my-5 max-w-3xl mx-auto rounded-box">
        
    <div className='text-center mx-auto'>
        <h1 className='m-8'>กู้คืนบัญชี</h1>
        <hr className="mt-6"></hr>
    </div>

    <div className='text-center mx-auto mt-8'>
        <h4>บัญชี abc123@gmail.com ได้ถูกลบในวันที่ 01/04/2565</h4>
        <h4>ทำให้คุณไม่สามารถเข้าใช้งานบัญชีนี้ได้อีก หากคุณต้องการ</h4>
        <h4 className='mb-8'>ใช้บัญชีเดิมของคุณ โปรดกรอกอีเมลล์ที่ช่องด้านล่าง</h4>
    </div>
    
    <div className="text-center">
    <div className="input-icons">
        <i classNamer="fas fa-unlock-alt"></i>
        <input type="text" placeholder="โปรดกรอกอีเมลล์" class="bg-white input input-bordered w-full max-w-xs text-black"/>
    </div>
    </div>

    <div className="justify-center card-actions m-8">
        <button className="btn btn-error text-white w-36">ยกเลิก</button>
        <button className="btn bg-accent w-36">ตกลง</button>
    </div>
    
    </div>
    </div>
  )
}

export default index
