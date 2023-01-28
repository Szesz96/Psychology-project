import React from 'react'
import './relax.css'
import Photo from './melissa.jpg'
import { Element } from 'react-scroll';

function Meditation () {
    return (
        <Element name="meditation">
        <h2 className="section-title">Medytacje</h2>
        <div className="about-aff">
            <div className="text-about-med">Medytacja to trening umysłu, który zawiera elementy relaksacji, skupienia oraz świadomości. Medytacja dla umysłu jest tym, czym ćwiczenia fizyczne są dla ciała. Praktyka zazwyczaj jest wykonywana indywidualnie w pozycji siedzącej oraz z zamkniętymi oczami. Celem medytacji jest budowanie bardziej harmonijnego życia i lepszego zrozumienia siebie i innych. Dzięki temu możemy mieć więcej jasności w życiu i łatwiej podejmować decyzję. A to przyczynia się do szczęśliwego życia. Medytacja to proces, to umiejętność, którą trzeba trenować. Podobnie jak z każdą inną umiejętnością np. nauką angielskiego, żeby mieć efekty trzeba ćwiczyć. Nie wystarczy ćwiczyć raz przez kilka godzin, trzeba stopniowo rozwijać umiejętność — ćwicząc np. kilka razy w tygodniu. A efekty na pewno się pojawią.</div>
            <img className='single-photo' src={Photo}></img>
        </div>
        <h3>Skorzystaj z naszych medytacji:</h3>
        <div className="section-video">
            <div className="single-video-tile">
                <p className="meditation-title">Medytacja wewnętrznej równowagi</p>
                <iframe className="single-video" id="v1" src="https://www.youtube.com/embed/NX6xjjZBiDc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
            <div className="single-video-tile">
                <p className="meditation-title">Medytacja wewnętrznej równowagi</p>
                <iframe className="single-video" id="v2" src="https://www.youtube.com/embed/NX6xjjZBiDc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            <div className="single-video-tile">
                <p className="meditation-title">Medytacja wewnętrznej równowagi</p>
                <iframe className="single-video" id="v3" src="https://www.youtube.com/embed/NX6xjjZBiDc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </div>
        <hr className="break-between"/>
        </Element>
    );
}

export default Meditation;