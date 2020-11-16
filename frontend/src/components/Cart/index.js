import React from "react";
import { ProductConsumer } from "../../contextAPI";
import { Button, Col, Container, Row } from "react-bootstrap";

function Cart() {
    return (
        <section>
            <ProductConsumer>
                {value => {
                    if (value.cart.length > 0) {
                        return (
                            <div>
                                <div><h1>Seu Carrinho</h1></div>
                                <div className="container-fluid text-center">
                                    <div className="row">
                                        <div className="col-10 col-lg2">
                                            <strong>Produto</strong>
                                        </div>
                                        <div className="col-10 col-lg2">
                                            <strong>Nome do produto</strong>
                                        </div>
                                        <div className="col-10 col-lg2">
                                            <strong>Preço</strong>
                                        </div>
                                        <div className="col-10 col-lg2"> 
                                            <strong>Quantidade</strong>
                                        </div>
                                        <div className="col-10 col-lg2">
                                            <strong>Remover</strong>
                                        </div>
                                        <div className="col-10 col-lg2">
                                            <strong>Total</strong>
                                        </div>
                                    </div>
                                </div>
                                {value.cart.map(cartData => {
                                    return (
                                        <div className="container-fluid text-center">
                                            <div className="row">
                                                <div className="col-10 max-auto col-lg-2">
                                    <img style={{ width:"6rem", height:"4rem"}} src={cartData.img} className="img-fluid"></img>
                                                </div>
                                                <div className="col-10 max-auto col-lg-2">
                                                    {cartData.nome}
                                                </div>
                                                <div className="col-10 max-auto col-lg-2">
                                                    {cartData.preco}
                                                </div>
                                                <div className="col-10 max-auto col-lg-2">
                                                    <input size="sm" className="qtyminus" value="-" onClick={() => value.decrement(cartData.id)} />
                                                    {cartData.count}
                                                    <input size="sm" className="qtyplus" value="+" onClick={() => value.increment(cartData.id)} />
                                                </div>
                                                <div className="col-10 max-auto col-lg-2">
                                                    <Button variant="secondary" onClick={()=> {value.removeItem(cartData.id)}} size="sm">Remover</Button>
                                                </div>
                                                <div className="col-10 max-auto col-lg-2">
                                                    {cartData.total}
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        )
                    } else {
                        return (
                            <div>
                                <h3> Atualmente o seu carrinho de compras está <span style={{color:"red"}}>Empty</span></h3>
                            </div>
                        )
                    }
                }}
            </ProductConsumer>
        </section>
    )
}

export default Cart;