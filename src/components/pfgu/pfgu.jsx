import React from 'react';
import './pfgu.css'

function ProductCard({ mini, title, propImg }) {
  return (
    <div className="cardPerformance">
      <h3 className="miniTitlePerformance">{mini}</h3>
      <h2 className="titlePerformance">{title}</h2>
      <img src={propImg} alt="Performance Card" />
    </div>
  );
}