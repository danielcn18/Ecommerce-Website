import '../styles/Home.css';
import '../global.css';
import stockimage1 from '../../public/stockimage3.jpg';
import stockimage2 from '../../public/stockimage1.jpg';
import stockimage3 from '../../public/stockimage2.jpg';
import stockimage4 from '../../public/stockimage4.jpg';
import stockimage5 from '../../public/stockimage5.jpg';

export default function Home() {

    return(
        <div className='main-container'>
            <div className='full-length-crop right'>
                <img className='image-crop full' src={stockimage2} alt='photo' />
                <div className='full-length-inner right-child'>
                    <p>Build A Life Long<br />Relationship With A Friend</p>
                    <button>Discover</button>
                </div>
            </div>
            <div className='half-length-crop'>
                <img className='image-crop half' src={stockimage4} alt='photo' />
                <div className='half-length-inner'>
                    <p>More Outfits,<br />More Fun</p>
                    <button>Shop Pet Clothes</button>
                </div>
            </div>
            <div className='half-length-crop'>
                <img className='image-crop half' src={stockimage5} alt='photo' />
                <div className='half-length-inner'>
                    <p>Lorem ipsum dolor<br />sit amet</p>
                    <button>Shop Lorem</button>
                </div>
            </div>
            <a href='https://blog.hubspot.com/website/center-div-css' className='quarter-length-crop'>
                <div className='quarter-length-inner'>
                    <p>Lorem ipsum dolor<br />sit amet</p>
                </div>
            </a>
            <a href='https://blog.hubspot.com/website/center-div-css' className='quarter-length-crop'>
                <div className='quarter-length-inner'>
                    <p>Lorem ipsum dolor<br />sit amet</p>
                </div>
            </a>
            <a href='https://blog.hubspot.com/website/center-div-css' className='quarter-length-crop'>
                <div className='quarter-length-inner'>
                    <p>Lorem ipsum dolor<br />sit amet</p>
                </div>
            </a>
            <a href='https://blog.hubspot.com/website/center-div-css' className='quarter-length-crop'>
                <div className='quarter-length-inner'>
                    <p>Lorem ipsum dolor<br />sit amet</p>
                </div>
            </a>   
            {/* { isLogin ? */}
                <div className='loginSuggestion'>
                    <p>Log In For Recommendations</p>
                    <a href='https://blog.hubspot.com/website/center-div-css'><button>Log In</button></a>
                    <p>New Customer? <a href='https://blog.hubspot.com/website/center-div-css'><span>Create Account</span></a></p>
                </div>
                {/* :
                <></>
            } */}
        </div>
    )
}   