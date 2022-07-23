import React from "react";
import "./Topbar.css";

const topbar = () => {
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fa-brands fa-facebook-square"></i>
        <i className="topIcon fa-brands fa-twitter-square"></i>
        <i className="topIcon fa-brands fa-pinterest-square"></i>
        <i className="topIcon fa-brands fa-instagram-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <div className="topListItem">HOME</div>
          <div className="topListItem">ABOUT</div>
          <div className="topListItem">CONTACT</div>
          <div className="topListItem">WRITE</div>
          <div className="topListItem">LOGOUT</div>
        </ul>
      </div>
      <div className="topRight">
        <img
          className="topImg"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR5J7EtV_G5EXmTehZdvEwS78bhOxH7owj5WmTdGUsi926XogrKlM8Oza4qr4VafWVKGY&usqp=CAU"
          alt=""
        />
        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
};

export default topbar;
