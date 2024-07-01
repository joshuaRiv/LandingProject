import React from 'react';
import Blog from './blog/Blog';
import Possibility from './possibility/Possibility';
import Features from './features/Features';
import WhatGPT3 from './whatGPT3/WhatGPT3';
import Header from './header/Header';
import Industries from './industries/Industries';
import { CTA } from '../../components';

const HomePage = () => (
  <div>
    <div className="gradient__bg">
      <Header />
    </div>
    <WhatGPT3 />
    <Features />
    <Possibility />
    <Industries />
    <Blog />
    <CTA />
  </div>
);

export default HomePage;

