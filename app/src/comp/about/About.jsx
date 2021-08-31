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
              Szeretnéd kihozni <br></br> magadból a{" "}
              <span className="pink-words">legtöbbet</span>?
            </h1>
          </div>
          <div className="text">
            <h2>
              Az <span className="pink-words">InfraslimX Hillside</span>{" "}
              szalonban célunk,
              <br /> hogy támogassunk <span className="pink-words">
                Téged
              </span>{" "}
              az egészséges <br />
              és kiegyensúlyozott élet fenntartásában.
            </h2>
            <p>
              Az INFRASLIM X számtalan pozitív hatása mellett gyorsan hozzájárul
              a testsúlycsökkentéshez, feszesít, segít elérni a megfelelő
              kondicíót, és támogatja a szervezet méregtelenítő folyamatait.
            </p>
            <h3>
              Már az első alkalmak után látni és érezni fogod a változást!
            </h3>
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
