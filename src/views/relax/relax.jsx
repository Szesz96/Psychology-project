
import React, { useRef } from 'react'
import Affirmations from "../../components/relax/affirmations"
import Meditation from "../../components/relax/meditation"
import Mindfulness from "../../components/relax/mindfulness"
import Movement from "../../components/relax/movement"


function Relax () {
    const mindfulness = useRef(null);
    const scrollToSection = (elementRef) => {
        window.scrollTo({
            top: elementRef.current.offsetTop,
            behavior: "smooth"
        })}

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
                    <li className="direct" onClick={()=>scrollToSection(mindfulness)}>#afirmacje</li>
                    <li className="direct" onClick={()=>scrollToSection(mindfulness)}>#medytacje</li>
                    <li className="direct" onClick={()=>scrollToSection(mindfulness)}>#mindfulness</li>
                    <li className="direct" onClick={()=>scrollToSection(mindfulness)}>#ruch to zdrowie</li>
                </ul>
                </div>
            </div>
        </div>
        <hr className="break-between"/>
        <Affirmations />
        <Meditation />
        <Mindfulness />
        <Movement />
        </>
    )
}

export default Relax