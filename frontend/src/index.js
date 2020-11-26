import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from "react-router-dom";
import { ProductProvider } from "./contextAPI";
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <ProductProvider>
  <Router>
  <React.StrictMode>
    <App />
  </React.StrictMode></Router></ProductProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
