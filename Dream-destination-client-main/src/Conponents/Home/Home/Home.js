import React from 'react';
import Footer from '../../Footer/Footer';
import About from '../About/About';
import Feedback from '../Feedback/Feedback';
import Header from '../Header/Header';
// import '../../Responsive/Responsive.css'
import Services from '../Services/Services';
import Works from '../Works/Works';
import Footer2 from '../../Shared/Footer/Footer';
import Motivation from '../Motivation/Motivation';


const Home = () => {
    return (
        <>
            <Header />
            <Motivation></Motivation>
            <Services />
            <About></About>
            <Works />
            <Feedback />
            <Footer />
            <Footer2></Footer2>
        </>
    );
};

export default Home;