import '../styles/Home.css';
import { useRef, useEffect, useState } from 'react';
import backgroundImage1 from '../../public/backgroundImage1.jpg';
import Header from '../components/Header.jsx';
import HalfView from '../components/HalfView';

export default function Home() {

    const middleViewRef = useRef(null);
    const shadowRef = useRef(null);
    const freeSpaceRef = useRef(null);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    useEffect(() => {
        if (freeSpaceRef.current && middleViewRef.current && shadowRef.current) {
            const fullviewHeight = freeSpaceRef.current.offsetHeight;
            const middleViewWidth = middleViewRef.current.offsetWidth;
            const middleViewHeight = middleViewRef.current.offsetHeight;
            
            // Set width and height of shadow to match the middleView
            shadowRef.current.style.width = `${middleViewWidth}px`;
            shadowRef.current.style.height = `${middleViewHeight}px`;
            
            // Update margin of freeSpace
            freeSpaceRef.current.style.margin = `0 0 calc(${middleViewHeight}px - 12vh) 0`;

            // Determine top position based on screen width
            let topOffset;
            if (windowWidth <= 780) {
                topOffset = `calc(${fullviewHeight}px - 16vh)`;
            } else {
                topOffset = `calc(${fullviewHeight}px - 25vh)`;
            }
            
            // Apply top offset to middleView and shadow
            middleViewRef.current.style.top = topOffset;
            shadowRef.current.style.top = topOffset;
        }
    }, [windowWidth]);

    return (
        <>
            <article className="full-view" ref={freeSpaceRef}>
                <img src={backgroundImage1} />
                <p>Build A Life Long Relationship With A Friend</p>
                <div className="slider">
                    <button name='' />
                    <button name='' />
                    <button name='' />
                    <button name='' />
                </div>
                <div className="middle-view" ref={middleViewRef}>
                    <p>Welcome to Mugs Co. – your premier destination for all things pet-related! At Mugs Co., we understand the importance of providing top-quality support and resources for our beloved companions. Whether you're a doting dog owner, a passionate cat enthusiast, or a devoted bird lover, we've got you covered with a wide range of products tailored to meet the needs of your pets. Our mission is simple: to deliver exceptional products and services that enhance the well-bein g and happiness of pets everywhere. From nutritious food and delicious treats to cozy beds and entertaining toys, we offer everything you need to keep your furry friends healthy, happy, and thriving. But we're more than just a pet store – we're a community dedicated to fostering the bond between pets and their owners. That's why we provide valuable resources, expert advice, and helpful tips to help you navigate the wonderful world of pet parenthood with confidence and ease. So whether you're looking to spoil your pet with the latest toys or seeking expert guidance on pet care, trust Mugs Co. to be your ultimate destination for all your pet needs. Join us in creating a world where every pet receives the love, care, and attention they deserve. Welcome to the Mugs Co. family!</p>
                </div>
                <div className="shadow" ref={shadowRef} />
            </article>

            {/* 
            * Between the background and the buttons, make a transition.
            * Add an down-arrow that helps guide customers down to the functions.
            */}

            <article className="views-container">
                <HalfView 
                    text="Pet Food & Treats" 
                    bText="Shop Pet Clothes" 
                />
                <HalfView 
                    text="Pet Supplies" 
                    bText="Shop Pet Clothes" 
                />
                <HalfView 
                    text="Pet Toys" 
                    bText="Shop Pet Clothes" 
                />
                <HalfView 
                    text="Pet Clothing & Accessories" 
                    bText="Shop Pet Clothes" 
                />
                <HalfView 
                    text="Health & Wellness Products" 
                    bText="Shop Pet Clothes" 
                />
                <HalfView 
                    text="Pet Travel & Safety" 
                    bText="Shop Pet Clothes" 
                />
                <HalfView 
                    text="Pet Beds & Furniture" 
                    bText="Shop Pet Clothes" 
                />
                <HalfView 
                    text="Training and Behavior [Courses]" 
                    bText="Shop Pet Clothes" 
                />
                <HalfView 
                    text="Specialty and Niche Products" 
                    bText="Shop Pet Clothes" 
                />
                <HalfView 
                    text="Subscription Services" 
                    bText="Shop Pet Clothes" 
                />
                <HalfView 
                    text="For those lazy days and playful moments [Summer season related]" 
                    bText="Shop Pet Clothes" 
                />
                <HalfView 
                    text="More Outfits, More Fun" 
                    bText="Shop Pet Clothes" 
                /> 
            </article>
        </>
    );
}