import React, { useState, useEffect } from 'react';
import Product from "../Product";
import "./styles.css";
import BaseService from '../../services/api';

function ProductList(props) {
    const [count, setCount] = useState(0);
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);

    //[{"nome": "Carregador de celular", "descricao": "Ótimo carregador de celular. Preço camarada.", preco: 50},
    //{"nome": "Aspirador de pó", "descricao": "A forma mais eficiente de sumir com a poeira.", preco: 150},
    //{"nome": "Playstation 5", "descricao": "A qualidade da Sony nesse console de última geração.", preco:4000}]
    
    useEffect(() => {
        let path = `/produtos?page=${page}`;
        BaseService.getProducts(path)
          .then(res => setData(res.data.docs))
          .catch(error => console.log(error))
      }, [page]);

   

    return (
        <div className="plist">
            
            <h1>{props.name ? "Tipo de produto: "+(props.name) : "Tipo de produto: Diversos"}</h1>
            
            {data.map((e) => <div id="products"><Product nome={e.nome} descricao={e.descricao} preco={e.preco}/>
            <button onClick={() => setCount(count + 1)} class="favorite styled">Interesse em comprar</button>
            </div>)}
            
        <p>Quantidade de produtos a serem comprados: {count}</p>
    </div>
    ) 
    
}

export default ProductList;
