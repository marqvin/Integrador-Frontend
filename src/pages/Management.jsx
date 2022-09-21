import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Management() {
    return (
        <>
            <Container fluid>
                <h1>Administração</h1>
                {/** Classe Produto */}
                <Row>
                    {/* Coluna Criar Produto */}
                    <Col>
                        <h3>Criar Produto</h3>
                        <Form.Control type="text" placeholder="Título" />
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Descrição</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                        <Form.Control type="text" placeholder="Link para imagem" />
                        <br />
                        <Form.Control type="text" placeholder="Preço" />
                        <br />
                        <Button variant="primary" type="submit">
                            Salvar
                        </Button>{' '}
                        <Button variant="primary" type="submit">
                            Apagar
                        </Button>
                    </Col>


                    {/* Coluna Alterar Produto */}
                    <Col>
                        <h3>Alterar Produto</h3>
                        <Form.Control type="text" placeholder="Código do Produto" /><br />
                        <Form.Control type="text" placeholder="Título" />
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Descrição</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                        <Form.Control type="text" placeholder="Link para imagem" />
                        <br />
                        <Form.Control type="text" placeholder="Preço" />
                        <br />
                        <Button variant="primary" type="submit">
                            Salvar
                        </Button>{' '}
                        <Button variant="primary" type="submit">
                            Apagar
                        </Button>
                    </Col>

                    {/* Coluna Deletar Produto */}
                    <Col>
                        <h3>Deletar Produto</h3>
                        <Form.Control type="text" placeholder="Código do Produto" /><br />
                        <Button variant="primary" type="submit">
                            Deletar
                        </Button>
                    </Col>
                </Row>
                <br /><br />

                {/** Classe Produto */}
                <Row>
                    {/** Criar Categoria */}
                    <Col>
                        <h3>Criar Categoria</h3>
                        <Form.Control type="text" placeholder="Nome" /><br />
                        <Form.Control type="text" placeholder="Adicionar código dos produtos" /><br />
                        <Button variant="primary" type="submit">
                            Salvar
                        </Button>{' '}
                        <Button variant="primary" type="submit">
                            Apagar
                        </Button>
                    </Col>
                    <Col>
                        <h3>Alterar categoria / Inserir produto na categoria</h3>
                        <Form.Control type="text" placeholder="Nome" /><br />
                        <Form.Control type="text" placeholder="Adicionar código do produto na categorias" /><br />
                        <Button variant="primary" type="submit">
                            Salvar
                        </Button>{' '}
                        <Button variant="primary" type="submit">
                            Apagar
                        </Button>
                    </Col>
                    <Col>
                        <h3>Deletar  categoria</h3>
                        <Form.Control type="text" placeholder="Código do Produto" /><br />
                        <Button variant="primary" type="submit">
                            Deletar
                        </Button>

                    </Col>
                </Row>
                <br />
            </Container>
        </>
    )
}
export default Management