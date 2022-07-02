import React from "react";
import "./ShowUser.css";

const ShowUser = ({ name, role, phone, email, buildtime, image }) => {
  return (
    <div className="body">
      <aside className="profile-card">
        <header>
          <p>พนักงาน</p>
          <img className="img" src={image} />
          <h3 className="text-center">{name}</h3>
        </header>
        <div className="profile-bio">
          <p>เบอร์โทร : {phone}</p>
          <p>อีเมล : {email}</p>
          <p>เวลาสร้าง : {buildtime}</p>
          <p>บทบาท : {role}</p>
        </div>
      </aside>
    </div>
  );
};

export default ShowUser;
