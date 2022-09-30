import { Col, Row } from "react-bootstrap"
import Figure from 'react-bootstrap/Figure'
import Button from "react-bootstrap/Button"


function CardShoppingCart({titulo,id,image,price}) {

    function removeNoLocal(id){

        const carrinho = JSON.parse(localStorage.getItem('carrinho'))
        const listaAtualizada = carrinho.filter((produto) => produto.id != id)
        console.log(listaAtualizada, id)

        localStorage.setItem("carrinho", JSON.stringify(listaAtualizada))
        
    }
    return (
        <>
            <Row>
                <Col>
                    <Figure>
                        <Figure.Image
                            src={image}
                            alt="imagem produto"
                            height={150}
                            width={150}>

                        </Figure.Image>
                    </Figure>
                </Col>
                <Col>
                    <Row>
                        <h4>
                            {titulo}
                        </h4>
                    </Row>
                    <Row>
                        <h4 className="text-primary">R${price} bilhões</h4>
                    </Row>
                </Col>
                <Col>  
                    <Button onClick={ ()=>{
                  removeNoLocal(id)
                }}>
                        Remover
                    </Button>
                </Col>
            </Row>
        </>
    )
}

export default CardShoppingCart