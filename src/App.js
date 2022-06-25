import React from 'react';
import { Article, Brand, CTA, Navbar,  } from './components';
import { Footer, Blog, Possibility, Features, WhatWeDo, Header } from './containers';
import './App.css';
const App = () => {
  return (
    <div className='App'>
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatWeDo />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
      <h1>Hello World</h1>
    </div>
  );
}

export default App;
