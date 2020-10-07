import React, { useState, useEffect } from 'react';
import Product from "../Product";
import "./styles.css";
import api from '../../services/api';

function ProductList(props) {
    const [count, setCount] = useState(0);
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);

    //[{"nome": "Carregador de celular", "descricao": "Ótimo carregador de celular. Preço camarada.", preco: 50},
    //{"nome": "Aspirador de pó", "descricao": "A forma mais eficiente de sumir com a poeira.", preco: 150},
    //{"nome": "Playstation 5", "descricao": "A qualidade da Sony nesse console de última geração.", preco:4000}]
        
    useEffect(() => {
        let getProdutos = async (page = 1) => {
            let response = await api
            .get(`/produtos?page=${page}`)
              .catch((error) => console.log(error))
            setData(response.data.docs);
          };
          console.log(data);
          getProdutos();
    }, [page])

    return (
        <div className="plist">
            <h1>Tipo de produto: {props.name}</h1>
            
            {data.map((e) => <div id="products"><Product nome={e.nome} descricao={e.descricao} preco={e.preco}/>
            <button onClick={() => setCount(count + 1)} class="favorite styled">Interesse em comprar</button>
            </div>)}
            

    <div id="qnt">Quantidade de produtos a serem comprados: {count}</div>
    </div>
    ) 
    
}

export default ProductList;
