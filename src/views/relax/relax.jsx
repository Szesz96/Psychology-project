import React, { useRef } from "react";
import { Link } from "react-scroll";
import Affirmations from "../../components/relax/affirmations";
import Meditation from "../../components/relax/meditation";
import Mindfulness from "../../components/relax/mindfulness";
import Movement from "../../components/relax/movement";

function Relax() {
  return (
    <>
      <div className="main-photo">
        <h1>Relaksownik dziecięcy</h1>
      </div>
      <div className="relax-container">
        {/* <img className="main-photo-single" src={Photo} /> */}
        <div className="about-relax">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores in
            laudantium, nihil vero distinctio veritatis amet expedita commodi
            sint impedit quis dolorem nostrum possimus quidem, quibusdam iure
            obcaecati assumenda rerum. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Maiores in laudantium, nihil vero distinctio
            veritatis amet expedita commodi sint impedit quis dolorem nostrum
            possimus quidem, quibusdam iure obcaecati assumenda rerum.
          </p>
          <div className="go-to">
            <p className="go-paragraph">Przejdź do:</p>
            <ul className="relax-list">
              <li className="direct">
                <Link to="affirmations" smooth="true">
                  #afirmacje
                </Link>
              </li>
              <li className="direct">
                <Link to="meditation" smooth="true">
                  #medytacje
                </Link>
              </li>
              <li className="direct">
                <Link to="mindfulness" smooth="true">
                  #mindfulness
                </Link>
              </li>
              <li className="direct">
                <Link to="movement" smooth="true">
                  #ruch to zdrowie
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="break-between" />
      <Affirmations />
      <Meditation />
      <Mindfulness />
      <Movement />
    </>
  );
}

export default Relax;
