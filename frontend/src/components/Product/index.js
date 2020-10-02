import React from "react";
import "./styles.css";

class Product extends React.Component {

    render() {
        return (
            <div className="produto">
                <h3>{this.props.nome}</h3>
                <h5>{this.props.descricao}</h5>
                <h4>{"Preço: R$" + this.props.preco}</h4>
            </div>
        )
    }
    
};

export default Product;