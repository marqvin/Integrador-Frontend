import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import { useState, useEffect } from 'react';

import Card from "../components/Card"
import CardShoppingCart from "../components/CardShoppingCart"

// useEffect(() => {
//     if(anime){
//         setGeneros(anime.genero.split(","));
//         if (generos.length > 3) {
//             while (generos.length > 3) {
//               generos.pop();
//             }
//           }
//     }
//     }, [anime])

function ShoppingCart() {
    const [carrinho, setCarrinho] = useState([]);

    function removeTudoNoLocal(){
        localStorage.clear()
        window.location.reload();
    }

    useEffect(() => {
        if(localStorage.getItem("carrinho") != null){
            setCarrinho(JSON.parse(localStorage.getItem("carrinho")))
        }
    },
    [

    ]
    )
    return (
        <>
            <Container>
                <h1>Carrinho</h1>

                <Row>
                    {/** Produtos add carrinho */}
                    <Col>
                        {carrinho.map(produto => <CardShoppingCart key={produto.id} titulo={produto.title} id={produto.id} image={produto.image} price={produto.price} />)}
                        <Button onClick={()=>
                            removeTudoNoLocal()
                        }>
                            Remover Tudo
                        </Button>
                    </Col>


                    {/** Order Summary */}
                    <Col>
                        <h3>Order Summary</h3>
                        <Form.Control type="text" placeholder="Digite seu cupom de desconto aqui" /><br />
                        <Row>

                            <Col>
                                Subtotal
                            </Col>
                            <Col>
                                $12,6  Bilh??es
                            </Col>
                            <Button variant="primary" type="submit">
                                Finalizar Compra
                            </Button>
                        </Row>

                    </Col>

                </Row>

                {/** Informa????es do pedido */}
                <Row>
                    <Col>
                        <h3>Informa????es do pedido </h3><br />
                        <Accordion defaultActiveKey={['0']} alwaysOpen>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Politica de devolu????o</Accordion.Header>
                                <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <Accordion defaultActiveKey={['0']} alwaysOpen>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Op????es de compra</Accordion.Header>
                                <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <Accordion defaultActiveKey={['0']} alwaysOpen>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Entenda nossas taxas</Accordion.Header>
                                <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                    <Col>

                    </Col>
                </Row>
            </Container>
            <br/>

        </>
    )
}
export default ShoppingCart