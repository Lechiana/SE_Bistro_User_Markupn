import React from "react";
import ShowUser from "../../components/Dashboards/ShowUser";

const UserShow = () => {
  const renderCard = () => {
    return [...new Array(4)].map((el, index) => (
      <ShowUser
        key={index}
        name="จิรายุส สหพรอุดมการ"
        role="ผู้ใช้"
        phone="094-9627105"
        email="624259007@webail.npru.ac.th"
        buildtime="18-1-2565"
        image="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
      />
    ));
  };

  return <div className="grid grid-cols-4">{renderCard()}</div>;
};

export default UserShow;
