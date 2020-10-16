import React from 'react';
import { render , unmountComponentAtNode} from "react-dom";
import { act } from "react-dom/test-utils";

import ProductList from "../components/ProductList";

var categories = ["ALIMENTO", "HIGIENE", "ACESSORIOS", "BRINQUEDOS"];

let container = null;
beforeEach(() => {
  // configurar o elemento do DOM como o alvo da renderização
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // Limpar ao sair
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("Testar a classificação dos produtos quando é passado o nome", () => {
    act(()=>{
        render(
        <ProductList name="Cozinha" />, container);
    });

    expect(container.querySelector("h1").textContent).toBe("Tipo de produto: Cozinha");
})

it("Testar a classificação dos produtos quando não é passado o nome", () => {
    act(()=>{
        render(
        <ProductList />, container);
    });

    expect(container.querySelector("h1").textContent).toBe("Tipo de produto: Diversos");
})

it("Testar renderização e atualizaço do contador dos produtos para compra", () => {
    act(()=>{
        render(
        <ProductList name="Cozinha" />, container);
    });
    //testando para 0
    const button = container.querySelector('button');
    const label = container.querySelector('p');

    expect(label.textContent).toBe('Quantidade de produtos a serem comprados: 0');

    //testando para 1
    act(() => {
        button.dispatchEvent(new MouseEvent('click', {bubbles: true}));
      });
      expect(label.textContent).toBe('Quantidade de produtos a serem comprados: 1');

    //testando para 2
    act(() => {
    button.dispatchEvent(new MouseEvent('click', {bubbles: true}));
    });
    expect(label.textContent).toBe('Quantidade de produtos a serem comprados: 2');
})



