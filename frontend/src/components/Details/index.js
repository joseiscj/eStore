import React from "react";
import { ProductConsumer } from "../../contextAPI";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./styles.css";

function Details(props) {
    return (
        <ProductConsumer>
            {(value) => {
                const { id, nome, descricao, img, preco, inCart } = value.detailProduct;
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
                        <div className="col-4 mx-auto col-md-4">
                            <h3>
                                {nome}
                            </h3>
                            <h4>
                                <strong>Preço: <span>R$ </span>{preco}</strong>
                            </h4>
                            <h5>Descrição do produto:</h5>
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