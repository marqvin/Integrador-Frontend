import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import Figure from 'react-bootstrap/Figure';

export default function Card({title,id,image,description,price}){
    
    return(
        <>
        
        <Col>

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
                                    <h5>{title}</h5>
                                </Col>
                                <Col>
                                    ⭐⭐⭐⭐⭐
                                </Col>
                                </Row>
                                <p>R$ {price} Bilhões</p>
                                

                                {description}
                            </Figure.Caption>
                        </Figure>
        </Link>

        </Col>
        </>
    );
}