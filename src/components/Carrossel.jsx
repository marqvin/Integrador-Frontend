import Carousel from 'react-bootstrap/Carousel';


function Carrossel() {
    return (

        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    height="500px"
                    src="https://avatars.githubusercontent.com/u/58312849?v=4"
                    alt="Vinícius Marques"
                />
                <Carousel.Caption>
                    <h3>Vinícius Marques</h3>
                    <p>Developer FullStack</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    height="500px"
                    className="d-block w-100 "
                    src="https://avatars.githubusercontent.com/u/26532182?v=4"
                    alt="Renan Augusto" 
                />

                <Carousel.Caption>
                    <h3>Renan Augusto</h3>
                    <p>Developer FullStack</p>
                </Carousel.Caption>
            </Carousel.Item >
            <Carousel.Item>
                <img
                    height="500px"
                    className="d-block w-100 "
                    src="https://avatars.githubusercontent.com/u/99609730?v=4"
                    alt="Jhonathan Souza"  
                />

                <Carousel.Caption>
                    <h3>Jhonathan Souza</h3>
                    <p>Developer FullStack</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item >
                <img
                    className="d-block w-100 "
                    height="500px"
                    src="https://avatars.githubusercontent.com/u/92954038?v=4"
                    alt="Abraão da Silva" 
                    
                />
                <Carousel.Caption>
                    <h3>Abraão da Silva</h3>
                    <p>Developer BackEnd</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 "
                    height="500px"
                    src="https://avatars.githubusercontent.com/u/99696674?v=4"
                    alt="Jefferson Mendes"    
                />
                <Carousel.Caption>
                    <h3>Jefferson Mendes</h3>
                    <p>QA</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 "
                    height="500px"
                    src="https://avatars.githubusercontent.com/u/99191311?v=4"
                    alt="João Victor"
                />
                <Carousel.Caption>
                    <h3>João Victor</h3>
                    <p>Developer FrontEnd</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 "
                    height="500px"
                    src="https://avatars.githubusercontent.com/u/44385434?v=4"
                    alt="Jade"
                />
                <Carousel.Caption>
                    <h3>Jade</h3>
                    <p>Developer FrontEnd</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}
export default Carrossel