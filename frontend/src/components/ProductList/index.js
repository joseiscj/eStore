import React, { useState, useEffect, useContext } from 'react';
import Product from "../Product";
import "./styles.css";
import BaseService from '../../services/api';
import ThemeContext from "../../context/ThemeContext"

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

    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div className="plist" style={{ background: theme.background }}>
            
            <h1>{props.name ? "Tipo de produto: "+(props.name) : "Tipo de produto: Diversos"}</h1>
            
            {data.map((e) => <div id="products"><Product nome={e.nome} descricao={e.descricao} preco={e.preco}/>
            <button id="b1" onClick={() => setCount(count + 1)} class="favorite styled">Interesse em comprar</button>
            </div>)}
            
        <p>Quantidade de produtos a serem comprados: {count}</p>
        <button id="b2" onClick={toggleTheme}>Toggle theme</button>
    </div>
    ) 
    
}

export default ProductList;
