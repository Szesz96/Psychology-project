import React, { useRef } from "react";
import { Element } from "react-scroll";
import "./relax.css";

function Mindfulness() {
  const mindfulness = useRef(null);
  return (
    <Element name="mindfulness">
      <h2 className="section-title">Mindfulness</h2>
      <div className="about-aff">
        <div className="text-about-mind">
          <div>
            Czym jest mindfulness? To inaczej uważność, przytomność, bycie w
            chwili obecnej z pełną uwagą i bez osądzania, czy ta chwila jest
            dobra, czy zła. Objęcie pełnią świadomości tu i teraz, zauważenie
            przelotnej myśli, nazwanie pojawiającej się w nas emocji, oglądanie
            codzienności ciągle świeżym umysłem, zachwyt nad chwilą,
            dostrzeżenie kropelek deszczu na szybie i kształtu chmur na niebie.
            Proste? Bardzo! Tyle że niełatwe.
          </div>
          <div>
            Przerwij na chwilę czytanie. Zamknij oczy. Zwróć uwagę na swój
            oddech. Jaki jest teraz – długi czy krótki? Jak się czujesz,
            obserwując siebie? Rozumiesz, co chcę Ci powiedzieć? Dzięki Twojej
            uwadze ta chwila przestała być zwykłą chwilą, podobną milionowi
            zagubionych w pędzie chwil. Różnica polega na tym, że ten moment
            przeżywasz świadomie. Chcesz doświadczać więcej takich świadomych
            chwil?
          </div>
        </div>
      </div>
      <h3>Proste ćwiczenia uważności:</h3>
      <div className="mind-section">
        <div className="mind-box">
          <div className="mind-title-container">
            <p className="mind-title">Oddychanie z małym przyjacielem</p>
          </div>
          <div className="mind-description">
            Dziecko kładzie się na podłodze i umieszcza na brzuchu maskotkę.
            Oddychaja w ciszy przez minutę i zauważa przy tym, jak jego mały
            przyjaciel porusza się w górę i w dół. Stara się też zauważyć
            wszelkie inne wrażenia. Wyobraża sobie, że myśli, które pojawiają
            się w głowie zmieniają się w bańki mydlane i odlatują…{" "}
          </div>
        </div>
        <div className="mind-box">
          <div className="mind-title-container">
            <p className="mind-title">Zapach i smak</p>
          </div>
          <div className="mind-description">
            Znajdź coś mocno pachnącego, na przykład świeżą skórkę z pomarańczy,
            laskę cynamonu, czy wanilii. Poproś dzieci, żeby zamknęły oczy i
            wdychały zapach, skupiając na nim całą uwagę.Dzieci z zamkniętymi
            oczami smakują rodzynkę, starając się jeść ją jak najdłużej,
            zwracając uwagę na wszystkie odcienie smaku.{" "}
          </div>
        </div>
        <div className="mind-box">
          <div className="mind-title-container">
            <p className="mind-title">Oddychanie z małym przyjacielem</p>
          </div>
          <div className="mind-description">
            Dziecko kładzie się na podłodze i umieszcza na brzuchu maskotkę.
            Oddychaja w ciszy przez minutę i zauważa przy tym, jak jego mały
            przyjaciel porusza się w górę i w dół. Stara się też zauważyć
            wszelkie inne wrażenia. Wyobraża sobie, że myśli, które pojawiają
            się w głowie zmieniają się w bańki mydlane i odlatują…{" "}
          </div>
        </div>
      </div>
      <div className="mind-section">
        <div className="mind-box">
          <div className="mind-title-container">
            <p className="mind-title">Napinanie i rozluźnianie</p>
          </div>
          <div className="mind-description">
            Dzieci leżąc na podłodze z zamkniętymi oczami starają się napiąć
            każdy mięsień w ciele tak mocno, jak tylko potrafią. Palce u nóg i
            stopy, nogi, brzuch. Mogą zacisnąć pięści i podnieść ręce do głowy.
            Pozostają w tej ściśniętej pozycji przez kilka sekund a potem w
            pełni się rozluźniają i relaksują.
          </div>
        </div>
        <div className="mind-box">
          <div className="mind-title-container">
            <p className="mind-title">Oddychanie z małym przyjacielem</p>
          </div>
          <div className="mind-description">
            Dziecko kładzie się na podłodze i umieszcza na brzuchu maskotkę.
            Oddychaja w ciszy przez minutę i zauważa przy tym, jak jego mały
            przyjaciel porusza się w górę i w dół. Stara się też zauważyć
            wszelkie inne wrażenia. Wyobraża sobie, że myśli, które pojawiają
            się w głowie zmieniają się w bańki mydlane i odlatują…{" "}
          </div>
        </div>
        <div className="mind-box">
          <div className="mind-title-container">
            <p className="mind-title">Oddychanie z małym przyjacielem</p>
          </div>
          <div className="mind-description">
            Dziecko kładzie się na podłodze i umieszcza na brzuchu maskotkę.
            Oddychaja w ciszy przez minutę i zauważa przy tym, jak jego mały
            przyjaciel porusza się w górę i w dół. Stara się też zauważyć
            wszelkie inne wrażenia. Wyobraża sobie, że myśli, które pojawiają
            się w głowie zmieniają się w bańki mydlane i odlatują…{" "}
          </div>
        </div>
      </div>
      <hr className="break-between" />
    </Element>
  );
}

export default Mindfulness;
