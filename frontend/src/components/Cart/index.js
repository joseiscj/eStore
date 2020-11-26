import React from "react";
import { ProductConsumer } from "../../contextAPI";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./styles.css";

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
                                        <div className="col-10 max-auto col-lg-2">
                                            <strong>Produto</strong>
                                        </div>
                                        <div className="col-10 max-auto col-lg-2">
                                            <strong>Nome do produto</strong>
                                        </div>
                                        <div className="col-10 max-auto col-lg-2">
                                            <strong>Preço</strong>
                                        </div>
                                        <div className="col-10 max-auto col-lg-2"> 
                                            <strong>Quantidade</strong>
                                        </div>
                                        <div className="col-10 max-auto col-lg-2">
                                            <strong>Remover</strong>
                                        </div>
                                        <div className="col-10 max-auto col-lg-2">
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
                                                    R$ {cartData.preco}
                                                </div>
                                                <div className="col-10 max-auto col-lg-2">
                                                    <input input type="button" id="btn_menos" name="btn_menos"  value="-" onClick={() => value.decrement(cartData._id)} />
                                                    {cartData.count}
                                                    <input type="button" id="btn_mais" name="btn_mais"  value="+" onClick={() => value.increment(cartData._id)}/>
                                                </div>
                                                <div className="col-10 max-auto col-lg-2">
                                                    <Button variant="secondary" onClick={()=> {value.removeItem(cartData._id)}} size="sm">Remover</Button>
                                                </div>
                                                <div className="col-10 max-auto col-lg-2">
                                                R$ {parseFloat(cartData.total.toFixed(2))}
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                                <hr></hr>
                                <Container>
                                    <Row>
                                        <Col id="total">
                                            <strong >Total  </strong>R$ {parseFloat(value.cartSubTotal.toFixed(2))}
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                        )
                    } else {
                        return (
                            <div id="vazio">
                                <h3> Atualmente o seu carrinho de compras está <span style={{color:"red"}}>Vazio</span></h3>
                            </div>
                        )
                    }
                }}
            </ProductConsumer>
        </section>
    )
}

export default Cart;