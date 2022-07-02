import React from "react";
import Navbaradmin from "../../components/์Navbaradmin/Navbaradmin";
import Sidebar from "../../components/Sidebar/Sidebar";
import Dashboardss from "./Dashboard";

const Dashboard = () => {
  return (
    <div>
      <Navbaradmin />
      <div className="grid grid-cols-10 my-20">
        <div className="row-span-5">
          <Sidebar />
        </div>
        <div className="col-start-2 col-span-2 mt-6 ml-36">
          <div className="text-sm breadcrumbs">
            <ul>
              <li>
                <a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="w-4 h-4 mr-2 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                    />
                  </svg>
                  หน้าแรก
                </a>
              </li>
              <li>
                <a>Dashboard</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-start-2 col-span-9 ml-36">
          <h2 className="mt-5">ยินดีต้อนรับ ! ! </h2>
          <Dashboardss />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
