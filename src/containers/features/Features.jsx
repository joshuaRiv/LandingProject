import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Consultoría',
    text: 'From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.',
  },
  {
    title: 'Auditoría',
    text: 'Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.',
  },
  {
    title: 'Política e IA responsable',
    text: 'Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.',
  },
  {
    title: 'Educación y entrenamiento',
    text: 'Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush..',
  },
];

const Features = () => (
  <div className="center" id="features">
    <h3 className="miniTitle">Nuestra Oferta</h3>

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
