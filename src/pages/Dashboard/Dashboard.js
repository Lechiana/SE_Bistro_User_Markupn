import React from "react";
import Analytics from "../../components/Dashboards/Analytics";
import BarChart from "../../components/Dashboards/BarChart";
import PieChart from "../../components/Dashboards/PieChart";
import CardNewFood from "./CardNewFood";
import CardPopularFood from "./CardPopularFood";
import CardNewUser from "./CardNewUser";
import UserShow from "./UserShow";

const Dashboardss = () => {
  return (
    <div className=" my-5">
      <div className="my-5">
        <Analytics />
      </div>

      <div className="my-10 flex">
        <div>
          <h2>ยอดขายทั้งหมด</h2>
          <BarChart />
        </div>
        <div className="ml-5">
          <h2>ประเภทสินค้า</h2>
          <PieChart />
        </div>
      </div>

      <div className="mr-14 my-10">
        <h2>อาหารใหม่</h2>
        <CardNewFood />
      </div>

      <div className="mr-14 my-10">
        <h2>อาหารยอดนิยม</h2>
        <CardPopularFood />
      </div>

      <div className="mr-14 my-10">
        <h2>ผู้ใช้ล่าสุด</h2>
        <UserShow />
      </div>
    </div>
  );
};
export default Dashboardss;
