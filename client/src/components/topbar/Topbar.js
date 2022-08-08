import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./Topbar.css";

const Topbar = () => {
  const { user, dispatch } = useContext(Context);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

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
          <div className="topListItem" onClick={handleLogout}>
            {user && "LOGOUT"}
          </div>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <img className="topImg" src={user.profilePic} alt="" />
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

export default Topbar;
