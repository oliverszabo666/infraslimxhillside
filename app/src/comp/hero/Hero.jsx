import React from "react";
import "../../css/hero/hero.scss";
import logo2 from "../../img/logo2.png";

const Hero = () => {
  return (
    <div id="hero">
      <div className="ctaSection">
        <div className="ctaLogo">
          <img src={logo2} alt="Logo" />
        </div>

        <a href="#reservation">
          <button className="cta">FOGLALÁS </button>
        </a>
      </div>
    </div>
  );
};

export default Hero;
