
import React from 'react'
import Affirmations from "../../components/relax/affirmations"
import Meditation from "../../components/relax/meditation"
import Mindfulness from "../../components/relax/mindfulness"
import Movement from "../../components/relax/movement"
import Photo from "./catalin-pop-noydSJIWMSg-unsplash.jpg"


function Relax () {
    return (
        <>
        <div>
            <img src={Photo} />
        </div>
        <Affirmations />
        <Meditation />
        <Mindfulness />
        <Movement />
        </>
    )
}

export default Relax