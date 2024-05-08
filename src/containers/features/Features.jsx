import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Consultoría',
  },
  {
    title: 'Auditoría',
  },
  {
    title: 'Política e IA responsable',
  },
  {
    title: 'Educación y entrenamiento',
  },
];

const Features = () => (
  <div className="center" id="features">
    <h3 className="miniTitle">NUESTRA OFERTA</h3>

    <div>
      <h2 className="title">RevolucionIAndo la vida y los negocios </h2>
      <p className="description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.
      </p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} key={item.title + index} />
      ))}
    </div>
    <div className="featureButtons">
      <div className="featuresButtonContainerAi">
        <button type="button" className="featureBtns">Porqué Aicraft</button>
      </div>
      <div className="featuresButtonContainerPr">
        <button type="button" className="featureBtns">Posibles proyectos</button>
      </div>
    </div>
  </div>
);

export default Features;
