import React from 'react';
import Carousel from 'react-elastic-carousel';
import './Works.css';
import carousel1 from '../../../images/Tours/carousel-1.png';
import carousel2 from '../../../images/Tours/carousel-2.png';
import carousel3 from '../../../images/Tours/carousel-3.png';
import carousel4 from '../../../images/Tours/carousel-4.png';
import carousel5 from '../../../images/Tours/carousel-5.png';
import carousel6 from '../../../images/Tours/carousel-6.png';
import carousel7 from '../../../images/Tours/carousel-7.png';

const items = [
    { id: 1, img: carousel1 },
    { id: 2, img: carousel2 },
    { id: 3, img: carousel3 },
    { id: 4, img: carousel4 },
    { id: 5, img: carousel5 },
    { id: 6, img: carousel6 },
    { id: 7, img: carousel7 }
]


const Works = () => {
    const workStyle = {
        background: '#111430',
        padding: '100px',
    }
    const breakPoints = [
        { width: 480, itemsToShow: 1 },
        { width: 768, itemsToShow: 2 },
        { width: 991, itemsToShow: 2 },
        { width: 1200, itemsToShow: 2 },
    ]
    const imgStyles = {
        height: '334.7px',
        borderRadius: '10px',
        margin: '15px'
    }

    return (
        <div style={{ backgroundColor: "#c3e6ea", borderRadius: "30px", padding: " 30px 30px 30px 30px" }}>
            <h1 className='text-center mb-4' style={{ color: '#ffffff' }}>Some of <span style={{ color: '#7AB259' }}> Our  Tour</span> </h1>

            <Carousel breakPoints={breakPoints} >
                {items.map(item => <div>
                    <img style={imgStyles} src={item.img} alt="" />
                </div>)}
            </Carousel>

        </div>
    );
};

export default Works;