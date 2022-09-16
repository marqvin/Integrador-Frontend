import {Link} from 'react-router-dom'

function Nav(){
    return(
        
        <nav class="navbar navbar-expand-lg bg-light">
            <div class="container-fluid">
                <Link to='/' >Home  </Link>
                <Link to='/product' >Produtos  </Link>
                <Link to='/shoppingcart' >Carrinho  </Link>
                <Link to='/management' >Administração  </Link>
                <Link to='/aboutus' >Sobre Nós  </Link>
            </div>
        </nav>
    )
}
export default Nav