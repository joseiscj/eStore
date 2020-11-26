import React from "react";
import { ProductConsumer } from "../../contextAPI";
import FilterProduct from "../FilterProduct";

function InputFilter() {
    const categories = ["TODOS OS PRODUTOS", "LIVRO", "ELETRÔNICO", "INFORMÁTICA", "BRINQUEDOS E JOGOS", "MÓVEIS E DECORAÇÃO"]
    return (
        <ProductConsumer>
            {value => 
                <FilterProduct plural_name="Categorias"
                singular_name = "categoria"
                categories={categories}
                functionFilter={value.filter} />
            }
        </ProductConsumer>
    ) 
}

export default InputFilter;

