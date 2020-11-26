import React from "react";
import { ProductConsumer } from "../../contextAPI";
import Product from "../Product";
import InputFilter from "../InputFilter";

function ProductList(props) {
    return (

        <div className="container">
            <div>
                <h1>Encontre o seu produto com a gente</h1>
            </div>
            <InputFilter/>
            <div className="row" >
                <ProductConsumer>
                    {value => {
                        return value.productList.map(product => {
                            return <Product key= {product.id} product={product} />
                        })
                    }}
                </ProductConsumer>
            </div>
        </div>
    )
}

export default ProductList;