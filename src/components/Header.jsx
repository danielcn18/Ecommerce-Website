import '../styles/Header.css'; 
import '../global.css';
import logo from '../../public/logo_example.png'
import { FaShoppingCart, FaSearch } from "react-icons/fa";
import { TiArrowSortedDown } from "react-icons/ti";    

export default function Header() {
    
    return (
        <>
            <div className="header">

            </div>
        </>
        // <nav className='header'>
        //     <div>
        //         <a href=''>
        //             <img src={logo} alt="logo" />
        //         </a>
        //         <a href=''>
        //             <p>Heading</p>
        //         </a>
        //         <a href=''>
        //             <p>Shop</p>
        //         </a>
        //         <a href=''>
        //             <p>Calculate</p>
        //         </a>
        //         <a href=''>
        //             <p>Contact Us</p>
        //         </a>
        //     </div>
        //     <div>
        //         <a href=''>
        //             <p>Log In</p>
        //             <TiArrowSortedDown />
        //         </a>
        //         <a href=''>
        //             <FaSearch /> 
        //         </a>
        //         <a href=''>
        //             <FaShoppingCart />
        //         </a>
        //     </div>
        // </nav>
    );
}   