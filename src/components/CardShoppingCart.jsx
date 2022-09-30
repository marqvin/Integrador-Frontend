import { Col, Row } from "react-bootstrap"


function CardShoppingCart() {
    return (
        <>
            <Row>
                <Col>
                    <Figure>
                        <Figure.Image
                            src={produto.image}
                            alt="imagem produto"
                            height={150}
                            width={150}>

                        </Figure.Image>
                    </Figure>

                </Col>

            </Row>


        </>
    )
}

export default CardShoppingCart