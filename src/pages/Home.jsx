import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import AmazonImage from '../images/amazon.png';
import CasasBahiaImage from '../images/casasbahia.png';
import MercadoLivreImage from '../images/mercadoLivre.png';
import KabumImage from '../images/kabum.png';
import { Link } from 'react-router-dom';
function Home() {
    return (
        <>
           <div className='p-5  d-flex row justify-content-center'>
             <h1 className='text-center text-primary'>Os melhores ecommerces <p>estão aqui.</p></h1>
             <h4 className='text-center text-muted'>Temos diversos seguimentos de negócio para você <p>desde varejo até drop shipping.</p></h4>
             <Button variant="warning text-light col-2"><Link to={"/product"} className='text-decoration-none text-white'>ver mais</Link></Button>{/*esse botão levará para todos produtos*/}
            </div>
            
            <div className="container  p-3">
                <div className="col-xs-3">
                    <Carousel>

                        <Carousel.Item>
                            <img
                                className="d-block w-100 h-50"
                                src={CasasBahiaImage}
                                alt="Casas Bahia"
                            />
                            
                        </Carousel.Item>

                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={AmazonImage}
                                alt="Amazon"
                            />
                        </Carousel.Item>

                        <Carousel.Item>
                            <img
                                className=" d-block w-100"
                                src={MercadoLivreImage}
                                alt="Mercado livre"
                            />
                        </Carousel.Item>

                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={KabumImage}
                                alt="Kabum"
                            />
                        </Carousel.Item>

                    </Carousel>
                </div>
            </div>

        </>
    )
}
export default Home