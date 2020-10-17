import React from 'react';
import { render , unmountComponentAtNode} from "react-dom";
import { act } from "react-dom/test-utils";
import axiosApi from "../services/api";
import "@testing-library/jest-dom/extend-expect";
import axios from "axios";


import ProductList from "../components/ProductList";

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

jest.mock('axios');

describe('fetch Produtos disponíveis', () => {
    it('fetches successfully produtos from api', async () => {
      const fakeProdutos = {
        data: [
          {
            "id": "5f70a04077aaa872f001641f",
            "nome": "Aspirador de pó",
            "descricao": "Ótimo aspirador de pó",
            "preco": 600,
            "inseridoEm": "2020-09-27T14:22:56.215Z",
            "__v": 0
          },
          {
            "_id": "5f70a1373017ba74ec9fc8d1",
            "nome": "Abajur",
            "descricao": "Abajur bacana",
            "preco": 900,
            "inseridoEm": "2020-09-27T14:27:03.377Z",
            "__v": 0
          },
          {
            "_id": "5f779082f72b802328f4e546",
            "nome": "Cortina",
            "descricao": "Cortina top",
            "preco": 400,
            "inseridoEm": "2020-10-02T20:41:38.001Z",
            "__v": 0
          },
          {
            "_id": "5f77967fef187632f81708fc",
            "nome": "Faca",
            "descricao": "Faca bacana",
            "preco": 40,
            "inseridoEm": "2020-10-02T21:07:11.724Z",
            "__v": 0
          }
        ]
      };
      

      axios.get.mockImplementationOnce(() => Promise.resolve(fakeProdutos));
      await expect(axiosApi.getProducts(`/produtos?tipo=1`)).resolves.toEqual(fakeProdutos);
    });
  });





