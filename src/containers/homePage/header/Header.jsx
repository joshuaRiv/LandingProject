import React from 'react';
import ai from '../../../assets/ai.png';
import './header.css';
import CarouselComponent from '../../../components/Carousel/Carousel.jsx';

const Header = () => (
  <>
    <div className="gpt3__header" id="home">
      <div className="gpt3__header-content">
        <div className="carouselSizing">
          <CarouselComponent />
        </div>

        <div className="header_action-buttons">
          <button type="button" className="header_action-buttons_button header_btnContact">Contacto</button>
          <button type="button" className="header_action-buttons_button header_btnBusiness">IA para negocios</button>
        </div>

      </div>
      <div className="gpt3__header-image">
        <img src={ai} />
      </div>
    </div>
  </>
);

export default Header;
