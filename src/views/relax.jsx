
import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Affirmations from "../components/affirmations"
import Meditation from "../components/meditation"
import Mindfulness from "../components/mindfulness"
import Movement from "../components/movement"


function Relax () {
    return (
        <>
        <Navbar />
        <Affirmations />
        <Meditation />
        <Mindfulness />
        <Movement />
        <Footer />
        </>
    )
}

export default Relax