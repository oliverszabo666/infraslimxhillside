import React from "react";
import "../../css/hero/hero.scss";
import logo2 from "../../img/logo2.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="ctaSection">
        <div className="ctaLogo">
          <img src={logo2} />
        </div>

        <button className="cta">FOGLALÁS</button>
      </div>
    </div>
  );
};

export default Hero;
