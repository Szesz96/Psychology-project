import React from 'react'
import './relax.css'
// import Photo from "./catalin-pop-noydSJIWMSg-unsplash.jpg"
import { Link } from 'react-router-dom'

function Start () {
    return (
        <>
        <div className="main-photo">
        <h1>Relaksownik dziecięcy</h1>
        </div>
        <div className="relax-container">
            {/* <img className="main-photo-single" src={Photo} /> */}
            <div className="about-relax">
                
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores in laudantium, nihil vero distinctio veritatis amet expedita commodi sint impedit quis dolorem nostrum possimus quidem, quibusdam iure obcaecati assumenda rerum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores in laudantium, nihil vero distinctio veritatis amet expedita commodi sint impedit quis dolorem nostrum possimus quidem, quibusdam iure obcaecati assumenda rerum.</p>
                <div className="go-to">
                <p className="go-paragraph">Przejdź do:</p>
                <ul className="relax-list">
                    <li className="direct">#afirmacje</li>
                    <li className="direct">#medytacje</li>
                    <li className="direct">#mindfulness</li>
                    <li className="direct">#ruch to zdrowie</li>
                </ul>
                </div>
            </div>
        </div>
        <hr className="break-between"/>
        </>
    );
}

export default Start;

