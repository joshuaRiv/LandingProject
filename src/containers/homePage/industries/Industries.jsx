import React from 'react';
import './industries.css';
import '../possibility/possibility.css';
import dividerImg from '../../../assets/Divider.svg';
import IndustriesCards from './cards/IndustriesCards.jsx';
import IndustriesCardData from './IndustriesCards.js';

const Industries = () => (
  <div>
    <div className="svgTriangleContainer">
      <img src={dividerImg} />
    </div>

    <div className="gpt3__possibility" id="possibility">
      <div className="gpt3__possibility-content">
        <h3 className="miniTitle">EMPODERANDO CLIENTES</h3>
        <div>
          <h2 className="title">Estamos abriendo terreno para la IA</h2>
          <p className="description">
            Aicraft impulsa aplicaciones innovadoras para la tecnología de computación gráfica en una amplia gama de industrias.
          </p>
        </div>
        <div className="productCardsWrapper">
          {IndustriesCardData.map((item, key) => (
            <IndustriesCards
              key={key}
              mini={item.mini}
              title={item.title}
              propImg={item.image}
            />
          ))}
        </div>
        <div className="featuresButtonContainerPr">
          <button type="button" className="featureBtns">Ver Soluciones</button>
        </div>
      </div>
    </div>
  </div>
);

export default Industries;
