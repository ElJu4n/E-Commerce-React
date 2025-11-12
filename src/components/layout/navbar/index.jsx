
import CartWidget from '../../common/CartWidget'
import shopLogo from '../../../assets/shoplogo.png'
import './NavBar.css'

function Navbar() {
    return(
        <nav>
            <ul >
                <li>
                    <a href="#"><img src={shopLogo} alt=""/></a>
                </li>
                <li><a href="#">Zapatos</a></li>
                <li><a href="#">Pantalones</a></li>
                <li><a href="#">Chamarras</a></li>
                <li><a href="#">Joyeria</a></li>
                <li><a href=""><CartWidget/></a></li>
            </ul>
        </nav>

    )
}



export default Navbar