import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import Figure from 'react-bootstrap/Figure';

export default function Card({titulo,id,image,price}){
    
    return(
        <>
        

        <Col className="col-3">

        <Link
        to={`/ProductDetails/${id}`}
        >
        <Figure>
                            <Figure.Image
                                width={264.03}
                                height={264.6}
                                alt="171x180"
                                src={image}
                                
                                
                            />
                            <Figure.Caption>
                                <Row>
                                <Col>
                                    <h5>{titulo}</h5>
                                </Col>
                                <Col>
                                    ⭐⭐⭐⭐⭐
                                </Col>
                                </Row>
                                <p>R$ <strong>{price}</strong> Bilhões</p>
                                

                                
                            </Figure.Caption>
                        </Figure>
        </Link>

        </Col>
        
        </>
    );
}