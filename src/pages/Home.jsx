import '../styles/Home.css';
import '../global.css';
import stockimage1 from '../../public/stockimage1.jpg'

export default function Home() {

    return(
        <div className='main-container'>
            <div className='full-length-crop right'>
                <img className='image-crop full' /* src={stockimage1} */ alt='photo' />
                <div className='full-length-inner right-child'>
                    <p>Build A Life Long<br />Relationship With A Friend</p>
                    <button>Discover</button>
                </div>
            </div>
            <div className='half-length-crop'>
                <img className='image-crop half' /* src={stockimage1} */ alt='photo' />
                <div className='half-length-inner'>
                    <p>Build A Life Long<br />Relationship With A Friend</p>
                    <button>Discover</button>
                </div>
            </div>
            <div className='half-length-crop'>
                <img className='image-crop half' /* src={stockimage1} */ alt='photo' />
                <div className='half-length-inner'>
                    <p>Build A Life Long<br />Relationship With A Friend</p>
                    <button>Discover</button>
                </div>
            </div>
            
        </div>
    )
}