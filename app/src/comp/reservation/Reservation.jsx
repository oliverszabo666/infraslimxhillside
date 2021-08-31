import React from "react";
import "../../css/reservation/reservation.scss";
import phone from "../../img/smartphone.png";
import facebook from "../../img/facebook.png";
import instagram from "../../img/instagram.png";
import email from "../../img/email.png";

const Reservation = () => {
  return (
    <div id="reservation">
      <div className="container">
        <h1>Időpontfoglalás</h1>

        <p>
          Keress minket telefonszámunkon, ahol rendelkezésedre állunk a
          nyitvatartási időnk keretein belül, valamint megtalálsz minket
          valamennyi közösségi médián, vagy e-mailen keresztül.
        </p>

        <div className="kapcsolat">
          <div className="icons">
            <div className="icon-img">
              <img src={phone} alt="phone" />
            </div>
            <div className="p">+ 36 70 454 4980</div>
          </div>

          <div className="icons">
            <a
              href="https://www.facebook.com/InfraslimXHillside"
              target="_blank"
              rel="noreferrer"
            >
              <div className="icon-img">
                <img src={facebook} alt="facebook" />
              </div>
            </a>
          </div>

          <div className="icons">
            <a
              href="https://www.instagram.com/infraslimx_hillside/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="icon-img">
                <img src={instagram} alt="facebook" />
              </div>
            </a>
          </div>

          <div className="icons">
            <div className="icon-img">
              <img src={email} alt="email" />
            </div>
            <div className="p">infraslimxhillside@gmail.com</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
