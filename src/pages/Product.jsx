import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Figure from 'react-bootstrap/Figure';
import { MDBBtn, MDBCol, MDBContainer, MDBFooter, MDBIcon, MDBInput, MDBRow } from 'mdb-react-ui-kit';
import Context from '../components/Context';
//shift alt f>>>>> arruma a identação
import Card from "../components/Card"

function Product() {

    const [produtos]=useContext(Context);

    

    return (
        <>

            <Container>
                <h1>Produtos</h1>

                <MDBRow>
                    {produtos.filter(produto => produto.id > 2)
                        .map(produto => <Card titulo={produto.title} id={produto.id} image={produto.image} price={produto.price} />)}

                </MDBRow>
            </Container>
        </>
    )
}
export default Product