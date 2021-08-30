import React from "react";
import "../../css/nav/nav.css";
import logo from "../../img/logo1.png";
const Nav = () => {
  return (
    <div className="nav">
      <nav>
        <div className="logo">
          <a href="#hero">
            <img src={logo} alt="NavLogo" />
          </a>
        </div>
        <div className="list">
          <ul>
            <li>
              <a href="#about">RÓLUNK</a>
            </li>
            <li>
              <a href="#hero">FŐOLDAL</a>
            </li>
            <li>
              <a href="#infraslim">INFRASLIM X</a>
            </li>
            <li>
              <a href="#reservation">KAPCSOLAT</a>
            </li>
            <li>
              <li>
                <a href="#reservation">
                  <button>FOGLALÁS</button>
                </a>
              </li>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
