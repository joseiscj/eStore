import React,{useContext} from 'react';
import Header from "./components/Header";
//import ProductList from "./components/ProductList";
import ThemedButton from "./components/ThemedButton"
import "./styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductList from "./components/ProductList";
import { Switch, Route } from "react-router-dom";

function App() {

  return (
    <ThemedButton >
      <Route path="/" component={Header}/>
      <Switch>
        <Route exact path="/" component={ProductList} />
      </Switch>
    </ThemedButton>
  );
}


export default App;
