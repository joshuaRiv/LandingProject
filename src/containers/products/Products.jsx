import React from 'react';
import './products.css';
import '../possibility/possibility.css';
import dividerImg from '../../assets/Divider.svg';
import ProductsCards from './cards/ProductsCards.jsx';
import ProductsCardData from './ProductsCards.js';

const Products = () => (
  <div>
    <div className="svgTriangleContainer">
      <img src={dividerImg} />
    </div>

    <div className="gpt3__possibility section__padding" id="possibility">
      <div className="gpt3__possibility-content">
        <h3 className="miniTitle">EMPODERANDO CLIENTES</h3>
        <div>
          <h2 className="title">Estamos abriendo terreno para la IA</h2>
        </div>
        <div className="productCardsWrapper">
          {ProductsCardData.map((item, key) => (
            <ProductsCards
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

export default Products;
