import {Link} from 'react-router-dom'

function Nav(){
    return(
        
        <nav>
            <Link to='/'>Home  </Link>
            <Link to='/product'>Produtos  </Link>
            <Link to='/shoppingcart'>Carrinho  </Link>
            <Link to='/management'>Administração  </Link>
            <Link to='/aboutus'>Sobre Nós  </Link>
        </nav>
    )
}
export default Nav