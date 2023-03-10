import React from "react";
import { useState } from "react";
import "./relax.css";
import affirmationData from "./affirmationData";
import Photo from "./happy-kid.jpg";
import { Element } from "react-scroll";

function Affirmations() {
  const [oneAffirmation, setAffirmation] = useState("");


  function getAffirmation() {
    const affirmationArray = affirmationData.data.affirmations;
    const randomNumber = Math.floor(Math.random() * affirmationArray.length);
    setAffirmation(affirmationArray[randomNumber].text);
  }

  return (
    <Element name="affirmations">
      <div>
        <h2 className="section-title-aff">Afirmacje</h2>
        <div className="about-aff">
          <img className="single-photo" src={Photo}></img>
          <div className="text-about">
            <div>
              Afirmacje są krótkimi podstawowymi założeniami deklaracjami,
              przekonaniami, zdaniami, aprobatami, które wyrażają postawę lub
              przekonanie na temat siebie, lub okoliczności swojego życia. Są
              podstawą codziennego myślenia, od którego wszystko się zaczyna.
              Sposób, w jaki myślisz o sobie, innych ludziach, wydarzeniach i
              świecie, jest tym, jak się czujesz. To, jak się czujesz, jest tym,
              jak się zachowujesz.
            </div>
            <div>
              Gdy ktoś pyta, czy afirmacje dla dzieci w ogóle mają sens,
              odpowiadamy tak: słowa przekładają się na myśli, myśli wpływają na
              uczucia, uczucia – na zachowania, zachowania zmieniają się w
              nawyki, a te kształtują całe życie. Więc tak: afirmacje dla dzieci
              są potężnym narzędziem, które już od najmłodszych lat kierunkuje
              człowieka na rozwój, trwanie w pozytywnych wibracjach i odczuwanie
              wdzięczności zamiast presji. Zobacz, jakie afirmacje dla dzieci
              warto stosować.
            </div>
          </div>
        </div>
        <div className="affirmation-result">{oneAffirmation}</div>
        <button className="affirmation-button" onClick={getAffirmation}>
          WYLOSUJ AFIRMACJĘ NA DZIŚ
        </button>
      </div>

      <hr className="break-between" />
    </Element>
  );
}

export default Affirmations;
