import Logo from './Logo'
import CartWidGet from './CartWidGet' 

const Navbar = () => {

    return (
        <header className="Navbar">
            <Logo/>
            <ul className='navbar-nav'>
                <li className='nav-item'>
                    <a className='nav-link' href="#">Productos</a>
                </li>
                <li className='nav-item'>
                    <a className='nav-link' href="#">Guía de talles</a>
                </li>
                <li className='nav-item'>
                    <a className='nav-link' href="#">Nosotros</a>
                </li>
                <li className='nav-item'>
                    <a className='nav-link' href="#">Contacto</a>
                </li>
            <CartWidGet/>
            </ul>
        </header>
    )
}

export default Navbar