import React from "react";
import Product from "../Product";
import "./styles.css";

class ProductList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {quantidadeProdutos: 0};
    
        // This binding is necessary to make `this` work in the callback
        this.incrementaQuantidade = this.incrementaQuantidade.bind(this);
      }

      incrementaQuantidade = () => {
        this.setState(prevState => {
           return {quantidadeProdutos: prevState.quantidadeProdutos + 1}
        })
    }
    

    render() {
        return (
            <div className="plist">
                <h1>Tipo de produto: {this.props.name}</h1>
                
                <div id="products"><Product name="Carregador de celular"/>
                <button onClick={this.incrementaQuantidade} class="favorite styled">Interesse em comprar</button>
                </div>

                <div id="products"><Product name="Aspirador de pó"/>
                <button onClick={this.incrementaQuantidade} class="favorite styled">Interesse em comprar</button>
                </div>

                <div id="products"><Product name="Playstation 5"/>
                <button onClick={this.incrementaQuantidade} class="favorite styled">Interesse em comprar</button>
                </div>
                
        <div id="qnt">Quantidade de produtos a serem comprados: {this.state.quantidadeProdutos}</div>
        </div>
        ) 
    }
}

export default ProductList;