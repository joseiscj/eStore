import React, { Component } from "react"
const ProductContext = React.createContext();

class ProductProvider extends Component {
    state = {
        products: [{"nome": "Carregador de celular", "descricao": "Ótimo carregador de celular. Preço camarada.", preco: 50},
        {"nome": "Aspirador de pó", "descricao": "A forma mais eficiente de sumir com a poeira.", preco: 150},
        {"nome": "Playstation 5", "descricao": "A qualidade da Sony nesse console de última geração.", preco:4000}]
    }

    render() {
        return <ProductContext.Provider value={{
            ...this.state,
        }}>
            {this.props.children}
        </ProductContext.Provider>
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};

