import React from 'react';
import Feature from '../../../components/feature/Feature';
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
      <h2 className="title">PotencIAndo la vida y los negocios </h2>
      <p className="description">
        Transforma cada aspecto de tu vida y negocio con nuestras soluciones avanzadas de IA.Transformación inteligente, resultados reales.
      </p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} key={item.title + index} />
      ))}
    </div>
    <div className="featureButtons">
      <div className="featuresButtonContainerAi">
        <button type="button" className="featureBtns">Por qué Aicraft</button>
      </div>
      <div className="featuresButtonContainerPr">
        <button type="button" className="featureBtns">Posibles proyectos</button>
      </div>
    </div>
  </div>
);

export default Features;
