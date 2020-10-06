import React from "react";
import "./styles.css";

function Product(props) {

    return (
        <div className="produto">
            <h3>{props.nome}</h3>
            <h5>{props.descricao}</h5>
            <h4>{"Preço: R$" + props.preco}</h4>
        </div>
    )
       
};

export default Product;