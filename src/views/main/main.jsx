import React from 'react';
import './main.css';

const Main = () => {
	return (
		<div className='main-container'>
			<div className='main-text'>
				<h1>POZWÓL SOBIE POMÓC!</h1>
				<div className='hr'></div>
				<p>
					Zależy nam na tym, aby wspierać osoby zmagające się z zaburzeniami psychicznymi. Uważamy, że najważniejszym krokiem do odnalezienia spokoju ducha jest uświadomienie sobie, że nie jesteśmy sami. Z powodu zaburzeń psychicznych na całym świecie cierpi 25% społeczeństwa.
				</p>
        <div className="disorders-container">
          <div className="disorders">
            <p>Depresja</p>
            <p>Nerwica</p>
            <p>Zaburzenia osobowości</p>
            <p>Natręctwa</p>
            <p>Dwubiegunowość</p>
          </div>
          <div className='disorder-description'>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, architecto?</p>
          </div>
        </div>
			</div>
			<div className='main-img'></div>
		</div>
	);
};

export default Main;