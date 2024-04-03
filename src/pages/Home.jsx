import '../styles/Home.css';
import backgroundImage1 from '../../public/backgroundImage1.jpg';
import Header from '../components/Header.jsx';

export default function Home() {

    return (
        <>
            <article className="full-view">
                <img src={backgroundImage1} />
                <p>Build A Life Long Relationship With A Friend</p>
            </article>
            
            <article className="views-container">
                <div className="half-view">
                    fdf
                </div>
                <div className="half-view">

                </div>
                <div className="half-view">

                </div>
                
            </article>
        </>
    );
}