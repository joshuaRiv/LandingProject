import React from 'react';
import './products.css';
import dividerImg from '../../assets/Divider.svg';
// import PerformanceCards from './Cards/PerformanceCards.jsx';
// import performanceCardData from './Cards/PerformanceCards.js';

const Products = () => (
  <div>
    <div className="svgTriangleContainer">
      <img src={dividerImg} />
    </div>

    <div className="gpt3__possibility section__padding" id="possibility">
      <div className="gpt3__possibility-content">
        <h3 className="miniTitle">EMPODERANDO CLIENTES</h3>
        <div>
          <h2 className="title">Estamos abriendo terreno para la IA</h2>
        </div>
        <div className="performanceCardWrapper">
          {/* {performanceCardData.map((item, key) => (
            <PerformanceCards
              key={key}
              mini={item.mini}
              title={item.title}
              propImg={item.image}
            />
          ))} */}
        </div>
      </div>
    </div>
  </div>
);

export default Products;
