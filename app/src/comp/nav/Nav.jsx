import React from "react";
import "../../css/nav/nav.css";
import logo from "../../img/mountains.png";
import burger from "../../img/menu.png";
import x from "../../img/cancel.png";

const Nav = () => {
  return (
    <div className="nav">
      <nav>
        <div className="logo">
          <a href="#hero">
            <img src={logo} alt="NavLogo" />
          </a>
        </div>

        <div
          className="burger-menu"
          onClick={() => {
            const menu = document.getElementById("menu-open");
            menu.classList.remove("display");
          }}
        >
          <img src={burger} alt="Menu" />
        </div>

        <div id="menu-open" className="display">
          <div className="top">
            <div
              className="x"
              onClick={() => {
                const menu = document.getElementById("menu-open");
                menu.classList.add("display");
              }}
            >
              <img src={x} alt="Menu" />
            </div>
          </div>

          <div className="bott">
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
                <a href="#reservation">
                  <button>FOGLALÁS</button>
                </a>
              </li>
            </ul>
          </div>
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
