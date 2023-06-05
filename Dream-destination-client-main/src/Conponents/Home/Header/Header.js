import React from 'react';
import TopBar from '../../Shared/TopBar/TopBar';
import './Header.css'
import BackgroundSlider from 'react-background-slider'

import image1 from '../../../images/backgrounds/1.png'
import image4 from '../../../images/backgrounds/4.jpg'
import image7 from '../../../images/backgrounds/7.jpg'
const Header = () => {
    return (
        <div>
            <header>
                <BackgroundSlider
                    images={[image1,image4,image7]}
                    duration={5}
                    transition={1}
                />
                <TopBar></TopBar>

                <div className='container'>
                    <div className="row d-flex align-items-center mt-5">
                        <div >
                            <div>
                                <h1 style={{color:"green"}} >Travel is the only thing you buy that makes you richer.</h1>
                                <p style={{color:"#2DCF04"}} id='header_p'>“Better to see something once than hear about it a thousand times”--giat </p>
                            </div>
                        </div>

                        <form>
                            <div class="row  mt-5">
                                <div class="col-md-6">
                                    <input type="text" class="textbox" placeholder="Where You want to go"></input>
                                </div>
                                <div className="row  col-md-6" >
                                    <div class="col-md-6 ">
                                        <button style={{ width: '250px', height: '40px', fontSize: '16px', background: '#18CC45', color: '#FFFFFF' }} className='btn mt-3'> Search Your Destination</button>
                                    </div>
                                    <div class="col-md-6">
                                        <button style={{ width: '180px', marginLeft: "50px", height: '40px', fontSize: '16px', background: '#18CC45', color: '#FFFFFF' }} className='btn mt-3'> Travel With us</button>
                                    </div>
                                </div>

                            </div>
                        </form>
                    </div>
                </div>

            </header>
        </div>

    );
};

export default Header;