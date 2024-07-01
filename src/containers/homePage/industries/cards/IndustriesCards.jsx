import React from 'react';
import './IndustriesCards.css';

function IndustriesCards({ mini, title, propImg }) {
  return (
    <div className={(propImg ? 'cardIndustries' : 'cardIndustries gradientBackground')}>
      {propImg && <img src={propImg} alt="Industries Card" />}
      <div className="industriesCardContent">
        <h2 className="industriesCardTitle">{mini}</h2>
        <h3 className="industriesCardminiTitle">{title}</h3>
        {!propImg && <a className="cardCallToAction" href="www.google.com">Comenzar</a>}
      </div>
    </div>
  );
}

export default IndustriesCards;
