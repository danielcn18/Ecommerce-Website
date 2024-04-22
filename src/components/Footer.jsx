import '../styles/Footer.css'; 
import '../global.css';
import { MdFacebook } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import Link from './Link';

export default function Footer() {

    return(  
        <footer>
            <div className='column'>
                <p>Shop By Category</p>
                <p>Clearance</p>
                <p>Lorem</p>
            </div>
            <div className='column'>
                <p>About</p>
                <p>Contact Us</p>
                <p>FAQ</p>
                <p>Privacy Policy</p>
                <p>Terms of Service</p>
            </div>

            {/* <div className='upper-container'>
                <div className='title'>
                    <Link text="Shop By Category" connect="" /> 
                </div>
            </div>
            <div className='lower-container'>
                <p>Company Name</p>
                <a>
                    <MdFacebook />    
                </a>
                <a>
                    <FaInstagram />
                </a>
                <a>
                    <FaYoutube />
                </a>
                <p>Social Media Directory</p>
            </div> */}
        </footer>
    )
} 