import React from 'react';

import Header from "./components/Header";
import ProductList from "./components/ProductList";

import "./styles.css";

const App = () => (
  <div className="App">
    <Header />
    <ProductList name="Eletrônicos" />
  </div>
);


export default App;
