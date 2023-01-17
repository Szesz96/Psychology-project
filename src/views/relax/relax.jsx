
import React from 'react'
import Affirmations from "../../components/relax/affirmations"
import Meditation from "../../components/relax/meditation"
import Mindfulness from "../../components/relax/mindfulness"
import Movement from "../../components/relax/movement"
import Start from "../../components/relax/relax-start"



function Relax () {
    return (
        <>
        <Start />
        <Affirmations />
        <Meditation />
        <Mindfulness />
        <Movement />
        </>
    )
}

export default Relax