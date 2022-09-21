import {Link} from 'react-router-dom'
import 'react-bootstrap/Badge';
function Nav(){
    return(
        
        <nav class="navbar navbar-expand-lg bg-light">
            <div class="container-fluid">
                <Link to='/' class="text-decoration-none">Home  </Link>
                <Link to='/product' class="text-decoration-none">Produtos  </Link>
                <Link to='/shoppingcart' class="text-decoration-none">Carrinho  </Link>
                <Link to='/management' class="text-decoration-none">Administração  </Link>
                <Link to='/aboutus' class="text-decoration-none">Sobre Nós  </Link>
            </div>
        </nav>
    )
}
export default Nav