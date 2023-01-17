import React from 'react'
import './relax.css'
import Photo from "./catalin-pop-noydSJIWMSg-unsplash.jpg"

function Start () {
    return (
        <div className="main-photo-container">
            <img className="main-photo-single" src={Photo} />
            <div className="about-relax">
                <h1>Relaksownik dziecięcy</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores in laudantium, nihil vero distinctio veritatis amet expedita commodi sint impedit quis dolorem nostrum possimus quidem, quibusdam iure obcaecati assumenda rerum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores in laudantium, nihil vero distinctio veritatis amet expedita commodi sint impedit quis dolorem nostrum possimus quidem, quibusdam iure obcaecati assumenda rerum.</p>
            </div>
        </div>
    );
}

export default Start;

