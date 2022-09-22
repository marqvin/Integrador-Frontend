import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';

function Home() {
    return (
        <>
           <div className='p-5  d-flex row justify-content-center'>
             <h1 className='text-center text-primary'>Os melhores ecommerces <p>estão aqui.</p></h1>
             <h4 className='text-center text-muted'>Temos diversos seguimentos de negócio para você <p>desde varejo até drop shipping.</p></h4>
             <Button variant="warning text-light col-2">ver mais</Button>{/*esse botão levará para todos produtos*/}
            </div>
            
            <div className="container w-50 p-6">
                <div className="col-xs-3">
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="data:image/jpeg;base64,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"
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="data:image/png;base64,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"
                                alt="Second slide"
                            />

                            <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAAAmCAMAAADJNfTqAAAAclBMVEX////uTS3tOADtPxXuSinwY0v5zMbuRB7tOwvtOgb1oZX3tq3+9fTuSCX97uvtPRHyfWv86OX2rKL3u7PvUjP73Nj3sqn4wLjvWT761M/0mYzxdWH++vn1p53sLwDvVTjzkoTzi3zwaVPvXkTxcFvyg3MkDGU3AAAD2UlEQVRYhcWXi5KbMAxFwQZLJBhDwhsCJIT//8XKBgNJp+22m6SanVk/gGNLV7biODsLT03ax2fnw1agChhDdLOPYnMWxFUbipGzT4Krji0eHjgPP8ct+cE2Gz58DFsxd21HHfvYhmu8bJ07Fp/i+kG1dU5Yv5uXCWOVy89itRqaam4l7+LyxVwX+GrgyrkR3N/FLd3fmYzfxb15v+Ve38W977geMI4IuxHY66sN26UVfj/NYrltLj0mbZhderVx17PEKW6AMNbmCGVd9F3udeVK0lBY6e8WfOWe1vUxVClnyHTEIfg2d7Bcj86ra6ewazKxcY/LY7WSgv4lF7y+hltbLlycA5p988313J5bLFjuKBPjF3APsCH8n7TNxfxUxtL9Sy/gXiyXQlmrZ65auFGn2t1LL+DmluuNWjzykYu2AiiheS33bLkukGKqWPG9swN7PmcByHyFAUbHu+cfbBqfSqXGWYLYtecbh9tapV1SpRp752QxV+lBu27LGRdutLv2XG4jLlvvhWRkitmvgZvqUkwFJgxRj0xKhqNeBkgfA6WCwDeBiVwMPI7dfA6cOuQeU5K+KnYUGfjHUBdam593/hSUwijPM1eOIiLnmEqs537WttnIx3mqF2EoaFA/2asmcdqjYjoxBFP0/aRR6SOXgsxZHOnaw7rg4UBsixsGk9nUaAauvNGXtT9Pl0iLAm9Rfh9Q7xjMssi4p4dwlmmMuZM9a1hSptY26HKvYm2FQjrCYNF5qDDcKgahb0075Qik3h2G85GsKFlFySgL3Tke4O5k+Jw7tJdqHXSe7axXvupZC4B3y1QYAE3Z0ixknHZIDjQGVKwKiq0xBHCS1afSChnXxXj9T9xW4Y6bEld2i1MiXRruuLSKHurDbHVCHvAvSy/XD9s0KmfvUqZakXujxa1xTpA/cRtcVH5Cij3wpVcghXZCe8CbdcHWCdm2tQNTwJkfOrfl+PBultblSyvm0xNXMDDZlvEu07qSZi6UWsJVB/PJUwnz7lK+UFa1NpQw6OnjmZ67WI1LW17RitJTFibFCDqlH7jOFbEWYmCov0B5BHmS5MCNkoeADaIqJsYoGCHw8lhVedpRzbzded5lXne8Snwrr0RPV29HdzBo8QLbc52a5ujPnA0g47k32RUHWkrK+Cvy555Pb+2rGvTK0sVdBbIrr8RwT/smNxry+MIt0Sw1uUzTaR4C1lZX37+u1Xh0uk5DYfVR1dN0MK7vHy4/76FnfP93Bl/9iXN/uoL2xvM/v/+vXNFJ7xcG8q+xX+c6VeP/woZ/KFe/zn2t/S+uxC9xfwDBgzh8WYmd+wAAAABJRU5ErkJggg=="
                                alt="Third slide"
                            />

                            <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>
                                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>

        </>
    )
}
export default Home