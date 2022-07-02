import React from "react";
import "react-pro-sidebar/dist/css/styles.css";
import "./style.css";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarContent,
} from "react-pro-sidebar";
import {
  FaClipboardCheck,
  FaClock,
  FaAddressBook,
  FaHeart,
} from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="bg-base-300 h-screen fixed">
      <ProSidebar>
        <SidebarContent className="bg-base-300">
          <Menu iconShape="circle" className="my-5 text-xl">
            <div>
              <SubMenu
                className="bg-base-300"
                title="ยืนยันการสั่งซื้อ"
                icon={<FaClipboardCheck />}
              >
                <MenuItem>'submenu' 1</MenuItem>
                <MenuItem>'submenu' 2</MenuItem>
                <MenuItem>'submenu' 3</MenuItem>
              </SubMenu>
            </div>

            <div>
              <SubMenu
                className="my-5"
                title="การจัดการผู้ใช้"
                icon={<FaAddressBook />}
              >
                <MenuItem>'submenu' 1</MenuItem>
                <MenuItem>'submenu' 2</MenuItem>
                <MenuItem>'submenu' 3</MenuItem>
              </SubMenu>
            </div>

            <div>
              <SubMenu
                className="my-5"
                title="การจัดเวลาเปิดปิด"
                icon={<FaClock />}
              >
                <MenuItem>'submenu' 1 </MenuItem>
                <MenuItem>'submenu' 2 </MenuItem>
                <SubMenu title={`'submenu' 3`}>
                  <MenuItem>'submenu' 3.1 </MenuItem>
                  <MenuItem>'submenu' 3.2 </MenuItem>
                  <SubMenu title={`'submenu' 3.3`}>
                    <MenuItem>'submenu' 3.3.1 </MenuItem>
                    <MenuItem>'submenu' 3.3.2 </MenuItem>
                    <MenuItem>'submenu' 3.3.3 </MenuItem>
                  </SubMenu>
                </SubMenu>
              </SubMenu>
            </div>

            <div>
              <SubMenu
                className="my-5"
                title="การจัดการความคิดเห็น"
                icon={<FaHeart />}
              >
                <MenuItem>'submenu' 1</MenuItem>
                <MenuItem>'submenu' 2</MenuItem>
                <MenuItem>'submenu' 3</MenuItem>
              </SubMenu>
            </div>
          </Menu>
        </SidebarContent>
      </ProSidebar>

      {/* <ul className="menu">
        <li className="bordered mt-5 h-16">
          <a>
            <svg
              width="15"
              height="15"
              viewBox="0 0 13 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.42859 6.49998C7.42859 5.98715 7.84432 5.57141 8.35716 5.57141H12.0714C12.5843 5.57141 13 5.98715 13 6.49998V12.0714C13 12.5842 12.5843 13 12.0714 13H8.35716C7.84432 13 7.42859 12.5842 7.42859 12.0714V6.49998ZM12.0714 6.49998H8.35716V12.0714H12.0714V6.49998Z"
                fill="#D6D6D6"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.42859 0.928571C7.42859 0.415736 7.84432 0 8.35716 0H12.0714C12.5843 0 13 0.415736 13 0.928571V2.795C13 3.30784 12.5843 3.72357 12.0714 3.72357H8.35716C7.84432 3.72357 7.42859 3.30784 7.42859 2.795V0.928571ZM12.0714 0.928571H8.35716V2.795H12.0714V0.928571Z"
                fill="#D6D6D6"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0 0.928571C0 0.415736 0.415736 0 0.928571 0H4.64286C5.15569 0 5.57143 0.415736 5.57143 0.928571V6.5C5.57143 7.01284 5.15569 7.42857 4.64286 7.42857H0.928571C0.415736 7.42857 0 7.01284 0 6.5V0.928571ZM4.64286 0.928571H0.928571V6.5H4.64286V0.928571Z"
                fill="#D6D6D6"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0 10.205C0 9.69216 0.415736 9.27643 0.928571 9.27643H4.64286C5.15569 9.27643 5.57143 9.69216 5.57143 10.205V12.0714C5.57143 12.5843 5.15569 13 4.64286 13H0.928571C0.415736 13 0 12.5843 0 12.0714V10.205ZM4.64286 10.205H0.928571V12.0714H4.64286V10.205Z"
                fill="#D6D6D6"
              />
            </svg>
            <h3>ยืนยันการสั่งซื้อ</h3>
          </a>
        </li>
        <li className="mt-2 h-12">
          <a>
            <svg
              width="15"
              height="15"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 7C8.79493 7 10.25 5.54493 10.25 3.75C10.25 1.95507 8.79493 0.5 7 0.5C5.20507 0.5 3.75 1.95507 3.75 3.75C3.75 5.54493 5.20507 7 7 7Z"
                stroke="#D6D6D6"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M13.18 13.5C12.7602 12.1908 11.9355 11.0488 10.8248 10.2386C9.7141 9.4284 8.37481 8.99182 7.00001 8.99182C5.6252 8.99182 4.28591 9.4284 3.17522 10.2386C2.06453 11.0488 1.23983 12.1908 0.820007 13.5H13.18Z"
                stroke="#D6D6D6"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <h3>การจัดการผู้ใช้</h3>
            <svg
              className="ml-28"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.15002 13.825L10.975 10L7.15002 6.175L8.33336 5L13.3334 10L8.33336 15L7.15002 13.825Z"
                fill="#D6D6D6"
              />
            </svg>
          </a>
        </li>
        <li className="mt-6 h-12">
          <a>
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.5 14C11.0899 14 14 11.0899 14 7.5C14 3.91015 11.0899 1 7.5 1C3.91015 1 1 3.91015 1 7.5C1 11.0899 3.91015 14 7.5 14Z"
                stroke="#D6D6D6"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7.5 5V7.5L10.04 10.46"
                stroke="#D6D6D6"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <h3>การจัดเวลาเปิดปิดของร้าน</h3>
            <svg
              className="ml-5"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.15002 13.825L10.975 10L7.15002 6.175L8.33336 5L13.3334 10L8.33336 15L7.15002 13.825Z"
                fill="#D6D6D6"
              />
            </svg>
          </a>
        </li>
        <li className="mt-6 h-12">
          <a>
            <svg
              width="15"
              height="15"
              viewBox="0 0 13 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_958_2799)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M1.39286 0.928572C1.13644 0.928572 0.928571 1.13644 0.928571 1.39286V3.25H12.0714V1.39286C12.0714 1.13644 11.8636 0.928572 11.6071 0.928572H1.39286ZM0 1.39286V3.71429V11.6071C0 12.3764 0.623603 13 1.39286 13H11.6071C12.3764 13 13 12.3764 13 11.6071V3.71429V1.39286C13 0.623603 12.3764 0 11.6071 0H1.39286C0.623603 0 0 0.623603 0 1.39286ZM12.0714 11.6071V4.17857H0.928571V11.6071C0.928571 11.8636 1.13644 12.0714 1.39286 12.0714H11.6071C11.8636 12.0714 12.0714 11.8636 12.0714 11.6071ZM4.27473 7.16405C4.45604 6.98273 4.45604 6.68876 4.27473 6.50745C4.09341 6.32614 3.79944 6.32614 3.61813 6.50745L2.22527 7.90031C2.04396 8.08162 2.04396 8.37559 2.22527 8.55691L3.61813 9.94976C3.79944 10.1311 4.09341 10.1311 4.27473 9.94976C4.45604 9.76845 4.45604 9.47448 4.27473 9.29316L3.21017 8.22861L4.27473 7.16405ZM8.72527 6.50745C8.90659 6.32614 9.20056 6.32614 9.38187 6.50745L10.7747 7.90031C10.956 8.08162 10.956 8.37559 10.7747 8.55691L9.38187 9.94976C9.20056 10.1311 8.90659 10.1311 8.72527 9.94976C8.54396 9.76845 8.54396 9.47448 8.72527 9.29316L9.78983 8.22861L8.72527 7.16405C8.54396 6.98273 8.54396 6.68876 8.72527 6.50745ZM7.6369 6.05401C7.71799 5.81075 7.58652 5.54782 7.34326 5.46673C7.1 5.38564 6.83707 5.51711 6.75598 5.76037L5.36312 9.93894C5.28204 10.1822 5.4135 10.4451 5.65676 10.5262C5.90002 10.6073 6.16296 10.4758 6.24404 10.2326L7.6369 6.05401Z"
                  fill="#D6D6D6"
                />
              </g>
              <defs>
                <clipPath id="clip0_958_2799">
                  <rect width="13" height="13" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <h3>การจัดการความคิดเห็น</h3>
            <svg
              className="ml-12"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.15002 13.825L10.975 10L7.15002 6.175L8.33336 5L13.3334 10L8.33336 15L7.15002 13.825Z"
                fill="#D6D6D6"
              />
            </svg>
          </a>
        </li>
      </ul> */}
    </div>
  );
};

export default Sidebar;
