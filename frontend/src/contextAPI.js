import React,  { useState, useEffect, useContext }from "react"
import BaseService from '../src/services/api';

const ProductContext = React.createContext();

function ProductProvider(props) {
    const [products, setProducts] = useState([]);
    const [detailProduct, setDetailProduct] = useState([]);
    const [cart, setCart] = useState([]);
    const [cartSubTotal, setCartSubTotal] = useState(0);

    const optionDefault = { text: "Selecione uma categoria", value: 0 };
    const [productList, setProductList] = useState([]);

    const [page, setPage] = useState(1);

    useEffect(() => setProductList(products), [products]);


    var filter = (atribute, value) => {
        
        if (value == optionDefault.value || value == "TODOS OS PRODUTOS") {
            setProductList(products);
        } else {

            let listFilter = [];
            products.filter(prod => prod.tipoDoProduto.toUpperCase() == value).map(productFiltered => (
                listFilter.push(productFiltered)
            ))
            setProductList(listFilter);
        }
    }

    useEffect(() => {
        let path = `/produtos?page=${page}`;
        BaseService.getProducts(path)
          .then(res => setProducts(res.data.docs))
          .catch(error => console.log(error))
      }, [page]);

    function getItem(id) {
        const product = products.find((item) => item._id === id);
        return product;
    }

    function handleDetails(id) {
        const product = getItem(id);
        setDetailProduct(product);
    }

    function addToCart(id) {
        let tempProduct = [...productList];
        const index = tempProduct.indexOf(getItem(id));
        const product = tempProduct[index];
        product.inCart = true;
        product.count = 1;
        const preco = product.preco;
        product.total = preco;
        setProductList(tempProduct);
        setCart([...cart, product]);
    }

    function increment(id) {
        let tempCart = [...cart];
        const selectedProduct = tempCart.find(item => item._id === id);
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];

        product.count = product.count + 1;
        product.total = product.count * product.preco;

        setCart([...tempCart])

        // this.setState(()=> {
        //     return { cart : [...tempCart] }
        // },()=> {
        //     this.makeTotal();
        // })
    }

    function decrement(id) {
        let tempCart = [...cart];
        const selectedProduct = tempCart.find(item => item._id === id);
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];
        if (product.count >= 2) {

            product.count = product.count - 1;
            product.total = product.count * product.preco;

            setCart([...tempCart])

            // this.setState(()=> {
            //     return { cart : [...tempCart] }
            // },()=> {
            //     this.makeTotal();
            // })
            }
    }

    function removeItem(id) {
        let tempProduct = [...products];
        let tempCart = [...cart];
        tempCart = tempCart.filter(item => item._id !== id);
        const index = tempProduct.indexOf(getItem(id));

        let removedProd = tempProduct[index];

        removedProd.inCart = false;
        removedProd.total = 0;
        removedProd.count = 0;

        setCart([...tempCart]);
        setProducts([...tempProduct]);
        // // this.setState(()=> {
        // //     return {
        // //         cart: [...tempCart],
        // //         product: [...tempProduct]
        // //     }
        // // }, ()=> {
        // //     return this.makeTotal();
        // // }
        // )
    }

    useEffect(() => makeTotal(), [cart, products]);

    function makeTotal() {
        let subTotal = 0;
        cart.map(item => (subTotal += item.total));
        const total = subTotal;
        setCartSubTotal(subTotal);
    }

    return(
        <ProductContext.Provider value={{
            productList,
            detailProduct,
            cart,
            cartSubTotal,
            handleDetails: handleDetails,
            addToCart: addToCart,
            increment: increment,
            decrement: decrement,
            makeTotal: makeTotal,
            removeItem: removeItem,
            filter: filter
        }}>
            {props.children}
        </ProductContext.Provider>
    )
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};

