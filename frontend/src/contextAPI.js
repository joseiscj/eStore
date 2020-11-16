import React, { Component } from "react"
const ProductContext = React.createContext();

class ProductProvider extends Component {
    state = {
        products: [{id: 1, nome: "Carregador de celular", descricao: "Ótimo carregador de celular. Preço camarada.", img: "img/playstation5.jpg", preco: 50, inCart: false, count: 1, total: 50},
        {id: 2, nome: "Aspirador de pó", descricao: "A forma mais eficiente de sumir com a poeira.", img: "img/playstation5.jpg", preco: 150, inCart: false, count: 1, total: 150},
        {id: 3, nome: "Playstation 5", descricao: "A qualidade da Sony nesse console de última geração.", img: "img/playstation5.jpg", preco:4000, inCart: false, count: 1, total: 4000}],

        detailProduct : [{id: 1, nome: "Carregador de celular", descricao: "Ótimo carregador de celular. Preço camarada.", img: "img/playstation5.jpg", preco: 50, inCart: false, count: 1}],

        cart: []
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

    addToCart = (id) => {
        let tempProduct = [...this.state.products];
        const index = tempProduct.indexOf(this.getItem(id));
        const product = tempProduct[index];
        product.inCart = true;
        product.count = 1;
        const price = product.price;
        product.total = price;
        this.setState(()=> {
            return { products : tempProduct, cart: [...this.state.cart, product]}
        })
    }

    render() {
        return <ProductContext.Provider value={{
            ...this.state,
            handleDetails: this.handleDetails,
            addToCart: this.addToCart
        }}>
            {this.props.children}
        </ProductContext.Provider>
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};

