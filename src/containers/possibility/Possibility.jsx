import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      <h4>Request Early Access to Get Started</h4>
      <h1 className="gradient__text">Ullamcorper a lacus vestibulum sed arcu non <br />  odio euismod lacinia </h1>
      <p>Turpis nunc eget lorem dolor sed viverra ipsum. Tempor orci dapibus ultrices in iaculis nunc sed augue lacus. At risus viverra adipiscing at. Ut venenatis tellus in metus vulputate. Mattis molestie a iaculis at. Tincidunt lobortis feugiat vivamus at augue eget arcu dictum varius. </p>
    </div>
  </div>
);

export default Possibility;
