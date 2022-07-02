import React from "react";

const Profile = () => {
  return (
    <>
      <div className="container mx-auto mt-28">
        <div className="bg-base-200 p-8 mt-8 my-5 max-w-5xl mx-auto rounded-box">
          <div className="text-center">
            <h2 className="mt-4">ข้อมูลส่วนตัว</h2>
            <hr className="mt-6"></hr>
          </div>
          <div class="grid grid-flow-rows gap-2 md:grid-col-3 md:grid-flow-col ">
            <div className="col-span-3 md:col-span-2 md:row-span-5 mt-5 mx-auto">
              <img
                src="/images/profile.png"
                className="mask mask-hexagon-2"
                alt=".."
              />
            </div>

            <div class="col-span-3 md:col-span-3 mt-4 ml-1 md:ml-5">
              <div class="text-sm breadcrumbs">
                <ul>
                  <li>
                    <a href="/">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M8.79123 3.66181C9.50589 3.11965 10.4941 3.11965 11.2088 3.66181L15.8132 7.15479C16.5608 7.72199 17 8.60639 17 9.54486V15C17 16.1046 16.1046 17 15 17H13C11.8954 17 11 16.1046 11 15V11.5H9V15C9 16.1046 8.10457 17 7 17H5C3.89543 17 3 16.1046 3 15V9.54486C3 8.60639 3.43917 7.72199 4.18684 7.15479L8.79123 3.66181ZM14.6044 8.74817L10 5.25519L5.39561 8.74817C5.14639 8.93724 5 9.23204 5 9.54486V15H7V11.5C7 10.3954 7.89543 9.5 9 9.5H11C12.1046 9.5 13 10.3954 13 11.5V15L15 15V9.54486C15 9.23204 14.8536 8.93724 14.6044 8.74817Z"
                          fill="white"
                        ></path>
                      </svg>
                      หน้าแรก
                    </a>
                  </li>
                  <li>ข้อมูลส่วนตัว</li>
                </ul>
              </div>
            </div>
            <div class="col-span-3 md:col-span-3 ml-1 md:ml-5">
              <div className="text-left">
                <hr className="mt-3"></hr>
              </div>
              <div className="grid grid-cols-2">
                <h3 className="mt-4">ข้อมูลส่วนตัว</h3>
                <a
                  href="/Editpersonal"
                  className="btn bg-info hover:bg-primary-focus col-end-4 w-14"
                >
                  <svg
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.5 17V20H10.5V18.11H4.4V17C4.4 16.36 7.53 14.9 10.5 14.9C11.46 14.91 12.41 15.04 13.33 15.28L14.85 13.76C13.45 13.29 12 13.03 10.5 13C7.83 13 2.5 14.33 2.5 17ZM10.5 4C8.29 4 6.5 5.79 6.5 8C6.5 10.21 8.29 12 10.5 12C12.71 12 14.5 10.21 14.5 8C14.5 5.79 12.71 4 10.5 4ZM10.5 10C9.4 10 8.5 9.11 8.5 8C8.5 6.89 9.4 6 10.5 6C11.6 6 12.5 6.9 12.5 8C12.5 9.1 11.61 10 10.5 10ZM22.2 13.35L21.2 14.35L19.15 12.35L20.15 11.35C20.2528 11.2492 20.391 11.1928 20.535 11.1928C20.679 11.1928 20.8172 11.2492 20.92 11.35L22.2 12.63C22.41 12.84 22.41 13.19 22.2 13.4V13.35ZM12.5 18.94L18.56 12.88L20.61 14.88L14.61 20.95H12.5V18.94"
                      fill="white"
                    />
                  </svg>
                </a>
              </div>
              <div className="grid grid-cols-3 grid-flow-col gap-1">
                <div className="col-span-1 mt-4">
                  <h6>ชื่อจริง</h6>
                </div>
                <div className="col-span-2 mt-4">
                  <h6>จิรายุส</h6>
                </div>
              </div>
              <div className="grid grid-cols-3 grid-flow-col gap-1">
                <div className="col-span-1 mt-4">
                  <h6>นามสกุล</h6>
                </div>
                <div className="col-span-2 mt-4">
                  <h6>สหพรอุดมการ</h6>
                </div>
              </div>
              <div className="grid grid-cols-3 grid-flow-col gap-1">
                <div className="col-span-1 mt-4">
                  <h6>อีเมล</h6>
                </div>
                <div className="col-span-2 mt-4">
                  <h6>624259007@webmail.npru.ac.th</h6>
                </div>
              </div>
              <div className="grid grid-cols-3 grid-flow-col gap-1">
                <div className="col-span-1 mt-4">
                  <h6>เบอร์โทรศัพท์</h6>
                </div>
                <div className="col-span-2 mt-4">
                  <h6>094-9627105</h6>
                </div>
              </div>
            </div>
            <div class="col-span-3 md:col-span-3 ml-1 md:ml-5">
              <div className="text-left">
                <hr className="mt-3"></hr>
              </div>
              <div className="grid grid-cols-2">
                <h3 className="mt-4">ที่อยู่</h3>
                <a
                  href="/Address"
                  className="btn bg-info hover:bg-primary-focus col-end-4 w-14"
                >
                  <svg
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.5 12H14.5V10H16.5V12H18.5V14H16.5V16H14.5V14H12.5V12ZM22.5 8V18C22.5 19.11 21.61 20 20.5 20H4.5C3.39 20 2.5 19.11 2.5 18V6C2.5 4.89 3.39 4 4.5 4H10.5L12.5 6H20.5C21.61 6 22.5 6.89 22.5 8ZM20.5 8H4.5V18H20.5V8Z"
                      fill="white"
                    />
                  </svg>
                </a>
              </div>
              <div className="grid grid-cols-3 grid-flow-col gap-1 mt-5">
                <div className="col-span-1 mt-6">
                  <h6>ที่บ้าน</h6>
                </div>
                <div className="col-span-2 mt-4 w-3/4 ml-5">
                  <h6>18/1 ม.9 ต.หนองสองห้อง อ.บ้านแพ้ว จ.สมุทรสาคร 74120</h6>
                </div>
                <a
                  href="/Editaddress"
                  className="btn bg-base-100 hover:bg-primary-focus col-span-3 w-14"
                >
                  <svg
                    width="18"
                    height="17"
                    viewBox="0 0 18 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.3399 8.22759L9.79305 0.68462L9.28719 0.17876C9.17193 0.0642613 9.01606 0 8.8536 0C8.69113 0 8.53526 0.0642613 8.42 0.17876L0.367268 8.22759C0.249165 8.34523 0.155826 8.48534 0.0927609 8.63965C0.0296957 8.79396 -0.00181763 8.95934 8.09564e-05 9.12603C0.00789346 9.81353 0.580159 10.3624 1.26766 10.3624H2.09774V16.7237H15.6095V10.3624H16.4571C16.7911 10.3624 17.1055 10.2315 17.3419 9.99517C17.4582 9.87917 17.5504 9.74125 17.6131 9.58938C17.6758 9.4375 17.7078 9.2747 17.7071 9.1104C17.7071 8.77837 17.5763 8.46392 17.3399 8.22759V8.22759ZM9.94735 15.3174H7.75985V11.3331H9.94735V15.3174ZM14.2032 8.9561V15.3174H11.1973V10.8643C11.1973 10.4327 10.8477 10.0831 10.4161 10.0831H7.2911C6.85946 10.0831 6.50985 10.4327 6.50985 10.8643V15.3174H3.50399V8.9561H1.62899L8.85555 1.7354L9.30672 2.18657L16.0802 8.9561H14.2032Z"
                      fill="white"
                    />
                  </svg>
                </a>
              </div>
              <div className="grid grid-cols-3 grid-flow-col gap-1">
                <div className="col-span-1 mt-4">
                  <h6>ที่ห้องพัก</h6>
                </div>
                <div className="col-span-2 mt-4 w-3/4 ml-5">
                  <h6>
                    หอพักภิรมย์การ์เด้น 188 ม.3 ต.วังตะกู อ.เมือง จ.นครปฐม 73000
                  </h6>
                </div>
                <button className="btn bg-base-100 hover:bg-primary-focus col-span-3 w-14">
                  <svg
                    width="18"
                    height="17"
                    viewBox="0 0 18 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.3399 8.22759L9.79305 0.68462L9.28719 0.17876C9.17193 0.0642613 9.01606 0 8.8536 0C8.69113 0 8.53526 0.0642613 8.42 0.17876L0.367268 8.22759C0.249165 8.34523 0.155826 8.48534 0.0927609 8.63965C0.0296957 8.79396 -0.00181763 8.95934 8.09564e-05 9.12603C0.00789346 9.81353 0.580159 10.3624 1.26766 10.3624H2.09774V16.7237H15.6095V10.3624H16.4571C16.7911 10.3624 17.1055 10.2315 17.3419 9.99517C17.4582 9.87917 17.5504 9.74125 17.6131 9.58938C17.6758 9.4375 17.7078 9.2747 17.7071 9.1104C17.7071 8.77837 17.5763 8.46392 17.3399 8.22759V8.22759ZM9.94735 15.3174H7.75985V11.3331H9.94735V15.3174ZM14.2032 8.9561V15.3174H11.1973V10.8643C11.1973 10.4327 10.8477 10.0831 10.4161 10.0831H7.2911C6.85946 10.0831 6.50985 10.4327 6.50985 10.8643V15.3174H3.50399V8.9561H1.62899L8.85555 1.7354L9.30672 2.18657L16.0802 8.9561H14.2032Z"
                      fill="white"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div class="col-span-3 md:col-span-3 ml-5">
              <div className="text-left">
                <hr className="mt-3"></hr>
              </div>
              <div className="mt-4">
                <h3>แก้ไขรหัสผ่าน</h3>
                <a
                  href="/Editpassword"
                  className="btn bg-info hover:bg-primary-focus w-14 mt-4"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.5002 8.33333H10.5418C10.1985 7.35874 9.56128 6.51469 8.71795 5.91764C7.87462 5.32059 6.86678 4.99996 5.8335 5C3.07516 5 0.833496 7.24167 0.833496 10C0.833496 12.7583 3.07516 15 5.8335 15C6.86678 15 7.87462 14.6794 8.71795 14.0824C9.56128 13.4853 10.1985 12.6413 10.5418 11.6667H10.8335L12.5002 13.3333L14.1668 11.6667L15.8335 13.3333L19.1668 9.96667L17.5002 8.33333ZM5.8335 12.5C4.4585 12.5 3.3335 11.375 3.3335 10C3.3335 8.625 4.4585 7.5 5.8335 7.5C7.2085 7.5 8.3335 8.625 8.3335 10C8.3335 11.375 7.2085 12.5 5.8335 12.5Z"
                      fill="white"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div class="col-span-3 md:col-span-3 ml-5">
              <div className="text-left">
                <hr className="mt-3"></hr>
              </div>
              <div className="flex justify-end mt-4 mr-10">
                <button className="btn bg-secondary-focus hover:bg-secondary w-52">
                  ลบบัญชี
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
