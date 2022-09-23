
import flagImage from '../images/flag.png';

function Header(){
    return(
    
            <div className=" bg-dark text-light text-center">
                <img  src={flagImage} alt="Brazil" width={25} /> 
                <span className='offset-1'>Único ecommerce que vende <span className='text-warning'>ecommerces</span> no mundo.</span>  
            </div>
    )
}
export default Header