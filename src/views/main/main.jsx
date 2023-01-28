import React from 'react';
import './main.css';

const Main = () => {
	return (
		<div className='main-container'>
			<div className='main-text'>
        <div>
				  <h1 className='main-heading'>POZWÓL SOBIE POMÓC!</h1>
				  <div className='hr'></div>
        </div>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore architecto et impedit illo alias expedita aspernatur consectetur ipsum ea perferendis non dolores omnis eius molestiae veniam corporis, animi iste voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda illum iste dolores vitae soluta ipsum?
				</p>
        <div className='internal-nav'>
          <div className='intnav-item one'>
            <p>Blog</p>
            <button className='intnav-btn blog-btn'>Poznaj doświadczenia innych
              <div className='icon'><i class="fa-solid fa-arrow-right"></i></div>
            </button>
          </div>
          <div className='intnav-item two'>
            <p>Psycholog</p>
            <button className='intnav-btn psych-btn'>Znajdź najlepszego specjaliste
              <div className='icon'><i class="fa-solid fa-arrow-right"></i></div>
            </button>
          </div>
          <div className='intnav-item three'>
            <p>Pomoc</p>
            <button className='intnav-btn help-btn'>Poproś nas o pomoc
              <div className='icon'><i class="fa-solid fa-arrow-right"></i></div>
            </button>
          </div>
          <div className='intnav-item four'>
            <p>Relax</p>
            <button className='intnav-btn relax-btn'>Poczuj nareszcie spokój ducha
              <div className='icon'><i class="fa-solid fa-arrow-right"></i></div>
            </button>
          </div>
        </div>
			</div>
			<div className='main-img'></div>
		</div>
	);
};

export default Main;