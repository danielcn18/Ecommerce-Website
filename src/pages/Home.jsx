import '../styles/Home.css';
import '../global.css';
import stockimage1 from '../../public/stockimage1.jpg'

export default function Home() {

    return(
        <div className='main-container'>
            <div className='full-length-crop right'>
                <img className='image-crop' /* src={stockimage1} */ alt='photo' />
                <div className='right-child'>
                    <p>Build A Life Long<br />Relationship With A Friend</p>
                    <button>Discover</button>
                </div>
            </div>
        </div>
    )
}