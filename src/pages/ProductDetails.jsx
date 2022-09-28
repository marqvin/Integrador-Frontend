import { useParams } from "react-router-dom"
import { MDBBtn, MDBCol, MDBContainer, MDBFooter, MDBIcon, MDBInput, MDBRow } from 'mdb-react-ui-kit';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Figure from 'react-bootstrap/Figure';


function ProductDetails(){

    const { ID } = useParams();

    const [produtos,setProdutos]=useState([]);

    useEffect(()=>{
        fetch(`http://13.57.17.108:8081/produtos${ID}`)
        .then((response)=>{
            response.json().then((date)=>{
                setProdutos(date)
            })
        })
    })

    return(
        <>
            {/* * json place holder

            <p>Detalhes da publicação ded id: 
                <strong>id:{produtos.id}</strong>
            </p> */}

            
                
{/* <div class="col-md-8">
      <div class="card-body">
        
        <h1>teste</h1>
        
      </div>
</div>
<div class=" mb-3" >
  <div class="row g-0">
    <div class="col-md-4">
      <img
        src="https://st.depositphotos.com/2935381/4189/i/450/depositphotos_41897159-stock-photo-example-concept.jpg"
        alt="Trendy Pants and Shoes"
        class="img-fluid rounded-start"
      />
    </div>
    <div class="col-md-8">
      <div class="card-body">
        
        <p class="card-text">
          This is a wider card with supporting text below as a natural lead-in to
          additional content. This content is a little bit longer.
        </p>
        
      </div>
    </div>
  </div>
</div> */}

      <Container>

        {/**titulo do produto */}
        <Col className="d-flex justify-content-evenly pt-3">
          <h1>
            test
          </h1>
        </Col>
        {/**caixa com imagem e texto */}
        <Col>
          <MDBRow>
            <Col>
            {
              //imagem
            }
            <Figure>
              <Figure.Image 
              src="https://st.depositphotos.com/2935381/4189/i/450/depositphotos_41897159-stock-photo-example-concept.jpg"
              alt="Trendy Pants and Shoes"
              height={250}>

              </Figure.Image>
            </Figure>
            
            
            </Col>

            {
              //texto
            }
            <Col className="pt-2">
            
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab magnam, sequi provident voluptatibus molestias, quam aspernatur rerum, sint explicabo dolor odio! Velit placeat vitae odio dolor beatae quo temporibus delectus.
             
            </p>
              {
                //preço com a letra azul
              }
              <Col className="d-flex justify-content-evenly pt-4 ">
                <h3 className="text-primary">preço</h3>
              </Col>
            </Col>
          </MDBRow>
          
        </Col>
        <Col className="d-flex justify-content-center">
            <Row>
              <Col>
                <Button>
                    botão azul
                </Button>
              </Col>
              <Col>
              <Button>
                    botão azul
              </Button>
              </Col>
            </Row>
        </Col>

      </Container>
                
                            
                
            
        </>
    )
}
export default ProductDetails