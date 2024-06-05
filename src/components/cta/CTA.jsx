import React from 'react';
import './cta.css';

const CTA = () => (
  <div>
    <div className="triangleContainer">
      <div className="triangle" />
    </div>
    <div className="gpt3__cta">
      <h3 className="miniTitle">HABLEMOS</h3>

      <div>
        <h2 className="title">Convierte Tus Datos En Avances</h2>
        <p className="ctadescription">
          Descubre cómo Aicraft puede proveerte las bases para tu futuro de innovación basada en datos.
        </p>
      </div>
      <div className="gpt3__cta-btn">
        <button type="button">Contáctanos</button>
      </div>
    </div>
  </div>
);

export default CTA;
