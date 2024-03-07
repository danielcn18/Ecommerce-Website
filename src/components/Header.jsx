import '../styles/Header.css'; // Error here with path
import logo from '../../public/logo_example.png'
// import '../global';

export default function Header() {
    
    return (
        <ul className='header'>
            <li>
                <img src={logo} />
            </li>
            <li>
                <p>Heading</p>
            </li>
            <li>
                <p>Shop</p>
            </li>
            <li>
                <p>Calculate Costs</p>
            </li>
            <li>
                <p>Contact Us</p>
            </li>
            <li>
                <p>Log In</p> {/* Log In / Username */}
                <img alt='login_icon' />
            </li>
            <li>
                <img alt='search_icon' /> {/* search bar */}
            </li>
            <li>
                <img alt='shop_icon' /> {/* shopping cart */}
            </li>
        </ul>
    )    
}   