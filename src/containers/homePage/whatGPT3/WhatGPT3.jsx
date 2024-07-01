import React from 'react';
import InnovationCards from './Cards/InnovationCards';
import InnoCardsData from './Cards/InnoCardsData.js';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3">
    <div className="gpt3__whatgpt3-heading">
      <h2>Impulsando la innovación</h2>
      <p>Rompiendo muros para la IA en México, Latinoamérica y más allá.</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      {InnoCardsData.map((item, key) => (
        <InnovationCards
          key={key}
          number={item.number}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  </div>
);

export default WhatGPT3;
