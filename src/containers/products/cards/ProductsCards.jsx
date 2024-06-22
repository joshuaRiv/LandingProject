import React from 'react';
import '../../possibility/Cards/PerformanceCards.css';

function PerformanceCards({ mini, title, propImg }) {
  return (
    <div className="cardPerformance">
      <h3 className="miniTitlePerformance">{mini}</h3>
      <h2 className="titlePerformance">{title}</h2>
      <img src={propImg} alt="Performance Card" />
    </div>
  );
}

export default PerformanceCards;
