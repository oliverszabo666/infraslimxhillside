import React from "react";
import "../../css/hero/hero.scss";
import mountain from "../../img/mountains2.png";
import infraslimx from "../../img/infraslimx2.png";

const Hero = () => {
  return (
    <div id="hero">
      <div className="ctaSection">
        <div className="mountain">
          <img src={mountain} alt="Logo" />
        </div>
        <div className="infraslimx">
          <img src={infraslimx} alt="Logo" />
        </div>

        <a href="#reservation">
          <button className="cta">FOGLALÁS </button>
        </a>
      </div>
      {/*  */}
    </div>
  );
};

export default Hero;
