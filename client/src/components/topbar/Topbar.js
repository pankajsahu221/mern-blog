import React from "react";
import { Link } from "react-router-dom";
import "./Topbar.css";

const topbar = () => {
  const user = false;
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
          <div className="topListItem">
            <Link to="/" className="link">
              HOME
            </Link>
          </div>
          <div className="topListItem">
            <Link to="/about" className="link">
              ABOUT
            </Link>
          </div>
          <div className="topListItem">
            <Link to="/contact" className="link">
              CONTACT
            </Link>
          </div>
          <div className="topListItem">
            <Link to="/write" className="link">
              WRITE
            </Link>
          </div>
          <div className="topListItem">{user && "LOGOUT"}</div>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <img
            className="topImg"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR5J7EtV_G5EXmTehZdvEwS78bhOxH7owj5WmTdGUsi926XogrKlM8Oza4qr4VafWVKGY&usqp=CAU"
            alt=""
          />
        ) : (
          <ul className="topList">
            <div className="topListItem">
              <Link to="/login" className="link">
                LOGIN
              </Link>
            </div>
            <div className="topListItem">
              <Link to="/register" className="link">
                REGISTER
              </Link>
            </div>
          </ul>
        )}

        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
};

export default topbar;
