import React from 'react';
import Header from "./components/Header";
import ProductList from "./components/ProductList/";
import ThemedButton from "./components/ThemedButton"
import "./styles.css";
import { Switch, Route } from "react-router-dom";
import Details from "./components/Details";
import Cart from "./components/Cart";

function App() {
  
  return (
    <ThemedButton >
      <Route path="/" component={Header}/>
      <Switch>
        <Route exact path="/" component={ProductList} />
        <Route path = "/details/:id" component={Details} />
        <Route path = "/cart" component={Cart} />
      </Switch>
    </ThemedButton>
  );
}


export default App;
