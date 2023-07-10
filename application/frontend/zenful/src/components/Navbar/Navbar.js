import './Navbar.css';
import {Link} from 'react-router-dom';
import Zen from './zen.png'

const Navbar = () => {
    return (
        <div className="navbar-header">
            <nav>
                <ul className="navbar-ul">
                    <img className="zen-img" src={Zen} height={25} width={25} />
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/signin">SignIn</Link></li>
                    <li><Link to="/signup">SignUp</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;