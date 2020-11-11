import React,{useContext} from 'react';
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import ThemedButton from "./components/ThemedButton"
import "./styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <ThemedButton >
      <Header />
      <ProductList name="Eletrônicos" />
    </ThemedButton>
  );
}


export default App;
