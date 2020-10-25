import React from "react";
import "./styles.css";

function Product(props) {

    return (
        <div className="product" >
            
            <h3>{props.nome}</h3>
            <ul>
                <li>{props.descricao}</li>
                <li>Preço: R$ {props.preco}</li>
            </ul>
            
        </div>
            
    )
       
};

export default Product;