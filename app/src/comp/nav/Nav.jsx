import React from "react";
import "../../css/nav/nav.css";
import logo from "../../img/logo1.png";
const Nav = () => {
  return (
    <div className="nav">
      <nav>
        <div className="logo">
          <img src={logo} />
        </div>
        <div className="list">
          <ul>
            <li>RÓLUNK</li>
            <li>FŐOLDAL</li>
            <li>INFRASLIM X</li>
            <li>KAPCSOLAT</li>
            <li>
              <button>FOGLALÁS</button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
