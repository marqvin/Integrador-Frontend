import Carousel from "../components/Carrossel"

function AboutUs() {
    return (
        <>
            <h1>Sobre Nós</h1>
            <div className="container w-50 p-6">
                <div className="col-xs-3">
                    <Carousel />
                </div>
            </div>
        </>
    )
}
export default AboutUs