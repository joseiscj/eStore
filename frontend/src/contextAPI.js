import React, { Component } from "react"
const ProductContext = React.createContext();

class ProductProvider extends Component {
    state = {
        products: [{id: 1, nome: "Carregador de celular", descricao: "Ótimo carregador de celular. Preço camarada.", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5-qbM2gGKnzROqtCASHRwZ19B8FdnK6jDVFWDjXPQxGy7A6IjKh_WPIHFqOs&usqp=CAc", preco: 50, inCart: false, count: 1, total: 50},
        {id: 2, nome: "Aspirador de pó", descricao: "A forma mais eficiente de sumir com a poeira.", img: "img/playstation5.jpg", preco: 150, inCart: false, count: 1, total: 150},
        {id: 3, nome: "Playstation 5", descricao: "A qualidade da Sony nesse console de última geração.", img: "img/playstation5.jpg", preco:4000, inCart: false, count: 1, total: 4000},
        {id: 4, nome: "Playstation 5", descricao: "A qualidade da Sony nesse console de última geração.", img: "img/playstation5.jpg", preco:4000, inCart: false, count: 1, total: 3000}],

        detailProduct : [],

        cart: [],
        cartSubTotal: 0
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
        const preco = product.preco;
        product.total = preco;
        this.setState(()=> {
            return { products : tempProduct, cart: [...this.state.cart, product]}
        }, ()=> { this.makeTotal() }
        )
    }

    increment = (id) => {
        let tempCart = [...this.state.cart];
        const selectedProduct = tempCart.find(item => item.id === id);
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];

        product.count = product.count + 1;
        product.total = product.count * product.preco;

        this.setState(()=> {
            return { cart : [...tempCart] }
        },()=> {
            this.makeTotal();
        })
    }

    decrement = (id) => {
        let tempCart = [...this.state.cart];
        const selectedProduct = tempCart.find(item => item.id === id);
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];
        if (product.count >= 2) {

            product.count = product.count - 1;
            product.total = product.count * product.preco;

            this.setState(()=> {
                return { cart : [...tempCart] }
            },()=> {
                this.makeTotal();
            })
            }
    }

    removeItem = (id) => {
        let tempProduct = [...this.state.products];
        let tempCart = [...this.state.cart];
        tempCart = tempCart.filter(item => item.id !== id);
        const index = tempProduct.indexOf(this.getItem(id));

        let removedProd = tempProduct[index];

        removedProd.inCart = false;
        removedProd.total = 0;
        removedProd.count = 0;

        this.setState(()=> {
            return {
                cart: [...tempCart],
                product: [...tempProduct]
            }
        }, ()=> {
            return this.makeTotal();
        }
        )
    }

    makeTotal = () => {
        let subTotal = 0;
        this.state.cart.map(item => (subTotal += item.total));
        const total = subTotal;
        this.setState(()=> {
            return {
                cartSubTotal : subTotal
            }
        })
    }

    render() {
        return <ProductContext.Provider value={{
            ...this.state,
            handleDetails: this.handleDetails,
            addToCart: this.addToCart,
            increment: this.increment,
            decrement: this.decrement,
            makeTotal: this.makeTotal,
            removeItem: this.removeItem
        }}>
            {this.props.children}
        </ProductContext.Provider>
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};

