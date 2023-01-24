import React from 'react'
import '../help.css'
import Photo1 from "./woman1.jpg"
import Photo2 from "./woman2.jpg"
import Photo3 from "./woman3.jpg"





function Staff () {
    return (
        <>
        <div className="">
        <h2>Kto może Tobie pomóc?</h2>
        </div>
        <div className="text-about-psych">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</div>
        <div className="person-container">
            <div className="single-person">
                <img className="single-photo-psych" src={Photo1}></img>
                <p className="name">Marta Piechocka</p>
                <p>Psycholog dziecięcy</p>
            </div>
            <div className="single-person">
                <img className="single-photo-psych" src={Photo2}></img>
                <p className="name">Ewa Bartnicka</p>
                <p>Psycholog dziecięcy</p>
            </div>
            <div className="single-person">
                <img className="single-photo-psych" src={Photo3}></img>
                <p className="name">Agnieszka Ptak</p>
                <p>Psycholog dziecięcy</p>
            </div>
            </div>
        </>
    );
}

export default Staff;

