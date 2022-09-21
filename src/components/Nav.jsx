import {Link} from 'react-router-dom';
import 'react-bootstrap/Badge';
import cartImage from '../images/cart.png';

function Nav(){
    return(
        
        <nav className="navbar navbar-expand-lg bg-primary" >
          
            <div className="container-fluid">
                <Link to='/' className="text-decoration-none text-warning display-5">Ecommerce</Link>
                <Link to='/product' className="text-decoration-none text-light">Produtos</Link>
                <Link to='/management' className="text-decoration-none text-light">Administração</Link>
                <Link to='/aboutus' className="text-decoration-none text-light">Sobre Nós </Link>
                <Link to='/shoppingcart' className="text-decoration-none text-light"> <img src={cartImage} width="45" alt="cart" /></Link>
            </div>
        </nav>
    )
}
export default Nav