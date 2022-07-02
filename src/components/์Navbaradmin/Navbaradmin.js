import React from "react";

const Navbaradmin = () => {
  return (
    <div className="relative">
      <div className="navbar bg-base-200 fixed top-0 z-50">
        <div className="flex-1">
        <div className="avatar">
            <div className=" rounded-full w-16 h-16 ml-32">
              <img src="https://media.discordapp.net/attachments/589087498949361665/942442211155517450/logo-4.png?width=676&height=676" />
            </div>
          </div>
        </div>
        <div className="flex-none">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-24 rounded-full">
              <img src="https://api.lorem.space/image/face?hash=33791" />
            </div>
          </label>
          <ul className="menu menu-horizontal p-0">
            <li>
              <a>
                <h3>จิรายุส สหพรอุดมการ</h3>
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </a>
              <ul className="p-2 bg-base-100">
                <li>
                  <a>
                    <h4>Submenu 1</h4>
                  </a>
                </li>
                <li>
                  <a>
                    <h4>Submenu 1</h4>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbaradmin;
