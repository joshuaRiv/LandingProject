import React from 'react';
import ai from '../../assets/ai.png';
import './header.css';

const Header = () => (
  <div className="gpt3__header" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Lorem ipsum dolor sit amet</h1>
      <p>
        Augue eget arcu dictum varius duis at consectetur lorem donec. Malesuada
        proin libero nunc consequat interdum varius sit amet. Duis tristique
        sollicitudin nibh sit. Ullamcorper dignissim cras tincidunt lobortis
        feugiat vivamus at augue eget.
      </p>

      <div className="header_action-buttons">
        <button type="button" className="header_action-buttons_button header_btnContact">Contact</button>
        <button type="button" className="header_action-buttons_button header_btnBusiness">IA for business</button>
      </div>

    </div>

    <div className="gpt3__header-image">
      <img src={ai} />
    </div>
  </div>
);

export default Header;
