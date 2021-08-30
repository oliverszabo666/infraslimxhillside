import React from "react";
import "../../css/infraslim/infraslim.scss";
import infraslim from "../../img/infraslim.png";
import ellipse from "../../img/ellipse.png";
import health from "../../img/health.png";
import sport from "../../img/sport.png";
import beauty from "../../img/beauty.png";

const Infraslim = () => {
  return (
    <div id="infraslim">
      <div className="container">
        <h1 className="title">INFRASLIM X</h1>
        <div className="img">
          <img src={infraslim} />
        </div>

        <p>
          Az <span className="pink-words">INFRASLIMX</span> egy kombinált
          fitness eszköz, amely a legmodernebb technológiákat alkalmazva
          magasabb szintre emeli a testedzés alakformáló hatását. A zárt
          kabinban egyszerre érvényesül a vákuummasszázs, az infra kezelés, a
          kollagén fényterápia, az ózon- és oxigénterápia, valamint az
          aromaterápia jótékony hatása.
        </p>

        <div className="list">
          <p>A használat előnyei:</p>

          <ul>
            <li>
              <div className="ellipse">
                <img src={ellipse} />
              </div>
              <div className="label">
                Rendkívül eredményes a narancsbőr kezelésében
              </div>
            </li>
            <li>
              <div className="ellipse">
                <img src={ellipse} />
              </div>
              <div className="label">Segít elérni a megfelelő kondíciót</div>
            </li>
            <li>
              <div className="ellipse">
                <img src={ellipse} />
              </div>
              <div className="label">
                Támogaja a szervezet méregtelenítő folyamatait, bőrrszépítő
                hatása van
              </div>
            </li>
            <li>
              <div className="ellipse">
                <img src={ellipse} />
              </div>
              <div className="label">
                Aktiválja a nyirok - és vérkeringést, erősíti az immunrendszert
              </div>
            </li>
            <li>
              <div className="ellipse">
                <img src={ellipse} />
              </div>
              <div className="label">
                Fontos szerepet játszik a szív- és érrendszeri és egyéb
                betegségek megelőzésében
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="cards">
        <div className="health">
          <div className="card-title">
            <div className="img-card">
              <img src={health} />
            </div>
            <h3>Egészség</h3>
          </div>
          <p>
            Az INFRASLIMX egy kombinált fitness eszköz, amely a legmodernebb
            technológiákat alkalmazva magasabb szintre emeli a testedzés
            alakformáló hatását. A zárt kabinban egyszerre érvényesül a
            vákuummasszázs, az infra kezelés, a kollagén fényterápia, az ózon-
            és oxigénterápia, valamint az aromaterápia jótékony hatása.
          </p>
        </div>

        <div className="sport">
          <div className="card-title">
            <div className="img-card">
              <img src={sport} />
            </div>
            <h3>Sport</h3>
          </div>
          <p>
            Az INFRASLIMX egy kombinált fitness eszköz, amely a legmodernebb
            technológiákat alkalmazva magasabb szintre emeli a testedzés
            alakformáló hatását. A zárt kabinban egyszerre érvényesül a
            vákuummasszázs, az infra kezelés, a kollagén fényterápia, az ózon-
            és oxigénterápia, valamint az aromaterápia jótékony hatása.
          </p>
        </div>

        <div className="beauty">
          <div className="card-title">
            <div className="img-card">
              <img src={beauty} />
            </div>
            <h3>Szépség</h3>
          </div>

          <p>
            Az INFRASLIMX egy kombinált fitness eszköz, amely a legmodernebb
            technológiákat alkalmazva magasabb szintre emeli a testedzés
            alakformáló hatását. A zárt kabinban egyszerre érvényesül a
            vákuummasszázs, az infra kezelés, a kollagén fényterápia, az ózon-
            és oxigénterápia, valamint az aromaterápia jótékony hatása.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Infraslim;
