import { useParams } from "react-router-dom"



function ProductDetails(){

    const parametro = useParams();
    return(
        <>
            {/** json place holder */}
            <p>Detalhes da publicação ded id: 
                <strong>{parametro.idProduct}</strong>
            </p>
        </>
    )
}
export default ProductDetails