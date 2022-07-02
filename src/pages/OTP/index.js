import React from 'react'

const index = () => {
  return (
    <div className='text-center my-64 mx-auto'>
    <div>
    <h3 className='m-5'>ยืนยันรหัส OTP ของคุณ</h3>
    </div>
    <h4 className='pr-24 mb-2'>โปรดใส่รหัส OTP ที่ส่งไป +66</h4>
    <div className="input-icons">
    <i classNamer="fas fa-unlock-alt"></i>
    <input type="text" placeholder="ใส่โค้ดที่นี้" class="bg-white input input-bordered w-full max-w-xs text-black"/>
    </div>

    <div className="justify-center card-actions m-2">
    <button className="btn btn-active btn-primary w-36">ส่ง</button>
    </div>
    
    <div>
        <h4 className='underline underline-offset-1'>ขอ OTP อีกครั้ง</h4>
    </div>
    
        
        
    </div>
  )
}

export default index