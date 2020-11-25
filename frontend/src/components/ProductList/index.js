import React, { useState } from "react";
import { ProductConsumer } from "../../contextAPI";
import Product from "../Product";
import { lower } from '../Utils';
import Highlight from '../Highlight';


const ProductList = (props) => {
    const [productName, setProductName] = useState(' ');

    function handleChange (func) {
        return (e) => {
          func(e.target.value)
        }
      }

    function lower(string) {
        string.toLowerCase();
    }
      
    return (
        <div className="container">
            <div>
                <h1>Encontre o seu produto com a gente</h1>
            </div>
            <input
                type='text'
                value={productName}
                onChange={handleChange(setProductName)}
              />
            <div className="row" >
                <ProductConsumer>
                    {(value)=> {
                       return value.products
                       .filter((product) => (
                         lower(product.name).includes(lower(productName))
                         
                       )).map((product) => {
                        
                        return <Product key= {product.id} product={product} />
                        
                    })
                    
                    }}
                </ProductConsumer>
            </div>
        </div>
    )
}

export default ProductList;