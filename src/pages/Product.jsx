import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Figure from 'react-bootstrap/Figure';


import Card from "../components/Card"

function Product() {

    const [produtos,setProdutos]=useState([]);

    useEffect(()=>{
        fetch("http://13.57.17.108:8081/produtos")
        .then((response)=>{
            response.json().then((date)=>{
                setProdutos(date)
            })
        })
    })


    return (
        <>

            <Container fluid>
                <h1>Produtos</h1>
                <Row className="justify-content-md-center">
                    
                    
                    {produtos.map(produtos => <Card titulo={produtos.title} id={produtos.id} image={produtos.image} description={produtos.description} price={produtos.price} />)}

                </Row>
                
            </Container>
        </>
    )
}
export default Product