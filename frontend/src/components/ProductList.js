import React from "react";
import { ProductConsumer } from "../contextAPI";
import Product from "./Product";
import 'bootstrap/dist/css/bootstrap.min.css';


function ProductList(props) {
    return (
        <div className="container">
            <div>
                <h1>Encontre o seu produto com a gente</h1>
            </div>
            <div className="row">
                <ProductConsumer>
                    {(value)=> {
                        return value.products.map(product => {
                            return <Product key= {product.id} product={product} />
                        })
                    }}
                </ProductConsumer>
            </div>
        </div>
    )
}

export default ProductList;