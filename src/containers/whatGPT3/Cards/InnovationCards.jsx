import React from 'react';
import './InnovationCards.css';

export default function InnovationCards({ number, title, description }) {
  return (
    <div className="innovationCard">
      <h2 className="cardNumber">{number}</h2>
      <h5 className="cardTitle">{title}</h5>
      <div className="descriptionBlock">
        <div id="barraColor" />
        <span className="cardDesc">{description}</span>
      </div>
    </div>
  );
}
