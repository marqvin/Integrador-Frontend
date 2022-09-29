
import { MDBBtn, MDBCol, MDBContainer, MDBFooter, MDBIcon, MDBInput, MDBRow } from 'mdb-react-ui-kit';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react';
import { Link,useParams } from 'react-router-dom';
import Figure from 'react-bootstrap/Figure';


function ProductDetails(){

  const { id } = useParams();
  const [produto,setProduto]=useState([]);

  useEffect(()=>{
    fetch(`http://13.57.17.108:8081/produtos/${id}`)
      .then((response)=>{
          response.json().then((date)=>{
          setProduto(date)
        })
      })
    })

  return(
    <>     
      
      <Container>

        {/**titulo do produto */}
       
        <Col className="d-flex justify-content-evenly pt-3">
          <h1>
         {produto.title}
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
              src={produto.image}
              alt="imagem produto"
              height={250}
              width={500}>

              </Figure.Image>
            </Figure>
            
            
            </Col>

            {/*texto*/}
            <Col className="pt-2">
            
             <p>{produto.description}</p>
              {
                //preço com a letra azul
              }
              <Col className="d-flex justify-content-evenly pt-4 ">
                <h3 className="text-primary">R${produto.price} bilhões</h3>
              </Col>
              <Row>
                <Button>
                    Add ao Carrinho
                </Button>
              </Row>
              <br/>
              <Row>
                <Button>
                    Comprar
                </Button>
                
              </Row>
              <br/> <br/>
            </Col>
          </MDBRow>       
        </Col>
      </Container>

    </>
  )
}
export default ProductDetails