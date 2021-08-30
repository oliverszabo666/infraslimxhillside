import React from "react";
import "../../css/about/about.scss";
import woman from "../../img/woman.png";

const About = () => {
  return (
    <div id="about">
      <div className="container">
        <div className="text-div">
          <div className="title">
            <h1>
              A <span className="pink-words">Tudatos</span> emberek sportja.
            </h1>
          </div>
          <div className="text">
            <h2>
              Az <span className="pink-words">InfraslimX Hillside</span>{" "}
              szalonban célunk,
              <br /> hogy az edzéseket élménnyé varázsoljuk,
              <br /> a hétköznapokat különlegessé tegyük{" "}
              <span className="pink-words">Számodra</span>.
            </h2>
            <p>
              Rendkívüli hatékonysággal működő InfraslimX gépeinkkel állunk
              rendelkezésre az egyedülálló relaxációs élményért és hatékony
              formálódásért: 45 perc alatt akár 1500 kcal veszteség, zsírégetés,
              celullitkezelés, szakértelem, személyre szabott életmódprogram,
              táplálkozás-tervezési tanácsok, gerinckímélő megoldások, exkluzív
              környezet.
            </p>
          </div>
          <a href="#reservation">
            <button className="cta">FOGLALÁS </button>
          </a>
        </div>
        <div className="img-div">
          <img src={woman} />
        </div>
      </div>
    </div>
  );
};

export default About;
