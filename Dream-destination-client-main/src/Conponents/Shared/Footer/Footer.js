import React from 'react';
import './Footer.css';
import FooterCol from '../FooterCol/FooterCol';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const noNamed = [
        {name: "Win a tour" , link: "/win"},
        {name: "Tour the world" , link: "/world"},
        {name: "Why Dream Destination" , link: "/about"},
        {name: "Why Touring" , link: "/tooth-extract"},
        {name: "Help" , link: "/checkup"},
    ]
    const ourAddress = [
        {name: "Dhaka, Bangladesh" , link: "//google.com/map"},
        {name: "Dream Destination" , link: "//google.com/map"},
       
    ]
    const OurSpots = [
        {name: "London" , link: "/example"},
        {name: "cox's Bazar" , link: "/example"},
        {name: "Europe" , link: "/example"},
        {name: "Russia" , link: "/example"},
        {name: "example" , link: "/example"},
        {name: "example" , link: "/example"},
        {name: "example" , link: "/example"}
    ]
    const services = [
        {name: "example" , link: "/emergency"},
        {name: "example" , link: "/checkup"},
        {name: "example" , link: "/example"},
        {name: "example" , link: "/example"},
        {name: "example" , link: "/example"},
        {name: "example" , link: "/example"},
        {name: "example" , link: "/example"}
    ]
    return (
        <footer className="footer-area clear-both" style={{backgroundColor:"#87d6e3",color:'white'}}>
            <div className="container pt-5">
                <div className="row py-5">
                    <FooterCol key={1} menuTitle={""} menuItems={noNamed}/>
                    <FooterCol key={2} menuTitle="Services" menuItems={services}/>
                    <FooterCol key={3} menuTitle="Our Spots" menuItems={OurSpots}/>
                    <FooterCol key={4} menuTitle="Our Address" menuItems={ourAddress}> 
                    <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                        </ul>
                        <div className="mt-5">
                            <h6>Call now</h6>
                            <button className="btn btn-primary">43523734890</button>
                        </div>
                      
                    </FooterCol>
                </div>
                <div className="copyRight text-center" style={{color:'red'}}>
                    <p>Copyright {(new Date()).getFullYear()} All Rights Reserved <span style={{fontSize:"20px"}} >Dream Destination</span> </p>
                </div>
            </div>
        </footer>
        
    );
};

export default Footer;