import React from 'react';
import './possibility.css';
import PerformanceCards from './Cards/PerformanceCards.jsx';
import performanceCardData from './Cards/PerformanceCards.js';

const Possibility = () => (
  <div>
    <div className="inversetriangleContainer">
      <div className="inverseTriangle" />
    </div>

    <div className="gpt3__possibility section__padding" id="possibility">
      <div className="gpt3__possibility-content">
        <h3 className="miniTitle">RENDIMIENTO</h3>
        <div>
          <h2 className="title">Aicraft Supera a la Competencia</h2>
        </div>
        <div className="performanceCardWrapper">
          {performanceCardData.map((item, key) => (
            <PerformanceCards
              key={key}
              mini={item.mini}
              title={item.title}
              propImg={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default Possibility;
