import React, { Component } from "react"
const ProductContext = React.createContext();

class ProductProvider extends Component {
    state = {
        products: [{id: 1, nome: "Carregador de celular", descricao: "Ótimo carregador de celular. Preço camarada.", img: "img/playstation5.jpg", preco: 50, inCart: false, count: 1},
        {id: 2, nome: "Aspirador de pó", descricao: "A forma mais eficiente de sumir com a poeira.", img: "img/playstation5.jpg", preco: 150, inCart: false, count: 1},
        {id: 3, nome: "Playstation 5", descricao: "A qualidade da Sony nesse console de última geração.", img: "img/playstation5.jpg", preco:4000, inCart: false, count: 1}],

        detailProduct : [{id: 1, nome: "Carregador de celular", descricao: "Ótimo carregador de celular. Preço camarada.", img: "img/playstation5.jpg", preco: 50, inCart: false, count: 1}]
    }

    getItem = (id) => {
        const product = this.state.products.find((item) => item.id === id);
        return product;
    }

    handleDetails = (id) => {
        const product = this.getItem(id);
        this.setState({
            detailProduct:product
        })
    }

    render() {
        return <ProductContext.Provider value={{
            ...this.state,
            handleDetails: this.handleDetails
        }}>
            {this.props.children}
        </ProductContext.Provider>
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};

