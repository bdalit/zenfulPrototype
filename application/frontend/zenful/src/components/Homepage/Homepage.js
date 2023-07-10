import './Homepage.css';
import Navbar from '../Navbar/Navbar'
import Background from './Home.png'
import {Link} from 'react-router-dom';

const Homepage = () => {
    return (
        <div className="homepage-bg" style={{backgroundImage: `url(${Background})`}}>
            <Navbar />
            <button className="homepage-button"><Link to="/signup">ENTER YOUR PEACE</Link></button>
        </div>
    )
}

export default Homepage;