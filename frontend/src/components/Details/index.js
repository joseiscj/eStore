import React from "react";
import { ProductConsumer } from "../../contextAPI";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./styles.css";

function Details(props) {
    return (
        <ProductConsumer>
            {(value) => {
                const { _id, nome, descricao, img, preco, inCart } = value.detailProduct;

                const id = _id;
                return (
                    <div className="container">
                        <div className="col-10 mx-auto text-center">
                            <h1>Detalhes do {nome}</h1>
                        </div>

                    <div className="row">
                        <div className="col-4 mx-auto col-md-4">
                            <img src={img} className="img-fluid"/>
                        </div>
                    </div>

                    
                    <div className="row">
                        <div className="col-10 mx-auto text-center">
                            <h3>
                                {nome}
                            </h3>
                            <h5>
                                <strong>Preço: <span>R$ </span>{preco}</strong>
                            </h5>
                            <h6>Descrição do produto:</h6>
                            <div id="dsc">{descricao}</div>
                            <div>
                                <Link id="lk" to="/">Voltar à página de produtos</Link>

                                <Button size="sm" disabled={inCart} onClick={()=>{value.addToCart(id)}} variant="secondary">
                                    {inCart === true ? (<span> No carrinho </span>) : (<span>Adicionar ao carrinho</span>)}
                                </Button>
                            </div>
                        </div>
                    </div>
                    </div>
                )
            }}
        </ProductConsumer>
    )
}

export default Details;