import React from 'react';
import Listing from './Listing';
import './App.css';
import data from './data/etsy.json'

const App = () => {
  return (
    <div className="App">
      <Listing items={data} />
    </div>
  );
};


export default App;
