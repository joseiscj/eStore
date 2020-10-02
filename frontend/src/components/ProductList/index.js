import React from "react";
import Product from "../Product";
import "./styles.css";

class ProductList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quantidadeProdutos: 0,
            data : [{"nome": "Carregador de celular", "descricao": "Ótimo carregador de celular. Preço camarada.", preco: 50},
                     {"nome": "Aspirador de pó", "descricao": "A forma mais eficiente de sumir com a poeira.", preco: 150},
                     {"nome": "Playstation 5", "descricao": "A qualidade da Sony nesse console de última geração.", preco:4000}]
        };
    
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
                
                {this.state.data.map((e) => <div id="products"><Product nome={e.nome} descricao={e.descricao} preco={e.preco}/>
                <button onClick={this.incrementaQuantidade} class="favorite styled">Interesse em comprar</button>
                </div>)}
                

        <div id="qnt">Quantidade de produtos a serem comprados: {this.state.quantidadeProdutos}</div>
        </div>
        ) 
    }
}

export default ProductList;