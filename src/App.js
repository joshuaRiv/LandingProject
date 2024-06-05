import React from 'react';

import { Footer, Blog, Possibility, Features, WhatGPT3, Header, Products } from './containers';
import { CTA, Navbar } from './components';
import './App.css';

const App = () => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
    {/* <Brand /> */}
    <WhatGPT3 />
    <Features />
    <Possibility />
    <Products />
    <Blog />
    <CTA />
    <Footer />
  </div>
);

export default App;
