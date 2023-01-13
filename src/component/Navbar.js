import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch, faBars } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
const Navbar = ({ authenticate, setAuthenticate }) => {
  const menuList = [
    "Women Wear",
    "Divided",
    "Men Wear",
    "Infant",
    "Children",
    "H&M Home",
    "Sale",
    "ESG",
  ];

  let [width, setWidth] = useState(0);
  let navigate = useNavigate();
  const goToLogin = () => {
    navigate("/login");
  };
  const search = (event) => {
    if (event.key === "Enter") {
      //Read Value of the inpute and convert to URL
      navigate(`/?q=${event.target.value}`);
    }
  };
  return (
    <div>
      <div className="side-menu" style={{ width: width }}>
        <div className="side-bar-login">
          {authenticate ? (
            <div onClick={() => setAuthenticate(false)}>
              <FontAwesomeIcon icon={faUser} />
              <span>Logout</span>
            </div>
          ) : (
            <div className="login-button" onClick={goToLogin}>
              <FontAwesomeIcon icon={faUser} />
              <span>Login</span>
            </div>
          )}
        </div>
        <div className="side-menu-list" id="menu-list">
          {menuList.map((menu, index) => (
            <button className="side-bar-word" key={index}>
              <h1>{menu}</h1>
            </button>
          ))}
        </div>
        <div className="close-btn">
          <button className="closebtn" onClick={() => setWidth(0)}>
            X
          </button>
        </div>
      </div>
      <div className="nav-header">
        <div className="burger-menu hide">
          <FontAwesomeIcon icon={faBars} onClick={() => setWidth(580)} />
        </div>
        {authenticate ? (
          <div onClick={() => setAuthenticate(false)}>
            <FontAwesomeIcon icon={faUser} />
            <span>Logout</span>
          </div>
        ) : (
          <div className="login-button" onClick={goToLogin}>
            <FontAwesomeIcon icon={faUser} />
            <span>Login</span>
          </div>
        )}
      </div>

      <div className="nav-logo">
        <img
          onClick={() => navigate("/")}
          width={100}
          src="https://blog.kakaocdn.net/dn/Yt80C/btqDeJAYUBo/JQbTuukRladq2AUOeqgiEK/img.jpg"
        />
      </div>
      <div className="menu-second">
        <div className="menu-list-box">
          <ul className="menu-list">
            {menuList.map((menu) => (
              <li key={menu}>{menu}</li>
            ))}
          </ul>
        </div>
        <div className="search-box">
          <FontAwesomeIcon className="scope-font" icon={faSearch} />
          <input type="text" onKeyPress={(event) => search(event)} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
